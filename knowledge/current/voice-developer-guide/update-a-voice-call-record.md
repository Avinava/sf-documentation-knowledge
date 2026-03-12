---
title: "Update a Voice Call Record"
domain: voice-developer-guide
topic: update-a-voice-call-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.883Z
estimatedTokens: 1727
keywords: [Voice, Call, Record, Updates, VoiceCall, URI, HTTP]
---

# Update a Voice Call Record

> Updates a voice call (VoiceCall)
      record.

# Update a Voice Call Record

Updates a voice call (VoiceCall) record.

Use this API to update the parameters of a voice call record. The endpoint is an asynchronous operation. You can’t query for the status of the API call. This endpoint can also be used to create a voice call even after the call has ended. This behavior is useful in scenarios where you want to log a record in Salesforce for abandoned or missed calls, or for any other scenario where a voice call wasn’t already created.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

Don’t run this API call more than one time. If you run this API call more than one time, each subsequent API call overwrites the following properties with the latest values: totalHoldDuration, numberOfHolds, and agentInteractionDuration.

This API call functions by making two separate database updates. The first database update passes the parameters recordingLocation and totalRecordingDuration, which are used to create a corresponding VoiceCallRecording record. The second database update passes all the other parameters. If you’re using the Update a Voice Call Record API call as an Apex trigger, the trigger is invoked only by the second database update.

## URI

/telephony/v1/voiceCalls/{CALL ID}

Where {CALL ID} is the Salesforce voice call ID (voiceCallId) or the telephony vendor's contact ID.

## HTTP Method

PATCH

## Headers

Authorization: Bearer <token>

String. Standard header. The authorization token, where <token> is the JSON Web Token (JWT). Required.

Content-Type: <format>

String. Standard header. The format of the request body. Valid formats include JSON and XML. For example, application/json or application/xml. Required.

Telephony-Provider-Name: <telephony provider name>

String. Custom header. The name of the telephony provider that calls this API. For example, Amazon Connect.

## Parameters

| Property Name | Type | Description | Required |
| --- | --- | --- | --- |
| startTime | string | The date and time (in UTC) when the voice call started.The VoiceCall.CallDurationInSeconds value is only updated if both startTime and endTime are passed. | No |
| endTime | string | The date and time (in UTC) when the voice call ended.The VoiceCall.CallDurationInSeconds value is only updated if both startTime and endTime are passed. | No |
| enqueueTime | string | The date and time (in UTC) when the voice call was placed in the queue. | No |
| acceptTime | string | The date and time (in UTC) when the rep accepted the voice call. | No |
| fromNumber | string | The number from which the voice call was made. For example, for an inbound call, this value is the end user’s phone number. | No |
| totalHoldDuration | int32 | The total length of time (in seconds) the rep put the voice call on hold. Salesforce sets this value to zero (0) if no value is passed.If you set this value, you must also set the recording location (recordingLocation). If you run this API call more than one time after the voice call, each subsequent API call overwrites the totatlHoldDuration property with the latest value. | No |
| longestHoldDuration | int32 | Within the entire call, the longest length of time (in seconds) the rep put the voice call on hold. | No |
| numberOfHolds | int32 | The total number of holds within the entire call. Salesforce sets this value to zero (0) if no value is passed. If you run this API call more than one time after the voice call, each subsequent API call overwrites the numberOfHolds property with the latest value. | No |
| queue | string | The name of the queue that the rep who serviced the voice call belonged to. | No |
| agent | string | The rep’s username. | No |
| agentInteractionDuration | int32 | The total length of time (in seconds) of the rep interaction. Salesforce sets this value to zero (0) if no value is passed. If you set this value, you must also set the recording location (recordingLocation).If you run this API call more than one time after the voice call, each subsequent API call overwrites the agentInteractionDuration property with the latest value. | No |
| callOrigin | string | Information about how this call originated.Possible values are:Preview. Represents a preview dialer.Progressive. Represents a progressive dialer.Voicemail. Represents a voicemail call. | No |
| recordingLocation | string | The location of the voice call recording if call recording was enabled.NOTE: This field is required when updating any fields related to a recording. | No |
| totalRecordingDuration | int32 | The total length of time (in seconds) of the voice call recording. If a value isn’t passed, this value defaults to the sum of agentInteractionDuration + totalHoldDuration. |  |
| callAttributes | string | Use this property to pass fields for the voice call record that must be populated as part of the creation process. The value is a string representation using key-value pairs in JSON, where each key-value pair corresponds to a custom field and its value. | No |
| isActiveCall | boolean | Indicates whether the conversation is still open and active (true). The default value is false.If set to true, the voice call conversation is still open, and any real-time transcription messages sent through the POST /telephony/v1/voiceCalls/{vendorCallKey}/messages API will continue to be accepted. Any pending service routing records associated with the voice call remain pending. VoiceCall.CallDisposition remains “in-progress."If set to false, the voice call conversation is closed if VoiceCall.NextCallId is NULL. Any pending service routing records associated with the voice call are cleared. VoiceCall.CallDisposition is set to “completed,” and the VoiceCall.CustomerHoldDuration and VoiceCall.NumberOfHolds values are reset to zero (0). | No |
| disconnectReason | string | The reason why the voice call was disconnected. If the parameter is passed in with the payload, the value and isError attributes are required, where value is the message stating how the call was disconnected, and isError is set to true.For example,disconnectReason: {   "value": "TELECOM_PROBLEM",    "isError": true }Set the disconnectReason field to CALLBACK when a customer drops a call after accepting the callback offer. Without this setting the initial call can be incorrectly classified as abandoned.For Amazon Connect instances, see DisconnectReason in the Amazon Connect contact records data model page for a list of possible reasons why a voice call may be disconnected. | No |

## Example

Request:

```

```

Response:

```

```

#### See Also

-   [*Object Reference for Salesforce and Lightning Platform:* VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm "Object Reference for Salesforce and Lightning Platform: VoiceCall - HTML (New Window)")

## Code Examples

```
disconnectReason: {
  "value": "TELECOM_PROBLEM", 
  "isError": true
}
```

```
PATCH /telephony/v1/voiceCalls/0LQRM0000006CSz

{
  "startTime": "2020-08-26T21:21:14Z",
  "endTime": "2019-08-26T21:21:34Z",
  "enqueueTime": "2019-08-26T21:21:34Z",
  "acceptTime": "2019-08-26T21:21:24Z",
  "numberOfHolds": 20,
  "longestHoldDuration": 10,
  "callAttributes": "{"dateCustomField__c": "2019-08-28T21:21:34Z", "checkbox__c": false}",
  "disconnectReason": {
    "value": "TELECOM_PROBLEM",
    "isError": true
  }
}
```

```
{
  "status": "pending"
}
```

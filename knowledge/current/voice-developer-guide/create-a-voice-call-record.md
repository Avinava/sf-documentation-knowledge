---
title: "Create a Voice Call Record"
domain: voice-developer-guide
topic: create-a-voice-call-record
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.843Z
estimatedTokens: 1995
keywords: [Voice, Call, Record, Creates, VoiceCall, containing, participants, caller, recipient, URI, HTTP]
---

# Create a Voice Call Record

> Creates a voice call (VoiceCall)
      record containing the participants (that is, the caller and recipient) in the call.

# Create a Voice Call Record

Creates a voice call (VoiceCall) record containing the participants (that is, the caller and recipient) in the call.

When you create a voice call record, it creates a conversation in Salesforce. Only use this API in real time, which means that you should invoke this API only when a call is initiated.

This API can also be used to create voice call records for transfer by including the parentVoiceCallId parameter in the request payload.

## URI

/telephony/v1/voiceCalls

## HTTP Method

POST

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
| callCenterApiName | string | The API name of the contact center created in Salesforce associated with the voice call record. | Yes |
| parentVoiceCallId | string | For transfers, set this value to a Salesforce Voice Call record ID or the voice call’s vendor call key (vendorCallKey) representing the parent record to this newly created voice call record. This parameter is required if initiationMethod=transferOnly use this property to create voice call records for transfer. Don’t include this property when creating the initial voice call record. | No |
| vendorCallKey | string | A unique key that identifies the voice call record within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID in Amazon Connect.The vendorCallKey record can be associated with multiple VoiceCall records in Salesforce. For example, during a call transfer, if Rep 1 transfers a call to Rep 2, but Rep 2 isn’t available, a second VoiceCall record is created with VoiceCall.previousCallId set to the unique ID of the previous call (voiceCallId). If Rep 1 transfers the call to yet another rep, a third VoiceCall record is created in the same way. | Yes |
| to | string | The phone number or email address to where the voice call is made.For inbound calls and transfers, set this value to the contact center’s phone number or email address.If callSubtype is set to PSTN, set this value to the default phone number.If callSubtype is set to webRTC, set this value to the default email address. Alternatively, you can pass in the contact information from the third party telephony provider.If the contact information comes from Amazon Connect, set this value to WEBRTC_DEFAULT and configure an Attributes block in the Amazon Connect inbound or transfer flow to pass in the email address.If the contact information comes from another third party telephony provider, configure the system to pass in an identifying attribute that’s relevant to the call, such as the email address or name.If not set, this value defaults to WEBRTC_DEFAULT. | Yes |
| from | string | The phone number or email address from where the voice call is made or transferred.For inbound calls, set this value to the end user's phone number or email address.For transfers, set this value to the contact center's phone number or email address.If callSubtype is set to PSTN, set this value to the default phone number.If callSubtype is set to webRTC, set this value to the default email address. Alternatively, you can pass in the contact information from the third party telephony provider.If the contact information comes from Amazon Connect, set this value to WEBRTC_DEFAULT and configure an Attributes block in the Amazon Connect inbound or transfer flow to pass in the email address.If the contact information comes from another third party telephony provider, configure the system to pass in an identifying attribute that’s relevant to the call, such as the email address or name.If not set, this value defaults to WEBRTC_DEFAULT. | Yes |
| callOrigin | string | Information about how this call originated.Possible values are:Preview. Represents a preview dialer.Progressive. Represents a progressive dialer.Voicemail. Represents a voicemail call. | No |
| initiationMethod | string | The initiation method of the voice call.Possible values are:Inbound. Represents a voice call that originated from an inbound call.Transfer. Represents a voice call that was transferred from another rep. If initiationMethod is set to Transfer, parentVoiceCallId must also be set.Outbound calls aren’t supported. | Yes |
| queue | string | Optional queue ID to associate with this voice call. This parameter is only used when initiationMethod is set to Transfer. It’s ignored for other initiation methods.You can pass in either the Salesforce queue object ID or the vendor’s external queue ID. Salesforce resolves this value using the entries in the CallCenterRoutingMap record.If the queue is resolved to a valid Salesforce queue, the VoiceCall owner is changed to the queue and the supervisor is able to see the transferred call waiting in the queue.See Map Your Salesforce Queues to Telephony Provider Queues. | No |
| startTime | string | The date and time (in UTC) when the voice call started. | Yes |
| callSubtype | string | The network or protocol over which the phone or Voice over Internet Protocol (VoIP) calls are made.Possible values are:PSTNWebRTCSet the value to PSTN (public switched telephone network) for phone calls. Set the value to webRTC (web real-time communication) for VoIP calls. The default value is PSTN, meaning voice calls are made from landlines and cell phones over the PSTN. Available in API version 62.0 and later. | No |
| participants | array | The end-user participant on the voice call. Only one end user can be specified. If there are multiple people in the array, the first person is assigned as the end user.This property uses the following key-value pair, where participantKey is any unique identifier for the end user, and type is always "END_USER":{   "participantKey": "UNIQUE ID FOR THE END USER",   "type": "END_USER" }For example,{   "participantKey":"5324881f-1e84-4367-8930-f69a74b30ca6",    "type": "END_USER" }While participantKey takes the end user’s unique identifier, Salesforce internally sets it to “END_USER” for privacy reasons. | Yes |
| callAttributes | string | Represents additional standard and custom fields in the voice call record, where each key-value pair value corresponds to a standard or custom field and its values.Possible standard fields are:SourceType - Represents the general purpose of the call. Valid values are: Sales and Service.CallerContactInfo - Represents the recipient of the call.Here’s an example using the standard field SourceType:"callAttributes": "{"SourceType":"Sales"}"Here's an example using a custom field named "Department__c":"callAttributes": "{"Department__c":"Support", "Sales"}" | No |

## Example

Request:

```

```

Response:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

You may encounter errors when creating a voice call record. These errors can be caused by a number of factors due to triggers, flows, required fields, and field validations. Salesforce bypasses the errors, creates the voice call record, and returns an errors response like the one in the following example.

```

```

If you encounter an errors response when creating a voice call record, notify your Salesforce administrator.

#### See Also

-   [*Object Reference for Salesforce and Lightning Platform:* VoiceCall](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_voicecall.htm "Object Reference for Salesforce and Lightning Platform: VoiceCall - HTML (New Window)")

## Code Examples

```
{
  "participantKey": "UNIQUE ID FOR THE END USER",
  "type": "END_USER"
}
```

```
{
  "participantKey":"5324881f-1e84-4367-8930-f69a74b30ca6", 
  "type": "END_USER"
}
```

```
POST /telephony/v1/voiceCalls

{
  "callCenterApiName": "MyContactCenter",
  "vendorCallKey": "5324881f-1e84-4367-8930-f69a74b30ca6",
  "to": "+14152988103",
  "from": "+18669483147",
  "initiationMethod": "Inbound",
  "startTime": "2019-07-02T17:32:28Z",
  "callSubtype": "PSTN",
  "participants": [
    {
      "participantKey": "4081456688",
      "type" : "END_USER"
    }
  ],
  "callAttributes": "{"MyField__c": "abc"}"
}
```

```
{
  "voiceCallId": "0LQRM0000006CSz",
  "errors": []
}
```

```
{
  "voiceCallId": "0LQS70000004YDG",
  "errors": "We created your voice call but there were some errors : Required fields are missing: 
             [Picklist], Text__c: data value too large: sample123456890"
}
```

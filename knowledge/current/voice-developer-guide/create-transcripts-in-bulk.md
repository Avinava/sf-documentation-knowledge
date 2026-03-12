---
title: "Create Transcripts in Bulk"
domain: voice-developer-guide
topic: create-transcripts-in-bulk
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.873Z
estimatedTokens: 2014
keywords: [Transcripts, Bulk, Creates, across, multiple, voice, calls, real, time, include, inbound, transfer, outbound, callback, consult]
---

# Create Transcripts in Bulk

> Creates transcripts in bulk across multiple voice calls in real time.
      These voice calls can include inbound calls, transfer calls, outbound calls, callback calls,
      and consult calls.

# Create Transcripts in Bulk

Creates transcripts in bulk across multiple voice calls in real time. These voice calls can include inbound calls, transfer calls, outbound calls, callback calls, and consult calls.

This API allows you to process transcripts quickly by creating multiple transcripts across different voice calls in one request. The transcript data is sent to the rep console synchronously in real time and persists in Salesforce asynchronously.

If your telephony provider can aggregate multiple transcripts across voice calls, use this API for faster processing, resulting in faster delivery to reps in real time. If your telephony provider is Amazon Connect and you use Contact Lens for Amazon Connect, this API is by default used to process your transcripts.

This API and the [Create a Transcript API](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm "Creates a transcribed version of a voice call in real time.") (/telephony/v1/voiceCalls/{vendorCallKey}/messages) share several characteristics.

-   Both APIs create voice call transcripts if the timestamp of the transcript is between the start and end times of the conversation.
-   Both APIs pause call transcription whenever the rep pauses the recording or places the call participant on hold. Any messages being sent in aren’t created or stored by the API during this time.

The APIs also differ in terms of their capacity.

-   The [Create a Transcript API](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm "Creates a transcribed version of a voice call in real time.") creates a transcript for one voice call only.
-   This Create Transcripts in Bulk API lets you create transcripts for up to 5 different voice calls at a time. Each voice call included in the payload can have up to 5 transcripts (also called conversation entries).

To make sure conversation entries are stored in chronological order for this API, insert transcript data one participant at a time. For example, include a one-sided conversation with entries from the end user in the messages object. For a sender type of VIRTUAL\_AGENT, include conversation entries from multiple reps in the messages object, in order of utterance.

Since this API can contain transcripts for multiple voice calls, if a rep from one voice call pauses a recording or places a call participant on hold, transcription stops for just that voice call; the hold doesn’t interrupt transcription processing for the other voice calls.

To create or update transcripts in bulk *after* the call has ended or to upload a binary file of transcripts up to 512 MB, use the [Salesforce Connect API](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_connect_overview.htm "Use Connect REST API to upload and update transcripts for voice calls. This functionality can also be used for redacting content in transcripts.").

## URI

/telephony/v1/voiceCalls/messages

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
| entries | array | An array of create transcript objects for one or more voice call (VoiceCall) records. | Yes |
| vendorCallKey | string | The unique ID of the voice call (VoiceCall) record within the telephony system for which messages need to be created. | Yes |
| messages | array | An array of individual transcript objects for the voice call (VoiceCall) record. | Yes |
| participantId | string | The call participant that uttered this text.If senderType is END_USER, set this value to {vendorCallKey}END_USER, where {vendorCallKey} is the vendor call key (vendorCallKey) of the first voice call (VoiceCall) record created for the conversation. For consult calls that haven't been merged with a multiparty call, {vendorCallKey} is the vendorCallKey of the VoiceCall created for the consult call. If you set this property to any other value, Salesforce sets it to {vendorCallKey}END_USER internally for privacy reasons.If senderType is EXTERNAL_USER, set this value to the unique ID for the external call participant generated by the telephony partner.If senderType is HUMAN_AGENT, enter the rep’s 15-digit or 18-digit Salesforce user ID (starts with 005).If senderType is SUPERVISOR, set this value to{vendorCallKey}SUPERVISOR, where {vendorCallKey} is the vendor call key (vendorCallKey) of the first voice call (VoiceCall) record created for the conversation. If you set this property to any other value, Salesforce will set it to {vendorCallKey}SUPERVISOR internally for privacy reasons.If senderType is VIRTUAL_AGENT, set this value to {vendorCallKey}VIRTUAL_AGENT, where {vendorCallKey} is the vendor call key (vendorCallKey) of the first voice call (VoiceCall) record created for the conversation. If you set this property to any other value, Salesforce sets it to {vendorCallKey}VIRTUAL_AGENT internally for privacy reasons. | Yes |
| messageId | string | The unique ID of the message. This value has to be unique for the given conversation. | Yes |
| startTime | int64 | The date and time (in UTC) when this utterance started. Measured in milliseconds since the Unix epoch. | Yes |
| endTime | int64 | The date and time (in UTC) when this utterance ended. Measured in milliseconds since the Unix epoch. | Yes |
| content | string | The actual text of the utterance. | Yes |
| senderType | string | The voice call participant role that generated the utterance. Possible values are:END_USER - Represents a customer.EXTERNAL_USER - Represents a contact external to your Salesforce organization.HUMAN_AGENT - Represents a rep.SUPERVISOR - Represents a supervisor. For example, a supervisor generates an utterance when they barge into a call between a customer and rep and start talking.VIRTUAL_AGENT - Set this value to VIRTUAL_AGENT when you have a conference between multiple reps and you want to create all rep-side utterances as one single rep since you have no way to differentiate between the different reps in the audio stream. The sender in this case must be the vendor call key (vendorCallKey) of the first voice call (VoiceCall) record created for the conversation. | Yes |

## Example

Request:

```

```

Request:

```

```

Response:

```

```

#### See Also

-   [ContactLensConsumerFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm "This Lambda function gets real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to the ContactLensProcessorFunction Lambda function.")

-   [ContactLensProcessorFunction Lambda Function](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm "This Lambda function processes real-time transcripts and intelligence signals generated from Contact Lens for Amazon Connect and sends them to Salesforce. This Lambda function is invoked by the ContactLensConsumerFunction Lambda function with the generated real-time transcripts and events.")

-   [Create a Transcript](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm "Creates a transcribed version of a voice call in real time.")

-   [Upload or Update Transcripts with Connect REST API](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_connect_overview.htm "Use Connect REST API to upload and update transcripts for voice calls. This functionality can also be used for redacting content in transcripts.")

## Code Examples

```
POST /telephony/v1/voiceCalls/messages

{
  "entries":  [
    {
      "vendorCallKey": "abc955ce-03be-4335-a28891293zs-12267",
      "messages":  [
        {
          "startTime": 1770307118000,
          "endTime": 1770307120500,
          "participantId": "abc955ce-03be-4335-a28891293zs-12267END_USER",    
          "messageId": "a09955ce-03be4335xz-a28891293zs",
          "senderType": "END_USER",
          "content": "Hi, I need help with my plane reservation."
        },
        {
          "startTime": 1770307125000,
          "endTime": 1770307128200,
          "participantId": "abc955ce-03be-4335-a28891293zs-12267END_USER",    
          "messageId": "c09955ce-03be4335xz-a28891293zu",
          "senderType": "END_USER",
          "content": "Yes, it was canceled."
        },
        {
          "startTime": 1770307132000,
          "endTime": 1770307134100,
          "participantId": "abc955ce-03be-4335-a28891293zs-12267END_USER",    
          "messageId": "d09955ce-03be4335xz-a28891293zw",
          "senderType": "END_USER",
          "content": "Do you have anything direct?"
        },
        {
          "startTime": 1770307139000,
          "endTime": 1770307142500,
          "participantId": "abc955ce-03be-4335-a28891293zs-12267END_USER",    
          "messageId": "f09955ce-03be4335xz-a28891293zz",
          "senderType": "END_USER",
          "content": "Yes, that should work."
        },
        {
          "startTime": 1770307147000,
          "endTime": 1770307149800,
          "participantId": "abc955ce-03be-4335-a28891293zs-12267END_USER",    
          "messageId": "g09955ce-03be4335xz-a28891293zx",
          "senderType": "END_USER",
          "content": "Thanks for your help."
        }
      ]
    },
    {
      "vendorCallKey": "b09955ce-03be-4335-a28891293zs-18895",
      "messages":  [
        {
          "startTime": 1770307800000,
          "endTime": 1770307802800,
          "participantId": "b09955ce-03be-4335-a28891293zs-188955END_USER",    
          "messageId": "1b9955ce-03be4335xz-a28891293zu",
          "senderType": "END_USER",
          "content": "Hi, I'd like to ask about an upgrade."
        },
        {
          "startTime": 1770307808200,
          "endTime": 1770307811900,
          "participantId": "b09955ce-03be-4335-a28891293zs-18895END_USER",    
          "messageId": "b23455ce-03be4335xz-a28891293zu",
          "senderType": "END_USER",
          "content": "Yes, for my trip next month."
        },
        {
          "startTime": 1770307818000,
          "endTime": 1770307820500,
          "participantId": "b09955ce-03be-4335-a28891293zs-18895END_USER",    
          "messageId": "b09955ce-03be4335xz-a28891293zu",
          "senderType": "END_USER",
          "content": "Perfect, thanks."
        }
      ]
    },
    {
      "vendorCallKey":  "m07855ce-03be-4335-a28891293zs-78543",
      "messages":  [
        {
          "startTime": 1770308400000,
          "endTime": 1770308403200,
          "participantId": "m07855ce-03be-4335-a28891293zs-78543END_USER",    
          "messageId": "m86655ce-03be4335xz-a28891293zw",
          "senderType": "END_USER",
          "content": "I have a complaint about my meal."
        },
        {
          "startTime": 1770308409500,
          "endTime": 1770308412100,
          "participantId": "m07855ce-03be-4335-a28891293zs-78543END_USER",    
          "messageId": "n5998ce-03be4335xz-a28891293zw",
          "senderType": "END_USER",
          "content": "It was so delicious I wish it was bigger."
        }
      ]
    },
    {
      "vendorCallKey": "k18968ce-03be-4335-a28891293zs-98736",
      "messages":  [
        ...
      ]
    },
    {
      "vendorCallKey": "s79758ce-03be-4335-a28891293zs-48346",
      "messages":  [
        ...
      ]
    }
  ]
}
```

```
POST /telephony/v1/voiceCalls/messages

{
  "entries": [
    {
      "vendorCallKey": "5324881f-1e84-4367-8930-f69a74b30ca6",
      "messages": [
        {
          "startTime": 1770309300000,
          "endTime": 1770309302500,
          "participantId": "5324881f-1e84-4367-8930-f69a74b30ca6VIRTUAL_AGENT",
          "messageId": "8hjcd32b-bb06-477b-8947-74660b4db74g",
          "senderType": "VIRTUAL_AGENT",
          "content": "My colleague in the service department has joined our call."
        },
        {
          "startTime": 1770309309000,
          "endTime": 1770309312200,
          "participantId": "5324881f-1e84-4367-8930-f69a74b30ca6VIRTUAL_AGENT",
          "messageId": "6gjcd32b-bb06-477b-8947-74660b4db74g",
          "senderType": "VIRTUAL_AGENT",
          "content": "Hi, I'm going to help you with your service appointment rescheduling."
        },
        {
          "startTime": 1770309319000,
          "endTime": 1770309321800,
          "participantId": "5324881f-1e84-4367-8930-f69a74b30ca6VIRTUAL_AGENT",
          "messageId": "4jfcd32b-bb06-477b-8947-74660b4db74g",
          "senderType": "VIRTUAL_AGENT",
          "content": "I'll let our service department take it from here."
        }
      ]
    },
    {
      "vendorCallKey": "5324881f-1e84-4367-8930-f69a74b30ca6",
      "messages": [
        {
          "startTime": 1770309480000,
          "endTime": 1770309483000,
          "participantId": "5324881f-1e84-4367-8930-f69a74b30ca6VIRTUAL_AGENT",
          "messageId": "1efcd32b-bb06-477b-8947-74660b4db74m",
          "senderType": "VIRTUAL_AGENT",
          "content": "Thank you. Just one minute while we look up your account number."
        },
        {
          "startTime": 1770309489500,
          "endTime": 1770309492100,
          "participantId": "5324881f-1e84-4367-8930-f69a74b30ca6VIRTUAL_AGENT",
          "messageId": "9sdcd32b-bb06-477b-8947-74660b4db74m",
          "senderType": "VIRTUAL_AGENT",
          "content": "We're both here to help your with your request. Can you provide more information?"
        }
      ]
    },
    {
      "vendorCallKey": "9273881f-1e84-4367-8930-f69a74b30ab8",
      "messages": [
        {
          "startTime": 1770309660000,
          "endTime": 1770309664500,
          "participantId": "9273881f-1e84-4367-8930-f69a74b30ab8VIRTUAL_AGENT",
          "messageId": "1efcd32b-bb06-477b-8947-74660b4db74z",
          "senderType": "VIRTUAL_AGENT",
          "content": "Thank you for your patience. Now that my teammate has joined, let's address your issue."
        }
      ]
    }
  ]
}
```

```
// All transcripts were successfully processed.
{
  "result": "Accepted"
}
```

## Related Topics

- Create a Transcript API (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm)
- Salesforce Connect
          API (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_connect_overview.htm)
- ContactLensConsumerFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensconsumerfunction.htm)
- ContactLensProcessorFunction Lambda Function (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_lambda_contactlensprocessorfunction.htm)
- Create a Transcript (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm)
- Upload or Update Transcripts with Connect REST API (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_connect_overview.htm)

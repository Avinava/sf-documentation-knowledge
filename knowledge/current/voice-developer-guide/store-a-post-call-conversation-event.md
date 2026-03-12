---
title: "Store a Post-Call Conversation Event"
domain: voice-developer-guide
topic: store-a-post-call-conversation-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.825Z
estimatedTokens: 815
keywords: [Store, Post-Call, Conversation, Event, events, generated, intelligence, sources, Amazon, Connect, Contact, Lens, data, Users, specify]
---

# Store a Post-Call Conversation Event

> Store post-call conversation events generated from intelligence
      sources, such as Amazon Connect Contact Lens, into the conversation data store. Users can also
      specify the target objects (for example, VoiceCall, ConversationEntry) related to the specific
      event.

# Store a Post-Call Conversation Event

Store post-call conversation events generated from intelligence sources, such as Amazon Connect Contact Lens, into the conversation data store. Users can also specify the target objects (for example, VoiceCall, ConversationEntry) related to the specific event.

Salesforce uses these stored events and relationships to display call insights after a call ends. The data can also be linked to other Salesforce standard objects, such as VoiceCall and ConversationEntry.

This API should only be invoked after a conversation closes.

## URI

/telephony/v1/voiceCalls/{vendorCallKey}/postConversationEvents

Where vendorCallKey is the unique ID of the voice call (VoiceCall) record within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID in Amazon Connect. In transfer use cases where there are multiple VoiceCall objects associated to a single call, use the vendorCallKey of the first voice call record created for the call. This value can only be the unique call identifier of the first contact for the conversation. This value can't be a Salesforce voiceCallId.

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
| service | string | The intelligence source of the events. Possible values are:AmazonConnectContactLens | Yes |
| events | array | A piece of signal data generated post-call from a voice call between a rep and end user. This data is used for post-call event analysis.  Events must be sorted in chronological ascending order by startTime.For example, the following snippet displays event data used for post-call analysis:{   "type": "IntelligenceSignal__Sentiment",   "value": "-1000",   "startTime": 1573503301,   "endTime": 1573503320,   "participant": "CUSTOMER" } | Yes |
| events.type | string | The signal type of the event. Possible values are:IntelligenceSignal__Sentiment | Yes |
| events.value | string | The value of the signal detected. For type IntelligenceSignal__Sentiment, the value represents the sentiment of the words spoken by the participants in the call, ranging between -1000 (most negative) and 1000 (most positive). A value of zero (0) represents a neutral sentiment. | Yes |
| events.startTime | int64 | The date and time (in UTC) when this event started. Measured in milliseconds since the Unix epoch. | Yes |
| events.endTime | int64 | The date and time (in UTC) when this event ended. Measured in milliseconds since the Unix epoch. | Yes |
| events.participant | string | The voice call participant type that generated the signal. Possible values are:AGENT - Represents a rep.CUSTOMER - Represents a customer. | Yes |

## Example

Request:

```

```

Response:

```

```

## Code Examples

```
{
  "type": "IntelligenceSignal__Sentiment",
  "value": "-1000",
  "startTime": 1573503301,
  "endTime": 1573503320,
  "participant": "CUSTOMER"
}
```

```
POST /telephony/v1/voiceCalls/5324881f-1e84-4367-8930-f69a74b30ca6/postConversationEvents

{
  "service": "AmazonConnectContactLens",
  "events": [ // sort by startTime
    {
      "type": "IntelligenceSignal__Sentiment",
      "value": "1000",
      "startTime": 1573503300,
      "endTime": 1573532140,
      "participant": "AGENT"
     },
     {
      "type": "IntelligenceSignal__Sentiment",
      "value": "-1000",
      "startTime": 1573503301,
      "endTime": 1573503320,
      "participant": "CUSTOMER"
    }
  ]
}
```

```
{
  status: “202 Accepted” 
}
```

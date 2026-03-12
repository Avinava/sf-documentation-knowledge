---
title: "Send a Real-Time Conversation Event"
domain: voice-developer-guide
topic: send-a-real-time-conversation-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.850Z
estimatedTokens: 975
keywords: [Send, Real-Time, Conversation, Event, events, generated, intelligence, sources, rep, console, URI, HTTP]
---

# Send a Real-Time Conversation Event

> Send real-time conversation events generated from intelligence sources
      to the rep console.

# Send a Real-Time Conversation Event

Send real-time conversation events generated from intelligence sources to the rep console.

Send real-time conversation events generated from intelligence sources to the rep console so administrators can create rules based on the signals to trigger Einsten Next Best Action or auto-launched flows. The signals are also sent to the Service Cloud Voice Toolkit API.

## URI

/telephony/v1/voiceCalls/{vendorCallKey}/realtimeConversationEvents

Where vendorCallKey is the unique ID of the voice call (VoiceCall) record within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID in Amazon Connect. In transfer use cases where there are multiple VoiceCall objects associated with a single call, use the vendorCallKey of the first voice call record created for the call. This value can only be the unique call identifier of the first contact for the conversation. This value can't be a Salesforce voiceCallId.

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
| service | string | The intelligence source for the events. This is a partner-provided value. For example, set this value to AmazonConnectContactLens for Amazon Connect, CXoneAgentAssistService for NICE, or VonageConversationalInsights for Vonage.Contact your Salesforce representative to verify that your partner contact center supports this feature. | Yes |
| events | array | A piece of signal data generated in real time from a voice call between a rep and end user. Events must be sorted in chronological ascending order by startTime. For example, this snippet displays a piece of signal data.{   "type": "IntelligenceSignal__Category",   "value": "CustomerAngry",   "startTime": 1573503450 } | Yes |
| events.type | string | The signal type of the event. Possible values are:IntelligenceSignal__CategoryIntelligenceSignal__Sentiment | Yes |
| events.value | string | If events.type is IntelligenceSignal__Category, this is the value of the signal generated in real time by the telephony vendor. For example, it could be a Contact Lens rule defined in Amazon Connect.If events.type is IntelligenceSignal__Sentiment, this represents the sentiment score for the participant (event.participant) in the call. The score is used to evaluate rep performance over time and identify coaching opportunities. The score must be between -1000 and 1000, with 1000 being the best, most positive score possible. The value is rounded up to two (2) decimal points. | Yes |
| events.startTime | int64 | The date and time (in UTC) when this event started. Measured in milliseconds since the Unix epoch. | Yes |
| events.score | string | The confidence score, which evaluates how confident the vendor is about the accuracy of the value (events.value). The score must be between 0 and 1000, where 1000 means the vendor is very confident that the signal is accurate. This value comes from the partner telephony service provider. | No |
| event.participant | string | The voice call participant type that generated the signal. Possible values are:AGENT - Represents a rep.CUSTOMER - Represents a customer.This field is only required if events.type is IntelligenceSignal__Sentiment. | Depends. See description. |

## Example

Request:

```

```

Response:

```

```

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
  "type": "IntelligenceSignal__Category",
  "value": "CustomerAngry",
  "startTime": 1573503450
}
```

```
POST /telephony/v1/voiceCalls/5324881f-1e84-4367-8930-f69a74b30ca6/realtimeConversationEvents

{
  "service": "AmazonConnectContactLens",
  "events": [
    {
      "type": "IntelligenceSignal__Category",
      "value": "OrderStatusCheckingHelp",
      "startTime": 1573503300
    },
    {
      "type": "IntelligenceSignal__Category",
      "value": "CustomerAngry",
      "startTime": 1573503450
    }
  ]
}
```

```
{
  status: “202 Accepted” 
}
```

```
POST /telephony/v1/voiceCalls/5324881f-1e84-4367-8930-f69a74b30ca6/realtimeConversationEvents

{ 
 "service":"CxoneAgentAssistService",
  "persist":false,
  "events":   [
    {
      "type": "IntelligenceSignal__Sentiment",
      "value": "400.13",
      "startTime": 16898867880000,
      "score": 10,
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

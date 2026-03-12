---
title: "Service Cloud Voice Aura Toolkit API Conversation Events"
domain: voice-developer-guide
topic: service-cloud-voice-aura-toolkit-api-conversation-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.766Z
estimatedTokens: 1076
keywords: [Service, Cloud, Voice, Aura, Toolkit, API, Conversation, Events, Listen]
---

# Service Cloud Voice Aura Toolkit API Conversation Events

> Listen to events related to a conversation.

# Service Cloud Voice Aura Toolkit API Conversation Events

Listen to events related to a conversation.

The following conversation events are available.

| Event Name | Description |
| --- | --- |
| FLAG_RAISE | Sent when a rep, while communicating with a customer, quietly raises a flag to get help from a supervisor. |
| FLAG_LOWER | Sent when a rep or supervisor lowers a raised flag to cancel the request for supervisor help. |
| NOTE | Sent when a rep or supervisor sends a message without raising a flag. For example, an event is sent when a user jots down notes but doesn't raise a flag. |
| TRANSCRIPT | Sent when a new utterance is received by the transcription system. |
| INTELLIGENCE_SIGNAL | Sent when a new intelligence signal is received. |

To subscribe to an event, add a conversation event listener. For example, add the following event listener to subscribe to the TRANSCRIPT event:

```

```

You can add multiple conversation event listeners. For example, you can add the following event listeners to subscribe to all the events related to raising and lowering flags:

```

```

When an event occurs, you receive a JSON payload that contains the event type, along with any relevant data. For instance:

```

```

The following table describes the payload properties for the FLAG\_RAISE, FLAG\_LOWER, NOTE, and TRANSCRIPT events:

| Property Name | Type | Description |
| --- | --- | --- |
| type | string | The type of conversation event. |
| detail | object | Identifying information associated with this voice call event. |
| detail.id | string | Unique identifier for the message. |
| detail.clientSentTimestamp | number | The date and time (in UTC) when the client sent the content. Measured in milliseconds since the Unix epoch. |
| detail.serverReceivedTimestamp | number | The date and time (in UTC) when the server received the content. Measured in milliseconds since the Unix epoch. |
| content | object | Information about the content. |
| content.formatType | string | The content format type of the raised flag, note, or transcript. Possible value is “Text.” |
| content.text | string | The body text of the raised flag, note, or transcript. |
| callId | string | The unique ID of the voice call within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID. |
| sender | object | Information about the user whose action initiated the event. |
| sender.role | string | The role of the user whose action initiated the event. Possible values are "Agent" and "Supervisor". |
| sender.displayName | string | The name of the user whose action initiated the event. |
| voiceCallId | string | Unique identifier of the Salesforce voice call in which a rep raised or lowered the flag. For transferred calls, the new call segment has a different voiceCallId from the original call. |

The following table describes the payload properties for the INTELLIGENCE\_SIGNAL event:

| Property Name | Type | Description |
| --- | --- | --- |
| type | string | The type of conversation event. |
| detail | object | Identifying information associated with this voice call event. |
| detail.events | string | A piece of signal data generated in real time from a voice call between a rep and end user. Events must be sorted in chronological ascending order by startTime. For example, the following snippet displays a piece of signal data.{ "type": "IntelligenceSignal__Category", "value": "CustomerAngry", "startTime": 1573503450 } |
| event.service | number | The intelligence source of the events. Possible values are:AmazonConnectContactLens |
| event.type | number | The signal type of the event. Possible values are:IntelligenceSignal__Category |
| event.value | object | The value of the signal generated in real time by the telephony vendor. For example, this could be a Contact Lens rule defined in Amazon Connect. |
| event.startTime | string | The date and time (in UTC) when this event started. Measured in milliseconds since the Unix epoch. |
| event.endTime | string | The date and time (in UTC) when this event ended. Measured in milliseconds since the Unix epoch. |
| event.score | string | The confidence score for the intelligence signal within the range of 1 and 1000, with 1000 being the highest level of confidence. |

## Code Examples

```
// Subscribe
cmp.find('voiceToolkitApi')
   .addConversationEventListener('TRANSCRIPT', conversationEventListenerFunc);

// Unsubscribe
cmp.find('voiceToolkitApi')
   .removeConversationEventListener('TRANSCRIPT', conversationEventListenerFunc);
```

```
// Subscribe 
cmp.find('voiceToolkitApi')
     .addConversationEventListener('FLAG_RAISE', conversationEventListenerFunc);
     .addConversationEventListener('FLAG_LOWER', conversationEventListenerFunc);

// Unsubscribe cmp.find('voiceToolkitApi') 
     .removeConversationEventListener('FLAG_RAISE', conversationEventListenerFunc);
     .removeConversationEventListener('FLAG_LOWER', conversationEventListenerFunc);
```

```
{
    "type": "TRANSCRIPT",
    "detail": {
        "id": "3115b389-ab50-400e-b8ba-978b7ec51d7a"
        "clientSentTimestamp": 1594944652299,
        "serverReceivedTimestamp": 1594944652328,
        "content":{
            "formatType": "Text",
            "text": "Hello"
        },
        "callId": "c5d93c19-e03b-44f8-85e6-a11f02e70c45",
        "sender": {
            "role": "Agent"
        }
    }
}
```

```
{
"type": "IntelligenceSignal__Category",
"value": "CustomerAngry",
"startTime": 1573503450
}
```

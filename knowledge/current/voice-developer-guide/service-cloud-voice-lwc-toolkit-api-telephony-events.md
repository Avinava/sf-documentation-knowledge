---
title: "Service Cloud Voice LWC Toolkit API Telephony Events"
domain: voice-developer-guide
topic: service-cloud-voice-lwc-toolkit-api-telephony-events
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.758Z
estimatedTokens: 2660
keywords: [Service, Cloud, Voice, LWC, Toolkit, API, Telephony, Events, components, context-aware, listening, take, place, phone, calls]
---

# Service Cloud Voice LWC Toolkit API Telephony Events

> Make your LWC components context-aware by listening to events that take place during
  phone calls.

# Service Cloud Voice LWC Toolkit API Telephony Events

Make your LWC components context-aware by listening to events that take place during phone calls.

The following events are available.

| Event Name | Description |
| --- | --- |
| audiostats | Sent during a call, publishing real-time WebRTC audio statistics every 30 seconds. |
| callstarted | Sent when the call starts. |
| callconnected | Sent when the call connects. |
| callended | Sent when the call ends. |
| hold | Sent when the call is put on hold. |
| resume | Sent when the call resumes after hold. |
| mute | Sent when the call is muted. |
| unmute | Sent when the call is unmuted. |
| participantadded | Sent when a participant is added to the call. |
| participantremoved | Sent when a participant is removed from the call. |
| conference | Sent when participants on a three-way call are all taken off hold. |
| swap | Sent when participants on a three-way call have their hold status swapped. |
| pauserecording | Sent when the rep pauses call recording. |
| resumerecording | Sent when the rep resumes call recording. |
| transcript | Sent when a new utterance is received by the transcription system. |
| wrapupended | Sent when the rep exits after call work status. |
| flagraise | Sent when a rep, while communicating with a customer, quietly raises a flag to get help from a supervisor. |
| flaglower | Sent when a rep or supervisor lowers a raised flag to cancel the request for supervisor help. |
| note | Sent when a rep or supervisor sends a message without raising a flag. For example, an event is sent when a user jots down notes but doesn't raise a flag. |

To subscribe to these events, add an event listener for each event you want to listen to.

```

```

When an event occurs, you receive a JSON payload that contains the event type, along with any relevant data. For instance, the callstarted event contains the following payload.

```

```

All payloads contain some basic information, such as the event type (type) and a unique call identifier (callId). Events can contain additional values within the detail object. Refer to the following table for all the possible properties that can appear within the detail object of the payload.

| Event Name | Payload “detail” Properties |
| --- | --- |
| audiostats | callId (string): Unique ID of the voice call within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID.stats (string): Media type. Possible values are: “inputChannelStats” and “outputChannelStats”.packetsLost (int): Number of packets lost during transmission.packetsCount (int): Number of packets transmitted.jitterBufferMillis (int): Time it took to buffer incoming packets, measured in milliseconds.roundTripTimeMillis (int): Time it took for the packet to travel to and from the receiver, measured in milliseconds.statsCount (int): Number of times the statistics have been collected or reported. For internal use only. |
| callstarted | callId (string): Unique call identifier value.callType (string): "inbound" or "outbound".participant (string): Phone number. |
| callconnected | callId (string): Unique call identifier value.callType (string): "inbound" or "outbound".participant (string): Phone number. |
| callended | callId (string): Unique call identifier value. |
| hold | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name. |
| resume | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name. |
| mute | callId (string): Unique call identifier value. |
| unmute | callId (string): Unique call identifier value. |
| participantadded | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name. |
| participantremoved | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name. |
| conference | callId (string): Unique call identifier value. |
| swap | callId (string): Unique call identifier value. |
| pauserecording | callId (string): Unique call identifier value. |
| resumerecording | callId (string): Unique call identifier value. |
| wrapupended | callId (string): Unique call identifier value. |
| transcript | id (string): Unique identifier for the message.clientSentTimestamp (number): Date and time (in UTC) when the client sent the content. Measured in milliseconds since the Unix epoch.serverReceivedTimestamp (number): Date and time (in UTC) when the server received the content. Measured in milliseconds since the Unix epoch.content (object): Information about the content.content.formatType (string): Content format type of the transcript. Possible value is “Text”.content.text (string) The body text of the transcript.callId (string): Unique ID of the voice call within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID.sender (object): Information about the user whose action initiated the event.sender.role (string): Role of the user whose action initiated the event. Possible values are "Agent" and "Supervisor".For example:{     "type": "transcript",     "detail": {         "id": "3115b389-ab50-400e-b8ba-978b7ec51d7a"         "clientSentTimestamp": 1594944652299,         "serverReceivedTimestamp": 1594944652328,         "content":{             "formatType": "Text",             "text": "Hello"         },         "callId": "c5d93c19-e03b-44f8-85e6-a11f02e70c45",         "sender": {             "role": "Agent"         }     } } |
| flagraise | id (string): Unique call identifier value.clientSentTimestamp (number): Date and time (in UTC) when the client sent the content. Measured in milliseconds since the Unix epoch.serverReceivedTimestamp (number): Date and time (in UTC) when the server received the content. Measured in milliseconds since the Unix epoch.content (object): Information about the content.content.formatType (string): Content format type of the raised flag. Possible value is “Text”.content.text (string) The body text of the raised flag.callId (string): Unique conversation ID of the voice call within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID. For transferred calls, the conversation ID is the primary call ID.sender (object): Information about the user whose action initiated the event.sender.role (string): Role of the user whose action initiated the event. Possible values are "Agent" and "Supervisor".sender.displayName (string): Name of the user whose action initiated the event.voiceCallId (string): Unique identifier of the Salesforce voice call in which a rep raised the flag. For transferred calls, the new call segment has a different voiceCallId from the original call.For example:{     "type": "flagraise",     "detail": {         "id": "3115b389-ab50-400e-b8ba-978b7ec51d7a"         "clientSentTimestamp": 1594944652299,         "serverReceivedTimestamp": 1594944652328,         "content":{             "formatType": "Text",             "text": "The customer wants a credit note."         },         "callId": "c5d93c19-e03b-44f8-85e6-a11f02e70c45",         "sender": {             "role": "Agent",             "displayName": "Angela Agent"         },         "voiceCallId": "0LQRM0000006CSz"     } |
| flaglower | id (string): Unique call identifier value.clientSentTimestamp (number): Date and time (in UTC) when the client sent the content. Measured in milliseconds since the Unix epoch.serverReceivedTimestamp (number): Date and time (in UTC) when the server received the content. Measured in milliseconds since the Unix epoch.content (object): Information about the content.content.formatType (string): This value is NULL because it doesn't apply to the flaglower event.content.text (string) This value is NULL because it doesn't apply to the flaglower event.callId (string): Unique conversation ID of the voice call within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID. For transferred calls, the conversation ID is the primary call ID.sender (object): Information about the user whose action initiated the event.sender.role (string): Role of the user whose action initiated the event. Possible values are "Agent" and "Supervisor".sender.displayName (string): Name of the user whose action initiated the event.voiceCallId (string): Unique identifier of the Salesforce voice call in which a rep lowered the flag. For transferred calls, the new call segment has a different voiceCallId from the original call.For example:{     "type": "flaglower",     "detail": {         "id": "3115b389-ab50-400e-b8ba-978b7ec51d7a"         "clientSentTimestamp": 1594944652299,         "serverReceivedTimestamp": 1594944652328,         "content":{             "formatType": NULL,             "text": NULL         },         "callId": "c5d93c19-e03b-44f8-85e6-a11f02e70c45",         "sender": {             "role": "Supervisor",             "displayName": "Samir Supervisor"         },         "voiceCallId": "0LQRM0000006CSz"     } |
| note | id (string): Unique call identifier value.clientSentTimestamp (number): Date and time (in UTC) when the client sent the content. Measured in milliseconds since the Unix epoch.serverReceivedTimestamp (number): Date and time (in UTC) when the server received the content. Measured in milliseconds since the Unix epoch.content (object): Information about the content.content.formatType (string): Content format type of the note. Possible value is “Text”.content.text (string) The body text of the note.callId (string): Unique ID of the voice call within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID.sender (object): Information about the user whose action initiated the event.sender.role (string): Role of the user whose action initiated the event. Possible values are "Agent" and "Supervisor".sender.displayName (string): Name of the user whose action initiated the event.For example:{     "type": "note",     "detail": {         "id": "3115b389-ab50-400e-b8ba-978b7ec51d7a"         "clientSentTimestamp": 1594944652299,         "serverReceivedTimestamp": 1594944652328,         "content":{             "formatType": "Text",             "text": "The customer wants a refund or store credit."         },         "callId": "c5d93c19-e03b-44f8-85e6-a11f02e70c45",         "sender": {             "role": "Agent",             "displayName": "Angela Agent"     } } |

Payloads may contain other system-generated information.

## Code Examples

```
// Subscribe
const toolkitApi = this.template.querySelector('lightning-service-cloud-voice-toolkit-api');
toolkitApi.addEventListener('callstarted', <listener>);

// Unsubscribe
const toolkitApi = this.template.querySelector('lightning-service-cloud-voice-toolkit-api');
toolkitApi.removeEventListener('callstarted', <listener>);
```

```
{
  "type": "callstarted",
  "detail": {
    "callId": "d7a9f1b7-fc17-43fe-8ca7-e584a2b34792",
    "callType": "outbound",
    "participant": "+1 (415) 999-0000"
  }
}
```

```
{
    "type": "transcript",
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
    "type": "flagraise",
    "detail": {
        "id": "3115b389-ab50-400e-b8ba-978b7ec51d7a"
        "clientSentTimestamp": 1594944652299,
        "serverReceivedTimestamp": 1594944652328,
        "content":{
            "formatType": "Text",
            "text": "The customer wants a credit note."
        },
        "callId": "c5d93c19-e03b-44f8-85e6-a11f02e70c45",
        "sender": {
            "role": "Agent",
            "displayName": "Angela Agent"
        },
        "voiceCallId": "0LQRM0000006CSz"
    }
```

```
{
    "type": "flaglower",
    "detail": {
        "id": "3115b389-ab50-400e-b8ba-978b7ec51d7a"
        "clientSentTimestamp": 1594944652299,
        "serverReceivedTimestamp": 1594944652328,
        "content":{
            "formatType": NULL,
            "text": NULL
        },
        "callId": "c5d93c19-e03b-44f8-85e6-a11f02e70c45",
        "sender": {
            "role": "Supervisor",
            "displayName": "Samir Supervisor"
        },
        "voiceCallId": "0LQRM0000006CSz"
    }
```

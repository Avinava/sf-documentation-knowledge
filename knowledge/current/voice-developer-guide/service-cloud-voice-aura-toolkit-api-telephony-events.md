---
title: "Service Cloud Voice Aura Toolkit API Telephony Events"
domain: voice-developer-guide
topic: service-cloud-voice-aura-toolkit-api-telephony-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:21.717Z
estimatedTokens: 1108
keywords: [Service, Cloud, Voice, Aura, Toolkit, API, Telephony, Events, components, context-aware, listening, take, place, phone, calls]
---

# Service Cloud Voice Aura Toolkit API Telephony Events

> Make your components context-aware by listening to events that take place during phone
  calls.

# Service Cloud Voice Aura Toolkit API Telephony Events

Make your components context-aware by listening to events that take place during phone calls.

The following telephony events are available.

| Event Name | Description |
| --- | --- |
| AUDIO_STATS | Sent during a call, publishing real-time WebRTC audio statistics every 30 seconds. |
| CALL_STARTED | Sent when the call starts. |
| CALL_CONNECTED | Sent when the call connects. |
| CALL_ENDED | Sent when the call ends. |
| HOLD | Sent when the call is put on hold. |
| RESUME | Sent when the call resumes after hold. |
| MUTE | Sent when the call is muted. |
| UNMUTE | Sent when the call is unmuted. |
| PARTICIPANT_ADDED | Sent when a participant is added to the call. |
| PARTICIPANT_REMOVED | Sent when a participant is removed from the call. |
| CONFERENCE | Sent when participants on a three-way call are all taken off hold. |
| SWAP | Sent when participants on a three-way call have their hold status swapped. |
| PAUSE_RECORDING | Sent when the rep pauses call recording. |
| RESUME_RECORDING | Sent when the rep resumes call recording. |
| WRAP_UP_ENDED | Sent when the rep exits after call work status. |

To subscribe to these events, add a telephony event listener for each event you want to listen to.

```

```

When an event occurs, you receive a JSON payload that contains the event type, along with any relevant data. For instance, the CALL\_STARTED event contains this payload.

```

```

All payloads contain some basic information, such as the event type (type) and a unique call identifier (callId). Events can contain additional values within the detail object. Refer to the table for all the possible properties that can appear within the detail object of the payload.

| Event Name | Payload “detail” Properties |
| --- | --- |
| AUDIO_STATS | callId (string): Unique ID of the voice call within the telephony system. For example, if the telephony system is Amazon Connect, this value is the contact ID.stats (string): Media type. Possible values are: “inputChannelStats” and “outputChannelStats”.packetsLost (int): Number of packets lost during transmission.packetsCount (int): Number of packets transmitted.jitterBufferMillis (int): Time it took to buffer incoming packets, measured in milliseconds.roundTripTimeMillis (int): Time it took for the packet to travel to and from the receiver, measured in milliseconds.statsCount (int): Number of times the statistics have been collected or reported. For internal use only. |
| CALL_STARTED | callId (string): Unique call identifier value.callType (string): "inbound" or "outbound".participant (string): Phone number. |
| CALL_CONNECTED | callId (string): Unique call identifier value.callType (string): "inbound" or "outbound".participant (string): Phone number.callAttributes (object): additional call attributes provided by the telephony providerFor example:{     "type": "CALL_CONNECTED",     "detail": {         "callId": "4ba06a63-f1d3-44b6-a9ff-f57143a37c1",         "callType": "outbound",         "participant": "+1 (90 274-0615",         "callAttributes":{             "isTranscribed": "true",             "languageCode": "en-US"         }     } }The structure of the callAttributes varies depending on the telephony provider. Not all values of callAttributes have the properties shown in the example. |
| CALL_ENDED | callId (string): Unique call identifier value. |
| HOLD | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name. |
| RESUME | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name. |
| MUTE | callId (string): Unique call identifier value. |
| UNMUTE | callId (string): Unique call identifier value. |
| PARTICIPANT_ADDED | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name. |
| PARTICIPANT_REMOVED | callId (string): Unique call identifier value.participant (string): Phone number or Amazon Quick Connect name |
| CONFERENCE | callId (string): Unique call identifier value . |
| SWAP | callId (string): Unique call identifier value. |
| PAUSE_RECORDING | callId (string): Unique call identifier value. |
| RESUME_RECORDING | callId (string): Unique call identifier value. |
| WRAP_UP_ENDED | callId (string): Unique call identifier value . |

Payloads may contain other system-generated information.

## Code Examples

```
// Subscribe
cmp.find('voiceToolkitApi')
   .addTelephonyEventListener('CALL_STARTED', telephonyEventListenerFunc);

// Unsubscribe
cmp.find('voiceToolkitApi')
   .removeTelephonyEventListener('CALL_STARTED', telephonyEventListenerFunc);
```

```
{
  "type": "CALL_STARTED",
  "detail": {
    "callId": "d7a9f1b7-fc17-43fe-8ca7-e584a2b34792",
    "callType": "outbound",
    "participant": "+1 (415) 999-0000"
  }
}
```

```
{
    "type": "CALL_CONNECTED",
    "detail": {
        "callId": "4ba06a63-f1d3-44b6-a9ff-f57143a37c1",
        "callType": "outbound",
        "participant": "+1 (90 274-0615",
        "callAttributes":{
            "isTranscribed": "true",
            "languageCode": "en-US"
        }
    }
}
```

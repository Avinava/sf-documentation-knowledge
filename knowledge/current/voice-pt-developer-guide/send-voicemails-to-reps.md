---
title: "Send Voicemails to Reps"
domain: voice-pt-developer-guide
topic: send-voicemails-to-reps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.236Z
estimatedTokens: 1103
keywords: [Send, Voicemails, Reps, Let, customers, review, along, transcription, Setup, Routing, Sample, Sequence, Operations, Code]
---

# Send Voicemails to Reps

> Let customers send your reps voicemails that reps can review along with a
                transcription.

# Send Voicemails to Reps

Let customers send your reps voicemails that reps can review along with a transcription.

When your customer chooses to leave a voicemail through your telephony system, use the Telephony API to create or update a VoiceCall record. When calling the API, set the callOrigin parameter to Voicemail. See [Create a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) and [Update a Voice Call Record](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm) in the Telephony API documentation. This call record can contain both the recording and the transcription.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

When a voicemail is routed to a rep, if the transcription is still being processed in Salesforce, it may not show up when the rep accepts the voicemail. If that’s the case, the rep can refresh the page to see the transcription when it’s ready.

## Setup for Routing Voicemails

Voicemails are routed through Omni-Channel using an Omni-Channel flow. An admin can create a flow that routes voicemails to a particular queue. You can create a queue in setup and add a routing configuration to the queue (by using a routing other than External Routing).

You can also define a single flow that routes both voice calls and voicemails, and then branch your routing by using the callOrigin field of the VoiceCall record.

Voicemail routing can be defined for any inbound phone number in the contact center channels section.

![Voicemail routing configuration](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoicemail_routing.png&folder=voice_pt_developer_guide)

## Sample Sequence of Operations

1.  The customer calls the Contact Center number.
2.  The partner system creates a VoiceCall using the [Create a Voice Call Record Telephony API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm).
3.  If no reps are available, the customer chooses to leave a voicemail.
4.  The customer records a voice message.
5.  The partner system updates the VoiceCall using the [Update a Voice Call Record Telephony API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm). With this API call, isActiveCall is set to true to ensure that the conversation isn’t closed, as we have more updates ahead. Also, callOrigin is set to "Voicemail" to ensure that the call is tagged as a voicemail message. (Alternatively, the partner can set the callOrigin when creating the call earlier if they know this information when the call record is first created.)
6.  The partner system creates a transcription using the [Create a Transcript Telephony API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm).
7.  The partner system [executes an Omni-Channel Flow using the Telephony API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm). With this API, the dialedNumber parameter contains the routing configuration that is defined in the Contact Center details page. (Make sure that callOrigin is updated to "Voicemail" before this API call so that the flow picks the voicemail routing instructions.)
8.  The partner system does a final update (using the [Update a Voice Call Record Telephony API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm)) so that the conversation is completed by setting isActiveCall to false, along with the recording details.

## Example Code

For a complete example implementation, see the [demo connector code](https://github.com/salesforce-misc/byo-demo-connector/blob/main/src/server/scrtConnector.mjs).

A sample REST call to the [Telephony API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm) that includes the callOrigin parameter when creating a VoiceCall record:

```

```

## Code Examples

```
POST /telephony/v1/voiceCalls

{
  "callCenterApiName": "MyContactCenter",
  "vendorCallKey": "5324881f-1e84-4367-8930-f69a74b30fff",
  "to": "999999999",
  "from": "999999999",
  "initiationMethod": "Inbound",
  "callOrigin": "Voicemail",
  "startTime": "2022-08-02T17:32:28Z",
  "participants": [
    {
      "participantKey": "999999999",
      "type" : "END_USER"
    }
  ]
}
```

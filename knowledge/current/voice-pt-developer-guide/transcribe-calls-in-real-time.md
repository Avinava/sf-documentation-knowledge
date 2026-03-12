---
title: "Transcribe Calls in Real Time"
domain: voice-pt-developer-guide
topic: transcribe-calls-in-real-time
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.191Z
estimatedTokens: 956
keywords: [Transcribe, Calls, Real, Time, transcriptions, add, Enhanced, Conversation, component, Voice, Call, record, Lightning, App, Builder]
---

# Transcribe Calls in Real Time

> To see transcriptions in real time, add the Enhanced Conversation component to the Voice
    Call record page through the Lightning App Builder. You can add this component for orgs that use
    Service Cloud Voice with Amazon Connect. For orgs that use Service Cloud Voice with Partner
    Telephony, add this component only if your telephony provider supports
    transcription.

# Transcribe Calls in Real Time

To see transcriptions in real time, add the Enhanced Conversation component to the Voice Call record page through the Lightning App Builder. You can add this component for orgs that use Service Cloud Voice with Amazon Connect. For orgs that use Service Cloud Voice with Partner Telephony, add this component only if your telephony provider supports transcription.

You can create and send transcripts for one voice call at a time or in bulk. To send transcripts for one voice call at a time, use the Create Transcript API. To send transcripts in bulk, use the Create Transcripts in Bulk API. You can also use the Connect REST API to upload or update transcripts.

The Create Transcript API and Create Transcripts in Bulk API use JWT authorization to communicate with Salesforce, so make sure to send the transcribed messages with a valid JWT token.

You can also use the Connect REST API to upload or update transcripts.

Review the following information before you configure real-time transcription:

-   Review the transcript-related limitations specified in the Service Cloud Voice Limits and Limitations page.
-   When specifying the vendorCallKey for a transferred call, use the vendorCallKey of the parentVoiceCall. That is, use the vendorCallKey of the voice call (VoiceCall) record for the call with the original rep.
-   In consult call use cases where a consult call hasn't merged with a multiparty call, use the vendorCallKey of the voice call record created for the consult call. To transcribe a consult call after it has merged with a multiparty call, use the vendorCallKey of the first voice call record created for the multiparty call.
-   During a conversation that involves a transfer, all calls in the conversation get transcripts from the entire call. After the call ends, the transcript disappears from the conversation body component for a brief period while the post-call association takes place.
-   The post-call association process is triggered by the conversation closed event. This process ensures that the transcript for each call segment only includes the conversation during that time period. This process can take a few minutes.

#### See Also

-   [*Service Cloud Voice Implementation Guide:* Create a Transcript](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm "Service Cloud Voice Implementation Guide: Create a Transcript - HTML (New Window)")

-   [*Service Cloud Voice Implementation Guide:* Create Transcripts in Bulk](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/%EF%BB%BFvoice_rest_voicecalls_transcript_bulk.htm "Service Cloud Voice Implementation Guide: Create Transcripts in Bulk - HTML (New Window)")

-   [*Service Cloud Voice Implementation Guide:* Upload or Update Transcripts with Connect REST API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_connect_overview.htm "Service Cloud Voice Implementation Guide: Upload or Update Transcripts with
    Connect REST API - HTML (New Window)")

-   [*Service Cloud Voice Implementation Guide:* Increase Performance of the ContactLensProcessor Lambda Function](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_transcribe_calls.htm "Service Cloud Voice Implementation Guide: Increase Performance of the ContactLensProcessor Lambda Function - HTML (New Window)")

-   [*Salesforce Help:* Service Cloud Voice Limits and Limitations](https://help.salesforce.com/s/articleView?id=service.voice_limitations.htm&type=5&language=en_US "Salesforce Help: Service Cloud Voice Limits and Limitations - HTML (New Window)")

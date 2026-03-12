---
title: "Using the Telephony Integration API"
domain: voice-developer-guide
topic: using-the-telephony-integration-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.820Z
estimatedTokens: 1103
keywords: [Telephony, Integration, API, programmatically, manage, voice, call, provided, Amazon, Connect, Lambda, functions, automatically, endpoints, perform]
---

# Using the Telephony Integration API

> The Telephony Integration API allows you to programmatically manage a voice call. The
  provided Amazon Connect Lambda functions automatically use these endpoints to perform telephony
  functions, but you can also use these APIs separate from the provided Lambda
  functions.

# Using the Telephony Integration API

The Telephony Integration API allows you to programmatically manage a voice call. The provided Amazon Connect Lambda functions automatically use these endpoints to perform telephony functions, but you can also use these APIs separate from the provided Lambda functions.

-   **[Telephony Integration REST API Authorization](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_authorization.htm)**
    The Telephony Integration REST API requires JWT authorization. Usually, the provisioning process already sets up this authorization for you. This content simply provides instructions in case you must manually set up this authorization.
-   **[Create a Voice Call Record](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm)**
    Creates a voice call (VoiceCall) record containing the participants (that is, the caller and recipient) in the call.
-   **[Update a Voice Call Record](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm)**
    Updates a voice call (VoiceCall) record.
-   **[Create a Transcript](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm)**
    Creates a transcribed version of a voice call in real time.
-   **[Create Transcripts in Bulk](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm)**
    Creates transcripts in bulk across multiple voice calls in real time. These voice calls can include inbound calls, transfer calls, outbound calls, callback calls, and consult calls.
-   **[Execute an Omni-Channel Flow](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm)**
    Executes the Omni-Channel flow to route voice calls. It passes the call ID (Salesforce VoiceCallId or telephony vendor ContactId) as parameters to the flow and returns the rep or queue routing instructions to the contact flow. By default, Service Cloud Voice uses the Omni-Channel flow (or fallback queue) specified for the phone channel that matches the dialed number. If the dialed number doesn’t match an existing phone channel, you can optionally set a new dialed number, Omni-Channel flow, and fallback queue as input parameters to this API call.
-   **[Route a Voice Call](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_route_call.htm)**
    Routes a voice call to a rep, agent, queue, or flow if Omni-Channel Unified Routing is enabled.
-   **[Request a Callback](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_callback.htm)**
    Creates a callback request for a voice call if Omni-Channel Unified Routing is enabled.
-   **[Send a Real-Time Conversation Event](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_realtime_conversation.htm)**
    Send real-time conversation events generated from intelligence sources to the rep console.
-   **[Store a Post-Call Conversation Event](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_post-call_conversation_event.htm)**
    Store post-call conversation events generated from intelligence sources, such as Amazon Connect Contact Lens, into the conversation data store. Users can also specify the target objects (for example, VoiceCall, ConversationEntry) related to the specific event.
-   **[Reroute a Voice Call](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_reroute_call.htm)**
    Reroutes a voice call through Omni-Channel if Unified Routing with Omni-Channel is enabled.
-   **[Clear Routing](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm)**
    Deletes the PendingServiceRouting (PSR) record for a voice call. This API doesn’t need to be called for most scenarios; the PSR record is automatically deleted when the call is no longer being routed. However, there are some scenarios, like for missed or abandoned calls when using partner telephony systems (excluding Amazon Connect), where you must explicitly call this API to clear the PSR record.
-   **[Telephony Integration REST API Sample Code](atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_example.htm)**
    The following JavaScript code sample performs the authorization process and then invokes the Voice API.

## Related Topics

- Telephony Integration REST API Authorization (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_authorization.htm)
- Create a Voice Call Record (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_create.htm)
- Update a Voice Call Record (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_update.htm)
- Create a Transcript (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript.htm)
- Create Transcripts in Bulk (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_transcript_bulk.htm)
- Execute an Omni-Channel Flow (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm)
- Route a Voice Call (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_route_call.htm)
- Request a Callback (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_callback.htm)
- Send a Real-Time Conversation Event (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_voicecalls_realtime_conversation.htm)
- Store a Post-Call Conversation Event (atlas.en-us.voice_developer_guide.meta/voice_developer_guide/voice_rest_post-call_conversation_event.htm)

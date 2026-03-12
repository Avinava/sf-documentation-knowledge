---
title: "Post-Call Actions"
domain: voice-pt-developer-guide
topic: post-call-actions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.105Z
estimatedTokens: 527
keywords: [Post-Call, Actions, guidelines, how, fine-tune]
---

# Post-Call Actions

> This section provides guidelines about how to fine-tune post-call actions.

# Post-Call Actions

This section provides guidelines about how to fine-tune post-call actions.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

-   **[Call Recordings](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_record_calls.htm)**
    Each voice call supports one call recording. If a participant is added to the call, each of the component voice calls can be updated to list the recording URL and duration details.
-   **[Post-Call Contact Record Sync with the Update VoiceCall API](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_post_call_ctr.htm)**
    This API updates a VoiceCall record after the call has ended. Use this API to update call-related parameters that are unavailable during the VoiceCall creation stage, such as callDuration and numberOfHold.
-   **[After Conversation Work](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_after_conversation_work.htm)**
    After Conversation Work (ACW) gives reps a set amount of time after a customer conversation to wrap up their work before they start a new conversation.
-   **[Mean Opinion Score (MOS)](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_mos.htm)**
    Support MOS using Service Cloud Voice for Partner Telephony.

## Related Topics

- Call Recordings (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_record_calls.htm)
- Post-Call Contact Record Sync with the Update VoiceCall API (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_setup_post_call_ctr.htm)
- After Conversation Work (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_after_conversation_work.htm)
- Mean Opinion Score (MOS) (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_mos.htm)

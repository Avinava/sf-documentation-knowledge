---
title: "During Call Actions"
domain: voice-pt-developer-guide
topic: during-call-actions
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.028Z
estimatedTokens: 712
keywords: [Call, Actions, guidelines, take]
---

# During Call Actions

> This section provides guidelines about actions you can take during a call.

# During Call Actions

This section provides guidelines about actions you can take during a call.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

-   **[Associate Partner Telephony Users and Groups with Queues](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_users_groups_queues.htm)**
    Set up queue management to associate partner telephony users and groups with Service Cloud Voice queues.
-   **[Change Status While on a Call](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_pending_status_change.htm)**
    With the pending status change feature, reps can change their Omni-Channel status while on a call.
-   **[Transcribe Calls in Real Time](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_transcribe_calls.htm)**
    To see transcriptions in real time, add the Enhanced Conversation component to the Voice Call record page through the Lightning App Builder. You can add this component for orgs that use Service Cloud Voice with Amazon Connect. For orgs that use Service Cloud Voice with Partner Telephony, add this component only if your telephony provider supports transcription.
-   **[Send Real-Time Signals](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm)**
    Voice resiliency ensures that calls can still go through when the number of conversations is over limit or when the background service is affected.
-   **[Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_supervisor_listen_in.htm)**
    When a rep belongs to a supervised group, a supervisor can monitor their active calls using the Supervisor Panel.
-   **[Send Additional Call Information](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_additional_call_info.htm)**
    You can disable certain call handling options such as end call, dial pad, and phone book in the softphone.

## Related Topics

- Associate Partner Telephony Users and Groups with Queues (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_users_groups_queues.htm)
- Change Status While on a Call (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_pending_status_change.htm)
- Transcribe Calls in Real Time (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_transcribe_calls.htm)
- Send Real-Time Signals (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voicecalls_realtime_conversation.htm)
- Supervisor Listen In or Barge In with Service Cloud Voice for Partner Telephony (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_supervisor_listen_in.htm)
- Send Additional Call Information (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_additional_call_info.htm)

---
title: "Transfer Calls"
domain: voice-pt-developer-guide
topic: transfer-calls
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.194Z
estimatedTokens: 825
keywords: [Transfer, Calls, guidelines, transferring]
---

# Transfer Calls

> This section provides guidelines related to transferring calls.

# Transfer Calls

This section provides guidelines related to transferring calls.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

-   **[Configure Estimated Wait Times for Queues](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_estimated_wait_times.htm)**
    Reps can see estimated wait times for a given queue or skill before transferring a call.
-   **[Agent Availability](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_agent_availability.htm)**
    This topic provides guidance on agent availability.
-   **[Customize the Destination List for Call Transfers in Omni-Channel](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_customize_transfer_destination.htm)**
    Customize the list of transfer destinations to only show the destination types that apply when transferring calls for Omni-Channel.
-   **[Enable Voice Call Transfers Using Omni-Channel Flows and Partner Telephony](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_enable_voice_call_transfers.htm)**
    Configure this feature to enable voice call transfers via Salesforce Omni-Channel flows.
-   **[Transfer Calls to a Queue](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_transfer_queue.htm)**
    Transfer a call to a Salesforce queue so that a supervisor can see the transferred call waiting in the queue.
-   **[Perform a Blind Transfer](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_blind_transfer.htm)**
    With the blind transfer feature, vendors can use the addParticipant Connector API method to hang up and transfer a call rather than add a caller to an existing conversation.
-   **[Use Click-to-Dial for Transfers](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_transfer.htm)**
    Enable click-to-dial for phone numbers so that a rep can call or transfer to that number.
-   **[Phone Contact Search](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_phone_contact_search.htm)**
    When a rep adds a participant to a call, Salesforce provides a UI to search for transfer destinations.

#### See Also

-   [Call Scenario Diagrams](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_call_scenario_diagrams.htm "Understand different call scenarios, such as a rep receiving or declining an inbound call or multiparty and consult calls.")

## Related Topics

- Configure Estimated Wait Times for Queues (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_estimated_wait_times.htm)
- Agent Availability (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_agent_availability.htm)
- Customize the Destination List for Call Transfers in Omni-Channel (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_customize_transfer_destination.htm)
- Enable Voice Call Transfers Using Omni-Channel Flows and Partner Telephony (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_enable_voice_call_transfers.htm)
- Transfer Calls to a Queue (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_transfer_queue.htm)
- Perform a Blind Transfer (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_blind_transfer.htm)
- Use Click-to-Dial for Transfers (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_click_to_dial_transfer.htm)
- Phone Contact Search (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_phone_contact_search.htm)
- Call Scenario Diagrams (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_advanced_call_scenario_diagrams.htm)

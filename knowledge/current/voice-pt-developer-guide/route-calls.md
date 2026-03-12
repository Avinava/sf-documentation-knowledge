---
title: "Route Calls"
domain: voice-pt-developer-guide
topic: route-calls
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.132Z
estimatedTokens: 1026
keywords: [Route, Calls, guidelines, routing]
---

# Route Calls

> This section provides guidelines related to routing calls.

# Route Calls

This section provides guidelines related to routing calls.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=voice_pt_developer_guide)

#### Important

This guide is for telephony providers who are creating a solution that integrates Service Cloud Voice with their telephony system. If that’s not you, see the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_intro.htm) or [Salesforce Help](https://help.salesforce.com/articleView?id=service.voice_about.htm&type=5&language=en_US). To update your solution to include Bring Your Own Channel for CCaaS Messaging capabilities along with Service Cloud Voice, see the [Bring Your Own Channel Developer Guide](https://developer.salesforce.com/docs/service/messaging-byoc-ccaas/guide/add-messaging-to-voice.html).

-   **[Omni-Channel Flow for Service Cloud Voice for Partner Telephony](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_flow.htm)**
    Run an Omni-Channel flow using the Service Cloud Voice Telephony Integration REST API.
-   **[Add Contact Center Channels to Enable Routing](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_automated_phone_list.htm)**
    To let customers configure call routing for voice calls and to determine when to create an End User record, create a phone channel. After creating a phone channel, you can set up a caller ID tool to create or reuse an End User record. You can also choose whether to associate the End User record with the number dialed.
-   **[Queue Mapping and Rep Mapping](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_queue_mapping.htm)**
    This topic provides guidance on how to handle queue mapping and rep mapping.
-   **[Enable the Voice Extension Page in Lightning App Builder](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_extension_flexipage.htm)**
    Configure this feature to let administrators add custom voice controls to their Omni-Channel softphones using the Voice Extension FlexiPage in the Lightning App Builder.
-   **[Understand Rep Statuses](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_understand_agent_statuses.htm)**
    See how setAgentStatus() is called from the Salesforce core to the connector when a rep performs an action in the Salesforce phone control panel.
-   **[Two-Way Rep Status Syncing](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_agent_status_syncing.htm)**
    Rep status (that is, rep presence) can be changed from the Omni-Channel widget, which sends status information to the partner connector. We added the ability to change the rep status from the connector, which passes status information back to Salesforce.
-   **[Handling Missed Calls and Call Errors](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_handled_missed_calls.htm)**
    A voice call typically ends when a rep hangs up. Voice calls can also end when an rep misses the call or when the call is in an error state. This topic shows you how missed voice calls, including inbound, outbound, transfer, and callback calls, and call errors are handled.
-   **[External Routing](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_external_routing.htm)**
    While Service Cloud Voice uses Omni-Channel routing capabilities, in a partner telephony integration Salesforce typically handles the creation of AgentWork records for voice calls based on call events sent by the partner.
-   **[Unified Routing](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unified_routing.htm)**
    Unified routing lets Salesforce handle the routing of inbound and outbound voice calls, skills-based call routing, and call transfers to the reps. Configure unified routing so that the admins can enable the feature. You can choose whether to include this feature in the managed package.

## Related Topics

- Omni-Channel Flow for Service Cloud Voice for Partner Telephony (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_flow.htm)
- Add Contact Center Channels to Enable Routing (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_automated_phone_list.htm)
- Queue Mapping and Rep Mapping (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_queue_mapping.htm)
- Enable the Voice Extension Page in Lightning App Builder (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_voice_extension_flexipage.htm)
- Understand Rep Statuses (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_understand_agent_statuses.htm)
- Two-Way Rep Status Syncing (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_agent_status_syncing.htm)
- Handling Missed Calls and Call Errors (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_handled_missed_calls.htm)
- External Routing (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_external_routing.htm)
- Unified Routing (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_unified_routing.htm)

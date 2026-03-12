---
title: "Omni-Channel Flow for Service Cloud Voice for Partner Telephony"
domain: voice-pt-developer-guide
topic: omni-channel-flow-for-service-cloud-voice-for-partner-telephony
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.088Z
estimatedTokens: 653
keywords: [Omni-Channel, Flow, Service, Cloud, Voice, Partner, Telephony, Run, Integration, REST, API]
---

# Omni-Channel Flow for Service Cloud Voice for Partner Telephony

> Run an Omni-Channel flow using the Service Cloud Voice Telephony Integration REST
        API.

# Omni-Channel Flow for Service Cloud Voice for Partner Telephony

Run an Omni-Channel flow using the Service Cloud Voice Telephony Integration REST API.

To learn more, see [Execute OmniFlow](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm) in the [Service Cloud Voice Implementation Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_overview.htm).

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

Executing an [Omni-Channel Flow](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm) for incoming calls (by calling /telephony/v1/voiceCalls/{CALL\_ID}/omniFlow) creates a [PendingServiceRouting](https://developer.salesforce.com/docs/atlas.en-us.260.0.omni_channel_dev.meta/omni_channel_dev/sforce_api_objects_pendingservicerouting.htm) (PSR) record in Salesforce which stays in the queue until the voice call is routed to the rep and the rep accepts the AgentWork. If the voice call is never routed to the rep or the rep declines the AgentWork, the PSR record stays in Salesforce. In order to clean up a PSR record associated with an abandoned or declined voice call, call the [Clear Routing API](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm) (/telephony/v1/voiceCalls/{CALL\_ID}/clearRouting) to clean it up.

#### See Also

-   [*Salesforce Help:* Omni-Channel Flows](https://help.salesforce.com/s/articleView?id=service.omnichannel_flows.htm&type=5&language=en_US "Salesforce Help: Omni-Channel Flows - HTML (New Window)")

-   [*Service Cloud Voice Implementation Guide:* Execute OmniFlow](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_omniflow_execute.htm "Service Cloud Voice Implementation Guide: Execute OmniFlow - HTML (New Window)")

-   [*Service Cloud Voice Implementation Guide:* Clear Routing](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_rest_clear_routing.htm "Service Cloud Voice Implementation Guide: Clear Routing - HTML (New Window)")

-   [*Salesforce Help:* The Routing Lifecycle](https://help.salesforce.com/s/articleView?id=service.omnichannel_psr_lifecycle.htm&type=5&language=en_US "Salesforce Help: The Routing Lifecycle - HTML (New Window)")

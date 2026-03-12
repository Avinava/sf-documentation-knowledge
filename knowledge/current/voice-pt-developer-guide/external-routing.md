---
title: "External Routing"
domain: voice-pt-developer-guide
topic: external-routing
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:22.043Z
estimatedTokens: 500
keywords: [External, Routing, Service, Cloud, Voice, uses, Omni-Channel, capabilities, partner, telephony, integration, Salesforce, typically, handles, creation]
---

# External Routing

> While Service Cloud Voice uses Omni-Channel routing capabilities, in a partner
        telephony integration Salesforce typically handles the creation of AgentWork records for
        voice calls based on call events sent by the partner.

# External Routing

While Service Cloud Voice uses Omni-Channel routing capabilities, in a partner telephony integration Salesforce typically handles the creation of AgentWork records for voice calls based on call events sent by the partner.

For external routing of voice calls, the partner system identifies the rep which the call should be routed to. The partner sends a call started event for that particular rep. If needed, the partner reroutes the call to another rep.

Partners can also route calls by using an Omni-Channel flow and handling routing through their partner system. Flows can route directly to a rep or to a Salesforce Queue. For more information, see [Omni-Channel Flow for Service Cloud Voice for Partner Telephony](atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_flow.htm "Run an Omni-Channel flow using the Service Cloud Voice Telephony Integration REST API.").

The standard Omni-Channel External Routing flow, where the partner explicitly creates the AgentWork record using the PendingServiceRouting (PSR), applies primarily to non-voice channels or specific advanced unified routing configurations. To implement external routing for non-voice channels, refer to Omni-Channel documentation. For detailed guidance on implementing External Routing for non-voice channels using Omni-Channel, see the [External Routing for Omni-Channel](https://developer.salesforce.com/docs/atlas.en-us.260.0.omni_channel_dev.meta/omni_channel_dev/omnichannel_external_routing.htm) section in the Omni-Channel Developer Guide.

To learn more about the PendingServiceRouting (PSR), see [The Routing Lifecycle](https://help.salesforce.com/articleView?id=service.omnichannel_psr_lifecycle.htm&type=5&language=en_US) in Salesforce Help.

#### See Also

-   [*Salesforce Help:* The Routing Lifecycle](https://help.salesforce.com/articleView?id=service.omnichannel_psr_lifecycle.htm&type=5&language=en_US "Salesforce Help: The Routing Lifecycle - HTML (New Window)")

## Related Topics

- Omni-Channel
                Flow for Service Cloud Voice for Partner Telephony (atlas.en-us.voice_pt_developer_guide.meta/voice_pt_developer_guide/voice_pt_omni_flow.htm)

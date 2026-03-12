---
title: "Agent Availability"
domain: voice-pt-developer-guide
topic: agent-availability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:21.949Z
estimatedTokens: 431
keywords: [Agent, Availability, topic, guidance]
---

# Agent Availability

> This topic provides guidance on agent availability.

# Agent Availability

This topic provides guidance on agent availability.

Service Cloud Voice for Partner Telephony supports showing agent availability in the Omni-Channel transfer UI. There are two options for showing agent availability.

1.  **Vendor-Provided Availability**. If a partner wants to provide availability data as part of the phone book contacts for transfer, they can provide the agent availability as a new availability field on the Contact object. This value is shown in the UI as an availability icon. In order for the Transfer UI to use the vendor-provided availability, the connector also must set hasAgentAvailability to true in the AgentConfigResult.
2.  **Salesforce-Provided Availability**. If the partner doesn’t provide agent availability as part of the phone book contacts (hasAgentAvailability is false in AgentConfigResult), Salesforce tries to map the phone book contacts to Salesforce agents in the current org and calculates the availability. This agent mapping is done based on the CallCenterRoutingMap entries (see Agent Mapping above). If there are matches, Salesforce shows the agent availability for matched agents. The agent available is calculated based on the following criteria:
    -   Available—Agent is available for the Voice channel and has 100% percent capacity available
    -   Busy—Agent isn’t available for the Voice channel
    -   Offline—Agent is offline in Omni-Channel

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

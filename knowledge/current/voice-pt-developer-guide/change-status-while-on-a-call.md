---
title: "Change Status While on a Call"
domain: voice-pt-developer-guide
topic: change-status-while-on-a-call
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.098Z
estimatedTokens: 319
keywords: [Change, Status, Call, pending, feature, reps, their, Omni-Channel]
---

# Change Status While on a Call

> With the pending status change feature, reps can change their Omni-Channel
                status while on a call.

# Change Status While on a Call

With the pending status change feature, reps can change their Omni-Channel status while on a call.

To use this feature, vendors should set the value of hasPendingStatusChange in CapabilitiesResult to true. After Salesforce receives a value of true from the getCapabilities() method, the Omni-Channel status change button is enabled for reps during a call.

Then, when setAgentStatus requests are made, Salesforce supports an additional parameter, enqueueNextState, and the vendor can implement the enqueue status change feature to support this behavior.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=voice_pt_developer_guide)

#### Tip

As of Winter ‘24 and later, reps can also change their Omni-Channel status after AgentWork is assigned but before they accept or decline the call. Partners should listen for and handle the SET\_AGENT\_STATUS event during this period between CALL\_STARTED and CALL\_CONNECTED.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

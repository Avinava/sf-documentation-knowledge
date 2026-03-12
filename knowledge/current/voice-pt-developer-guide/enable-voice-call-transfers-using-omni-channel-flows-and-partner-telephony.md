---
title: "Enable Voice Call Transfers Using Omni-Channel Flows and Partner Telephony"
domain: voice-pt-developer-guide
topic: enable-voice-call-transfers-using-omni-channel-flows-and-partner-telephony
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.086Z
estimatedTokens: 597
keywords: [Enable, Voice, Call, Transfers, Omni-Channel, Flows, Partner, Telephony, Configure, feature, via, Salesforce]
---

# Enable Voice Call Transfers Using Omni-Channel Flows and Partner Telephony

> Configure this feature to enable voice call transfers via Salesforce Omni-Channel
    flows.

# Enable Voice Call Transfers Using Omni-Channel Flows and Partner Telephony

Configure this feature to enable voice call transfers via Salesforce Omni-Channel flows.

This configuration applies to the Service Cloud Voice with Partner Telephony telephony model. To enable this feature for Service Cloud Voice with Amazon Connect or Service Cloud Voice for Partner Telephony from Amazon Connect, go to [Enable Voice Call Transfers Using Omni-Channel Flows and Amazon Connect.](https://developer.salesforce.com/docs/atlas.en-us.260.0.voice_developer_guide.meta/voice_developer_guide/voice_example_omni_amazon_enable_voice_call_transfers.htm)

Omni-Channel flows can be used to transfer voice calls through External Routing. Configure this feature to enable voice call transfers using Omni-Channel flows. When this feature is enabled, all active flows of process type Omni-Channel Flow that are assigned to the phone channel appear in the Omni-Channel widget for reps to select as transfer destinations.

To enable voice call transfers using Omni-Channel flows:

1.  Verify that your system is configured to Create a Voice Call Record for transfer.
2.  While calling the Execute an Omni-Channel Flow REST API, verify that your system is properly routing the voice calls. The flowDevName parameter is required. Don't set the dialedNumber parameter.
3.  Verify that the hasTransferToOmniFlow parameter in CapabilitiesResult is set to true.

When a rep transfers a call to an Omni-Channel flow, Salesforce calls the addParticipant Connector API along with the fully qualified name of the Omni-Channel flow. For example, {Namespace}\_\_{API Name of the Omni-Channel Flow}.

The telephony partner system creates a voice call record for transfer through the Create a Voice Call Record REST API, and then executes the Omni-Channel flow through the Execute an Omni-Channel Flow REST API. A sample implementation of this entire process can be found in the [vendor-sdk.js](https://github.com/salesforce-misc/byo-demo-connector/blob/main/src/main/vendor-sdk.js#L1513) script of the demo connector in GitHub.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

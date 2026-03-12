---
title: "Customize the Destination List for Call Transfers in Omni-Channel"
domain: voice-pt-developer-guide
topic: customize-the-destination-list-for-call-transfers-in-omni-channel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:22.083Z
estimatedTokens: 344
keywords: [Customize, Destination, Call, Transfers, Omni-Channel, transfer, destinations, show, apply, transferring, calls]
---

# Customize the Destination List for Call Transfers in Omni-Channel

> Customize the list of transfer destinations to only show the destination types that apply
    when transferring calls for Omni-Channel.

# Customize the Destination List for Call Transfers in Omni-Channel

Customize the list of transfer destinations to only show the destination types that apply when transferring calls for Omni-Channel.

During an in-progress call, reps can transfer a caller to any of the following transfer destination types through the Omni-Channel widget:

-   Agent
-   Contact
-   Queue
-   Flow

![Destination Types for Omni-Channel Transfers](/docs/resources/img/en-us/260.0?doc_id=voice_pt%2Fimages%2Fvoice_pt_omni_customize_transfer_destination.png&folder=voice_pt_developer_guide)

By default, the widget displays all transfer destination types, giving reps the option to transfer a call to a specific rep, contact, queue, or flow.

To customize the list so that only certain transfer destination types appear:

-   Using the Connector API, set the value of contactTypes in PhoneContactsResult to the list of transfer destination types you want to appear in the Omni-Channel widget. If contactTypes isn't set, all transfer destination types are listed in the widget for reps to pick from.

#### See Also

-   [*Service Cloud Connector API Reference*](https://developer.salesforce.com/docs/atlas.en-us.260.0.service_connector_api_developer_guide.meta/service_connector_api_developer_guide/service_connector_api_overview.htm "Service Cloud Connector API Reference - HTML (New Window)")

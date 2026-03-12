---
title: "Create a Message Channel"
domain: pages
topic: create-a-message-channel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:21.801Z
estimatedTokens: 302
keywords: [Message, Channel, Lightning, org, LightningMessageChannel, metadata]
---

# Create a Message Channel

> To create a Lightning Message Channel in your org, use the LightningMessageChannel
  metadata type.

# Create a Message Channel

To create a Lightning Message Channel in your org, use the LightningMessageChannel metadata type.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

See LightningMessageChannel in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_lightningmessagechannel.htm "HTML (New Window)").

To deploy a LightningMessageChannel into your org, create an Salesforce DX project. Include the XML definition in the force-app/main/default/messageChannels/ directory. The LightningMessageChannel file name follows the format messageChannelName.messageChannel-meta.xml. To add it to your scratch org, sandbox, or Developer Edition org, run the sf project deploy start Salesforce CLI command.

#### See Also

-   [Trailhead: Set Up Salesforce DX](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_app_dev/sfdx_app_dev_setup_dx "Trailhead: Set Up Salesforce DX - HTML (New Window)")

-   [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm "Salesforce DX Developer Guide - HTML (New Window)")

---
title: "Create a Message Channel"
domain: lightning
topic: create-a-message-channel
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:49.294Z
estimatedTokens: 330
keywords: [Message, Channel, lightning, messageChannel, component, org, LightningMessageChannel, metadata, append, __c, isn’t, custom, uses, suffix]
---

# Create a Message Channel

> To create a lightning:messageChannel component in
        your org, use the LightningMessageChannel metadata type and append it with __c. The message channel isn’t a custom object, it just
        uses the same suffix.

# Create a Message Channel

To create a lightning:messageChannel component in your org, use the LightningMessageChannel metadata type and append it with \_\_c. The message channel isn’t a custom object, it just uses the same suffix.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=lightning)

#### Note

See LightningMessageChannel in the [Metadata API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_lightningmessagechannel.htm "HTML (New Window)").

To deploy a LightningMessageChannel into your org, create a Salesforce DX project. Include the XML definition in the force-app/main/default/messageChannels/ directory. The LightningMessageChannel file name follows the format messageChannelName.messageChannel-meta.xml. To deploy it to your scratch org, sandbox, or Developer Edition org, run the sf project deploy start Salesforce CLI command.

#### See Also

-   [Trailhead: Set Up Salesforce DX](https://trailhead.salesforce.com/en/content/learn/modules/sfdx_app_dev/sfdx_app_dev_setup_dx "Trailhead: Set Up Salesforce DX - HTML (New Window)")

-   [Salesforce DX Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.htm "Salesforce DX Developer Guide - HTML (New Window)")

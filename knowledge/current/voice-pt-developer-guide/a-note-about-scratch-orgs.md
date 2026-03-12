---
title: "A Note About Scratch Orgs"
domain: voice-pt-developer-guide
topic: a-note-about-scratch-orgs
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:22.134Z
estimatedTokens: 440
keywords: [Scratch, Orgs, developing, managed, package, recommend, org, source-driven, disposable, deployment, Salesforce, code, metadata]
---

# A Note About Scratch Orgs

> When developing your managed package, we recommend using a scratch org. The scratch org
  is a source-driven and disposable deployment of Salesforce code and metadata.

# A Note About Scratch Orgs

When developing your managed package, we recommend using a scratch org. The scratch org is a source-driven and disposable deployment of Salesforce code and metadata.

A scratch org is fully configurable, so developers can emulate different Salesforce editions with different features and preferences. You can share the scratch org configuration file with other team members so you all have the same basic org in which to do your development.

The scratch org definition file contains the configuration values that determine the shape of the scratch org. To enable Service Cloud Voice Partner Telephony features in a scratch org, specify “ServiceCloudVoicePartnerTelephony” in the features field in your scratch org definition. Add a quantity value (between 1–50) when you add the ServiceCloudVoicePartnerTelephony scratch org feature. To learn more about all of the supported features, see [Scratch Org Features.](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm#sfdx_dev_scratch_orgs_def_file_config_values)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_pt_developer_guide)

#### Note

To learn more about scratch orgs and the Salesforce Developer Experience (DX), see [How Salesforce Developer Experience Changes the Way You Work](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_intro.html).

#### See Also

-   [*Salesforce DX Developer Guide:* Scratch Org Features](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs_def_file_config_values.htm "Salesforce DX Developer Guide: Scratch Org Features - HTML (New Window)")

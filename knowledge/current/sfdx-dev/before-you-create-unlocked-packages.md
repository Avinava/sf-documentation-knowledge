---
title: "Before You Create Unlocked Packages"
domain: sfdx-dev
topic: before-you-create-unlocked-packages
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:18.728Z
estimatedTokens: 461
keywords: [Unlocked, Packages, packaging, sure, correctly, verify]
---

# Before You Create Unlocked Packages

> When you use unlocked packaging, to be sure that you set it up correctly, verify the
        following.

# Before You Create Unlocked Packages

When you use unlocked packaging, to be sure that you set it up correctly, verify the following.

Did you?

-   [Enable Dev Hub in Your Org](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_devhub.htm "HTML (New Window)")
-   [Enable Second-Generation Managed Packaging](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_enable_secondgen_pkg.htm "HTML (New Window)")
-   Install [Salesforce CLI](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_setup.meta/sfdx_setup/sfdx_setup_intro.htm "HTML (New Window)")

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=sfdx_dev)

#### Note

Unlocked packaging is available with these licenses: Salesforce or Salesforce Limited Access - Free (partners only).

Developers who work with unlocked packages need the correct permission set in the Dev Hub org. Developers need either the System Administrator profile or the Create and Update Second-Generation Packages permission. For more information, see [Add Salesforce DX Users](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_setup_add_users.htm "HTML (New Window)").

The maximum number of unlocked package versions that you can create from a Dev Hub per day is the same as your daily scratch org allocation. To request a limit increase, contact Salesforce Customer Support.

Scratch orgs and packages count separately, so creating an unlocked package doesn’t count against your daily scratch org limit. To view your scratch org limits, use the CLI:

```

```

For more information on scratch org limits, see [Scratch Orgs](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_scratch_orgs.htm "HTML (New Window)").

## Code Examples

```
sf limits api display
```

---
title: "Remove SLDS"
domain: exp-cloud-lwr
topic: remove-slds
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.600Z
estimatedTokens: 138
keywords: [Remove, SLDS, necessary, Salesforce, Lightning, Design, System, site]
---

# Remove SLDS

> If necessary, you can remove Salesforce Lightning Design System (SLDS) from your
    site.

# Remove SLDS

If necessary, you can remove Salesforce Lightning Design System (SLDS) from your site.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=exp_cloud_lwr)

#### Important

Don’t remove SLDS if you plan to use flexible layouts or any of the Lightning base components, as they rely heavily on the design system.

In Experience Builder, click **Settings** | **Advanced** | **Edit Head Markup**, and delete the following line.

```

```

To use SLDS again later, add the code back to your head markup.

## Code Examples

```
<link 
    rel="stylesheet" 
    href="{ basePath }/assets/styles/salesforce-lightning-design-system.min.css?{ versionKey }" 
/>
```

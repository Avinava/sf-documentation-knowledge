---
title: "Enable
    --dxp Styling Hooks"
domain: exp-cloud-lwr
topic: enable---dxp-styling-hooks
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:27.607Z
estimatedTokens: 183
keywords: [Enable, --dxp, Styling, Hooks, created, LWR, site, Summer, ’21, adding, DXP, branding, style, sheets]
---

# Enable
    --dxp Styling Hooks

> If you created your LWR site before Summer ’21, enable --dxp styling hooks by adding the DXP branding style sheets to your
    site.

# Enable \--dxp Styling Hooks

If you created your LWR site before Summer ’21, enable \--dxp styling hooks by adding the DXP branding style sheets to your site.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=exp_cloud_lwr)

#### Tip

New LWR sites created in Summer ’21 and later automatically include these style sheets.

Click **Settings** | **Advanced** | **Edit Head Markup**, and include the following code in the Head Markup editor.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=exp_cloud_lwr)

#### Note

Make sure that the dxp-styling-hooks.min.css and dxp-slds-extension.min.css files are loaded after salesforce-lightning-design-system.min.css.

## Code Examples

```
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/salesforce-lightning-design-system.min.css?{​ versionKey }” />
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/dxp-site-spacing-styling-hooks.min.css?{​ versionKey }” />
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/dxp-styling-hooks.min.css?{​ versionKey }” />
<link rel=“stylesheet” href=“{​ basePath }/assets/styles/dxp-slds-extensions.min.css?{​ versionKey }” />
```

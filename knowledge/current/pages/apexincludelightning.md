---
title: "apex:includeLightning"
domain: pages
topic: apexincludelightning
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:22.520Z
estimatedTokens: 337
keywords: [apex, includeLightning, Includes, Lightning, Components, Visualforce, JavaScript, library, lightning.out.js, correct, Salesforce, domain, Attributes]
---

# apex:includeLightning

> Includes the Lightning Components for Visualforce JavaScript library,
				lightning.out.js, from the correct
			Salesforce domain.

# apex:includeLightning

Includes the Lightning Components for Visualforce JavaScript library, lightning.out.js, from the correct Salesforce domain.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pages)

#### Note

The Lightning Components for Visualforce JavaScript library loads from the org that the Visualforce page is in, so your Lightning Out app must exist in the same org as the Visualforce page.

## Attributes

| Attribute Name | Attribute Type | Description | Required? | API Version | Access |
| --- | --- | --- | --- | --- | --- |
| id | String | An identifier that allows the component to be referenced by other components in the page. |  | 14.0 | global |
| rendered | Boolean | A Boolean value that specifies whether the component is rendered on the page. If not specified, this value defaults to true. |  | 14.0 | global |

#### See Also

-   [Render Lightning Runtime for Flows in a Visualforce Page](atlas.en-us.pages.meta/pages/pages_flows_lightningruntime.htm "By default, when you embed a flow in a Visualforce page, the flow renders in Classic runtime. Like its name suggests, Classic runtime looks and feels like regular Visualforce pages and the Salesforce Classic desktop experience. To render a flow in Lightning runtime, add the lightning:flow Aura component to your Visualforce page.")

## Related Topics

- Render Lightning Runtime for Flows in a Visualforce Page (atlas.en-us.pages.meta/pages/pages_flows_lightningruntime.htm)

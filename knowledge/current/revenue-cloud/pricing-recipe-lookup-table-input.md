---
title: "Pricing Recipe LookUp Table Input"
domain: revenue-cloud
topic: pricing-recipe-lookup-table-input
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-05-03T00:28:12.564Z
estimatedTokens: 124
keywords: [Pricing, Recipe, LookUp, tables, setup]
---

> Input representation of the lookup tables for the setup page recipe.

# Pricing Recipe LookUp Table Input

Input representation of the lookup tables for the setup page recipe.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| lookup​TableId | String | ID of the decision table. | Optional | 60.0 |
| pricing​Component​Type | String | Pricing component types such as volume discount, custom discount, attribute-based discount, and bundle-based discount. | Optional | 60.0 |

## Code Examples

```
"pricingRecipeLookUpTableInputRepresentations": [
    {
      lookupId: “12Gxx0000005J9MEAU”, 
      pricingComponentType: “CustomDiscount”
  },
    {
      lookupId: “12Gxx0000005J9MEAU”, 
      pricingComponentType: “CustomDiscount”
  }
 ]
```

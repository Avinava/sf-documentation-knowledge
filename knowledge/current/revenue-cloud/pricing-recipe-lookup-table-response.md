---
title: "Pricing Recipe LookUp Table Response"
domain: revenue-cloud
topic: pricing-recipe-lookup-table-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.611Z
estimatedTokens: 156
keywords: [Pricing, Recipe, LookUp, Output, representation]
---

# Pricing Recipe LookUp Table Response

> Output representation of a pricing recipe lookup table.

# Pricing Recipe LookUp Table Response

Output representation of a pricing recipe lookup table.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the pricing recipe table mapping. | Small, 60.0 | 60.0 |
| is​Internal | Boolean | Indicates if the decision table is available (true) or not (false). | Small, 60.0 | 60.0 |
| pricing​Component​Type | String | Price component types such as, custom discount, volume discount, attribute-based discount, bundle-based discount, and list price. | Small, 60.0 | 60.0 |

## Code Examples

```
"decisionTables": [
        {
          "id": "0lDxx00000000T3EAI",
          "isInternal": true,
          "pricingComponentType": "ListPrice"
        },
        {
          "id": "0lDxx00000000T4EAI",
          "isInternal": true,
          "pricingComponentType": "VolumeDiscount"
        },
        {
          "id": "0lDxx00000000HlEAI",
          "isInternal": false,
          "pricingComponentType": "CustomDiscount"
        }
      ]
```

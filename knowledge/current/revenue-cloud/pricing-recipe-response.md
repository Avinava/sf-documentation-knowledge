---
title: "Pricing Recipe Response"
domain: revenue-cloud
topic: pricing-recipe-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.622Z
estimatedTokens: 109
keywords: [Pricing, Recipe, Output, representation]
---

# Pricing Recipe Response

> Output representation of the pricing recipe.

# Pricing Recipe Response

Output representation of the pricing recipe.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| recipes | Pricing Recipe Output Representation[] | Representation of the pricing recipe. | Small, 60.0 | 60.0 |
| success | Boolean | Indicates if the request is successful (true) or not (false). | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "recipes": [
    {
      "active": false,
      "createdBy": "autoproc@00dxx0000006gmjea2",
      "createdOn": "2023-07-15T13:12:38.000Z",
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
      ],
      "developerName": "NGPDefaultRecipe",
      "id": "12Gxx0000005Ka4EAE",
      "name": "NGPDefaultRecipe",
      "procedureCreatedBy": "",
      "procedureCreatedOn": "2023-09-19T11:39:18.983Z",
      "procedureId": "",
      "procedureName": ""
    }],
  "success": true
}
```

## Related Topics

- Pricing Recipe
                  Output Representation (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_pricing_recipe_output.htm)

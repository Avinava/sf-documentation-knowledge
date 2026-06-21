---
title: "Category Details"
domain: revenue-cloud
topic: category-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-06-21T00:39:52.851Z
estimatedTokens: 341
keywords: [Category]
---

> Output representation of the details of a category.

# Category Details

Output representation of the details of a category.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| catalogId | String | ID of the catalog the requested category belong to. | Small, 67.0 | 67.0 |
| customFields | Map<String, Object> | Details of the custom fields associated with a catalog. | Small, 67.0 | 67.0 |
| description | String | Description of the category. | Small, 67.0 | 67.0 |
| eligiblePromotions | Promotion Output[] | List of eligible promotions for the product. | Small, 67.0 | 67.0 |
| hasSubCategories | Boolean | Indicates whether the subcategories are available (true) or not (false). | Small, 67.0 | 67.0 |
| id | String | ID of the category. | Small, 67.0 | 67.0 |
| isNavigational | Boolean | Indicates whether the category node is navigational (true) or not (false). | Small, 67.0 | 67.0 |
| name | String | Name of the category. | Small, 67.0 | 67.0 |
| parentCategoryId | String | ID of the parent category. | Small, 67.0 | 67.0 |
| qualificationContext | Qualification Context Output[] | Context details of a user, which are used for qualification rules. | Small, 67.0 | 67.0 |
| sortOrder | Integer | Display order of the product category relative to the siblings with the same parent category. | Small, 67.0 | 67.0 |

## Code Examples

```
{
  "categories": [
    {
      "catalogId": "0ZSSG000001875O4AQ",
      "childCategories": [],
      "customFields": {},
      "eligiblePromotions": [],
      "id": "0ZGSG000001DJtv4AG",
      "name": "Accessories",
      "qualificationContext": {
        "isQualified": true
      }
    }
  ]
}
```

## Related Topics

- Promotion Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_promotion_output.htm)
- Qualification Context Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_qualification_context_output.htm)

---
title: "Categories Output"
domain: revenue-cloud
topic: categories-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.173Z
estimatedTokens: 154
keywords: [Categories, Output, representation, retrieved, result]
---

# Categories Output

> Output representation of the retrieved categories result.

# Categories Output

Output representation of the retrieved categories result.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| categories | Category Output[] | List of the retrieved categories. | Small, 60.0 | 60.0 |
| correlation​Id | String | Unique token to track and associate related events or transactions across different components of the application. If unspecified, a Universally Unique Identifier (UUID) is generated. | Small, 60.0 | 60.0 |
| status | Status | Status of the request. | Small, 60.0 | 60.0 |

## Code Examples

```
{
  "categories": [
    {
      "catalogId": "0ZS1Q000000XbZAWA0",
      "code": "B2B Category",
      "description": "Products Category",
      "hasSubCategories": true,
      "id": "0ZG1Q000000XbVGWA0",
      "name": "Unified Computing",
      "numberOfProducts": 2,
      "parentCategoryId": "0ZGT100000000qlOAA",
      "sortOrder": 2,
      "subCategories": [],
      "isNavigational: false
    }
  ],
  "correlationId": "30230973-0a09-405e-b148-f085bb6dd66e",
  "status": {
    "code": "200",
    "errors": [],
    "message": "Successfully fetched the category records."
  }
}
```

## Related Topics

- Category
                Output (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_category_output.htm)
- Status (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_status.htm)

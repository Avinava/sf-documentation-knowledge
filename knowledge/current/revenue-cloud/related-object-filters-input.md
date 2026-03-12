---
title: "Related Object Filters Input"
domain: revenue-cloud
topic: related-object-filters-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.412Z
estimatedTokens: 132
keywords: [Related, Filters, Input, representation, request, filter, related, objects.]
---

# Related Object Filters Input

> Input representation of the request to filter related objects.

# Related Object Filters Input

Input representation of the request to filter related objects.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Criteria[] | Criteria to filter the related objects. | Required if the relatedObjectFilters property is specified. | 60.0 |
| objectName | String | API name of the object that’s related to the main object. | Required if the relatedObjectFilters property is specified. | 60.0 |

## Code Examples

```
"relatedObjectFilters": 
[{
   "criteria": [
    {
    "property": "IsCommercial",
    "operator": "eq",
    "value": true
    }
  ],
   "objectName": "ProductSpecificationRecType"
 }]
```

## Related Topics

- Criteria (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_criteria.htm)

---
title: "Related Object Filter Input"
domain: revenue-cloud
topic: related-object-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.409Z
estimatedTokens: 137
keywords: [Related, Filter, Input, representation, request, filter, records, related, object.]
---

# Related Object Filter Input

> Input representation of the request to filter records of a related object.

# Related Object Filter Input

Input representation of the request to filter records of a related object.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Filter Criteria Input[] | Criteria to filter the related objects. | Required if the relatedObjectFilters property is specified. | 60.0 |
| object​Name | String | Name of the object that’s related to the main object. | Required if the relatedObjectFilters property is specified. | 60.0 |

## Code Examples

```
"relatedObjectFilters":
 [
    {
      "objectName": "ProductSpecificationRecType",
      "criteria":
 [{
      "property": "IsCommercial",
      "operator": "eq",
      "value": true
   }]
  }
  ]
```

## Related Topics

- Filter Criteria
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_filter_criteria_input.htm)

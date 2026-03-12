---
title: "Filter Input"
domain: revenue-cloud
topic: filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.967Z
estimatedTokens: 79
keywords: [Filter, Input, representation, records]
---

# Filter Input

> Input representation of the filter request.

# Filter Input

Input representation of the filter request.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteria | Criteria[] | Details of the filter criteria. | Required if the filter property is specified. | 60.0 |

## Code Examples

```
"filter": 
{
"criteria": [ {  
"property": "name",   
"operator": "eq",   
"value": "iPhone"
},
{
"criteriaType": "CustomWhereCondition",
"value": "(effectiveenddate = null OR effectiveenddate >= 2024-06-25)"
}
]
}
```

```
"filter":
 {"criteria":
 [ {
   "attributeType": "ProductStandard",
   "property": "name",
   "operator": "eq",
   "value": "iPhone"
 }]}
```

## Related Topics

- Criteria (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_criteria.htm)
- Filter Criteria
                        Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_filter_criteria_input.htm)

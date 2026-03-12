---
title: "Filter Criteria"
domain: financial-services-cloud-object-reference
topic: filter-criteria
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.322Z
estimatedTokens: 124
keywords: [Filter, Criteria, queries, financial, goals, households]
---

# Filter Criteria

> Filter criteria for queries of financial goals and households.

# Filter Criteria

Filter criteria for queries of financial goals and households.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldName | String | API Name of the field used in the filter. | Required | 59.0 |
| operator | String | Operator used in the filter. Valid values are:equalsnot equalsin | Required | 59.0 |
| value | String | Value of the field used in the filter. | Required | 59.0 |

## Code Examples

```
{
  "fieldName": "AccountContactRelation.Roles",
  "operator": "in",
  "value": "BusinessUser,DecisionMaker"
}
```

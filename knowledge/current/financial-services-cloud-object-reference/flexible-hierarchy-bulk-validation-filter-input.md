---
title: "Flexible Hierarchy Bulk Validation Filter Input"
domain: financial-services-cloud-object-reference
topic: flexible-hierarchy-bulk-validation-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.354Z
estimatedTokens: 148
keywords: [Flexible, Hierarchy, Bulk, Validation, Filter, Input, representation, criterion]
---

# Flexible Hierarchy Bulk Validation Filter Input

> Input representation for a filter criterion used in bulk
        validation.

# Flexible Hierarchy Bulk Validation Filter Input

Input representation for a filter criterion used in bulk validation.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| column | String | API name of the flexible hierarchy field for filtering. | Optional | 66.0 |
| operator | String | Operator to apply for filter condition. Valid values are:EqualsNot equalsGreater thanLess thanGreater than equals toLess than equals to | Optional | 66.0 |
| value | String | Value for column. | Optional | 66.0 |

## Code Examples

```
{
  "column": "Name",
  "operator": "Equals",
  "value": "SalesHierarchy"
}
```

---
title: "Selection Condition Input"
domain: revenue-cloud
topic: selection-condition-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.306Z
estimatedTokens: 201
keywords: [Selection, Condition, Input, representation, criteria, that's, determine, sequencing, policy, applied, record, stores, conditions, any, standard]
---

# Selection Condition Input

> Input representation of the criteria that's used to determine which sequencing policy is
    applied to a record. The criteria stores the conditions based on any standard or custom fields
    of the record.

# Selection Condition Input

Input representation of the criteria that's used to determine which sequencing policy is applied to a record. The criteria stores the conditions based on any standard or custom fields of the record.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| condition​Number | Integer | Unique number that's assigned to a condition in a sequence policy. | Required | 65.0 |
| filterField | String | Field used in the filter condition. | Required | 65.0 |
| filterValue | String | Value in the filter condition. | Required | 65.0 |
| operator | String | Relational operator that's used to compare the filter field with the filter value. Valid values are:EqualsNotEquals | Required | 65.0 |

## Code Examples

```
{
  "selectionCondition": [
    {
      "filterField": "AppType",
      "operator": "Equals",
      "filterValue": "RLM",
      "conditionNumber": 1
    },
    {
      "filterField": "Status",
      "operator": "Equals",
      "filterValue": "Posted",
      "conditionNumber": 2
    },
    {
      "filterField": "LegalEntity",
      "operator": "Equals",
      "filterValue": "US",
      "conditionNumber": 3
    }
  ]
}
```

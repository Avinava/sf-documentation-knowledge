---
title: "Stock Rotation Field Criteria Input"
domain: channel-revenue-management-dev-guide
topic: stock-rotation-field-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.884Z
estimatedTokens: 159
keywords: [Stock, Rotation, Criteria, Input, Individual, filter, operations]
---

# Stock Rotation Field Criteria Input

> Individual filter criteria for stock rotation operations

# Stock Rotation Field Criteria Input

Individual filter criteria for stock rotation operations

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fieldApiName | String | The API name of the field to filter on. | Required | 66.0 |
| filterValues | Array of String | The values used to filter line items based on the field and operator. | Required | 66.0 |
| operator | String | The comparison operator applied to the field. Valid values are:ContainsEqualsGreaterThanGreaterThanOrEqualInLessThanLessThanOrEqualNotEqualsNotIn | Required | 66.0 |

## Code Examples

```
{
  "filterCriteria": [
    {
      "fieldApiName": "Industry__c",
      "operator": "Equals",
      "filterValues": [
        "Healthcare"
      ]
    }
  ]
}
```

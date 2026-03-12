---
title: "Payment Run Batch Filter Criteria Input"
domain: revenue-cloud
topic: payment-run-batch-filter-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.110Z
estimatedTokens: 256
keywords: [Payment, Run, Batch, Filter, Criteria, Input, representation, invoice, covers, sequence, filtering, comparison, operations]
---

# Payment Run Batch Filter Criteria Input

> Input representation of the filter criteria for an invoice batch run. This representation
    covers the criteria and sequence for filtering payment run details. It specifies the field and
    object names, comparison operations, and values to be used for filtering.

# Payment Run Batch Filter Criteria Input

Input representation of the filter criteria for an invoice batch run. This representation covers the criteria and sequence for filtering payment run details. It specifies the field and object names, comparison operations, and values to be used for filtering.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| criteriaSequence | Integer | Sequence that's used to filter the payment run details. | Required | 64.0 |
| fieldName | String | Name of the field that this filter is applicable for. Valid value is PaymentRunMatchingValue. | Required | 64.0 |
| objectName | Object | Name of the object that the filter is applicable for. Valid value is PaymentScheduleItem. | Required | 64.0 |
| operation | String | Operation that's used for comparison. Valid values are:EqualsInListNotEquals | Required | 64.0 |
| value | String | Value that's used for the filter criteria. | Required | 64.0 |

## Code Examples

```
"filterCriteria": [
    {
      "objectName": "PaymentScheduleItem",
      "fieldName": "PaymentRunMatchingValue",
      "operation": "Equals",
      "value": "1",
      "criteriaSequence": 1
    },
    {
      "objectName": "PaymentScheduleItem",
      "fieldName": "PaymentRunMatchingValue",
      "operation": "Equals",
      "value": "2",
      "criteriaSequence": 2
    },
    {
      "objectName": "PaymentScheduleItem",
      "fieldName": "PaymentRunMatchingValue",
      "operation": "Equals",
      "value": "3",
      "criteriaSequence": 3
    }
  ]
```

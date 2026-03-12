---
title: "Batch Invoice Filter Criteria Input"
domain: revenue-cloud
topic: batch-invoice-filter-criteria-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:05.642Z
estimatedTokens: 269
keywords: [Batch, Invoice, Filter, Criteria, Input, representation, filter, criteria, invoice, batch, run.]
---

# Batch Invoice Filter Criteria Input

> Input representation of the filter criteria for an invoice batch run.

# Batch Invoice Filter Criteria Input

Input representation of the filter criteria for an invoice batch run.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field​Name | String | Name of the field that this filter is applicable for. Valid values are:Currency_Iso_code—If multiple currencies are enabled for the org, then this value is required.InvoiceRunMatchingValueBillingAccountLegalEntityBillingTermUnit | Required | 62.0 |
| object​Name | Object | Name of the object that the filter is applicable for. Valid values are:BillingScheduleBillingScheduleGroup | Required | 62.0 |
| operation | String | Operation to be performed for comparison. Valid values are:EqualsInList—This value supports only the InvoiceRunMatchingValue and BillingTermUnit fields with API version 62.0 and later. In addition, this value supports the CurrencyIsoCode field with API version 63.0 and later.NotEquals | Required | 62.0 |
| value | String | Value for the filter criteria. | Required | 62.0 |

## Code Examples

```
"filterCriteria": [
        {
            "operation": "InList",
            "value": "Batch 2,Batch 3,Batch 4",
            "criteriaSequence": 1,
            "objectName": "BillingSchedule",
            "fieldName": "InvoiceRunMatchingValue"
        },
        {
            "operation": "Equals",
            "value": "001xx000003GZG5AAO",
            "criteriaSequence": 2,
            "objectName": "BillingSchedule",
            "fieldName": "BillingAccount"
        },
        {
            "operation": "Equals",
            "value": "0fwxx0000000001AAA",
            "criteriaSequence": 3,
            "objectName": "BillingScheduleGroup",
            "fieldName": "LegalEntity"
        },
        {
            "operation": "InList",
            "value": "OneTime,Recurring",
            "criteriaSequence": 4,
            "objectName": "BillingSchedule",
            "fieldName": "BillingTermUnit"
        },
        {
            "operation": "Equals",
            "value": "USD",
            "criteriaSequence": 5,
            "objectName": "BillingSchedule",
            "fieldName": "Currency_Iso_code"
        }
    ]
```

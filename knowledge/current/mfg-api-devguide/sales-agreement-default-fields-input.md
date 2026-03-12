---
title: "Sales Agreement Default Fields Input"
domain: mfg-api-devguide
topic: sales-agreement-default-fields-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:54.944Z
estimatedTokens: 197
keywords: [Sales, Agreement, Input, representation]
---

# Sales Agreement Default Fields Input

> Input representation of default values for the sales agreement
            fields.

# Sales Agreement Default Fields Input

Input representation of default values for the sales agreement fields.

JSON example with decimal quantity:

```

```

JSON example without decimal quantity:

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| salesAgreement | Map<String, String> | Default field values of the sales agreement entity that aren’t defined in the mapping definition. | Optional | 51.0 |
| salesAgreement​​Product​ | Map<String, String> | Default field values of the sales agreement product entity that aren’t defined in the mapping definition. | Optional | 51.0 |

If isQuantityInDecimals is not specified or set to false, existing integer-based mappings will continue to work as before.

## Code Examples

```
{
  "salesAgreementDefaultValues": {
    "salesAgreement": {
      "StartDate": "2020-01-01",
      "ScheduleFrequency": "Monthly",
      "ScheduleCount": "10"
    },
    "salesAgreementProduct": {
      "PricebookEntry": "01uxx00000091jOAAQ",
      "Name": "test-sap1",
      "InitialPlannedQtyValue": "1.5",
      "IsQuantityInDecimals": "true"
    }
  }
}
```

```
{
  "salesAgreementDefaultValues": {
    "salesAgreement": {
      "StartDate": "2020-01-01",
      "ScheduleFrequency": "Monthly",
      "ScheduleCount": "10"
    },
    "salesAgreementProduct": {
      "PricebookEntry": "01uxx00000091jOAAQ",
      "Name": "test-sap1",
      "InitialPlannedQuantity": "1"
    }
  }
}
```

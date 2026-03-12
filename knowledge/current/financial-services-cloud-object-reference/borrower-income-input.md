---
title: "Borrower Income Input"
domain: financial-services-cloud-object-reference
topic: borrower-income-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:28.265Z
estimatedTokens: 209
keywords: [Borrower, Income, Input, representation]
---

# Borrower Income Input

> Input representation for Borrower income

# Borrower Income Input

Input representation for Borrower income

Root XML tag

<incomes>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| extendedFields | Extended Fields Input[] | Custom fields related to the borrower’s income. | Optional | 48.0 |
| externalId | String | Identifier assigned to imported income data by external data source (if applicable). | Optional | 48.0 |
| id | String | ID of the borrower’s income. | Optional | 48.0 |
| incomeSourceType | String | Source of borrower's monthly non-employment income. | Optional | 48.0 |
| monthlyIncomeAmount | Double | Amount of borrower's monthly non-employment income from this source. | Optional | 48.0 |
| name | String | Name of the other monthly income. | Optional | 48.0 |

## Code Examples

```
{
  "incomes": [
    {
      "extendedFields": [],
      "externalId": "b19d9372-df99-4eec-9de0-ad785503992d",
      "incomeSourceType": "Capital Gains",
      "monthlyIncomeAmount": 100,
      "name": "Income1"
    }
  ]
}
```

## Related Topics

- Extended Fields Input (atlas.en-us.financial_services_cloud_object_reference.meta/financial_services_cloud_object_reference/connect_requests_extended_fields_input.htm)

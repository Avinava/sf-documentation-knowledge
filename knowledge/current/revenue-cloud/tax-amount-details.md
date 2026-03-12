---
title: "Tax Amount Details"
domain: revenue-cloud
topic: tax-amount-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.563Z
estimatedTokens: 158
keywords: [Tax, Amount, Details, Output, representation, details, tax, amount.]
---

# Tax Amount Details

> Output representation of the details of the tax amount.

# Tax Amount Details

Output representation of the details of the tax amount.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| exemptAmount | Double | Amount exempted from taxation. | Big, 62.0 | 62.0 |
| taxAmount | Double | Tax amount applicable to the transaction. | Big, 62.0 | 62.0 |
| totalAmount | Double | Total amount without tax. | Big, 62.0 | 62.0 |
| totalAmount​WithTax | Double | Total amount with tax.The totalAmountWithTax property value is the sum of the taxAmount and totalAmount property values. | Big, 62.0 | 62.0 |

## Code Examples

```
{
    "exemptAmount": 0.0,
    "taxAmount": 12.5,
    "totalAmount": 100.0,
    "totalAmountWithTax": 112.5
}
```

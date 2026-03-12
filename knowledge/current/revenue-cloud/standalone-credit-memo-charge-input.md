---
title: "Standalone Credit Memo Charge Input"
domain: revenue-cloud
topic: standalone-credit-memo-charge-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.519Z
estimatedTokens: 449
keywords: [Standalone, Credit, Memo, Charge, Input, representation, details, charge, lines, credit, memo.]
---

# Standalone Credit Memo Charge Input

> Input representation of the details of the charge lines of a credit memo.

# Standalone Credit Memo Charge Input

Input representation of the details of the charge lines of a credit memo.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addresses | Credit Memo Addresses Input | Details of the billing and shipping addresses. | Optional | 62.0 |
| charge​Amount | Double | Charge amount for the credit memo. | Required | 62.0 |
| description | String | Description of the created credit memo charge line. | Optional | 62.0 |
| endDate | String | End date of the credit memo charge line. | Optional | 62.0 |
| isTax​OnlyCredit | Boolean | Indicates whether the credit is for tax only (true) or not (false). | Optional | 62.0 |
| product​Id | String | ID of the product record that the credit memo is issued on. | Optional | 62.0 |
| product​Name | String | Name of the product that the credit memo is issued on. | Optional | 62.0 |
| startDate | String | Start date of the credit memo charge line. | Optional | 62.0 |
| taxEffective​Date | String | Date from when the tax is applicable. | Optional | 62.0 |
| taxes | Standalone Credit Memo Tax Input[] | List of credit memo tax lines. | Optional | 62.0 |
| taxStrategy | String | Tax strategy to be applied to this credit memo charge line, child treatment lines, and tax lines. You can override the tax strategy at the individual credit memo lines or tax lines level. Valid values are:Ignore—Specifies that the creation of tax lines must be ignored.Manual Override—Specifies that the provided tax values must be considered for taxes.Calculate—Specifies that tax must be calculated by using the API. | Optional | 62.0 |
| treatment​Id | String | ID of the tax treatment record that’s used to calculate tax. | Optional | 62.0 |

## Code Examples

```
"charges": [
    {
      "chargeAmount": 100,
      "productId": "01tR0000000njDiIAI"
    }
  ]
```

## Related Topics

- Credit Memo Addresses Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_credit_memo_addresses_input.htm)
- Standalone Credit Memo Tax Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_standalone_credit_memo_tax_input.htm)

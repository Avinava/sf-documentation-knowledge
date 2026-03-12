---
title: "ConnectApi.AdjustItemInputRepresentation"
domain: apex-reference
topic: connectapiadjustiteminputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:24.279Z
estimatedTokens: 353
keywords: [ConnectApi.AdjustItemInputRepresentation, price, adjustment, OrderItemSummary., only, supports, discounts, increases.]
---

# ConnectApi.AdjustItemInputRepresentation

> A price adjustment to an OrderItemSummary. It only supports
      discounts, not increases.

# ConnectApi.AdjustItemInputRepresentation

A price adjustment to an OrderItemSummary. It only supports discounts, not increases.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustmentType | String | Describes how the amount is calculated. It can have one of these values:AmountTaxOnly—Value of amount is the tax-only adjustment only. Available in version 65.0 and later.AmountWithTax—Value of amount is the adjustment, including tax.AmountWithoutTax—Value of amount is the adjustment, not including tax. Tax is calculated on the value and added.Percentage—Value of amount is a percentage discount. It is divided by 100, and then multiplied by the TotalPrice and TotalTaxAmount of the OrderItemSummary to determine the adjustment amount.ProductOnly——Value of amount is the product-only adjustment only. Available in version 65.0 and later. | Required | 49.0 |
| amount | Double | Value used to calculate the adjustment amount, as described by the adjustmentType. It must be a negative value. | Required | 49.0 |
| description | String | Description of the adjustment. | Optional | 49.0 |
| orderItem​SummaryId | String | ID of the OrderItemSummary. | Required | 49.0 |
| reason | String | Reason for the adjustment. The value must match one of the picklist values on the Reason field of the OrderItemSummaryChange object. | Required | 49.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Double (atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm)

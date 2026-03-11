---
title: "ConnectApi.BalanceStatePreviewOutputRepresentation"
domain: apex-reference
topic: connectapibalancestatepreviewoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.004Z
keywords: [ConnectApi.BalanceStatePreviewOutputRepresentation]
---

# ConnectApi.BalanceStatePreviewOutputRepresentation

# ConnectApi.BalanceStatePreviewOutputRepresentation

The generated preview of all balances for an order or a cart, including totals, adjustments, and taxes.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| grandTotalAmount | Double | The grand total of the exchanges, including adjustments, fees, delivery cost, and taxes. | 61.0 |
| totalAdjustmentAmount | Double | The total amount the order was adjusted by, not including tax. | 61.0 |
| totalAdjustmentAmountWithTax | Double | The total amount the order was adjusted by, including tax. | 61.0 |
| totalAmount | Double | The total amount being return, not including tax. | 61.0 |
| totalAmountWithTax | Double | The total amount being return, including tax. | 61.0 |
| totalDeliveryAmount | Double | The total cost for delivery, not including tax. | 61.0 |
| totalDeliveryAmountWithTax | Double | The total cost for delivery, including tax. | 61.0 |
| totalFeeAmount | Double | The combined total of all fees charged, not including tax. | 61.0 |
| totalFeeAmountWithTax | Double | The combined total of all fees charged, including tax. | 61.0 |
| totalTaxAmount | Double | The combined total of all taxes. | 61.0 |
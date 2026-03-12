---
title: "Balance State Preview Output"
domain: chatterapi
topic: balance-state-preview-output
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.336Z
estimatedTokens: 335
keywords: [Balance, State, Preview, Output, generated, balances, order, cart, including, totals, adjustments, taxes]
---

# Balance State Preview Output

> The generated preview of all balances for an order or a cart, including totals,
    adjustments, and taxes.

# Balance State Preview Output

The generated preview of all balances for an order or a cart, including totals, adjustments, and taxes.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| grandTotalAmount | Double | The grand total of the exchanges, including adjustments, fees, delivery cost, and taxes. | Big, 61.0 | 61.0 |
| totalAdjustmentAmount | Double | The total amount the order was adjusted by, not including tax. | Big, 61.0 | 61.0 |
| totalAdjustmentAmountWithTax | Double | The total amount the order was adjusted by, including tax. | Big, 61.0 | 61.0 |
| totalAmount | Double | The total amount being return, not including tax. | Big, 61.0 | 61.0 |
| totalAmountWithTax | Double | The total amount being return, including tax. | Big, 61.0 | 61.0 |
| totalDeliveryAmount | Double | The total cost for delivery, not including tax. | Big, 61.0 | 61.0 |
| totalDeliveryAmountWithTax | Double | The total cost for delivery, including tax. | Big, 61.0 | 61.0 |
| totalFeeAmount | Double | The combined total of all fees charged, not including tax. | Big, 61.0 | 61.0 |
| totalFeeAmountWithTax | Double | The combined total of all fees charged, including tax. | Big, 61.0 | 61.0 |
| totalTaxAmount | Double | The combined total of all taxes. | Big, 61.0 | 61.0 |

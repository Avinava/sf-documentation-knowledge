---
title: "Shared Order Payment Summary Sequence"
domain: chatterapi
topic: shared-order-payment-summary-sequence
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.834Z
estimatedTokens: 106
keywords: [Shared, Order, Payment, Summary, Sequence]
---

# Shared Order Payment Summary Sequence

> Shared order payment summary sequence.

# Shared Order Payment Summary Sequence

Shared order payment summary sequence.

Root XML tag

<sequence>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| orderPaymentSummaryId | String | Shared order payment summary ID. | Required | 60.0 |
| reservedBalanceAmount | Double | Balance amount to be reserved. | Required | 60.0 |

## Code Examples

```
[
  {
    "orderPaymentSummaryId": "0bMxx0000000000",
    "reservedBalanceAmount": 10
  },
  {
    "orderPaymentSummaryId": "0bMxx0000000001",
    "reservedBalanceAmount": 20
  },
  {
    "orderPaymentSummaryId": "0bMxx0000000002",
    "reservedBalanceAmount": 15
  }
]
```

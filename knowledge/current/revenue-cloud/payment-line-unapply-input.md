---
title: "Payment Line Unapply Input"
domain: revenue-cloud
topic: payment-line-unapply-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:08.106Z
estimatedTokens: 145
keywords: [Payment, Line, Unapply, Input, representation, covers, specify, revert, application, their, preapplication, state]
---

# Payment Line Unapply Input

> Input representation of the payment line details. This representation covers fields that
    you can specify to revert a payment line application to their preapplication state.

# Payment Line Unapply Input

Input representation of the payment line details. This representation covers fields that you can specify to revert a payment line application to their preapplication state.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| comments | String | Comments that you can add when you revert a payment line application. | Optional | 64.0 |
| effective​Date | String | Date from when the reversal of the payment line application is in effect. | Optional | 64.0 |

## Code Examples

```
{
  "effectiveDate": "2025-05-22T11:30:25.000Z",
  "comments": "Unapply payment"
}
```

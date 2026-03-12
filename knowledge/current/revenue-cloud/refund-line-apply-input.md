---
title: "Refund Line Apply Input"
domain: revenue-cloud
topic: refund-line-apply-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.405Z
estimatedTokens: 187
keywords: [Refund, Line, Apply, Input, representation, details, transaction, refund, request., outlines, including, amount, payment, credit, memo, record, applied, to.]
---

# Refund Line Apply Input

> Input representation of the details of a transaction refund request. This representation
    outlines the properties of a refund, including the refund amount and ID of the payment or credit
    memo record that the refund is applied to.

# Refund Line Apply Input

Input representation of the details of a transaction refund request. This representation outlines the properties of a refund, including the refund amount and ID of the payment or credit memo record that the refund is applied to.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Amount to refund. | Required | 64.0 |
| appliedToId | String | ID of a payment or credit memo record. The refund is applied to this object. | Required | 64.0 |
| comments | String | Additional details of the refund request. | Optional | 64.0 |
| effectiveDate | String | Date from when the refund is in effect. | Optional | 64.0 |

## Code Examples

```
{
  "appliedToId": "0aQR00000004ZkKMAU",
  "amount": 10,
  "effectiveDate": "2020-08-11T07:53:15.000Z",
  "comments": "Payment application."
}
```

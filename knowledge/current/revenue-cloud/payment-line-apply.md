---
title: "Payment Line Apply"
domain: revenue-cloud
topic: payment-line-apply
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.950Z
estimatedTokens: 120
keywords: [Payment, Line, Apply, Output, representation, details, applied, payment, line., include, record, date, line, applied.]
---

# Payment Line Apply

> Output representation of the details of the applied payment line. The details include the
    ID of the payment record and date when the payment line was applied.

# Payment Line Apply

Output representation of the details of the applied payment line. The details include the ID of the payment record and date when the payment line was applied.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applied​Date | String | Date when the payment line was applied. | Big, 64.0 | 64.0 |
| id | String | ID of the payment line record. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "appliedDate": "2020-08-11T08:09:01.000Z",
  "id": "1PLR000000000dDOAQ"
}
```

---
title: "Payment Line Unapply"
domain: revenue-cloud
topic: payment-line-unapply
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:09.533Z
estimatedTokens: 132
keywords: [Payment, Line, Unapply, Output, representation, reversed, application, include, record, date]
---

# Payment Line Unapply

> Output representation of the details of the reversed payment line application. The
    details include the ID of the payment line record and date when the payment line application was
    reversed.

# Payment Line Unapply

Output representation of the details of the reversed payment line application. The details include the ID of the payment line record and date when the payment line application was reversed.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the payment line record. | Big, 64.0 | 64.0 |
| unapplied​Date | String | Date when the payment line application was reversed. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "unappliedDate": "2020-08-11T08:09:01.000Z",
  "id": "1PLR000000000dDOAQ"
}
```

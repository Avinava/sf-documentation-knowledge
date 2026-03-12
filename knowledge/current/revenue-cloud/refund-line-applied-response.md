---
title: "Refund Line Applied Response"
domain: revenue-cloud
topic: refund-line-applied-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:08.341Z
estimatedTokens: 139
keywords: [Refund, Line, Applied, Response, Output, representation, details, applied, refund., includes, refund, line, such, date, against, payment, record.]
---

# Refund Line Applied Response

> Output representation of the details of an applied refund. This representation includes
    the properties of a refund line, such as the date when the refund is applied against a payment
    and ID of the refund line record.

# Refund Line Applied Response

Output representation of the details of an applied refund. This representation includes the properties of a refund line, such as the date when the refund is applied against a payment and ID of the refund line record.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| appliedDate | String | Date when the refund is applied against a payment. | Big, 64.0 | 64.0 |
| id | String | ID of the refund line record. | Big, 64.0 | 64.0 |

## Code Examples

```
{
  "appliedDate": "2020-08-11T08:09:01.000Z",
  "id": "0dRR000000000CsMAI"
}
```

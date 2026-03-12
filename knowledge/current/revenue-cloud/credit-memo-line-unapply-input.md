---
title: "Credit Memo Line Unapply Input"
domain: revenue-cloud
topic: credit-memo-line-unapply-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.923Z
estimatedTokens: 118
keywords: [Credit, Memo, Line, Unapply, Input, representation, invoice]
---

# Credit Memo Line Unapply Input

> Input representation of the details of the request to unapply a credit memo line from
    an invoice line.

# Credit Memo Line Unapply Input

Input representation of the details of the request to unapply a credit memo line from an invoice line.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Explanation or reason for unapplying the credit memo line. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo line. | Optional | 62.0 |

## Code Examples

```
{
 "description": "Unapply a credit memo line from invoice line 1",
 "effectiveDate": "2024-07-01"
}
```

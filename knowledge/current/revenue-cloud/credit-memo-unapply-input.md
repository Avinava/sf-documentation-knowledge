---
title: "Credit Memo Unapply Input"
domain: revenue-cloud
topic: credit-memo-unapply-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.926Z
estimatedTokens: 108
keywords: [Credit, Memo, Unapply, Input, representation, invoice]
---

# Credit Memo Unapply Input

> Input representation of the request to unapply a credit memo from an invoice.

# Credit Memo Unapply Input

Input representation of the request to unapply a credit memo from an invoice.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Explanation or reason for unapplying the credit memo. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo. | Optional | 62.0 |

## Code Examples

```
{
      "description": "Unapply credit memo from invoice to revert an error",
      "effectiveDate": "2024-07-01"
    }
```

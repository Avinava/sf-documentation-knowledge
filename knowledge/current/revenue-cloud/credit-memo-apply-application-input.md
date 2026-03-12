---
title: "Credit Memo Apply Application Input"
domain: revenue-cloud
topic: credit-memo-apply-application-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:07.907Z
estimatedTokens: 172
keywords: [Credit, Memo, Apply, Application, Input, representation, specify, applications, representing, invoice]
---

# Credit Memo Apply Application Input

> Input representation of the request to specify one or more applications to apply a credit
    memo for, with each application representing an invoice.

# Credit Memo Apply Application Input

Input representation of the request to specify one or more applications to apply a credit memo for, with each application representing an invoice.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| amount | Double | Credit amount to be applied to the invoice. | Required | 62.0 |
| appliedToId | String | ID of the invoice record to apply the credit for. | Required | 62.0 |
| description | String | Explanation or reason for applying the credit memo. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo. | Optional | 62.0 |

## Code Examples

```
"applications": [
    {
      "appliedToId": "3ttxx000000003FAAQ",
      "amount": 10,
      "description": "Apply to invoice for refund",
      "effectiveDate": "2024-07-01"
    },
    {
      "appliedToId": "3ttxx0000000001AAA",
      "amount": 100
    }
  ]
```

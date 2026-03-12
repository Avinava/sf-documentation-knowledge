---
title: "Credit Memo Line Application Input"
domain: revenue-cloud
topic: credit-memo-line-application-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.016Z
estimatedTokens: 181
keywords: [Credit, Memo, Line, Application, Input, representation, request, specify, applications, apply, credit, memo, line, application, representing, invoice, line.]
---

# Credit Memo Line Application Input

> Input representation of the request to specify one or more applications to apply a credit
    memo line for, with each application representing an invoice line.

# Credit Memo Line Application Input

Input representation of the request to specify one or more applications to apply a credit memo line for, with each application representing an invoice line.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| appliedAmount | Double | Credit amount to be applied to the invoice line. | Required | 62.0 |
| description | String | Explanation or reason for applying the credit memo line. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo line. | Optional | 62.0 |
| invoiceLineId | String | ID of the invoice line record to apply the credit for. | Required | 62.0 |

## Code Examples

```
"applyCreditDetails": [
 {
 "invoiceLineId": "5TVSG0000002ZJR4A2",
 "appliedAmount": 5,
 "description": "Apply to invoice line 1",
 "effectiveDate": "2024-07-01"
 },
 {
 "invoiceLineId": "5TVSG0000002ZJS4A2",
 "appliedAmount": 10,
 "description": "Apply to invoice line 2",
 "effectiveDate": "2024-07-01"
 }
 ]
```

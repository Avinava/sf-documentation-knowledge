---
title: "Credit Memo Line Unapplied"
domain: revenue-cloud
topic: credit-memo-line-unapplied
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.650Z
estimatedTokens: 163
keywords: [Credit, Memo, Line, Unapplied, Output, representation, details, credit, memo, line, invoice, record, status, request.]
---

# Credit Memo Line Unapplied

> Output representation of the details of the credit memo line invoice line record with
    the status of the request.

# Credit Memo Line Unapplied

Output representation of the details of the credit memo line invoice line record with the status of the request.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| creditMemo​LineInvoice​LineId | String | ID of the credit memo line invoice line record. | Small, 62.0 | 62.0 |
| errors | Error Response | List of errors encountered during the processing of the API request. | Big, 62.0 | 62.0 |
| success | Boolean | Indicates whether the credit memo line is successfully unapplied (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "creditMemoLineInvoiceLineId": "4sGSG0000002pOD2AY",
  "errors": [],
  "success": true
 }
```

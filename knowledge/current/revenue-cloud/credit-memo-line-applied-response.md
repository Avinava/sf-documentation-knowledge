---
title: "Credit Memo Line Applied Response"
domain: revenue-cloud
topic: credit-memo-line-applied-response
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.647Z
estimatedTokens: 179
keywords: [Credit, Memo, Line, Applied, Response, Output, representation, list, applied, credit, memo, line, results.]
---

# Credit Memo Line Applied Response

> Output representation of the list of applied credit memo line results.

# Credit Memo Line Applied Response

Output representation of the list of applied credit memo line results.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| creditMemo​LineInvoice​LineId | String | ID of the credit memo line invoice line ID. | Big, 62.0 | 62.0 |
| errors | Error Response | List of errors encountered during the processing of the API request. | Big, 62.0 | 62.0 |
| invoice​LineId | String | ID of the invoice line record that the credit is applied to. | Big, 62.0 | 62.0 |
| success | Boolean | Indicates whether the credit memo line is successfully applied (true) or not (false). | Big, 62.0 | 62.0 |

## Code Examples

```
"appliedCreditResponses": [
   {
    "creditMemoLineInvoiceLineId": "4sGSG0000002pMb2AI",
    "errors": null,
    "invoiceLineId": "5TVSG0000003CuH4AU",
    "success": true
   }
  ]
```

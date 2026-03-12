---
title: "Credit Memo Line Applied"
domain: revenue-cloud
topic: credit-memo-line-applied
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.643Z
estimatedTokens: 96
keywords: [Credit, Memo, Line, Applied, Output, representation, list, applied, credit, memo, line, results.]
---

# Credit Memo Line Applied

> Output representation of the list of applied credit memo line results.

# Credit Memo Line Applied

Output representation of the list of applied credit memo line results.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| applied​CreditResponses | Credit Memo Line Applied Response[] | Output list for the applied credit memo line results. | Big, 62.0 | 62.0 |

## Code Examples

```
{
  "appliedCreditResponses": [
   {
    "creditMemoLineInvoiceLineId": "4sGSG0000002pMb2AI",
    "errors": null,
    "invoiceLineId": "5TVSG0000003CuH4AU",
    "success": true
   }
  ]
 }
```

## Related Topics

- Credit Memo Line Applied Response (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_line_applied_response.htm)

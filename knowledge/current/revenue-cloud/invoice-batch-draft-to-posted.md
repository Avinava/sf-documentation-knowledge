---
title: "Invoice Batch Draft To Posted"
domain: revenue-cloud
topic: invoice-batch-draft-to-posted
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:07.814Z
estimatedTokens: 159
keywords: [Invoice, Batch, Draft, Posted, Output, representation, batch, update, details, invoices, status.]
---

# Invoice Batch Draft To Posted

> Output representation of the batch update details of the invoices from Draft to Posted
      status.

# Invoice Batch Draft To Posted

Output representation of the batch update details of the invoices from Draft to Posted status.

JSON example

```

```

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| invoiceBatch​DraftToPostedId | String | ID of the invoice batch draft to posted run record that’s created to track the batch process of posting the draft invoices that are associated with the parent invoice batch run record. | Small, 62.0 | 62.0 |
| success | Boolean | Indicates whether the API request is successful (true) or not (false). | Small, 62.0 | 62.0 |

## Code Examples

```
{
  "invoiceBatchDraftToPostedId": "4sFDU00000000652AA",
  "success": true
}
```

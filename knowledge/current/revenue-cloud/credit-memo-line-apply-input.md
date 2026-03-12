---
title: "Credit Memo Line Apply Input"
domain: revenue-cloud
topic: credit-memo-line-apply-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.019Z
estimatedTokens: 135
keywords: [Credit, Memo, Line, Apply, Input, representation, details, request, apply, credit, memo, line, invoice, line.]
---

# Credit Memo Line Apply Input

> Input representation of the details of the request to apply a credit memo line to an
    invoice line.

# Credit Memo Line Apply Input

Input representation of the details of the request to apply a credit memo line to an invoice line.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applyCredit​Details | Credit Memo Line Application Input[] | List of one or more applications to apply the credit memo line for. Each application represents an invoice line that’s credited by using the balance of the specified credit memo line. | Required | 62.0 |

## Code Examples

```
{
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
}
```

## Related Topics

- Credit Memo Line Application Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_credit_memo_line_application_input.htm)

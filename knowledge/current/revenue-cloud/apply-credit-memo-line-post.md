---
title: "Apply Credit Memo Line (POST)"
domain: revenue-cloud
topic: apply-credit-memo-line-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:08.589Z
estimatedTokens: 311
keywords: [Apply, Credit, Memo, Line, POST, Adjust, correct, already, issued, invoices, applying, invoice]
---

# Apply Credit Memo Line (POST)

> Adjust or correct already issued invoices by applying an existing
      credit memo line to an invoice line.

# Apply Credit Memo Line (POST)

Adjust or correct already issued invoices by applying an existing credit memo line to an invoice line.

Special Access Rules

You need the Credit Memo Operations User permission set to use this API.

Resource

```

```

Resource example

```

```

Available version

62.0

HTTP methods

POST

Path parameter for POST

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| creditMemo​LineId | String | ID of the credit memo line record. | Required | 62.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applyCredit​Details | Credit Memo Line Application Input[] | List of one or more applications to apply the credit memo line for. Each application represents an invoice line that’s credited by using the balance of the specified credit memo line. | Required | 62.0 |

Response body for POST

[Credit Memo Line Applied](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_line_applied.htm "Output representation of the list of applied credit memo line results.")

## Code Examples

```
/commerce/invoicing/credit-memo-lines/creditMemoLineId/actions/apply
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/credit-memo-lines/9yxSG0000000LUHYA2/actions/apply
```

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
- Credit Memo Line
              Applied (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_line_applied.htm)

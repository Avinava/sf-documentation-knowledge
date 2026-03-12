---
title: "Unapply Credit Memo Line (POST)"
domain: revenue-cloud
topic: unapply-credit-memo-line-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.792Z
estimatedTokens: 318
keywords: [Unapply, Credit, Memo, Line, POST, credit, memo, line, invoice, their, pre-application, states.]
---

# Unapply Credit Memo Line (POST)

> Unapply a credit memo line from an invoice line and return the invoice
      line and the credit memo line to their pre-application states.

# Unapply Credit Memo Line (POST)

Unapply a credit memo line from an invoice line and return the invoice line and the credit memo line to their pre-application states.

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
| creditMemo​LineInvoice​LineId | String | ID of the credit memo line invoice line record. | Required | 62.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Explanation or reason for unapplying the credit memo line. | Optional | 62.0 |
| effectiveDate | String | Effective date for the credit memo line. | Optional | 62.0 |

Response body for POST

[Credit Memo Line Unapplied](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_line_unapplied.htm "Output representation of the details of the credit memo line invoice line record with the status of the request.")

## Code Examples

```
/commerce/invoicing/credit-memo-line-invoice-line/creditMemoLineInvoiceLineId/actions/unapply
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/credit-memo-line-invoice-line/4sGSG0000002kQ92AI/actions/unapply
```

```
{
 "description": "Unapply a credit memo line from invoice line 1",
 "effectiveDate": "2024-07-01"
}
```

## Related Topics

- Credit Memo Line
              Unapplied (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_line_unapplied.htm)

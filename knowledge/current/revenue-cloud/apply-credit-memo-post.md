---
title: "Apply Credit Memo (POST)"
domain: revenue-cloud
topic: apply-credit-memo-post
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:06.777Z
estimatedTokens: 564
keywords: [Apply, Credit, Memo, POST, Adjust, correct, already, issued, invoices, applying, existing, credit, memo, invoice.]
---

# Apply Credit Memo (POST)

> Adjust or correct already issued invoices by applying an existing
      credit memo to an invoice.

# Apply Credit Memo (POST)

Adjust or correct already issued invoices by applying an existing credit memo to an invoice.

Specify the credit memo ID and the amounts to be applied, with the total of all applied amounts not exceeding the credit memo's balance.

The credit amount for each invoice can’t surpass the original charge or adjustment amount, and the overall credit amount must not exceed the invoice's outstanding balance. The exceptions include any taxes calculated by an external service.

For example, your organization sold 10 tablets at US$500 each, totaling $5000, to a vendor who later reported that 6 tablets were defective. Your accounts receivable team creates a $3000 credit memo by using the standalone Credit Memo API. Additionally, the team applies this credit to the original invoice by using the Apply Credit Memo API.

When the [credit application level is Invoice Line](https://help.salesforce.com/s/articleView?id=ind.billing_setup_credit_memo_features_enable.htm&language=en_US " HTML (New Window)"), this API applies the credit memo amount to all invoice lines starting from the highest amount until the full credit is applied or all lines are settled.

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
| creditMemo​Id | String | ID of the credit memo record. | Required | 62.0 |

Request body for POST

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applications | Credit Memo Apply Application Input[] | List of one or more applications to apply the credit memo for. Each application represents an invoice that’s credited by using the balance of the specified credit memo. | Required | 62.0 |

Response body for POST

[Credit Memo Apply List](atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_apply_list_output.htm "Output representation of the list of applied credit memo results.")

## Code Examples

```
/commerce/invoicing/credit-memos/creditMemoId/actions/apply
```

```
https://yourInstance.salesforce.com/services/data/v66.0/commerce/invoicing/credit-memos/50gSG0000000XATYA2/actions/apply
```

```
{
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
}
```

## Related Topics

- Credit Memo Apply Application Input (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_requests_credit_memo_apply_application_input.htm)
- Credit Memo Apply
              List (atlas.en-us.revenue_lifecycle_management_dev_guide.meta/revenue_lifecycle_management_dev_guide/connect_responses_credit_memo_apply_list_output.htm)

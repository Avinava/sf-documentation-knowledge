---
title: "Credit Memo Apply Input"
domain: revenue-cloud
topic: credit-memo-apply-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:06.007Z
estimatedTokens: 122
keywords: [Credit, Memo, Apply, Input, representation, request, apply, credit, memo, invoice.]
---

# Credit Memo Apply Input

> Input representation of the request to apply a credit memo to an invoice.

# Credit Memo Apply Input

Input representation of the request to apply a credit memo to an invoice.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| applications | Credit Memo Apply Application Input[] | List of one or more applications to apply the credit memo for. Each application represents an invoice that’s credited by using the balance of the specified credit memo. | Required | 62.0 |

## Code Examples

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

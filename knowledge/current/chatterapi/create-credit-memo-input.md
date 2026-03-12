---
title: "Create Credit Memo Input"
domain: chatterapi
topic: create-credit-memo-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.431Z
estimatedTokens: 154
keywords: [Credit, Memo, Input, change, orders]
---

# Create Credit Memo Input

> A list of change orders used to create a credit
    memo.

# Create Credit Memo Input

A list of change orders used to create a credit memo.

Root XML tag

<createCreditMemoInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeOrderIds | String[] | List of IDs of the change orders. | Required | 48.0 |

#### See Also

-   [Order Summaries, Create Credit Memo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.")

## Code Examples

```
{
  "changeOrderIds": [
    "801R0000000EAAkIAO"
  ]
}
```

## Related Topics

- Order Summaries, Create Credit Memo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm)

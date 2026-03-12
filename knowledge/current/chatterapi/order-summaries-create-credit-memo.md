---
title: "Order Summaries, Create Credit Memo"
domain: chatterapi
topic: order-summaries-create-credit-memo
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.521Z
estimatedTokens: 420
keywords: [Order, Summaries, Credit, Memo, represent, refund, change, orders, associated, OrderSummary]
---

# Order Summaries, Create Credit Memo

> Create a credit memo to represent the refund for one or more change
      orders associated with an OrderSummary.

# Order Summaries, Create Credit Memo

Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Create Credit Memo Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_credit_memo_input.htm "A list of change orders used to create a credit memo.")

Root XML tag

<createCreditMemoInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeOrderIds | String[] | List of IDs of the change orders. | Required | 48.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Create Credit Memo Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_credit_memo_output.htm "ID of a created Credit Memo."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Create Credit Memo Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_credit_memo_output.htm "ID of a created Credit Memo."), and the value of the enhancedErrorType property can be ignored.

## Code Examples

```
/commerce/order-management/order-summaries/orderSummaryId/actions/create-credit-memo
```

```
{
  "changeOrderIds": [
    "801R0000000EAAkIAO"
  ]
}
```

## Related Topics

- Create Credit Memo Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_create_credit_memo_input.htm)
- Create Credit Memo Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_create_credit_memo_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)

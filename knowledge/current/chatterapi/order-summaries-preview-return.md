---
title: "Order Summaries, Preview Return"
domain: chatterapi
topic: order-summaries-preview-return
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.559Z
estimatedTokens: 717
keywords: [Order, Summaries, Preview, Retrieve, expected, change, simple, OrderItemSummaries, OrderSummary, actually, executing]
---

# Order Summaries, Preview Return

> Retrieve the expected change order values for a simple return of one
      or more OrderItemSummaries from an OrderSummary, without actually executing the
    return.

# Order Summaries, Preview Return

Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return.

Resource

```

```

Available version

48.0

HTTP methods

POST

Request body for POST

[Change Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_input.htm "A list of changes to order item summaries that make up an order change, such as a cancel or return.")

Root XML tag

<changeInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| changeItems | Change Item Input[] | List of changes to OrderItemSummaries. | Required | 48.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is a [Preview Return Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_return_output.htm "Expected financial values for a proposed return action."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is a [Preview Return Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_return_output.htm "Expected financial values for a proposed return action."), and the value of the enhancedErrorType property can be ignored.

#### See Also

-   [Order Summaries, Create Credit Memo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.")

-   [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")

-   [Order Summaries, Submit Return](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm "Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder.")

## Code Examples

```
/commerce/order-management/order-summaries/orderSummaryId/actions/preview-return
```

```
{
  "changeItems": [
    {
      "orderItemSummaryId": "10uxx0000004FYDAA2",
      "quantity": 1.0,
      "reason": "Wrong Item",
      "shippingReductionFlag": true
    }
  ]
}
```

## Related Topics

- Change Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_input.htm)
- Change Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_change_item_input.htm)
- Preview Return Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_preview_return_output.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Order Summaries, Create Credit Memo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm)
- Order Summaries, Ensure Refunds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm)
- Order Summaries, Submit Return (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_return.htm)

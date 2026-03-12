---
title: "Order Summaries, Preview Adjust"
domain: chatterapi
topic: order-summaries-preview-adjust
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.549Z
estimatedTokens: 1068
keywords: [Order, Summaries, Preview, Adjust, Retrieve, expected, results, adjusting, price, OrderItemSummaries, OrderSummary, actually, executing, adjustment, data]
---

# Order Summaries, Preview Adjust

> Retrieve the expected results of adjusting the price of one or more
      OrderItemSummaries from an OrderSummary, without actually executing the adjustment. The
      response data contains the financial changes that would result from submitting the proposed
      adjustment.

# Order Summaries, Preview Adjust

Retrieve the expected results of adjusting the price of one or more OrderItemSummaries from an OrderSummary, without actually executing the adjustment. The response data contains the financial changes that would result from submitting the proposed adjustment.

Resource

```

```

Available version

49.0

HTTP methods

POST

Request body for POST

[Adjust Order Item Summary Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_adjust_order_item_summary_input.htm "Price adjustments to order item summaries that together make up a price adjustment to an order, with options for adjusting items in the process of being fulfilled.")

Root XML tag

<adjustOrderItemSummaryInput>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| adjustItems | Adjust Item Input[] | List of price adjustments to order item summaries. | Required | 49.0 |
| allocatedItems​ChangeOrderType | String | Process to use for order item summary quantities that are currently being fulfilled, defined as QuantityAllocated - QuantityFulfilled. Values are:Disallowed—When distributing the adjustment, ignore any quantities being fulfilled. If an order item summary’s entire quantity is being fulfilled, return an error. This is the default value.InFulfillment—When distributing the adjustment, include quantities being fulfilled. Create a separate change order for the adjustments made to those quantities.PreFulfillment—When distributing the adjustment, include quantities being fulfilled. Include the adjustments made to those quantities in the change order for pre-fulfillment quantity adjustments. | Optional | 55.0 |
| individualLineItemTaxAdjustments | Boolean | Specifies whether to create multiple lines for each tax adjustment or one line with all tax adjustments. The default value is false. | Optional | 59.0 |

Response body for POST

-   When the HTTP status code indicates success, the response body is an [Adjust Order Summary Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_adjust_order_summary.htm "Output representation of the financial changes for an adjust items action. For a preview action, these values are the expected output. For a submit action, these values are the actual output."). The response body can still indicate processing errors.
-   When the HTTP status code is in the 400 (client error) or 500 (server error) range, the response body is an [Error with Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm "Contains extra information about errors. In rare cases, an error message isn't enough to describe the reason for a failure. For example, when a conflicting precondition exists, the error result can include the information about the cause of the conflict."). The output property is an [Adjust Order Summary Output](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_adjust_order_summary.htm "Output representation of the financial changes for an adjust items action. For a preview action, these values are the expected output. For a submit action, these values are the actual output."), and the value of the enhancedErrorType property can be ignored.

#### See Also

-   [Order Summaries, Create Credit Memo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.")

-   [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")

-   [Order Summaries, Submit Adjust](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_adjust.htm "Adjust the price of one or more OrderItemSummaries from an OrderSummary, and create corresponding change orders.")

## Code Examples

```
/commerce/order-management/order-summaries/orderSummaryId/actions/adjust-item-preview
```

```
{
  "adjustItems": [{
    "reason": "Unknown",
    "amount": -45,
    "adjustmentType": "AmountWithoutTax",
    "orderItemSummaryId": "10uxx0000004EXLAA2",
    "description": "foobar"
  }],
  "allocatedItemsChangeOrderType": "Disallowed"
}
```

## Related Topics

- Adjust Order Item Summary Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_adjust_order_item_summary_input.htm)
- Adjust Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_adjust_item_input.htm)
- Adjust Order Summary Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_adjust_order_summary.htm)
- Error with Output (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_error_with_output.htm)
- Order Summaries, Create Credit Memo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm)
- Order Summaries, Ensure Refunds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm)
- Order Summaries, Submit Adjust (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_submit_adjust.htm)

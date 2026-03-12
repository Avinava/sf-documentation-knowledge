---
title: "Order Summaries, Submit Adjust"
domain: chatterapi
topic: order-summaries-submit-adjust
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.565Z
estimatedTokens: 2174
keywords: [Order, Summaries, Submit, Adjust, price, OrderItemSummaries, OrderSummary, corresponding, change, orders]
---

# Order Summaries, Submit Adjust

> Adjust the price of one or more OrderItemSummaries from an
      OrderSummary, and create corresponding change orders.

# Order Summaries, Submit Adjust

Adjust the price of one or more OrderItemSummaries from an OrderSummary, and create corresponding change orders.

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

Usage

When a price adjustment is applied to an OrderItemSummary, its quantities are considered in three groups:

Pre-fulfillment

QuantityAvailableToFulfill, which is equal to QuantityOrdered - QuantityCanceled - QuantityAllocated

In-fulfillment

QuantityAllocated - QuantityFulfilled

Post-fulfillment

QuantityAvailableToReturn, which is equal to QuantityFulfilled - QuantityReturnInitiated

You can apply adjustments to these groups in three different ways, controlled by the allocatedItemsChangeOrderType input property:

-   Distribute the adjustment evenly between pre-fulfillment and post-fulfillment quantities. Ignore in-fulfillment quantities. Create one change order for the adjustments to pre-fulfillment quantities and one change order for the adjustments to post-fulfillment quantities.
-   Distribute the adjustment evenly between pre-fulfillment, in-fulfillment, and post-fulfillment quantities. Create one change order for the adjustments to both pre-fulfillment and in-fulfillment quantities, and one change order for the adjustments to post-fulfillment quantities.
-   Distribute the adjustment evenly between pre-fulfillment, in-fulfillment, and post-fulfillment quantities. Create one change order for the adjustments to pre-fulfillment quantities, one change order for the adjustments to in-fulfillment quantities, and one change order for the adjustments to post-fulfillment quantities.

After submitting a price adjustment, process refunds as appropriate:

-   If the discount only applied to OrderItemSummaries for which payment has not been captured, it does not require a refund. This situation normally applies to OrderItemSummaries in the US that have not been fulfilled.
-   If the discount applied to OrderItemSummaries that have not been fulfilled and for which payment has been captured, process a refund. In this case, pass the totalExcessFundsAmount from the response body to the [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.") resource.
-   If the discount applied to OrderItemSummaries that have been fulfilled, process a refund. Pass the postFulfillmentChangeOrderId from the response body to the [Order Summaries, Create Credit Memo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.") resource, then pass the CreditMemo to the [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.") resource.
-   If the discount applied to both fulfilled and unfulfilled OrderItemSummaries for which payment has been captured, process both refunds. Pass the postFulfillmentChangeOrderId from the response body to the [Order Summaries, Create Credit Memo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.") resource, then pass the credit memo and the totalExcessFundsAmount from the response body to the [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.") resource.

#### See Also

-   [Order Summaries, Create Credit Memo](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.")

-   [Order Summaries, Ensure Refunds Async](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")

-   [Order Summaries, Preview Adjust](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_adjust.htm "Retrieve the expected results of adjusting the price of one or more OrderItemSummaries from an OrderSummary, without actually executing the adjustment. The response data contains the financial changes that would result from submitting the proposed adjustment.")

## Code Examples

```
/commerce/order-management/order-summaries/orderSummaryId/actions/adjust-item-submit
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
- Order Summaries, Ensure Refunds Async (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm)
- Order Summaries, Create Credit Memo (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_create_credit_memo.htm)
- Order Summaries, Preview Adjust (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_preview_adjust.htm)

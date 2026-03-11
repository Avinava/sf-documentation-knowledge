---
title: "adjustSubmit(orderSummaryId, adjustInput)"
domain: apex-reference
topic: adjustsubmitordersummaryid-adjustinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.498Z
keywords: [adjustSubmit, orderSummaryId, adjustInput, Adjust, price, OrderItemSummaries, OrderSummary, create, corresponding, change, orders., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# adjustSubmit(orderSummaryId, adjustInput)

> Adjust the price of one or more OrderItemSummaries from an
      OrderSummary, and create corresponding change orders.

### adjustSubmit(orderSummaryId, adjustInput)

Adjust the price of one or more OrderItemSummaries from an OrderSummary, and create corresponding change orders.

#### API Version

49.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.AdjustOrderSummaryOutputRepresentation adjustSubmit(String orderSummaryId, ConnectApi.AdjustOrderItemSummaryInputRepresentation adjustInput)

#### Parameters

orderSummaryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the OrderSummary.

adjustInput

Type: [ConnectApi.AdjustOrderItemSummaryInputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_adjust_order_item_summary.htm "Price adjustments to order item summaries that together make up a price adjustment to an order, with options for adjusting items in the process of being fulfilled.")

Price adjustments to order item summaries that together make up a price adjustment to an order, with options for adjusting items in the process of being fulfilled.

#### Return Value

Type: [ConnectApi.AdjustOrderSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_adjust_order_summary_output.htm "Output representation of the financial changes for an adjust items action. For a preview action, these values are the expected output. For a submit action, these values are the actual output.")

#### Usage

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

-   If the discount only applied to OrderItemSummaries for which payment hasn’t been captured, it doesn’t require a refund. This situation normally applies to OrderItemSummaries in the US that haven’t been fulfilled.
-   If the discount applied to OrderItemSummaries that haven’t been fulfilled and for which payment has been captured, process a refund. In this case, pass the totalExcessFundsAmount from the output representation to the [ensureRefundsAsync()](#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.") method.
-   If the discount applied to OrderItemSummaries that have been fulfilled, process a refund. Pass the postFulfillmentChangeOrderId from the output representation to the [createCreditMemo()](#apex_ConnectAPI_OrderSummary_createCreditMemo_1 "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.") method, then pass the CreditMemo to the [ensureRefundsAsync()](#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.") method.
-   If the discount applied to both fulfilled and unfulfilled OrderItemSummaries for which payment has been captured, process both refunds. Pass the postFulfillmentChangeOrderId from the output representation to the [createCreditMemo()](#apex_ConnectAPI_OrderSummary_createCreditMemo_1 "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.") method, then pass the credit memo and the totalExcessFundsAmount from the output representation to the [ensureRefundsAsync()](#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.") method.

#### See Also

-   [createCreditMemo(orderSummaryId, creditMemoInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_createCreditMemo_1 "Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary.")
    
-   [ensureRefundsAsync(orderSummaryId, ensureRefundsInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_ensureRefundsAsync_1 "Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status.")
    
-   [adjustPreview(orderSummaryId, adjustInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_OrderSummary_static_methods.htm#apex_ConnectAPI_OrderSummary_adjustPreview_1 "Retrieve the expected results of adjusting the price of one or more OrderItemSummaries from an OrderSummary, without actually executing the adjustment. The response data contains the financial changes that would result from submitting the proposed adjustment.")
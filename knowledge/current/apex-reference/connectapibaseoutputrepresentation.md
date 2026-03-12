---
title: "ConnectApi.BaseOutputRepresentation"
domain: apex-reference
topic: connectapibaseoutputrepresentation
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.348Z
estimatedTokens: 2217
keywords: [ConnectApi.BaseOutputRepresentation, Base, Order, Management, output]
---

# ConnectApi.BaseOutputRepresentation

> Base Order Management output class.

# ConnectApi.BaseOutputRepresentation

Base Order Management output class.

This class is abstract.

Superclass of:

-   [ConnectApi.AdjustOrderSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_adjust_order_summary_output.htm "Output representation of the financial changes for an adjust items action. For a preview action, these values are the expected output. For a submit action, these values are the actual output.")
-   [ConnectApi.BaseAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_async_output.htm "Base Order Management async output class.")
-   [ConnectApi.BaseInvoiceOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_invoice_output.htm "Base Order Management Invoice output class.")
-   [ConnectApi.ConfirmHeldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_confirm_held_f_o_capacity_output.htm "Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")
-   [ConnectApi.CreateCreditMemoOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_credit_memo_output.htm "ID of a created Credit Memo.")
-   [ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_multiple_invoices_from_change_orders_output.htm "List of lists of invoices created from change orders for fees.")
-   [ConnectApi.CreateOrderPaymentSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_order_payment_summary_output.htm "ID of the created Order Payment Summary.")
-   [ConnectApi.EnsureFundsAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_funds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.")
-   [ConnectApi.EnsureRefundsAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_refunds_async_output.htm "ID of the asynchronous background operation. This output only includes the operation ID, regardless of whether a call is made to an external payment gateway. It doesn’t include any errors from the operation.")
-   [ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_output.htm "A list of inventory location combinations that can fulfill an order without exceeding the maximum number of shipments.")
-   [ConnectApi.FindRoutesWithFewestSplitsUsingOCIOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_using_o_c_i_output.htm "A list of order fulfillment routes with inventory availability information.")
-   [ConnectApi.FindRoutesWithFewestSplitsWithInventoryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_with_inventory_output.htm "Sets of inventory locations that can combine to fulfill an order, with availability data for those locations.")
-   [ConnectApi.FulfillmentGroupOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_group_output.htm "Information about one FulfillmentOrder from a request to create fulfillment orders from multiple OrderDeliveryGroupSummaries. If the FulfillmentOrder was created, then its ID is returned. If it failed, then data from the input is returned so you can resubmit it.")
-   [ConnectApi.FulfillmentOrderCancelLineItemsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_cancel_line_items_output.htm "Wraps the base output.")
-   [ConnectApi.FulfillmentOrderInvoiceOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_invoice_output.htm "ID of the created invoice.")
-   [ConnectApi.FulfillmentOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_fulfillment_order_output.htm "A list of IDs of the created FulfillmentOrders.")
-   [ConnectApi.GetFOCapacityValuesOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_get_f_o_capacity_values_output.htm "Response to a request for fulfillment order capacity values for one or more locations.")
-   [ConnectApi.HoldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_hold_f_o_capacity_output.htm "Response to a request to hold fulfillment order capacity at one or more locations. Can correspond to one action call.")
-   [ConnectApi.MultipleAsyncOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_async_output.htm "IDs of the asynchronous background operations. This output only includes the operation IDs, regardless of whether calls are made to an external payment gateway. It doesn’t include any errors from the operations.")
-   [ConnectApi.MultipleFulfillmentOrderInvoicesOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_fulfillment_order_invoices_output.htm "IDs of the created Invoices.")
-   [ConnectApi.MultipleFulfillmentOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_fulfillment_order_output.htm "A list of responses for the individual FulfillmentOrder creation attempts from a request to create multiple fulfillment orders.")
-   [ConnectApi.OrderSummaryOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_order_summary_output.htm "ID of the created Order Summary.")
-   [ConnectApi.PreviewCancelOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_cancel_output.htm "Expected financial values for a proposed cancel action.")
-   [ConnectApi.PreviewReturnOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_preview_return_output.htm "Expected financial values for a proposed return action.")
-   [ConnectApi.ProductDetailsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_product_details_output.htm "Details about a product.")
-   [ConnectApi.RankAverageDistanceOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_rank_average_distance_output.htm "The results of calculating the average distances from sets of inventory locations to an order recipient.")
-   [ConnectApi.RegisterGuestBuyerOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_register_guest_buyer_output.htm "Indicates success or failure of a register guest buyer action.")
-   [ConnectApi.ReleaseHeldFOCapacityOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_release_held_f_o_capacity_output.htm "Response to a request to confirm held fulfillment order capacity at one or more locations. Can correspond to one action call.")
-   [ConnectApi.ReturnItemsOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_return_items_output.htm "Output of Return Items. Includes the ID of the generated change order for items and delivery charges being returned, as well as the ID of the generated change order for any charged return fees. Also includes information about any ReturnOrderLineItems that were created to represent remaining return quantities.")
-   [ConnectApi.ReturnOrderItemSplitLineOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_return_order_item_split_line_output.htm "After a change order is created for a ReturnOrderLineItem, that ReturnOrderLineItem is read-only. If the Return Items API is used to return a partial quantity, it creates a new “split” ReturnOrderLineItem to hold the remaining quantity to be returned. In that case, it returns this output property, which contains the IDs of the original and split ReturnOrderLineItems.")
-   [ConnectApi.ReturnOrderOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_return_order_output.htm "ID of the created ReturnOrder.")
-   [ConnectApi.SubmitCancelOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_cancel_output.htm "ID of the change order created for a cancel action, and a set of its financial values.")
-   [ConnectApi.SubmitReturnOutputRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_submit_return_output.htm "ID of the change order created for a return action, and a set of its financial values.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| errors | List<ConnectApi.​ErrorResponse> | Any errors that were returned. | 48.0 |
| success | Boolean | Indicates whether the transaction was successful. | 48.0 |

## Related Topics

- ConnectApi.AdjustOrderSummaryOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_adjust_order_summary_output.htm)
- ConnectApi.BaseAsyncOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_async_output.htm)
- ConnectApi.BaseInvoiceOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_base_invoice_output.htm)
- ConnectApi.ConfirmHeldFOCapacityOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_confirm_held_f_o_capacity_output.htm)
- ConnectApi.CreateCreditMemoOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_credit_memo_output.htm)
- ConnectApi.CreateMultipleInvoicesFromChangeOrdersOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_multiple_invoices_from_change_orders_output.htm)
- ConnectApi.CreateOrderPaymentSummaryOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_create_order_payment_summary_output.htm)
- ConnectApi.EnsureFundsAsyncOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_funds_async_output.htm)
- ConnectApi.EnsureRefundsAsyncOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_ensure_refunds_async_output.htm)
- ConnectApi.FindRoutesWithFewestSplitsOutputRepresentation (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_find_routes_with_fewest_splits_output.htm)

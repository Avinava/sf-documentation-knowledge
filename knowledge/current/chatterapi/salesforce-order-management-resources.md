---
title: "Salesforce Order Management Resources"
domain: chatterapi
topic: salesforce-order-management-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.062Z
estimatedTokens: 2606
keywords: [Salesforce, Order, Management, Resources, Manage, orders, fulfillment, process, orgs]
---

# Salesforce Order Management Resources

> Manage orders and the order fulfillment process. Available in Salesforce Order
      Management orgs.

# Salesforce Order Management Resources

Manage orders and the order fulfillment process. Available in Salesforce Order Management orgs.

Available resources are:

| Resource | Description |
| --- | --- |
| /commerce/delivery/estimation-setup//externalReference/estimate/estimate-date | Forecast an expected delivery date and time based on delivery estimation settings and the selected shipping carrier method. |
| /commerce/fulfillment/fulfillment-orders | Create one or more FulfillmentOrders and FulfillmentOrderLineItems for an OrderDeliveryGroupSummary, which defines a delivery method and recipient for an OrderSummary. You specify the OrderItemSummaries to allocate, which can be fulfilled from different locations. Specifying multiple fulfillment groups creates one FulfillmentOrder for each location. For each OrderItemSummary, a FulfillmentOrderLineItem is created and assigned to the corresponding FulfillmentOrder. |
| /commerce/fulfillment/fulfillment-orders/​fulfillmentOrderId/actions/cancel-item | Cancel FulfillmentOrderLineItems from a FulfillmentOrder. This action doesn’t cancel the associated OrderItemSummaries, so reallocate the canceled quantities to a new FulfillmentOrder. |
| /commerce/fulfillment/fulfillment-orders/​fulfillmentOrderId/actions/create-invoice | Create an invoice for a FulfillmentOrder that doesn’t have one. |
| /commerce/fulfillment/actions/create-multiple | Create FulfillmentOrders for multiple OrderDeliveryGroups in a single request. |
| /commerce/fulfillment/actions/​create-multiple-invoices | Create Invoices for multiple FulfillmentOrders. |
| /commerce/order-management/analytics/insights/​products-return-rate | Get a page of products with return rates. |
| /commerce/order-management/exchanges/actions/​preview-cart-to-exchange-order | Retrieves a preview of an exchange order. This action considers the order summary balance and the difference between the return order and the cart that represents the exchange order. |
| /commerce/order-management/exchanges/actions/​submit-cart-to-exchange-order | Creates an exchange order summary, based on the return order and the cart used for exchanges. The new exchange order summary is attached to the original order summary (created before any exchanges occurred). You can also provide optional payment information and optional information about order summary sequences, which affect the newly created exchange order summary. |
| /commerce/order-management/order-payment-summaries | Create an OrderPaymentSummary for an OrderSummary. Specify a payment authorization or payments that share the same payment method. In an org with the multicurrency feature enabled, the OrderPaymentSummary inherits the CurrencyIsoCode value from the OrderSummary. |
| /commerce/order-management/order-summaries | Create an OrderSummary based on an order. That order is considered the original order for the OrderSummary. Subsequent change orders that apply to the OrderSummary are also represented as orders. You can specify whether the order is managed in Salesforce Order Management or by an external system. Most Salesforce Order Management APIs can run only on orders that it manages. |
| /commerce/order-management/order-summaries/​orderSummaryId/actions/create-credit-memo | Create a credit memo to represent the refund for one or more change orders associated with an OrderSummary. |
| /commerce/order-management/order-summaries/​​actions/create-multiple-change-invoices | Create Invoices to represent the charges for one or more change orders. Create Invoices for change orders that increase order amounts, such as for return fees. When you ensure the refund for a return, include the invoices for any associated return fees in the request. |
| /commerce/order-management/order-summaries/​orderSummaryId/async-actions/​ensure-funds-async | Ensure funds for an Invoice and apply them to it and optional define a sequence to capture payments in. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status. |
| /commerce/order-management/order-summaries/​orderSummaryId/async-actions/​ensure-refunds-async | Ensure refunds for a CreditMemo or excess funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and don’t affect the background operation status. |
| /commerce/order-management/order-summaries/​​async-actions/​multiple-ensure-funds-async | Ensure and apply funds for one or more Invoices. If needed, capture authorized funds by sending a request to a payment provider. This method inserts a background operation into an asynchronous job queue and returns the ID of that operation so you can track its status. Payment gateway responses appear in the payment gateway log and do not affect the background operation status. |
| /commerce/order-management/order-summaries/​orderSummaryId/actions/adjust-item-preview | Retrieve the expected results of adjusting the price of one or more OrderItemSummaries from an OrderSummary, without actually executing the adjustment. The response data contains the financial changes that would result from submitting the proposed adjustment. |
| /commerce/order-management/order-summaries/​orderSummaryId/actions/preview-cancel | Retrieve the expected change order values for canceling one or more OrderItemSummaries from an OrderSummary, without actually executing the cancel. |
| /commerce/order-management/order-summaries/​orderSummaryId/actions/preview-return | Retrieve the expected change order values for a simple return of one or more OrderItemSummaries from an OrderSummary, without actually executing the return. |
| /commerce/order-management/order-summaries/​orderSummaryId/actions/adjust-item-submit | Adjust the price of one or more OrderItemSummaries from an OrderSummary, and create corresponding change orders. |
| /commerce/order-management/order-summaries/​orderSummaryId/actions/submit-cancel | Cancel one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. |
| /commerce/order-management/order-summaries/​orderSummaryId/actions/submit-return | Return one or more OrderItemSummaries from an OrderSummary, and create a corresponding change order. This return is a simple return that creates a change order but not a ReturnOrder. |
| /commerce/order-management/webstores/webstoreId/​products | Search a webstore for products by search term. |
| /commerce/order-management/webstores/webstoreId/​products/skuOrProductId | Get details of a product in a web store. |
| /commerce/returns/return-orders/ | Create a ReturnOrder and ReturnOrderLineItems for items belonging to an OrderSummary. |
| /commerce/returns/return-orders/returnOrderId/​actions/return-items | Process ReturnOrderLineItems belonging to a ReturnOrder. Processing a ReturnOrderLineItem generates a change Order and makes that ReturnOrderLineItem read-only. The change order for a returned item or delivery charge has a positive amount and should be used to create a credit memo. The change order for a return fee has a negative amount and should be used to create an invoice. If a processed ReturnOrderLineItem has any remaining expected quantity, then the API creates a separate ReturnOrderLineItem representing that quantity. |
| /commerce/order-management/routing/​fulfillment-order-capacity/actions/​confirm-held-capacity | Confirm held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity and increases its assigned fulfillment order count. Confirm held capacity when you assign a fulfillment order to a location. |
| /commerce/order-management/routing/actions/​find-routes-with-fewest-splits | Returns combinations of inventory locations that can fulfill an order within a specified limit of shipment splits. By default, checks up to 1,000,000 potential routes, returning a maximum of 10,000 results. |
| /commerce/order-management/routing/​actions/find-routes-with-fewest-splits-using-oci | For one or more order summaries, find inventory availability using Omnichannel Inventory and identify the fulfillment routes with fewest splits. This method combines the functionality of the Get Inventory Availability and Find Routes With Fewest Splits resources. |
| /commerce/order-management/routing/​fulfillment-order-capacity/actions/​get-capacity-values | Get information about the current fulfillment order capacity of one or more locations. |
| /commerce/order-management/routing/​fulfillment-order-capacity/actions/​hold-capacity | Hold fulfillment order capacity at a location. Holding capacity at a location reserves a space for a fulfillment order that you’ll assign to it. |
| /commerce/order-management/routing/actions/​rank-byaverage-distance | Calculates the average distance from sets of inventory locations to an order recipient, and ranks them. Use this method to compare the average shipping distances for different sets of locations that can fulfill an order. While this method is executing, you can’t invoke another Apex callout. |
| /commerce/order-management/routing/​​fulfillment-order-capacity/actions/​release-held-capacity | Release held fulfillment order capacity at one or more locations. This call decreases a location’s held capacity without changing its assigned fulfillment order count. Release held capacity when you cancel the assignment of a fulfillment order to a location. |
| /commerce/order-summaries/ | Create pending order summaries from order summary graphs. The High Scale Orders feature must be active, but a B2C Commerce connection isn’t required. Created pending order summaries are queued for automatic processing into order summaries, the same as pending order summaries ingested from B2C Commerce. The provided JSON example references person accounts, but business accounts are also supported. |
| /commerce/webstores/webstoreId/accounts/accountId/actions/​register-guest-buyer | Register a guest buyer for a webstore using an account ID. This action enables a guest buyer to order on behalf of another buyer. |

## Related Topics

- /commerce/delivery/estimation-setup//externalReference/estimate/estimate-date (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_delivery_estimate_date.htm)
- /commerce/fulfillment/fulfillment-orders (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders.htm)
- /commerce/fulfillment/fulfillment-orders/​fulfillmentOrderId/actions/cancel-item (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_cancel_items.htm)
- /commerce/fulfillment/fulfillment-orders/​fulfillmentOrderId/actions/create-invoice (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_create_invoice.htm)
- /commerce/fulfillment/actions/create-multiple (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_create_multiple.htm)
- /commerce/fulfillment/actions/​create-multiple-invoices (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_fulfillment_orders_create_multiple_invoices.htm)
- /commerce/order-management/analytics/insights/​products-return-rate (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_analytics_insights_products_return_rate.htm)
- /commerce/order-management/exchanges/actions/​preview-cart-to-exchange-order (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_exchanges_actions_preview_cart_to_exchange_order.htm)
- /commerce/order-management/exchanges/actions/​submit-cart-to-exchange-order (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_exchanges_actions_submit_cart_to_exchange_order.htm)
- /commerce/order-management/order-payment-summaries (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_sfom_order_payment_summaries.htm)

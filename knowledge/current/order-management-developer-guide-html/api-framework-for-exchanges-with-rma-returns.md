---
title: "API Framework for Exchanges with RMA Returns"
domain: order-management-developer-guide-html
topic: api-framework-for-exchanges-with-rma-returns
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.102Z
estimatedTokens: 1314
keywords: [API, Framework, Exchanges, RMA, Expand, exchange, capability, increasing, ways, customer, service, representative, CSR, help, customers]
---

# API Framework for Exchanges with RMA Returns

> Expand your exchange capability by increasing the ways that a customer service
    representative (CSR) can help your customers exchange products. With these exchange
    capabilities, a CSR can exchange uneven products and can exchange products in an
    already-fulfilled order. To configure an exchange workflow in your org, you need the
    SalesforceOrderManagementGrowth license.

# API Framework for Exchanges with RMA Returns

Expand your exchange capability by increasing the ways that a customer service representative (CSR) can help your customers exchange products. With these exchange capabilities, a CSR can exchange uneven products and can exchange products in an already-fulfilled order. To configure an exchange workflow in your org, you need the SalesforceOrderManagementGrowth license.

| Available in: Enterprise, Unlimited, and Developer Editions |
| --- |


Before a CSR can place uneven or post-fulfillment exchanges, your organization needs to implement an exchange flow. In the Spring ‘24 release and later, you can configure exchanges using the exchanges invocable actions.

There are two Connect APIs for exchanges, Preview Cart to Exchange Order and Submit Cart to Exchange Order. There’s an invocable action for both of these APIs as well. There are also two objects for exchanges, [OrderPaymentSummary](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummary.htm) and [OrderPaymentSummaryReference](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_orderpaymentsummaryreference.htm).

A fully implemented exchange flow starts by getting the order summary to gather information for the exchange. The items being returned are selected from the return order. From there, a cart is created with the new items. The exchange order is run to exchange the items in the return order for the items in the cart. Finally, a summary shows whether any additional funds are needed, if a refund is necessary, or if it’s an even exchange.

![Fully implemented exchange flow ](/docs/resources/img/en-us/260.0?doc_id=order_management%2Fimages%2Fexchanges_pathway.png&folder=order_management_developer_guide_html)

Exchanges supports both EnsureFunds and EnsureRefunds. After implementing exchanges, set isReservedBalanceAmountConsidered to true for any existing flow that uses EnsureFunds or EnsureRefunds.

EnsureFunds can be called for any OrderSummary regardless of the SourceProcess (Standard, OrderOnBehalfOf, Exchange). The EnsureFunds and ApplyFunds logic now consider shared OrderPaymentSummaries. Both the EnsureFunds and ApplyFunds contracts now contain an optional boolean field, isReservedBalanceAmountConsidered. This field indicates whether the EnsureFunds logic considers the ReservedBalanceAmount for the shared OrderPaymentSummary.

The EnsureRefunds contracts now contain an optional boolean field isReservedBalanceAmountConsidered. This field indicates whether the EnsureRefunds logic considers the ReservedBalanceAmount for the OrderPaymentSummary. EnsureRefunds considers any reserved balance amount that a child exchange order has in reserve to fully fund the exchange Order Summary. The reserved balance amount is available in the payment record and only the extra balance is refunded as part of the EnsureRefunds command.

If you’re using the EnsureFunds or EnsureRefunds flows, update the flows to contain the isReservedBalanceAmountConsidered flag.

For additional or excess funds, the formulas that calculate the funds remain the same. All the captures, refunds, pending refunds, and returns are related to the OrderPaymentSummaries in the OrderSummary Relationship tree.

The new algorithm is executed in this order.

1.  Get all of the Order Summary IDs that are related to the Order Summary.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=order_management_developer_guide_html)

    #### Note

    Get the root OrderSummary from the OrderSummaryRelationship and then find all the AssociatedOrderSummaries with that root.

2.  Get all the Order Payment Summary entities.
3.  Get all OrderSummary totals.

The algorithm then uses the existing formula to calculate the excess funds based on the roll-up fields.

1.  [Preview Cart for an Exchange Order](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_preview.htm)
    Before submitting an exchange request, we recommend previewing the balance state for the exchange order. Previewing can help you determine what functions are necessary, especially for uneven exchanges.
2.  [Submit Cart for an Exchange Order](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_submit.htm)
    After you’ve previewed the cart, it’s almost time to submit the exchange. There are a few considerations to keep in mind while creating the submit for the exchange.

#### See Also

-   [*Salesforce Help*: Exchanges with RMA Returns Overview](https://help.salesforce.com/s/articleView?id=commerce.om_exchanges_rma_overview.htm&type=5&language=en_US "Salesforce Help: Exchanges with RMA Returns Overview - HTML (New Window)")

-   [Ensure Funds](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_funds_async.htm)

-   [Ensure Refunds](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_sfom_order_summaries_ensure_refunds_async.htm)

## Related Topics

- Preview Cart for an Exchange Order (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_preview.htm)
- Submit Cart for an Exchange Order (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_submit.htm)

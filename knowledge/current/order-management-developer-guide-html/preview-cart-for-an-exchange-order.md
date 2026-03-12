---
title: "Preview Cart for an Exchange Order"
domain: order-management-developer-guide-html
topic: preview-cart-for-an-exchange-order
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:20.106Z
estimatedTokens: 616
keywords: [Preview, Cart, Exchange, Order, submitting, recommend, previewing, balance, state, help, determine, functions, necessary, especially, uneven]
---

# Preview Cart for an Exchange Order

> Before submitting an exchange request, we recommend previewing the balance state for
    the exchange order. Previewing can help you determine what functions are necessary, especially
    for uneven exchanges.

# Preview Cart for an Exchange Order

Before submitting an exchange request, we recommend previewing the balance state for the exchange order. Previewing can help you determine what functions are necessary, especially for uneven exchanges.

| Available in: Enterprise, Unlimited, and Developer Editions |
| --- |


There are three outcomes of an uneven exchange.

-   Additional funds are needed because the web cart’s total amount is larger than the return order amount being returned: WebCart.GrandTotalAmount() > ReturnOrder.GrandTotalAmount()
-   A refund is needed because where the total amount being refunded is greater than the web cart total: WebCart.GrandTotalAmount() < ReturnOrder.GrandTotalAmount()
-   The exchange is an even exchange, where the totals equal each other: WebCart.GrandTotalAmount() = ReturnOrder.GrandTotalAmount()

To preview the cart, set the orderSummaryId (mainOrderSummaryId), exchangeCartId, and referenceId (returnOrderId) to be neither null nor empty. They must have valid Salesforce IDs and must represent a valid entity.

The ReferenceId must be type ReturnOrder. The return order StatusCategory must be activated. ReturnOrderId (ReferenceId) must belong to MainOrderSummaryId.

The minimum cart must contain at least one product and delivery group. Make sure that the cart belongs to the same account as the OrderSummary OrderSummary.Account equals cart.Account.

The preview response might look like this example.

```

```

-   [Next →](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_submit.htm "Submit Cart for an Exchange Order")

#### See Also

-   [API Framework for Exchanges with RMA Returns](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_playbook.htm "Expand your exchange capability by increasing the ways that a customer service representative (CSR) can help your customers exchange products. With these exchange capabilities, a CSR can exchange uneven products and can exchange products in an already-fulfilled order. To configure an exchange workflow in your org, you need the SalesforceOrderManagementGrowth license.")

-   [*Salesforce Help*: Exchanges with RMA Returns Overview](https://help.salesforce.com/s/articleView?id=commerce.om_exchanges_rma_overview.htm&type=5&language=en_US "Salesforce Help: Exchanges with RMA Returns Overview - HTML (New Window)")

## Code Examples

```
{
  "changeBalances": {
  "grandTotalAmount": -47.49,
  "totalAdjDeliveryAmtWithTax": 12.94
  "totalAdjDistAmountWithTax": 0,
  "totalAdjProductAmtWithTax": -60.44,
  "totalAdjustedDeliveryAmount": 11.99,
  "totalAdjustedDeliveryTaxAmount": 0.95,
  "totalAdjustedProductAmount": -55.96,
  "totalAdjustedProductTaxAmount": -4.48,
  "totalAdjustmentDistributedAmount": 0,
  "totalAdjustmentDistributedTaxAmount": 0,
  "totalAmount": -43.97,
  "totalExcessFundsAmount": 47.49,
  "totalFeeAmount": 0,
  "totalFeeTaxAmount": 0,
  "totalRefundableAmount": 47.49,
  "totalRequiredFundsAmount": 0,
  "totalTaxAmount": -3.52
  },
  "errors": [],
  "orderSummaryId": "1OsSB000000UdWz0AK",
  "success": true
  }
```

## Related Topics

- Next → (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_submit.htm)
- API Framework for Exchanges with RMA Returns (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_exchanges_playbook.htm)

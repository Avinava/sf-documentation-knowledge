---
title: "Price Adjustments and Taxes"
domain: order-management-developer-guide-html
topic: price-adjustments-and-taxes
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.158Z
estimatedTokens: 1010
keywords: [Price, Adjustments, Taxes, OrderItemTaxLineItem, tax, applied, order, item, change, associated, adjustment]
---

# Price Adjustments and Taxes

> The OrderItemTaxLineItem object represents a tax applied to an
      order item or the change in tax associated with an order item adjustment.

# Price Adjustments and Taxes

The OrderItemTaxLineItem object represents a tax applied to an order item or the change in tax associated with an order item adjustment.

For example, an order item with a TotalPrice of 100 is subject to a 5% sales tax. It has an associated order item tax line item with an Amount of 5. Applying a 10% discount creates an order item adjustment line item with an Amount of -10 and an order item tax line item with an Amount of -0.50. The adjustment order item tax line item includes references to both the order item adjustment line item and the original order item tax line item that it adjusts.

When you apply an adjustment to an order item that has multiple order item tax line items, all tax adjustments are combined in one change order item tax line item. For example, if an order item has two taxes, with Amount 1 and Amount 0.5, then applying a 10% discount creates one order item tax line item with Amount \-0.15.

The B2C Commerce integration combines the taxes on each order item into a single amount. To differentiate between multiple taxes on an order item, use custom attributes to represent them.

Here’s an example of how applying a discount affects an order item’s tax values. Consider an order item with a TotalPrice of 100, subject to a 10% sales tax. The records initially look like this.

-   OrderItem
    -   TotalPrice 100
-   OrderItemTaxLineItem
    -   Amount 10
    -   OrderItemId pointing to the OrderItem
-   OrderItemSummary
    -   TotalPrice 100
    -   TotalTaxAmount 10
    -   TotalAmtWithTax 110
    -   OriginalOrderItemId pointing to the OrderItem
-   OrderItemTaxLineItemSummary
    -   Amount 10
    -   OrderItemSummaryId pointing to the OrderItem
    -   OriginalOrderItemTaxLineItemId pointing to the OrderItemTaxLineItem

Then apply a 10% discount to the OrderItem by calling the Adjust Order Item Summaries Submit action and passing these values.

-   orderItemSummaryId—The ID of the OrderItemSummary
-   adjustmentType—Percentage
-   discountValue—-10

These are the new records.

-   OrderItemAdjustmentLineItem
    -   Amount \-10
    -   TotalTaxAmount \-1
    -   TotalAmtWithTax \-11
    -   OrderItemId pointing to the OrderItem
-   OrderItemAdjustmentLineSummary
    -   Amount -10
    -   TotalTaxAmount -1
    -   TotalAmtWithTax -11
    -   OrderItemSummaryId pointing to the OrderItemSummary
    -   OriginalOrderItemAdjustmentLineItemId pointing to the OrderItemAdjustmentLineItem
-   OrderItemTaxLineItem (for the adjustment)
    -   Amount -1
    -   OrderItemAdjustmentLineItemId pointing to the OrderItemAdjustmentLineItem
    -   RelatedTaxLineItemId pointing to the original OrderItemTaxLineItem
-   OrderItemTaxLineItemSummary (for the adjustment)
    -   Amount -1
    -   OrderItemAdjustmentLineSummaryId pointing to the OrderItemAdjustmentLineSummary
    -   OrderItemSummaryId pointing to the OrderItemSummary
    -   OriginalOrderItemTaxLineItemId pointing to the new OrderItemTaxLineItem for the adjustment

The values on the existing records now look like this.

-   OrderItem (unchanged)
    -   TotalPrice 100
-   OrderItemTaxLineItem (unchanged)
    -   Amount 10
    -   OrderItemId pointing to the OrderItem
-   OrderItemSummary
    -   TotalPrice 90
    -   TotalTaxAmount 9
    -   TotalAmtWithTax 99
    -   OriginalOrderItemId pointing to the OrderItem
    -   TotalAdjustmentAmount -10
    -   TotalAdjustmentTaxAmount -1
    -   TotalAdjustmentAmtWithTax -11
-   OrderItemTaxLineItemSummary
    -   Amount 9 (sum of both OrderItemTaxLineItems)
    -   OrderItemSummaryId pointing to the OrderItem
    -   OriginalOrderItemTaxLineItemId pointing to the original OrderItemTaxLineItem

#### See Also

-   [Taxation in Order Management](atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_taxation.htm "Tax calculations can be complex, especially when supporting multiple currencies. Orders can have different tax types, and taxes can be affected by price adjustments.")

## Related Topics

- Taxation in Order Management (atlas.en-us.order_management_developer_guide_html.meta/order_management_developer_guide_html/order_management_taxation.htm)

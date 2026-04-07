---
title: "Calculate Your Expected Payout"
domain: packagingGuide
topic: calculate-your-expected-payout
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:04:55.261Z
estimatedTokens: 1012
keywords: [Calculate, Expected, Payout, look, relationships, order, items, products, product, catalog]
---

# Calculate Your Expected Payout

> To calculate your expected payout, look at the relationships between your order items,
  your products, and the related product catalog.

# Calculate Your Expected Payout

To calculate your expected payout, look at the relationships between your order items, your products, and the related product catalog.

1.  Identify the order items and their subtotals: Find each order item on the order and get the line item total. Line item total is the result of quantity x product unit price per month x contract length.
2.  Trace each item to its catalog (PPC): Every order item references a specific Partner Provision Product (PPP). Each PPP is mapped to a Partner Product Catalog (PPC) record in your PBO. Find and open the associated PPC records.
3.  Locate the revenue share percentage per item: On the PPC record for each item, find the Revenue Share Percentage field. This field indicates the revenue share percentage Salesforce retains for that specific product.
4.  Calculate the Salesforce revenue share per item: Multiply the individual order item's line item total by its specific revenue share percentage.
5.  Sum the total Salesforce revenue share: Add together the calculated revenue share amounts for all the items in the order.
6.  Calculate your expected payout: To find your expected payout, take your total order subtotal and subtract the total Salesforce revenue share calculated in the previous step.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

Sales tax on the Salesforce revenue share itself is also deducted from your final payout based on your local tax jurisdiction. This information is available in the **Partner Revenue Tax** field on the Invoice record.

## Payout Example

Here is an example that shows how the expected payout is calculated for an order with a 12-month contract term, containing two different products.

Scenario:

-   Contract Term: 12 months
-   Product 1: 10 user licenses for Core App at $50/month each.
-   Product 2: 1 license for Premium Add-On at $200/month.

1.  Identify the order items and their subtotals. In this example, Product 1 has a single item, Core App (or Item 1), with a quantity of 10. Product 2 also has a single item, Premium Add-On, with a quantity of one. After identifying those items, we find the line item total for each item.

    -   Item 1 (Core App): 10 × $50 × 12 months = $6,000 (Line Item Total)
    -   Item 2 (Premium Add-On): 1 × $200 × 12 months = $2,400 (Line Item Total)
    -   (Total Order Subtotal = $8,400)

2.  Trace each item to its catalog (PPC).

    -   Item 1 (Core App): references the Core App PPP, which maps to PPC A.
    -   Item 2 (Premium Add-On): references the Premium Add-On PPP, which maps to PPC B.

3.  Locate the revenue share percentage per item by looking at the PPC records.

    -   PPC A (Core App) has a revenue share percentage of 15%.
    -   PPC B (Premium Add-On) has a revenue share percentage of 10%.

4.  Calculate the Salesforce revenue share per item by multiplying each line item total by its revenue share percentage.

    -   Item 1 (Core App): $6,000 × 15% = $900 revenue share
    -   Item 2 (Premium Add-On): $2,400 × 10% = $240 revenue share

5.  Sum the total Salesforce revenue share by adding the calculated revenue share amounts for all items.

    $900 + $240 = $1,140 total Salesforce revenue share

6.  Calculate Your Expected Payout by subtracting the total Salesforce revenue share from your total order subtotal.

    $8,400 (Total Order Subtotal) - $1,140 (Total Salesforce Revenue Share) = $7,260 Expected Payout


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=packagingGuide)

#### Note

-   A sales tax on the Salesforce revenue share itself will also be deducted from your final payout based on your local tax jurisdiction. This information will be available in the “Partner Revenue Tax” field in the Invoice object after the invoice record is created.
-   If a floor price is set on your PPC, it acts as a minimum revenue share. If the calculated revenue share per unit per month falls below this amount, the floor price will be applied instead.

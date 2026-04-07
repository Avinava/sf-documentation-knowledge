---
title: "Partner Payouts Overview"
domain: packagingGuide
topic: partner-payouts-overview
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-04-07T09:04:55.306Z
estimatedTokens: 776
keywords: [Partner, Payouts, refer, net, revenue, partners, receive, settled, customer, payments, Stripe, behalf, Salesforce, consolidates, orders]
---

# Partner Payouts Overview

> Payouts refer to the net revenue that partners receive from settled customer payments.
    Stripe, on behalf of Salesforce, consolidates settled revenue for all customer orders into a
    single, daily payout. That means Stripe rounds up all your customer payments and deposits the
    net revenue into your account. If on a given day, you haven’t received payments or a submitted
    payment hasn’t settled yet, you won’t receive a payout.

# Partner Payouts Overview

Payouts refer to the net revenue that partners receive from settled customer payments. Stripe, on behalf of Salesforce, consolidates settled revenue for all customer orders into a single, daily payout. That means Stripe rounds up all your customer payments and deposits the net revenue into your account. If on a given day, you haven’t received payments or a submitted payment hasn’t settled yet, you won’t receive a payout.

When customer payments are processed and settled by Stripe, Stripe initiates the payout to your selected bank account on the same day. You can track the status of your payouts in the Partner Marketplace app, from the Payouts tab, when Stripe initiates a payout. The Marketplace app also provides information about the related invoices for a given payout event.

## Example

Salesforce fees are deducted from the total payout, and are visible at the order and payout levels in your Marketplace app. This diagram explains what you can expect from the basic flow. Keep in mind that these numbers are for example purposes only and don’t reflect actual prices or percentages.

![Revenue breakdown for Partner Marketplace payouts.](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fpartner_marketplace_revenue.png&folder=packagingGuide)

Let’s say that you and your customer negotiate a price of $100. In this scenario, the customer invoice lists $100 as the product price and the revenue engine adds $10 in tax. Stripe receives the entire payment amount, and then divides the payment into the net partner revenue and Salesforce payment. The net partner revenue goes to the partner, as explained in the Revenue Breakdown section of your invoice.

## View Your Revenue Breakdown

To see a detailed view of customer payment information, find it in the Revenue Breakdown section of your invoice.

1.  From the Invoices tab, select an invoice number.
2.  Select the **Details** tab and find the Revenue Breakdown section. We use the diagram above to illustrate an example breakdown.
    1.  Subtotal: The total negotiated value of the products or services in the offer, excluding any taxes, for the billing period of the invoice. Example: $100
    2.  Customer Sales Tax: The sales tax amount charged to the customer, calculated according to the customer's location and regulations. Example: $10
    3.  Invoice Total: The final amount the customer is billed and pays, including the subtotal plus the applicable customer sales tax. Example: $110
    4.  Salesforce Revenue Share: The revenue share retained by Salesforce, calculated as a set Percentage of Net Revenue (PNR). Example: $15
    5.  Partner Revenue Share: The remaining portion of the subtotal, minus the Salesforce revenue share. Example: $85
    6.  Revenue Share Sales Tax: The sales tax the partner owes for the Salesforce revenue share. Example:$1
    7.  Total Received by Salesforce: The total funds Stripe transfers to Salesforce following Customer payment, which is made up of the Salesforce revenue share, the customer sales tax, and the revenue share sales tax. Example: $26

---
title: "Building Blocks of the Partner Marketplace"
domain: packagingGuide
topic: building-blocks-of-the-partner-marketplace
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:38:47.227Z
estimatedTokens: 593
keywords: [Building, Blocks, Partner, Marketplace, built, app, around, five, primary, Together, they, track, milestone, lifecycle, transaction, products, offers, orders, invoices, pay]
---

> We built the Partner Marketplace app around five primary objects. Together, they track
  each milestone within the lifecycle of the transaction. The objects are: products, offers, orders,
  invoices, and pay out.

# Building Blocks of the Partner Marketplace

We built the Partner Marketplace app around five primary objects. Together, they track each milestone within the lifecycle of the transaction. The objects are: products, offers, orders, invoices, and pay out.

Now, we explore each object in-detail. If you want a more detailed view of all objects involved in the Partner Marketplace, see the [Partner Marketplace Data Model.](https://developer.salesforce.com/docs/platform/data-models/guide/partner-marketplace.html)

## Partner Marketplace Objects

| Object | What It Is | How It's Used |
| --- | --- | --- |
| Products | Represent the thing that you’re selling, which can include licenses, apps, and services.All offers and orders are built on top of one or more products, which you can create in the Partner Business org (PBO).Products are associated with a Partner Product Catalog (PPC), which the partner account manager (PAM) creates. | After you create a product, you can map it to managed package licenses. |
| Offers | Represent what the customer reviews and accepts in their Salesforce org, including pricing and contract terms.Each offer is created as a Partner Offer in the Partner Marketplace and references one or more products. An offer can be an initial offer or an add-on offer. | When a customer accepts an offer, Salesforce automatically creates an Order record and handles billing and provisioning on the partner’s behalf. |
| Orders | Represent the record that Salesforce creates when a customer accepts an offer.The order mirrors the accepted offer, but is only viewable by the partner. Orders include finer details like finalized purchase amounts, with taxes and calculations applied. | Includes the finalized purchase details that Salesforce uses to trigger billing and provisioning. |
| Invoices | Represents the invoice that Stripe generates after an offer is accepted and an order is created. | The invoice is emailed to the customer and given the pending status. When the customer pays the invoice in Stripe, the status moves to Paid. |
| Payouts | Represent the net revenue that partners receive from settled customer payments. | Stripe consolidates all settled customer payments into a single, daily partner payout, which Stripe deposits into the partner’s bank account.Every payout shows the related invoices, with Salesforce fees deducted. |

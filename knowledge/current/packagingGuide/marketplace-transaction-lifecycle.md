---
title: "Marketplace Transaction Lifecycle"
domain: packagingGuide
topic: marketplace-transaction-lifecycle
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:04:55.301Z
estimatedTokens: 872
keywords: [Marketplace, Transaction, Lifecycle, begin, configuring, products, creating, offers, it’s, understand, sequence, events, occur, explains, expect]
---

# Marketplace Transaction Lifecycle

> Before you begin configuring products or creating offers, it’s important to understand
  the sequence of events that occur during a marketplace transaction. The lifecycle explains what
  you can expect from creating an offer, to billing, provisioning, payment collection, and payouts.
  Here’s a visual example of the transaction flow.

# Marketplace Transaction Lifecycle

Before you begin configuring products or creating offers, it’s important to understand the sequence of events that occur during a marketplace transaction. The lifecycle explains what you can expect from creating an offer, to billing, provisioning, payment collection, and payouts. Here’s a visual example of the transaction flow.

A marketplace transaction consists of two primary processes, the offer and the order. The offer phase ends when a customer accepts an offer, which is when the order phase begins. We outline each stage individually to help you anticipate the sequence of events, the actions that Salesforce automates, and the tasks that require partner or customer involvement.

-   Offer lifecycle: Tracks the offer from creation to customer acceptance. The process includes:
    -   Offer creation
    -   Sending the offer to a customer
    -   Customer acceptance
    -   Converting the offer into an order
-   Order lifecycle: Tracks the order from creation to partner payout. The process includes:
    -   The transition from offer to order
    -   Provisioning
    -   Invoicing
    -   Payment settlement
    -   Payouts

## Offer Lifecycle

The offer serves as the source of truth for downstream marketplace processes.

| Offer Stage | Description |
| --- | --- |
| Draft offer | The partners define pricing, product quantities, order start date, and included items. |
| Send offer | The partner sends the finalized offer to the customer. The customer receives an email notification and can view the offer on the Your Account page. |
| Customer decision | The customer reviews and either accepts or rejects the offer. |
| Order conversion | When accepted, the offer status changes to Converted, and Salesforce creates a corresponding Partner Order. The order record drives billing and provisioning and includes applicable tax. |

## Order Lifecycle

After a customer accepts an offer, Salesforce automates the steps required to fulfill, bill, and report on the transaction. The Partner Order serves as the operational record that ties provisioning and billing together.

| Stage | Description |
| --- | --- |
| Order creation | Salesforce creates a Partner Order record with the contracted products and quantities. The Partner Order record is based on the Partner Offer record and is read-only. |
| Provisioning | The provisioning engine uses fields on the Partner Order record to determine what products to provision, when provisioning begins, and where to allocate licenses. The provisioning status is available on the order record.Example:When the Service Order Start Date is equal to today and the Partner Service Order Status has a status of Activated, the engine provisions the licenses to the specified org. |
| Invoicing | Salesforce automatically generates and sends the customer invoice, reflecting the products and pricing defined in the offer.The invoice includes applicable sales tax based on the shipping address of the customer.On the date specified in the Order Start Date field, Salesforce sends the invoice to the customer. The Billing Lead Time field, or prebill days, is one day. |
| Payment Collection | Stripe collects customer payment on Salesforce’s behalf. |
| Partner Payout | After payment settles, Stripe, after deducting the Salesforce percentage net revenue (PNR) specified in the partner’s agreement with Salesforce, remits the partner’s revenue to the partner’s account, on behalf of Salesforce. |

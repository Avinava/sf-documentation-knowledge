---
title: "Checkout Management App Objects"
domain: packagingGuide
topic: checkout-management-app-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.609Z
estimatedTokens: 591
keywords: [Checkout, Management, App, Objects, Subscription, plan, invoice, item, transaction, foundation, CMA, understand, represent, how, they]
---

# Checkout Management App Objects

> Subscription plan, subscription, invoice, invoice item, and transaction objects are the
    foundation of the Checkout Management App (CMA). To get the most out of the CMA, understand what
    these objects represent and how they relate to each other.

# Checkout Management App Objects

Subscription plan, subscription, invoice, invoice item, and transaction objects are the foundation of the Checkout Management App (CMA). To get the most out of the CMA, understand what these objects represent and how they relate to each other.

The CMA pulls in data from AppExchange Checkout’s payment partner, Stripe, to populate the subscription plan, subscription, invoice, invoice item, and transaction objects. Here’s a high-level overview of these objects and how they fit together.

![Object relationships in the Checkout Management App](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fcma%2Fimages%2Fcma_object_relationships.png&folder=packagingGuide)

| Object | Purpose | Relationships |
| --- | --- | --- |
| Subscription plan (1) | Contains information about the pricing model of an offering. For example, site-wide or per user, billed monthly. | Parent object of:Subscription |
| Subscription (2) | Contains information about the customer’s history and usage of an offering. For example, when the subscription started. | Child object of:Subscription planParent object of:InvoiceTransaction |
| Invoice (3) | Contains billing and payment information for a subscription for a specific time period. For example, the total amount owed by the customer. | Child object of:SubscriptionSibling object of:Transaction |
| Invoice item (4) | Contains information about a particular billing and payment event for a specific time period. For example, a one-time credit. Multiple invoice items can be associated with an invoice. | Child object of:Invoice |
| Transaction (5) | Contains information about a customer payment attempt. For example, method of payment and whether it was successful. | Child object of:SubscriptionSibling object of:Invoice |

We haven’t listed it in the table, but there’s one more object to be aware of: customer. The customer object contains information about the subscriber and draws from the other objects in the CMA, including subscription, invoice, and transaction.

The CMA automatically syncs new data from Stripe, updating object records as necessary. Remember : syncing is one way and read only, so changes that you make to object records aren’t reflected in Stripe. To update subscription plan, subscription, invoice, invoice item, or transaction data, use the Stripe dashboard or API.

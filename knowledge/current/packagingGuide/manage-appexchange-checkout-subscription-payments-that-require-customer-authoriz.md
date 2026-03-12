---
title: "Manage AppExchange Checkout Subscription Payments That Require Customer
  Authorization"
domain: packagingGuide
topic: manage-appexchange-checkout-subscription-payments-that-require-customer-authoriz
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.368Z
estimatedTokens: 362
keywords: [Manage, AppExchange, Checkout, Subscription, Payments, Require, Customer, Authorization, payment, fails, because, requires, determine, how, Stripe]
---

# Manage AppExchange Checkout Subscription Payments That Require Customer
  Authorization

> If a Checkout subscription payment fails because it requires customer authorization,
  determine how Stripe handles the related subscription. For example, you can configure Stripe to
  cancel the subscription, mark the subscription as unpaid, or take no action.

# Manage AppExchange Checkout Subscription Payments That Require Customer Authorization

If a Checkout subscription payment fails because it requires customer authorization, determine how Stripe handles the related subscription. For example, you can configure Stripe to cancel the subscription, mark the subscription as unpaid, or take no action.

1.  Log in to [Stripe](https://dashboard.stripe.com/login).
2.  From your Stripe dashboard, click **Settings**.
3.  Under Billing, click **Subscriptions and emails**.
4.  Go to Manage payments that require 3D Secure, and then configure Subscription status (1).

    ![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=packagingGuide)

    #### Important

    Don't enable the Customer emails setting. To authorize payments, customers must log in to AppExchange.

    ![The Manage payments that require 3D Secure component in the Stripe dashboard with a the Subscription status field highlighted](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_sca_manage_payments.png&folder=packagingGuide)


-   [← Previous](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_prepare.htm "Prepare Your Customers for Strong Customer Authentication")
-   [Next →](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm "View AppExchange Checkout Subscription Payments That Require Customer Authorization")

## Related Topics

- ← Previous (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_prepare.htm)
- Next → (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm)

---
title: "View AppExchange Checkout Subscription Payments That Require Customer Authorization"
domain: packagingGuide
topic: view-appexchange-checkout-subscription-payments-that-require-customer-authorizat
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.377Z
estimatedTokens: 281
keywords: [View, AppExchange, Checkout, Subscription, Payments, Require, Customer, Authorization, payment, can’t, processed, because, requires, Stripe, marks]
---

# View AppExchange Checkout Subscription Payments That Require Customer Authorization

> If a Checkout subscription payment can’t be processed because it requires customer
  authorization, Stripe marks the payment as failed. View these payments in the Stripe dashboard to
  see transaction details, including customer contact information. You can use this information to
  follow up with the customer and provide instructions for authorizing the payment on
  AppExchange.

# View AppExchange Checkout Subscription Payments That Require Customer Authorization

If a Checkout subscription payment can’t be processed because it requires customer authorization, Stripe marks the payment as failed. View these payments in the Stripe dashboard to see transaction details, including customer contact information. You can use this information to follow up with the customer and provide instructions for authorizing the payment on AppExchange.

1.  Log in to [Stripe](https://dashboard.stripe.com/login).
2.  From your Stripe dashboard, click **Payments**.
3.  Configure the payment filters as follows.

    | Filter | Value |
    | --- | --- |
    | Status | Incomplete |

4.  Click **Done**.
5.  Click a payment to view details about the transaction.

-   [← Previous](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_incomplete.htm "Manage AppExchange Checkout Subscription Payments That Require Customer Authorization")
-   [Next →](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_authorize.htm "Authorize an AppExchange Checkout Subscription Payment")

## Related Topics

- ← Previous (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_incomplete.htm)
- Next → (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_authorize.htm)

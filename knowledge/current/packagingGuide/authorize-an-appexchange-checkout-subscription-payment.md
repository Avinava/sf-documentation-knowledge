---
title: "Authorize an AppExchange Checkout Subscription Payment"
domain: packagingGuide
topic: authorize-an-appexchange-checkout-subscription-payment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.356Z
estimatedTokens: 475
keywords: [Authorize, AppExchange, Checkout, Subscription, Payment, regions, require, strong, customer, authentication, SCA, customer’s, bank, credit, card]
---

# Authorize an AppExchange Checkout Subscription Payment

> In regions that require strong customer authentication (SCA), a customer’s bank or
  credit card issuer may require the customer to authorize Checkout subscription payments
  periodically. To see payments that require customer authorization, check your Stripe dashboard. If
  authorization is required, we prompt the customer when they log in to AppExchange. However, you
  can also provide customers with self-service instructions for authorizing a payment.

# Authorize an AppExchange Checkout Subscription Payment

In regions that require strong customer authentication (SCA), a customer’s bank or credit card issuer may require the customer to authorize Checkout subscription payments periodically. To see payments that require customer authorization, check your Stripe dashboard. If authorization is required, we prompt the customer when they log in to AppExchange. However, you can also provide customers with self-service instructions for authorizing a payment.


| User Permissions Needed |
| --- |
| To manage AppExchange subscriptions: | Manage Billing |

1.  Log in to [AppExchange](https://appexchange.salesforce.com/).
2.  From the user profile menu, click **My Installs & Subscriptions**.
3.  Find the subscription that requires authorization.
4.  Click **Authorize Payment** (1).

    ![The My Installs and Subscriptions page on AppExchange with a subscription that requires payment authorization](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_sca_my_installs_authorize.png&folder=packagingGuide)

5.  Review the subscription details, and then click **Authorize**.

-   [← Previous](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm "View AppExchange Checkout Subscription Payments That Require Customer Authorization")

#### See Also

-   [View AppExchange Checkout Subscription Payments That Require Customer Authorization](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm "If a Checkout subscription payment can’t be processed because it requires customer authorization, Stripe marks the payment as failed. View these payments in the Stripe dashboard to see transaction details, including customer contact information. You can use this information to follow up with the customer and provide instructions for authorizing the payment on AppExchange.")

## Related Topics

- ← Previous (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm)
- View AppExchange Checkout Subscription Payments That Require Customer Authorization (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm)

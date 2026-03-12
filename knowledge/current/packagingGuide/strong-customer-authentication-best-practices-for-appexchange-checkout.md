---
title: "Strong Customer Authentication Best Practices for AppExchange Checkout"
domain: packagingGuide
topic: strong-customer-authentication-best-practices-for-appexchange-checkout
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:20.358Z
estimatedTokens: 537
keywords: [Strong, Customer, Authentication, Best, Practices, AppExchange, Checkout, sell, solution, region, requires, SCA, follow]
---

# Strong Customer Authentication Best Practices for AppExchange Checkout

> If you sell an AppExchange solution in a region that requires strong customer
  authentication (SCA), follow these Checkout best practices.

# Strong Customer Authentication Best Practices for AppExchange Checkout

If you sell an AppExchange solution in a region that requires strong customer authentication (SCA), follow these Checkout best practices.

1.  [Prepare Your Customers for Strong Customer Authentication](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_prepare.htm)
    If you serve customers in the European Economic Area, communicate how strong customer authentication (SCA) affects online payments, including payments for your AppExchange solution.
2.  [Manage AppExchange Checkout Subscription Payments That Require Customer Authorization](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_incomplete.htm)
    If a Checkout subscription payment fails because it requires customer authorization, determine how Stripe handles the related subscription. For example, you can configure Stripe to cancel the subscription, mark the subscription as unpaid, or take no action.
3.  [View AppExchange Checkout Subscription Payments That Require Customer Authorization](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm)
    If a Checkout subscription payment can’t be processed because it requires customer authorization, Stripe marks the payment as failed. View these payments in the Stripe dashboard to see transaction details, including customer contact information. You can use this information to follow up with the customer and provide instructions for authorizing the payment on AppExchange.
4.  [Authorize an AppExchange Checkout Subscription Payment](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_authorize.htm)
    In regions that require strong customer authentication (SCA), a customer’s bank or credit card issuer may require the customer to authorize Checkout subscription payments periodically. To see payments that require customer authorization, check your Stripe dashboard. If authorization is required, we prompt the customer when they log in to AppExchange. However, you can also provide customers with self-service instructions for authorizing a payment.

## Related Topics

- Prepare Your Customers for Strong Customer Authentication (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_prepare.htm)
- Manage AppExchange Checkout Subscription Payments That Require Customer Authorization (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_incomplete.htm)
- View AppExchange Checkout Subscription Payments That Require Customer Authorization (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_status.htm)
- Authorize an AppExchange Checkout Subscription Payment (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_sca_authorize.htm)

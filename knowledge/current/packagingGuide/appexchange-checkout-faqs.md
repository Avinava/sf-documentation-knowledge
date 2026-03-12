---
title: "AppExchange Checkout FAQs"
domain: packagingGuide
topic: appexchange-checkout-faqs
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.307Z
estimatedTokens: 1422
keywords: [AppExchange, Checkout, FAQs, answers, common, questions]
---

# AppExchange Checkout FAQs

> Find answers to common questions about Checkout.

# AppExchange Checkout FAQs

Find answers to common questions about Checkout.

-   **[Does AppExchange Checkout replace the License Management App?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_lma.htm)**
    No, Checkout works with the LMA to support the licensing process. When a customer purchases your solution, Checkout creates a license record in the LMA. If a customer edits their subscription on AppExchange, such as by adding seats, the license record in the LMA automatically updates to reflect those changes.
-   **[How does AppExchange Checkout affect Trialforce and lead management?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_interaction_existing_processes.htm)**
    Checkout doesn’t affect your Trialforce configuration or how you manage leads. However, when a customer signs up for a trial using Checkout, the corresponding trial user is listed as Active in the License Management App (LMA).
-   **[Is it better to collect payment information from AppExchange Checkout customers before or after installation?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_stripe_lma.htm)**
    Both approaches have advantages. We recommend thinking about your target customers and your business processes, and then deciding. Use this table to guide your decision.
-   **[Does AppExchange Checkout support multiple currencies?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_multiple_currencies.htm)**
    Yes. To offer another currency on your listing, go to the Partner Console and add the plan to your listing. When a customer purchases your solution, Checkout charges them in the currency that you specified on the plan. When Stripe transfers the payment to you, it's converted to the currency used by your bank account.
-   **[If I use AppExchange Checkout to sell my solution, do customers have to purchase from AppExchange?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_where_to_purchase.htm)**
    Yes, purchases must occur on AppExchange and are subject to revenue sharing per your Salesforce partnership agreement. Also, if the transaction is processed another way, Checkout can’t associate the purchase with your solution or provision licenses with the License Management App (LMA).
-   **[Can my customer switch to another AppExchange Checkout payment plan?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_change_payment_plan.htm)**
    Yes, you can switch the customer to another plan in Stripe. The new plan takes effect at the start of the next billing period. If you want the change to take effect immediately, cancel the current plan in Stripe and ask the customer to purchase the new plan from your listing.
-   **[If a customer's credit card payment is declined in AppExchange Checkout, does their license become inactive?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_declined_credit_card.htm)**
    In your Stripe settings, you determine what happens when a credit card is declined. You can retry the payment or deactivate the subscription. If you deactivate the subscription, the license becomes inactive.
-   **[How does billing work when AppExchange Checkout customers add or remove licenses during the current billing period?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_prorated_billing.htm)**
    If a customer adds licenses during the current billing period, the licenses are available for immediate use. Checkout charges the customer a prorated amount for their next billing period. If a customer removes licenses, the reduction takes effect at the start of their next billing period. The customer can continue to use the licenses during their current billing period. Checkout charges the customer for the reduced license count starting with their next billing period.
-   **[If an admin purchases and installs a solution with AppExchange Checkout, can another user edit the subscription on AppExchange?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_purchase_permission.htm)**
    Yes, provided the user has the “Manage Billing” permission in the Salesforce org associated with the subscription.
-   **[Why can't my customer make an AppExchange Checkout purchase?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_active_orgs.htm)**
    If a customer clicks **Get It Now** on your listing, but can't make a Checkout purchase, verify that the customer is logged in to AppExchange with a supported Salesforce org. Checkout supports only paid orgs whose status is Active. Trial orgs, sandbox orgs, and Developer Edition orgs aren't supported.
-   **[Does AppExchange Checkout support tax rates created in Stripe?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_stripe_tax_rates.htm)**
    No. Although Stripe allows you to create tax rates, Checkout doesn’t support the Stripe rates. Salesforce internally manages tax rates, including rates for US sales tax and value-added tax (VAT).
-   **[If a customer pays using AppExchange Checkout, how can I ensure that paid features are immediately accessible?](atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_fma.htm)**
    When a customer makes a purchase using Checkout, the license records in the License Management App are updated, but feature parameters aren’t. To update feature parameters that you've created, define an Apex trigger in your License Management Org (LMO). Have the trigger fire when the license record is updated. In your trigger code, update the LMO-to-subscriber feature parameter.

## Related Topics

- Does AppExchange Checkout replace the License Management App? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_lma.htm)
- How does AppExchange Checkout affect Trialforce and lead management? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_interaction_existing_processes.htm)
- Is it better to collect payment information from AppExchange Checkout customers before or after installation? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_stripe_lma.htm)
- Does AppExchange Checkout support multiple currencies? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_multiple_currencies.htm)
- If I use AppExchange Checkout to sell my solution, do customers have to purchase from AppExchange? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_where_to_purchase.htm)
- Can my customer switch to another AppExchange Checkout payment plan? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_change_payment_plan.htm)
- If a customer's credit card payment is declined in AppExchange Checkout, does their license become inactive? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_declined_credit_card.htm)
- How does billing work when AppExchange Checkout customers add or remove licenses during the current billing period? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_prorated_billing.htm)
- If an admin purchases and installs a solution with AppExchange Checkout, can another user edit the subscription on AppExchange? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_purchase_permission.htm)
- Why can't my customer make an AppExchange Checkout purchase? (atlas.en-us.packagingGuide.meta/packagingGuide/appexchange_checkout_faq_active_orgs.htm)

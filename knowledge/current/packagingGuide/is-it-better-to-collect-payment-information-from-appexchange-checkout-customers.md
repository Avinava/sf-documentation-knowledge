---
title: "Is it better to collect payment information from AppExchange Checkout customers before or
    after installation?"
domain: packagingGuide
topic: is-it-better-to-collect-payment-information-from-appexchange-checkout-customers-
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:20.326Z
estimatedTokens: 495
keywords: [better, collect, payment, AppExchange, Checkout, customers, installation, approaches, advantages, recommend, thinking, target, business, processes, deciding]
---

# Is it better to collect payment information from AppExchange Checkout customers before or
    after installation?

> Both approaches have advantages. We recommend thinking about your target customers and
    your business processes, and then deciding. Use this table to guide your decision.

# Is it better to collect payment information from AppExchange Checkout customers before or after installation?

Both approaches have advantages. We recommend thinking about your target customers and your business processes, and then deciding. Use this table to guide your decision.

| When is payment information collected? | What are the advantages of this approach? | Where are trials managed? | How does it work? |
| --- | --- | --- | --- |
| Before installation | Trial lengths are set when you add pricing plans to your listing.Customers can easily transition between trial and paid experiences because you have the info you need to process their order. | Stripe | The customer selects a plan and enters payment details before they install the package.AppExchange creates a subscription in Stripe based on the selected plan, including trial information.Next, a license is created in the partner business org where the package is registered.The trial period is managed in Stripe. When the trial period ends, Stripe charges the credit card directly. |
| After installation | Trial lengths are set in the License Management App (LMA).Customers can quickly try your solution because they don’t have to provide payment info up front.This option is ideal if your target market includes enterprise customers. These companies often require a purchase approval process when payment details are entered. | License Management App (LMA) | Customers buy your solution from the My Installs & Subscriptions page on AppExchange.A license is created in LMA based on the default license behavior that you set during package registration.The trial period is dictated by the default license behavior that you set.AppExchange creates a subscription in Stripe when your customer completes the purchase process.When you manage trials in the LMA, keep in mind that customers can’t see your LMA settings. To communicate the trial length, use the Additional Pricing Details field on your listing. |

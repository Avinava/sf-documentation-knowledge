---
title: "Checkout Management App Best Practices"
domain: packagingGuide
topic: checkout-management-app-best-practices
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:35:20.560Z
estimatedTokens: 348
keywords: [Checkout, Management, App, Best, Practices, Follow, guidelines, CMA]
---

# Checkout Management App Best Practices

> Follow these guidelines and best practices when you use the Checkout Management App
  (CMA).

# Checkout Management App Best Practices

Follow these guidelines and best practices when you use the Checkout Management App (CMA).

-   Install the CMA in a Salesforce org where the License Management App (LMA) is already installed. Usually, it’s your partner business org. If the LMA isn’t installed in your org, you can’t install the CMA.
-   Don’t edit data in managed fields on the subscription plan, subscription, invoice, or transaction object records. The CMA syncs Stripe data in a one-way, read-only manner, so changes that you make aren’t reflected in Stripe. To update subscription plan, subscription, invoice, invoice item, or transaction data, use the Stripe dashboard or API.
-   Review and customize notification templates before enabling them. By adding your logo and tailoring template content to reflect your company’s identity, you set yourself apart from other offerings on AppExchange. Customizing takes only a couple of minutes and doesn’t require any coding.

#### See Also

-   [Modify a Notification Template in the Checkout Management App](atlas.en-us.packagingGuide.meta/packagingGuide/cma_customize_email.htm "The Checkout Management App (CMA) can send email notifications in response to trial installations, purchases, and other subscription changes. We created default notifications to get you started, but you can tailor templates to your company’s needs.")

## Related Topics

- Modify a Notification Template in the Checkout Management App (atlas.en-us.packagingGuide.meta/packagingGuide/cma_customize_email.htm)

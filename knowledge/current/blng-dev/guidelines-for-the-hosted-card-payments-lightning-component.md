---
title: "Guidelines for the Hosted Card Payments Lightning Component"
domain: blng-dev
topic: guidelines-for-the-hosted-card-payments-lightning-component
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:34:08.870Z
estimatedTokens: 236
keywords: [Guidelines, Hosted, Card, Payments, Lightning, Component, wrapper, design, payment, consider]
---

# Guidelines for the Hosted Card Payments Lightning Component

> When you set up the wrapper and design for your hosted payment component, consider
  important guidelines.

# Guidelines for the Hosted Card Payments Lightning Component

When you set up the wrapper and design for your hosted payment component, consider important guidelines.

| Available in: Salesforce Billing Winter ‘20 and later |
| --- |


-   Customers can pay only against an account.
-   In multicurrency orgs, customers can make payments only in the account’s currency. In single-currency orgs, the component uses the org's currency. When handling currency, the component retrieves SavePaymentCard or PaymentSale’s currency from the customer’s account. It won’t accept CurrencyIsoCode as an input parameter.
-   Component field positions can’t be changed.
-   The component doesn’t support custom fields.
-   To prevent fraudulent activity, we recommend developing guardrails around the users that can access your payments page. We also recommend that your payments page is not the first page in your Experience Cloud site or Lightning page.

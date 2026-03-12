---
title: "Payment Method Handling for Guest Users"
domain: blng-dev
topic: payment-method-handling-for-guest-users
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.941Z
estimatedTokens: 381
keywords: [Payment, Handling, Guest, Users, Billing, package, automatically, creates, PaymentMethod, objects, processing, payments, Lightning, Platform, site]
---

# Payment Method Handling for Guest Users

> The Billing package automatically creates PaymentMethod objects when processing payments
  from guest users through the Lightning Platform Payment site.

# Payment Method Handling for Guest Users

The Billing package automatically creates PaymentMethod objects when processing payments from guest users through the Lightning Platform Payment site.

You don't need to create PaymentMethod records in your PaymentGateway package code. The Billing package handles these tasks.

-   Creation of PaymentMethod objects for guest user transactions
-   Association of payment methods with the appropriate customer records
-   Management of payment method lifecycle based on the **Save credit card details** setting

Keep these considerations in mind when the **Save credit card details** package setting is disabled.

-   The Billing package still creates a PaymentMethod object for the transaction.
-   The payment method is used for the current transaction only.
-   The payment method may not be accessible to the guest user for future transactions, depending on your configuration.
-   No additional code is required in your PaymentGateway package to handle this scenario.

Keep these considerations in mind when fields related to saving payment methods are absent from the payment form or not selected by the user.

-   The Billing package automatically determines whether to persist the PaymentMethod object based on the package settings and transaction context.
-   Your PaymentGateway package code doesn't need to check for the presence of these fields or handle their absence.
-   The Billing package manages the PaymentMethod object creation and persistence logic internally.

---
title: "How Strong Customer Authentication Affects AppExchange Checkout"
domain: packagingGuide
topic: how-strong-customer-authentication-affects-appexchange-checkout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:20.362Z
estimatedTokens: 593
keywords: [How, Strong, Customer, Authentication, Affects, AppExchange, Checkout, SCA, automatically, integrated, payment, experience, European, customers, initial]
---

# How Strong Customer Authentication Affects AppExchange Checkout

> Strong customer authentication (SCA) is automatically integrated into the Checkout
        payment experience for European customers. Learn how SCA affects the initial purchase and
        recurring payments.

# How Strong Customer Authentication Affects AppExchange Checkout

Strong customer authentication (SCA) is automatically integrated into the Checkout payment experience for European customers. Learn how SCA affects the initial purchase and recurring payments.

## Initial Purchase

The initial purchase is your customer’s first Checkout transaction. In the initial purchase, the customer uses the Checkout wizard to select a payment plan and method, provide billing and contact information, and confirm the payment. In regions that require SCA, the Checkout wizard adds an identity verification step.

After the customer clicks **Purchase**, Checkout prompts them to verify their identity. For example, they can be asked to enter a verification code that’s sent to the mobile device associated with their payment method. This verification step uses the 3D Secure 2 protocol and is managed by Checkout's payment partner, Stripe. After the customer verifies their identity, Stripe processes the payment.

![The confirmation step of the Checkout wizard with an orange circle around the Purchase button](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_sca_initial_purchase_usst.png&folder=packagingGuide)

## Recurring Payments

Customers can also make recurring payments, either monthly or annually. In regions that require SCA, the first payment is the initial purchase, and the customer can be asked to verify their identity to complete the transaction. Checkout attempts to process subsequent payments with the billing details provided in the initial purchase, per the terms and conditions of the subscription. In regions that require SCA, the customer’s bank or credit card issuer reviews the payment attempt and determines whether to request customer authorization.

If customer authorization is required, Stripe marks the payment as failed. The next time the customer logs in to AppExchange, Checkout prompts the customer to authorize the payment (1). The customer clicks **Authorize** (2), then verifies their identity using the same process as the initial purchase. After the customer verifies their identity, Stripe processes the payment.

![The payment authorization prompt with an orange circle around the Authorize button](/docs/resources/img/en-us/260.0?doc_id=appexchange%2Fimages%2Fcheckout_sca_authorize_usst.png&folder=packagingGuide)

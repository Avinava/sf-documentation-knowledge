---
title: "PaymentsService User Experience"
domain: mobile-offline
topic: paymentsservice-user-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:57.168Z
estimatedTokens: 156
keywords: [PaymentsService, User, Experience, component, deliver, any, want, follow, common, flow, calls, Payment, Service]
---

# PaymentsService User Experience

> Your component can deliver any user experience you want, but you must follow a common
    flow for any component that calls for a Payment Service.

# PaymentsService User Experience

Your component can deliver any user experience you want, but you must follow a common flow for any component that calls for a Payment Service.

The user performs an action that triggers a collect payment flow. The operating system provides messages for the user to tap their credit card in the right direction. If the collect payment method isn’t successful, the plug-in provides an error message. If it’s successful, a PaymentIntent object is returned to the user, so they can perform any other follow-up actions on the Stripe dashboard, such as refund or cancel the payment, if needed.

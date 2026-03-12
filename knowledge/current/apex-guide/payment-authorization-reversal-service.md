---
title: "Payment Authorization Reversal Service"
domain: apex-guide
topic: payment-authorization-reversal-service
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.853Z
estimatedTokens: 241
keywords: [Payment, Authorization, Reversal, Service, transaction, negates, releasing, hold, funds, customer’s]
---

# Payment Authorization Reversal Service

> An authorization reversal is a transaction that negates an authorization by releasing
  the hold on funds in a customer’s payment method.

# Payment Authorization Reversal Service

An authorization reversal is a transaction that negates an authorization by releasing the hold on funds in a customer’s payment method.

-   **[Authorization Reversal Apex Class Implementation](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_rev_service_apex_imp.htm)**
    The Authorization Reversal Service uses the AuthorizationReversalRequest and AuthorizationReversalResponse classes to manage the creation and storage of authorization reversal information. Implement these classes in your payment gateway adapter.
-   **[Payment Authorization Reversal Service API](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_rev_service_api.htm)**
    An authorization reversal is a transaction that negates an authorization by releasing the hold on funds in a customer’s payment method. Use the authorization reversal service to provide users with the ability to reverse an outstanding payment authorization.

## Related Topics

- Authorization Reversal Apex Class Implementation (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_rev_service_apex_imp.htm)
- Payment Authorization Reversal Service API (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_rev_service_api.htm)

---
title: "Use Cases for the CommercePayments Namespace"
domain: apex-guide
topic: use-cases-for-the-commercepayments-namespace
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:32.880Z
estimatedTokens: 741
namespace: CommercePayments
keywords: [Cases, CommercePayments, Review, walkthroughs, material, platform]
---

# Use Cases for the CommercePayments Namespace

> Review walkthroughs, use cases, and reference material for  the CommercePayments platform.

**Namespace:** `CommercePayments`

# Use Cases for the CommercePayments Namespace

Review walkthroughs, use cases, and reference material for the CommercePayments platform.

To review CommercePayments class reference docs, go to [CommercePayments Namespace](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_namespace_commercepayments.htm).

-   **[Payment Gateway Adapters](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_adapter_intro.htm)**
    Payment gateway adapters represent the bridge between your payments platform in Salesforce and an external payment gateway.
-   **[Payment Authorization Reversal Service](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_rev_service_intro.htm)**
    An authorization reversal is a transaction that negates an authorization by releasing the hold on funds in a customer’s payment method.
-   **[Tokenization Service](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_tokenization_service_intro.htm)**
    The credit card tokenization process replaces sensitive customer information with a one-time algorithmically generated number, called a token, used during the payment transaction. Salesforce stores the token and then uses that token as a representation of the credit card used for transactions. The token lets you store information about the credit card without storing sensitive customer data, such as credit card numbers, in Salesforce.
-   **[Alternative Payment Methods](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_alt_payment_methods.htm)**
    An alternative payment method allows customers to store and represent payment method information not represented by another pre-defined payment method such as CardPaymentMethod or DigitalWallet. Common examples of alternative payment methods include CashOnDeliver, Klarna, and Direct Debit. Alternative payment methods are available in API v51.0 and later.
-   **[Process Payments](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_process_payments.htm)**
    Process a payment in the payment gateway.
-   **[Process Refund](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_process_refund.htm)**
    Process a refund in the payment gateway.
-   **[Idempotency Guidelines](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_idempotency_guidelines.htm)**
    Idempotency represents the ability of a payment gateway to recognize duplicate requests submitted either in error or maliciously, and then process the duplicate requests accordingly. When working with an idempotent gateway, consider these important guidelines.
-   **[Sample Payment Gateway Implementation for CommercePayments](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_ref_github_repo.htm)**
    We’ve created a GitHub repository containing code samples for a sample Payeezy payment gateway implementation with the CommercePayments namespace. Review the sample code if you need help with configuring your payment gateway implementation.

## Related Topics

- Payment Gateway Adapters (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_adapter_intro.htm)
- Payment Authorization Reversal Service (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_rev_service_intro.htm)
- Tokenization Service (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_tokenization_service_intro.htm)
- Alternative Payment Methods (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_alt_payment_methods.htm)
- Process Payments (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_process_payments.htm)
- Process Refund (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_process_refund.htm)
- Idempotency Guidelines (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_idempotency_guidelines.htm)
- Sample Payment Gateway Implementation for CommercePayments (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_ref_github_repo.htm)

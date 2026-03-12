---
title: "Payment Gateway Adapters"
domain: apex-guide
topic: payment-gateway-adapters
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T05:14:32.766Z
estimatedTokens: 505
keywords: [Payment, Gateway, Adapters, gateway, adapters, represent, bridge, between, payments, platform, Salesforce, external, payment, gateway.]
---

# Payment Gateway Adapters

> Payment gateway adapters represent the bridge between your payments platform in
  Salesforce and an external payment gateway.

# Payment Gateway Adapters

Payment gateway adapters represent the bridge between your payments platform in Salesforce and an external payment gateway.

-   **[Building a Synchronous Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_sync_adapter_concept.htm)**
    In synchronous payment configurations, the Salesforce payment platform sends transaction information to the gateway, and then waits for a gateway response that contains the final transaction status. Salesforce creates a transaction only if the transaction is successful in the gateway.
-   **[Set Up a Synchronous Payment Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_sync_adapter_setup.htm)**
    For payments transactions, you can configure Salesforce to interface with a synchronous payment gateway adapter.
-   **[Building an Asynchronous Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_async_adapter_concept.htm)**
    In an asynchronous payments configuration, the payments platform first sends transaction information to the gateway. The gateway responds with an acknowledgment that it received the transaction, and then the platform creates a pending transaction. The gateway sends a notification, which contains the final transaction status. The platform then updates the transaction’s status accordingly.
-   **[Set Up an Asynchronous Payment Gateway Adapter](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_async_adapter_setup.htm)**
    For payments transactions, you can configure Salesforce to interface with an asynchronous payment gateway adapter.
-   **[Builder Examples for Payment Gateway Adapters](atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_builder_examples.htm)**
    The final sections of a payment gateway adapter should define how the adapter creates requests and responses. The implementation of these classes can vary widely based on your gateway and platform requirements. We’ve provided several generics examples for review.

## Related Topics

- Building a Synchronous Gateway Adapter (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_sync_adapter_concept.htm)
- Set Up a Synchronous Payment Gateway Adapter (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_sync_adapter_setup.htm)
- Building an Asynchronous Gateway Adapter (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_async_adapter_concept.htm)
- Set Up an Asynchronous Payment Gateway Adapter (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_async_adapter_setup.htm)
- Builder Examples for Payment Gateway Adapters (atlas.en-us.apexcode.meta/apexcode/apex_commercepayments_builder_examples.htm)

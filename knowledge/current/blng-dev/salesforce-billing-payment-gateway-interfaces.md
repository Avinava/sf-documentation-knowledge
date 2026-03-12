---
title: "Salesforce Billing Payment Gateway Interfaces"
domain: blng-dev
topic: salesforce-billing-payment-gateway-interfaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.946Z
estimatedTokens: 334
keywords: [Salesforce, Billing, Payment, Gateway, Interfaces, package, requires, three, communicate, user-defined, PaymentGatewayAPI, implements, process, different, transaction]
---

# Salesforce Billing Payment Gateway Interfaces

> A payment gateway package requires three interfaces to communicate with Salesforce
  Billing. Each interface contains methods that the user-defined
  PaymentGatewayAPI
  class implements to process different types of transaction actions.

# Salesforce Billing Payment Gateway Interfaces

A payment gateway package requires three interfaces to communicate with Salesforce Billing. Each interface contains methods that the user-defined PaymentGatewayAPI class implements to process different types of transaction actions.

-   **[Creating a PaymentGateway Interface](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_create_payment_gateway_interface.htm)**
    The PaymentGateway interface contains several basic transaction methods that the PaymentGatewayAPI class implements to handle gateway requests. The methods allow PaymentGatewayAPI to create a credit card token, process a payment charge, void a payment, authorize a payment, and refund a payment.
-   **[Creating a PaymentGateways Interface](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_create_payment_gateways_interface.htm)**
    The PaymentGateways interface uses the processPayments method, which evaluates the payment transaction’s type to perform a payment action.
-   **[Creating a PaymentGatewayStatus Interface](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_create_payment_gateway_status_interface.htm)**
    Salesforce Billing implements the PaymentGatewayStatus interface to populate the TransactionResult’s GatewayStatus enum with the value of the return code that the external gateway set in transactionResult.

## Related Topics

- Creating a PaymentGateway Interface (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_create_payment_gateway_interface.htm)
- Creating a PaymentGateways Interface (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_create_payment_gateways_interface.htm)
- Creating a PaymentGatewayStatus Interface (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_create_payment_gateway_status_interface.htm)

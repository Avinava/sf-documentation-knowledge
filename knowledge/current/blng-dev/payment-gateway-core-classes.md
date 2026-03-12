---
title: "Payment Gateway Core Classes"
domain: blng-dev
topic: payment-gateway-core-classes
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.921Z
estimatedTokens: 618
keywords: [Payment, Gateway, Core, Classes, references, receive, transaction, Salesforce, Billing, They, can't, modified]
---

# Payment Gateway Core Classes

> Your payment gateway references these classes to receive transaction information from
  Salesforce Billing. They can't be modified.

# Payment Gateway Core Classes

Your payment gateway references these classes to receive transaction information from Salesforce Billing. They can't be modified.

The following are the blng namespace classes required for payment gateway integration.

-   **[InputParameter Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm#apex_class_System_InputParameter)**
    Captures and retrieves additional parameters to be sent during the capture payment transaction.
-   **[OutputResult Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm#apex_class_System_OutputResult)**
    Stores and shows the results of the capture payment request made to the payment gateway.
-   **[PaymentGateway Interface](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_interface_blng_PaymentGateway)**
    Interface for standard payment transaction operations such as voids and refunds.
-   **[PaymentGateways Interface](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm#apex_interface_blng_PaymentGateways)**
    Interface with common payment gateway operation across all gateways.
-   **[PaymentGatewayParameter Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_PaymentGatewayParameter.htm#apex_class_blng_PaymentGatewayParameter)**
    Global parameter class for the payment gateway.
-   **[PaymentGatewayStatus Interface](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm#apex_interface_blng_PaymentGatewayStatus)**
    Interface to populate the TransactionResult value object from the gateway response.
-   **[TransactionAPI Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_class_blng_TransactionAPI)**
    The TransactionAPI class includes global methods for several payment features.
-   **[TransactionParameter Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm#apex_class_blng_TransactionParameter)**
    Acts as a container to store calculation-specific information.
-   **[TransactionResult Class](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionResult.htm#apex_class_blng_TransactionResult)**
    Holds the result of the transaction.
-   **[TransactionResult.GatewayStatusType Enum](atlas.en-us.blng_dev.meta/blng_dev/apex_enum_blng_TransactionResult.GatewayStatusType.htm)**
    An enum defining the appropriate gateway status values returned by the payment gateway.

## Related Topics

- InputParameter Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm)
- OutputResult Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm)
- PaymentGateway Interface (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- PaymentGateways Interface (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm)
- PaymentGatewayParameter Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_PaymentGatewayParameter.htm)
- PaymentGatewayStatus Interface (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm)
- TransactionAPI Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- TransactionParameter Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionParameter.htm)
- TransactionResult Class (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionResult.htm)
- TransactionResult.GatewayStatusType Enum (atlas.en-us.blng_dev.meta/blng_dev/apex_enum_blng_TransactionResult.GatewayStatusType.htm)

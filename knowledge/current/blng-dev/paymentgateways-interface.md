---
title: "PaymentGateways Interface"
domain: blng-dev
topic: paymentgateways-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.193Z
estimatedTokens: 428
keywords: [PaymentGateways, common, payment, gateway, operation, across, gateways, Usage, processPayments, mapOfTransactionParameterById, paymentGatewayParameter, Implementation]
---

# PaymentGateways Interface

> Interface with common payment gateway operation across all
      gateways.

# PaymentGateways Interface

Interface with common payment gateway operation across all gateways.

## Namespace

blng

## Usage

Test.

-   **[PaymentGateways Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm#apex_blng_PaymentGateways_methods)**

-   **[PaymentGateways Example Implementation](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm#apex_interface_blng_PaymentGateways_Example)**


## PaymentGateways Methods

The following are methods for PaymentGateways.

-   **[processPayments(mapOfTransactionParameterById, paymentGatewayParameter)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm#apex_blng_PaymentGateways_processPayments)**
    Generates a token.

### processPayments(mapOfTransactionParameterById, paymentGatewayParameter)

Generates a token.

#### Signature

global Map<String, TransactionResult> processPayments(Map<String, TransactionParameter> mapOfTransactionParameterById, PaymentGatewayParameter paymentGatewayParameter)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

paymentGatewayParameter

Type: PaymentGatewayParameter

#### Return Value

Type: Map<String, TransactionResult>

## PaymentGateways Example Implementation

The [YourGatewayAPI](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm "YourGatewayAPI is a base class that connects the Salesforce Billing package to your payment gateway package. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.") class implements the PaymentGateway, PaymentGateways, and PaymentGatewayStatus interfaces.

## Related Topics

- PaymentGateways Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm)
- PaymentGateways Example Implementation (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm)
- processPayments(mapOfTransactionParameterById, paymentGatewayParameter) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateways.htm)
- YourGatewayAPI (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm)

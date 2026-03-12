---
title: "PaymentGatewayStatus Interface"
domain: blng-dev
topic: paymentgatewaystatus-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.189Z
estimatedTokens: 452
keywords: [PaymentGatewayStatus, populate, TransactionResult, gateway, Usage, PopulateGatewayStatus, Implementation]
---

# PaymentGatewayStatus Interface

> Interface to populate the TransactionResult value object from the
      gateway response.

# PaymentGatewayStatus Interface

Interface to populate the TransactionResult value object from the gateway response.

## Namespace

blng

## Usage

This method takes in the transaction result object and defines its attributes.

-   **[PaymentGatewayStatus Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm#apex_blng_PaymentGatewayStatus_methods)**

-   **[PaymentGatewayStatus Example Implementation](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm#apex_interface_blng_PaymentGatewayStatus_Example)**


## PaymentGatewayStatus Methods

The following are methods for PaymentGatewayStatus.

-   **[PopulateGatewayStatus(transactionResult)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm#apex_blng_PaymentGatewayStatus_PopulateGatewayStatus)**
    Populates the GatewayStatus enum on the TransactionResult, given return codes that are already set in the TransactionResults.

### PopulateGatewayStatus(transactionResult)

Populates the GatewayStatus enum on the TransactionResult, given return codes that are already set in the TransactionResults.

#### Signature

global void PopulateGatewayStatus(TransactionResult transationResult)

#### Parameters

transationResult

Type: TransactionResult

#### Return Value

Type: Void

## PaymentGatewayStatus Example Implementation

The [YourGatewayAPI](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm "YourGatewayAPI is a base class that connects the Salesforce Billing package to your payment gateway package. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.") class implements the PaymentGateway, PaymentGateways, and PaymentGatewayStatus interfaces.

## Related Topics

- PaymentGatewayStatus Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm)
- PaymentGatewayStatus Example Implementation (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm)
- PopulateGatewayStatus(transactionResult) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGatewayStatus.htm)
- YourGatewayAPI (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm)

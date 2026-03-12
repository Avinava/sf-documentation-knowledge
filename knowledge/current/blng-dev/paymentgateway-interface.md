---
title: "PaymentGateway Interface"
domain: blng-dev
topic: paymentgateway-interface
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.186Z
estimatedTokens: 1304
keywords: [PaymentGateway, standard, payment, transaction, operations, voids, refunds, Usage, generateToken, mapOfTransactionParameterById, chargeTransaction, voidTransaction, authorizeTransaction, refundTransaction, Implementation]
---

# PaymentGateway Interface

> Interface for standard payment transaction operations such as voids
      and refunds.

# PaymentGateway Interface

Interface for standard payment transaction operations such as voids and refunds.

## Namespace

blng

## Usage

A gateway implementor uses logic such as paymentGatewayParameter.getTransactionType() == "generateToken" and calls underlying payment transaction functions. Similar logic applies for voids, refunds, and other actions.

-   **[PaymentGateway Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_blng_PaymentGateway_methods)**

-   **[PaymentGateway Example Implementation](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_interface_blng_PaymentGateway_Example)**


## PaymentGateway Methods

The following are methods for PaymentGateway.

-   **[generateToken(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_blng_PaymentGateway_generateToken)**
    Generates a token for a payment method.
-   **[chargeTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_blng_PaymentGateway_chargeTransaction)**
    Authorize and capture a credit card payment and ACH payment.
-   **[voidTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_blng_PaymentGateway_voidTransaction)**
    The Void transaction type can cancel either an original transaction or a transaction that hasn't been settled.
-   **[authorizeTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_blng_PaymentGateway_authorizeTransaction)**
    Authorizes a credit card payment. To perform a charge transaction, the user must follow the authorization with a capture transaction.
-   **[refundTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm#apex_blng_PaymentGateway_refundTransaction)**
    Refund a customer for a transaction that wsa successfully settled through the payment gateway.

### generateToken(mapOfTransactionParameterById)

Generates a token for a payment method.

#### Signature

global Map<String, TransactionResult> generateToken(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Map of parameter is based on the payment gateway.

#### Return Value

Type: Map<String, TransactionResult>

List of Transaction Results : List<TransactionResult>

### chargeTransaction(mapOfTransactionParameterById)

Authorize and capture a credit card payment and ACH payment.

#### Signature

global Map<String, TransactionResult> chargeTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Map of parameter is based on the payment gateway.

#### Return Value

Type: Map<String, TransactionResult>

List of Transaction Results : List<TransactionResult>

### voidTransaction(mapOfTransactionParameterById)

The Void transaction type can cancel either an original transaction or a transaction that hasn't been settled.

#### Signature

global Map<String, TransactionResult> voidTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: Map<String, TransactionResult>

List of Transaction Results : List<TransactionResult>

### authorizeTransaction(mapOfTransactionParameterById)

Authorizes a credit card payment. To perform a charge transaction, the user must follow the authorization with a capture transaction.

#### Signature

global Map<String, TransactionResult> authorizeTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Map of parameter is based on the payment gateway.

#### Return Value

Type: Map<String, TransactionResult>

List of Transaction Results : List<TransactionResult>

### refundTransaction(mapOfTransactionParameterById)

Refund a customer for a transaction that wsa successfully settled through the payment gateway.

#### Signature

public Map<String, TransactionResult> refundTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Map of parameter is based on the payment gateway.

#### Return Value

Type: Map<String, TransactionResult>

List of Transaction Results : List<TransactionResult>

## PaymentGateway Example Implementation

The [YourGatewayAPI](atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm "YourGatewayAPI is a base class that connects the Salesforce Billing package to your payment gateway package. All user gateway API classes will be different based on your needs. However, we've provided a template that you can use to help create your own.") class implements the PaymentGateway, PaymentGateways, and PaymentGatewayStatus interfaces.

## Related Topics

- PaymentGateway Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- PaymentGateway Example Implementation (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- generateToken(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- chargeTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- voidTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- authorizeTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- refundTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_interface_blng_PaymentGateway.htm)
- YourGatewayAPI (atlas.en-us.blng_dev.meta/blng_dev/apex_blng_yourgatewayapi.htm)

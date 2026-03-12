---
title: "TransactionAPI Class"
domain: blng-dev
topic: transactionapi-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.111Z
estimatedTokens: 3119
keywords: [TransactionAPI, includes, several, payment, features, generateToken, mapOfTransactionParameterById, authorizeTransaction, captureTransaction, captureInputParameters, chargeTransaction, getPaymentStatus, voidTransaction, refundTransaction, nonReferredRefund]
---

# TransactionAPI Class

> The TransactionAPI class includes global methods for several payment
      features.

# TransactionAPI Class

The TransactionAPI class includes global methods for several payment features.

## Namespace

blng

-   **[TransactionAPI Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_methods)**


## TransactionAPI Methods

The following are methods for TransactionAPI.

-   **[generateToken(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_generateToken)**
    Generates a token for a payment method.
-   **[authorizeTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_authorizeTransaction)**
    Authorizes a credit card payment. To perform a charge transaction, the user must follow the authorization with a capture transaction.
-   **[captureTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_captureTransaction)**
    Captures a payment for an authorize transaction.
-   **[captureTransaction(captureInputParameters)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_captureTransaction2)**
    Captures a payment for an authorization transaction using input parameters.
-   **[chargeTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_chargeTransaction)**
    Authorize and capture a credit card payment or ACH payment.
-   **[getPaymentStatus(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_getPaymentStatus)**
    Gets the status of a payment transaction.
-   **[voidTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_voidTransaction)**
    Cancels an original transaction that hasn't been settled.
-   **[refundTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_refundTransaction)**
    Refunds a customer for a transaction that has been succesfully settled through the payment gateway.
-   **[nonReferredRefund(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_nonReferredRefund)**
    Performs a non-referred refund of a credit card payment or an ACH payment.
-   **[voidRefundTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_voidRefundTransaction)**
    Voids an unsettled refund transaction from a credit card payment or ACH payment.
-   **[getRefundStatus(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_getRefundStatus)**
    Gets the status of a refund transaction.
-   **[voidTokenTransaction(mapOfTransactionParameterById)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_voidTokenTransaction)**
    Voids a credit card token.
-   **[refundPayment(listofRefundParameters)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_refundPayment)**
    Refunds a payment.
-   **[resetInvoiceCorrectiveAction(invoices)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_resetInvoiceCorrectiveAction)**
    Unlocks an invoice.
-   **[validateRefundTransactionId(transactionId)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_validateRefundTransactionId)**
    Validates whether a payment transaction can be refunded.
-   **[authorizeTransaction(invoiceID)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_authorizeTransaction_2)**
    Authorizes a payment for an invoice.
-   **[chargeTransaction(invoiceID)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm#apex_blng_TransactionAPI_chargeTransaction_2)**
    Authorizes a payment for an invoice.

### generateToken(mapOfTransactionParameterById)

Generates a token for a payment method.

#### Signature

global static List<TransactionResult> generateToken(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### authorizeTransaction(mapOfTransactionParameterById)

Authorizes a credit card payment. To perform a charge transaction, the user must follow the authorization with a capture transaction.

#### Signature

public static List<TransactionResult> authorizeTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### captureTransaction(mapOfTransactionParameterById)

Captures a payment for an authorize transaction.

#### Signature

global static List<TransactionResult> captureTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### captureTransaction(captureInputParameters)

Captures a payment for an authorization transaction using input parameters.

#### Signature

global static List<CaptureOutputResult> captureTransaction(List<CaptureInputParameter> captureInputParameters)

```

```

#### Parameters

captureInputParameters

Type: List<CaptureInputParameter>

A list of input parameters passed from the CaptureInputParameter class.

#### Return Value

Type: List<[CaptureOutputResult](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm#apex_class_System_CaptureOutputResult "Stores the results of the payment capture request.")\>

### chargeTransaction(mapOfTransactionParameterById)

Authorize and capture a credit card payment or ACH payment.

#### Signature

public static List<TransactionResult> chargeTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### getPaymentStatus(mapOfTransactionParameterById)

Gets the status of a payment transaction.

#### Signature

global static List<TransactionResult> getPaymentStatus(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### voidTransaction(mapOfTransactionParameterById)

Cancels an original transaction that hasn't been settled.

#### Signature

global static List<TransactionResult> voidTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### refundTransaction(mapOfTransactionParameterById)

Refunds a customer for a transaction that has been succesfully settled through the payment gateway.

#### Signature

global static List<TransactionResult> refundTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### nonReferredRefund(mapOfTransactionParameterById)

Performs a non-referred refund of a credit card payment or an ACH payment.

#### Signature

global static List<TransactionResult> nonReferredRefund(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### voidRefundTransaction(mapOfTransactionParameterById)

Voids an unsettled refund transaction from a credit card payment or ACH payment.

#### Signature

global static List<TransactionResult> voidRefundTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### getRefundStatus(mapOfTransactionParameterById)

Gets the status of a refund transaction.

#### Signature

global static List<TransactionResult> getRefundStatus(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### voidTokenTransaction(mapOfTransactionParameterById)

Voids a credit card token.

#### Signature

global static List<TransactionResult> voidTokenTransaction(Map<String, TransactionParameter> mapOfTransactionParameterById)

#### Parameters

mapOfTransactionParameterById

Type: Map<String, TransactionParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### refundPayment(listofRefundParameters)

Refunds a payment.

#### Signature

global static List<TransactionResult> refundPayment(List<RefundParameter> listofRefundParameters)

#### Parameters

listofRefundParameters

Type: List<RefundParameter>

Parameter map is based on the payment gateway.

#### Return Value

Type: List<TransactionResult>

List of Transaction Results : List<TransactionResult>

### resetInvoiceCorrectiveAction(invoices)

Unlocks an invoice.

#### Signature

global static Boolean resetInvoiceCorrectiveAction(List<Invoice\_\_c> invoices)

#### Parameters

invoices

Type: List<Invoice\_\_c>

List of invoices to unlock due to payment issues.

#### Return Value

Type: Boolean

Returns True if invoice update is succesful, otherwise returns False.

### validateRefundTransactionId(transactionId)

Validates whether a payment transaction can be refunded.

#### Signature

global static String validateRefundTransactionId(Id transactionId)

#### Parameters

transactionId

Type: Id

Single transactionId passed to validate whether a refund is allowed.

#### Return Value

Type: String

Returns String values such as the following.

-   PAYMENT\_TRANSACTION\_NO\_GATEWAY\_ID\_MESSAGE - Cannot refund payment transactions without gateway IDs. The invoice has been unlocked.
-   INVALID\_PAYMENT\_TRANSACTION\_FOR\_REFUND\_MESSAGE - Cannot refund payment transaction. This transaction is not currently eligible for refunding.
-   ALLOW\_REFUND\_TRANSACTION - True
-   REFUND\_INVALID\_PAYMENT\_TRANSACTION\_MESSAGE\_ALOHA- Cannot refund invalid transactions or transactions without invoices.

### authorizeTransaction(invoiceID)

Authorizes a payment for an invoice.

#### Signature

global static TransactionResult authorizeTransaction(Id invoiceID)

#### Parameters

invoiceID

Type: Id

#### Return Value

Type: TransactionResult

### chargeTransaction(invoiceID)

Authorizes a payment for an invoice.

#### Signature

global static TransactionResult chargeTransaction(Id invoiceID)

#### Parameters

invoiceID

Type: Id

#### Return Value

Type: TransactionResult

## Code Examples

```apex
blng.TransactionAPI, captureTransaction, [List<CaptureInputParameter>], List<CaptureOutputResult>
```

## Related Topics

- TransactionAPI Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- generateToken(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- authorizeTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- captureTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- captureTransaction(captureInputParameters) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- chargeTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- getPaymentStatus(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- voidTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- refundTransaction(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)
- nonReferredRefund(mapOfTransactionParameterById) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_TransactionAPI.htm)

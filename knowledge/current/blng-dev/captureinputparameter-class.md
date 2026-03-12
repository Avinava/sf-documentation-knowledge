---
title: "CaptureInputParameter Class"
domain: blng-dev
topic: captureinputparameter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.032Z
estimatedTokens: 689
keywords: [CaptureInputParameter, Receives, payment, authorization, record, capture, amount, additional, Salesforce, Billing, setPaymentAuthorization, paymentAuthorization, getPaymentAuthorization, setAmount, getAmount]
---

# CaptureInputParameter Class

> Receives the payment authorization record, payment capture amount, and
      an optional list of additional parameters from Salesforce Billing.

# CaptureInputParameter Class

Receives the payment authorization record, payment capture amount, and an optional list of additional parameters from Salesforce Billing.

## Namespace

blng

## Example

In this example, t CaptureInputParameter receives the payment authorization record from Salesforce Billing, a payment capture amount of 4.23, and additional parameters. The parameters are stored in a list and sent to the TransactionAPI class, which performs the payment capture. The CaptureOutputResult class contains the result of the capture.

```

```

-   **[CaptureInputParameter Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm#apex_System_CaptureInputParameter_methods)**


## CaptureInputParameter Methods

The following are methods for CaptureInputParameter.

-   **[setPaymentAuthorization(paymentAuthorization)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm#apex_System_CaptureInputParameter_setPaymentAuthorization)**
    Sets the ID of the payment authorization.
-   **[getPaymentAuthorization()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm#apex_System_CaptureInputParameter_getPaymentAuthorization)**
    Returns the payment authorization record from Salesforce Billing.
-   **[setAmount(amount)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm#apex_System_CaptureInputParameter_setAmount)**
    Sets the amount of the payment capture.
-   **[getAmount()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm#apex_System_CaptureInputParameter_getAmount)**
    Returns the amount of the payment capture to be performed.

### setPaymentAuthorization(paymentAuthorization)

Sets the ID of the payment authorization.

#### Signature

global static void setPaymentAuthorization(blng\_\_PaymentAuthorization\_\_c paymentAuthorization)

#### Parameters

paymentAuthorization

Type: blng\_\_PaymentAuthorization\_\_c

The payment authorization record from Salesforce Billing.

#### Return Value

Type: void

### getPaymentAuthorization()

Returns the payment authorization record from Salesforce Billing.

#### Signature

global static blng\_\_PaymentAuthorization\_\_c getPaymentAuthorization()

#### Return Value

Type: blng\_\_PaymentAuthorization\_\_c

### setAmount(amount)

Sets the amount of the payment capture.

#### Signature

global static void setAmount(Decimal amount)

#### Parameters

amount

Type: Decimal

The amount of the payment capture. Can be none, part, or all of the payment.

#### Return Value

Type: void

### getAmount()

Returns the amount of the payment capture to be performed.

#### Signature

global static Decimal getAmount()

#### Return Value

Type: Decimal

## Code Examples

```apex
blng.CaptureInputParameter cip = new blng.CaptureInputParameter();
cip.setPaymentAuthorization((blng__PaymentAuthorization__c)myrecord);
cip.setAmount(4.23);
cip.setAdditionalParameters(additionalParams);
List<blng.CaptureInputParameter> lcip = new List<blng.CaptureInputParameter>();
lcip.add(cip);
List<blng.CaptureOutputResult> result = blng.TransactionAPI.captureTransaction(lcip);
system.debug(result[0]);
```

## Related Topics

- CaptureInputParameter Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm)
- setPaymentAuthorization(paymentAuthorization) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm)
- getPaymentAuthorization() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm)
- setAmount(amount) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm)
- getAmount() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm)

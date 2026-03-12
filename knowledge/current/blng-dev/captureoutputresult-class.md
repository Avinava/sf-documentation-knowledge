---
title: "CaptureOutputResult Class"
domain: blng-dev
topic: captureoutputresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:08.039Z
estimatedTokens: 909
keywords: [CaptureOutputResult, Stores, results, payment, capture, setPaymentId, paymentId, getPaymentId, setPaymentTransactionId, paymentTransactionId, getPaymentTransactionId]
---

# CaptureOutputResult Class

> Stores the results of the payment capture request.

# CaptureOutputResult Class

Stores the results of the payment capture request.

## Namespace

blng

## Example

## Example

Request

In this example, CaptureInputParameter receives the payment authorization record from Salesforce Billing, a payment capture amount of 4.23, and additional parameters. The parameters are stored in a list and sent to TransactionAPI , which performs the payment capture. CaptureOutputResult contains information about the capture.

```

```

Success Response

Following a successful payment capture, CaptureOutputResult returns a success response with the IDs of the payment transaction and payment created in Salesforce Billing.

```

```

Failure Response

Following a failed payment capture, CaptureOutputResult returns a failure response with an error message and the ID of the payment transaction created in Salesforce Billing. The payment transaction contains information about the failed gateway communication.

```

```

-   **[CaptureOutputResult Methods](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm#apex_System_CaptureOutputResult_methods)**


## CaptureOutputResult Methods

The following are methods for CaptureOutputResult.

-   **[setPaymentId(paymentId)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm#apex_System_CaptureOutputResult_setPaymentId)**
    Sets the ID of the Salesforce Billing payment record created after a successful capture transaction.
-   **[getPaymentId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm#apex_System_CaptureOutputResult_getPaymentId)**
    Returns the ID of the Salesforce Billing payment record that was created after a successful capture transaction.
-   **[setPaymentTransactionId(paymentTransactionId)](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm#apex_System_CaptureOutputResult_setPaymentTransactionId)**
    Sets the ID of the Salesforce Billing payment transaction record that was created after a successful capture transaction.
-   **[getPaymentTransactionId()](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm#apex_System_CaptureOutputResult_getPaymentTransactionId)**
    Returns the ID of the Salesforce Billing payment transaction record created after a successful capture transaction.

### setPaymentId(paymentId)

Sets the ID of the Salesforce Billing payment record created after a successful capture transaction.

#### Signature

global static void setPaymentId(Id paymentId)

#### Parameters

paymentId

Type: Id

ID of the payment record created in Salesforce Billing. The payment record stores information about the payment.

#### Return Value

Type: void

### getPaymentId()

Returns the ID of the Salesforce Billing payment record that was created after a successful capture transaction.

#### Signature

global static Id getPaymentId()

#### Return Value

Type: Id

### setPaymentTransactionId(paymentTransactionId)

Sets the ID of the Salesforce Billing payment transaction record that was created after a successful capture transaction.

#### Signature

public static void setPaymentTransactionId(Id paymentTransactionId)

#### Parameters

paymentTransactionId

Type: Id

ID of the payment transaction record created in Salesforce Billing. This record stores the results of the communication with the payment gateway.

#### Return Value

Type: void

### getPaymentTransactionId()

Returns the ID of the Salesforce Billing payment transaction record created after a successful capture transaction.

#### Signature

global static Id getPaymentTransactionId()

#### Return Value

Type: Id

## Code Examples

```apex
String authId = 'a1wxxxxxxxxxxxxxxx';
Map<String, Schema.SObjectField> fieldMap = blng__PaymentAuthorization__c.sObjectType.getDescribe().fields.getMap();
Set<String> fieldNames = fieldMap.keySet();
SObject myrecord = Database.query('select ' + String.join((Iterable<String>)fieldNames, ',') + ' from blng__PaymentAuthorization__c Where Id = \''+authId+'\'');
Map<String,String> additionalParams = new Map<String,String>();
additionalParams.put('merchantReferenceCode','demoCapture');

blng.CaptureInputParameter cip = new blng.CaptureInputParameter();
cip.setPaymentAuthorization((blng__PaymentAuthorization__c)myrecord);
cip.setAmount(4.23);
cip.setAdditionalParameters(additionalParams);
List<blng.CaptureInputParameter> lcip = new List<blng.CaptureInputParameter>();
lcip.add(cip);
List<blng.CaptureOutputResult> result = blng.TransactionAPI.captureTransaction(lcip);
system.debug(result[0]);
```

```
[CaptureOutputResult.errorMessage=null, CaptureOutputResult.isSuccess=true, 
paymentId=a25xxxxxxxxxxxxxxx, paymentTransactionId=a24xxxxxxxxxxxxxxx]
```

```
[CaptureOutputResult.errorMessage=Invalid data. c:authRequestID, 
CaptureOutputResult.isSuccess=false, paymentId=null, paymentTransactionId=a24xxxxxxxxxxxxxxx]
```

## Related Topics

- CaptureOutputResult Methods (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm)
- setPaymentId(paymentId) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm)
- getPaymentId() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm)
- setPaymentTransactionId(paymentTransactionId) (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm)
- getPaymentTransactionId() (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm)

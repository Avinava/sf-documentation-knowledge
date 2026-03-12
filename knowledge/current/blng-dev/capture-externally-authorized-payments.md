---
title: "Capture Externally Authorized Payments"
domain: blng-dev
topic: capture-externally-authorized-payments
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:07.886Z
estimatedTokens: 1455
keywords: [Capture, Externally, Authorized, Payments, Authorize, external, system, payment, Salesforce, Billing, Transaction, API, manage, lifecycle, settle]
---

# Capture Externally Authorized Payments

> Authorize payments in an external system,  then capture the payment in Salesforce
  Billing using our Capture Transaction API methods. You can then use Salesforce Billing to manage
  the payment lifecycle and settle invoices.

# Capture Externally Authorized Payments

Authorize payments in an external system, then capture the payment in Salesforce Billing using our Capture Transaction API methods. You can then use Salesforce Billing to manage the payment lifecycle and settle invoices.

| Available in: Salesforce Billing Winter '21 and later |
| --- |


Delayed capture is useful when the payment is authorized at the time of sale and settled after an event occurs. For example, you can capture a payment after a subscription is provisioned or an item is delivered.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=blng_dev)

#### Important

Our Capture Payment API works out of the box with the Salesforce Billing Cybersource gateway integration package. Customers using other payment gateways must work with their payment gateway vendors to extend the gateway integration packages to the Capture Payment API.

## Managing Payment Authorizations

Salesforce Billing doesn’t process payment authorizations, but you can store information from an external authorization in a Salesforce Billing payment authorization record. To store external authorization information in Salesforce, add information from the external authorization to the following fields in the Salesforce Billing payment authorization record:

-   Account ID
-   Original Amount
-   Currency ISO Code (for multi-currency orgs only)
-   Payment Gateway ID
    -   Use the ID of the Salesforce Billing payment gateway record that you use for storing payment capture information. The payment gateway record must have the same merchant credentials used to process the external payment authorization.
-   Gateway Reference Number
    -   The payment gateway supplies the reference number.
-   Status this field must have the value Processed

## Calling the Capture Transaction API

After you’ve created a payment authorization, you can pass it to the Capture Transaction API. To call the Capture Transaction API, add the following method to your PaymentGateway Apex class.

```

```

The CaptureTransaction API accepts information through the CaptureInputParameter class.

| Parameter | Description | Type | Required |
| --- | --- | --- | --- |
| PaymentAuthorization | ID of the payment authorization record from Salesforce Billing. | ID | Yes |
| captureAmount | Amount of payment to capture from the payment. | Decimal | Yes |
| additionalParameters | If your capture request requires more information, you can provide a map of additional key-value pairs to the gateway adapter | Map<String, String> | No |

The CaptureOutputResult class returns the results of your capture request. If you successfully capture the payment, Salesforce Billing creates a posted payment record related to your payment authorization. The CaptureTransaction API also sends a capture success message. If the capture fails, the CaptureTransaction API sends a capture failure message.

| Parameter | Description |
| --- | --- |
| isSuccess | Shows whether the payment capture request succeeded. |
| paymentID | The Salesforce Billing payment record that the CaptureAPI created as a result of successfully capturing a payment from the gateway. |
| paymentTransactionID | The Salesforce Billing payment transaction record containing information about the gateway interaction for the capture request. |
| errorMessage | If the payment capture was unsuccessful, contains information about the error. |

## Permissions

To perform a capture transaction, users require access to the following fields.

Payment

Write access on the following fields:

-   Account
-   Amount
-   Status
-   Payment Authorization
-   Payment Gateway
-   Payment Transaction
-   Payment Gateway ID

Payment Transaction

Write access on the following fields:

-   Account
-   Amount
-   Type
-   Source Transaction ID
-   Gateway Request
-   Gateway Response
-   Payment Gateway
-   Gateway Status
-   Response
-   Response Code
-   Response Message
-   Payment Gateway ID
-   Gateway Date
-   Status

## Referenced Classes

-   [CaptureInputParameter](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm#apex_class_System_CaptureInputParameter "Receives the payment authorization record, payment capture amount, and an optional list of additional parameters from Salesforce Billing.")
-   [InputParameter](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm#apex_class_System_InputParameter "Captures and retrieves additional parameters to be sent during the capture payment transaction.")
-   [CaptureOutputResult](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm#apex_class_System_CaptureOutputResult "Stores the results of the payment capture request.")
-   [OutputResult](atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm#apex_class_System_OutputResult "Stores and shows the results of the capture payment request made to the payment gateway.")

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

## Code Examples

```apex
List<blng.OutputResult> result = blng.TransactionAPI.captureTransaction(lcip);
```

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

- CaptureInputParameter (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureInputParameter.htm)
- InputParameter (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_InputParameter.htm)
- CaptureOutputResult (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_CaptureOutputResult.htm)
- OutputResult (atlas.en-us.blng_dev.meta/blng_dev/apex_class_blng_OutputResult.htm)

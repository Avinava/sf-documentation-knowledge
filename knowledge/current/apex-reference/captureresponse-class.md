---
title: "CaptureResponse Class"
domain: apex-reference
topic: captureresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.312Z
estimatedTokens: 2029
namespace: CommercePayments
keywords: [CaptureResponse, payment, gateway, adapter, capture, extends, AbstractResponse, inherits, Usage, setAmount, amount, setAsync, async, setGatewayAvsCode, gatewayAvsCode]
---

# CaptureResponse Class

> The payment gateway adapter sends this response for the capture
      request type. This class extends AbstractResponse and
      inherits its methods.

**Namespace:** `CommercePayments`

# CaptureResponse Class

The payment gateway adapter sends this response for the capture request type. This class extends AbstractResponse and inherits its methods.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

You must specify the CommercePayments namespace when creating an instance of this class. The constructor of this class takes no arguments. For example:

CommercePayments.Capture Response ctr = new CommercePayments.CaptureResponse();

-   **[CaptureResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_methods)**


## CaptureResponse Methods

The following are methods for CaptureResponse.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setAmount)**
    Sets the transaction amount.
-   **[setAsync(async)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commercepayments_CaptureResponse_setAsync)**
    Indicates whether the payment gateway adapter used in the payment capture was asynchronous (True) or synchronous (False).
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setGatewayAvsCode)**
    Sets the payment gateway’s AVS (address verification system) code.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setGatewayDate)**
    Sets the payment gateway’s date.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setGatewayMessage)**
    Sets information or messages that the gateway returned.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setGatewayReferenceDetails)**
    Sets the payment gateway’s reference details.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setGatewayReferenceNumber)**
    Sets the payment gateway’s reference number.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setGatewayResultCode)**
    Sets the payment gateway’s result code.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setGatewayResultCodeDescription)**
    Sets the payment gateway’s result code description.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm#apex_commerce_payments_CaptureResponse_setSalesforceResultCodeInfo)**
    Sets Salesforce result code information.

### setAmount(amount)

Sets the transaction amount.

#### Signature

global void setAmount(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount to be debited or captured.

#### Return Value

Type: void

### setAsync(async)

Indicates whether the payment gateway adapter used in the payment capture was asynchronous (True) or synchronous (False).

#### Signature

global void setAsync(Boolean async)

#### Parameters

async

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setGatewayAvsCode(gatewayAvsCode)

Sets the payment gateway’s AVS (address verification system) code.

#### Signature

global void setGatewayAvsCode(String gatewayAvsCode)

#### Parameters

gatewayAvsCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Payment gateways that use an AVS system return this code.

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the payment gateway’s date.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date that communication happened with the gateway.

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets information or messages that the gateway returned.

#### Signature

global void setGatewayMessage(String gatewayMessage)

#### Parameters

gatewayMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Information or error messages returned by the gateway.

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Sets the payment gateway’s reference details.

#### Signature

global void setGatewayReferenceDetails(String gatewayReferenceDetails)

#### Parameters

gatewayReferenceDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Provides information about the gateway communication.

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets the payment gateway’s reference number.

#### Signature

global void setGatewayReferenceNumber(String gatewayReferenceNumber)

#### Parameters

gatewayReferenceNumber

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Unique transaction ID created by the payment gateway.

#### Return Value

Type: void

### setGatewayResultCode(gatewayResultCode)

Sets the payment gateway’s result code.

#### Signature

global void setGatewayResultCode(String gatewayResultCode)

#### Parameters

gatewayResultCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The gateway result code. You must map this to a Salesforce result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets the payment gateway’s result code description.

#### Signature

global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)

#### Parameters

gatewayResultCodeDescription

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the GatewayResultCode. Provides additional context about the result code that the gateway returned.

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets Salesforce result code information.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

[SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")Type: commercepayments.SalesforceResultCodeInfo

Description of the Salesforce result code value.

#### Return Value

Type: void

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- CaptureResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setAsync(async) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setGatewayReferenceDetails(gatewayReferenceDetails) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setGatewayReferenceNumber(gatewayReferenceNumber) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)
- setGatewayResultCode(gatewayResultCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureResponse.htm)

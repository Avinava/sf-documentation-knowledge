---
title: "ReferencedRefundResponse Class"
domain: apex-reference
topic: referencedrefundresponse-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.068Z
estimatedTokens: 2083
namespace: CommercePayments
keywords: [ReferencedRefundResponse, payment, gateway, adapter, sends, response, ReferencedRefund, request, type., Usage, setAmount, amount, setAsync, async, setGatewayAvsCode, gatewayAvsCode, setGatewayDate, gatewayDate, setGatewayMessage, gatewayMessage]
---

# ReferencedRefundResponse Class

> The payment gateway adapter sends this response for the ReferencedRefund request type.

**Namespace:** `CommercePayments`

# ReferencedRefundResponse Class

The payment gateway adapter sends this response for the ReferencedRefund request type.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

The constructor of this class takes no arguments. For example:

CommercePayments.ReferencedRefundResponse refr = new CommercePayments.ReferencedRefundResponse();

-   **[ReferencedRefundResponse Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_methods)**


## ReferencedRefundResponse Methods

The following are methods for ReferencedRefundResponse.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setAmount)**
    Sets the transaction amount. The value must be a postive number.
-   **[setAsync(async)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commercepayments_ReferencedRefundResponse_setAsync)**
    Sets whether the payment capture or authorization is asynchronous (True) or synchronous (False). If True, then the payment refund record created has a status of Pending.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayAvsCode)**
    Sets the payment gateway’s address verification system (AVS) code.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayDate)**
    Sets the payment gateway’s date.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayMessage)**
    Sets information or messages that the gateway returned.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayReferenceDetails)**
    Sets the payment gateway’s reference details.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayReferenceNumber)**
    Sets the payment gateway’s reference number.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayResultCode)**
    Sets the payment gateway’s result code.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setGatewayResultCodeDescription)**
    Sets the payment gateway’s result code description.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm#apex_commerce_payments_ReferencedRefundResponse_setSalesforceResultCodeInfo)**
    Set the Salesforce result code info.

### setAmount(amount)

Sets the transaction amount. The value must be a postive number.

#### Signature

global void setAmount(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount to be debited or captured.

#### Return Value

Type: void

### setAsync(async)

Sets whether the payment capture or authorization is asynchronous (True) or synchronous (False). If True, then the payment refund record created has a status of Pending.

#### Signature

public void setAsync(Boolean async)

#### Parameters

async

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: void

### setGatewayAvsCode(gatewayAvsCode)

Sets the payment gateway’s address verification system (AVS) code.

#### Signature

global void setGatewayAvsCode(String gatewayAvsCode)

#### Parameters

gatewayAvsCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Code sent by gateways that use an address verification system.

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the payment gateway’s date.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Date and time of the gateway communication.

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

Information about the gateway communication.

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

The gateway result code. Must be mapped to a Salesforce result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets the payment gateway’s result code description.

#### Signature

global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)

#### Parameters

gatewayResultCodeDescription

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the GatewayResultCode. Provides more information about the result code returned by the gateway.

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Set the Salesforce result code info.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Describes the Salesforce result code value.

#### Return Value

Type: void

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- ReferencedRefundResponse Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setAsync(async) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setGatewayReferenceDetails(gatewayReferenceDetails) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setGatewayReferenceNumber(gatewayReferenceNumber) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)
- setGatewayResultCode(gatewayResultCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_ReferencedRefundResponse.htm)

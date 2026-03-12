---
title: "BaseNotification Class"
domain: apex-reference
topic: basenotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.853Z
estimatedTokens: 2458
namespace: CommercePayments
keywords: [BaseNotification, Abstract, storing, notification, information, sent, payment, gateways., Usage, Example, setAmount, amount, setGatewayAvsCode, gatewayAvsCode, setGatewayDate, gatewayDate, setGatewayMessage, gatewayMessage, setGatewayReferenceDetails, gatewayReferenceDetails]
---

# BaseNotification Class

> Abstract class for storing notification information sent from payment
            gateways.

**Namespace:** `CommercePayments`

# BaseNotification Class

Abstract class for storing notification information sent from payment gateways.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

An abstract class that contains the common fields from payment gateways. BaseNotification can’t be instantiated on its own.

The constructor of this class takes no arguments. For example:

CommercePayments.BaseNotification bnt = new CommercePayments.BaseNotification();

## Example

```

```

-   **[BaseNotification Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_methods)**


## BaseNotification Methods

The following are methods for BaseNotification.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setAmount)**
    Sets the transaction amount. Must be a non-negative value.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setGatewayAvsCode)**
    Sets the AVS (address verification system) result code that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setGatewayDate)**
    Sets the date that the notification occurred. Some gateways don’t send this value.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setGatewayMessage)**
    Sets error messages that the gateway returned for the notification request. Maximum length of 255 characters.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setGatewayReferenceDetails)**
    Sets the payment gateway’s reference details.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setGatewayReferenceNumber)**
    Sets the payment gateway’s reference number.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setGatewayResultCode)**
    Sets a gateway-specific result code. The code can be mapped to a Salesforce-specific result code. Maximum length of 64 characters.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setGatewayResultCodeDescription)**
    Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.
-   **[setId(id)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setId)**
    Sets the ID of the notification sent by the gateway.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setSalesforceResultCodeInfo)**
    Sets the information about the Salesforce-specific result code used to match a result code from a payment gateway.
-   **[setStatus(status)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm#apex_commercepayments_BaseNotification_setStatus)**
    Sets the status of the notification sent by the gateway.

### setAmount(amount)

Sets the transaction amount. Must be a non-negative value.

#### Signature

global void setAmount(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount of the transaction.

#### Return Value

Type: void

### setGatewayAvsCode(gatewayAvsCode)

Sets the AVS (address verification system) result code that the gateway returned. Maximum length of 64 characters.

#### Signature

public void setGatewayAvsCode(String gatewayAvsCode)

#### Parameters

gatewayAvsCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Used to verify the address mapped to a payment method when the payments platform requests tokenization from the payment gateway.

#### Return Value

Type: void

### setGatewayDate(gatewayDate)

Sets the date that the notification occurred. Some gateways don’t send this value.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

The date that the notification occurred.

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the notification request. Maximum length of 255 characters.

#### Signature

global void setGatewayMessage(String gatewayMessage)

#### Parameters

gatewayMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The message that the gateway returned with the notification request. Contains additional information about the notification.

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

Sets a gateway-specific result code. The code can be mapped to a Salesforce-specific result code. Maximum length of 64 characters.

#### Signature

global void setGatewayResultCode(String gatewayResultCode)

#### Parameters

gatewayResultCode

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Gateway-specific result code. Must be used to map a Salesforce-specific result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a payment gateway returned. Maximum length of 1000 characters.

#### Signature

global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)

#### Parameters

gatewayResultCodeDescription

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Provides additional information about the result code and why the gateway returned the code. Descriptions vary between different gateways.

#### Return Value

Type: void

### setId(id)

Sets the ID of the notification sent by the gateway.

#### Signature

global void setId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the information about the Salesforce-specific result code used to match a result code from a payment gateway.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Return Value

Type: void

### setStatus(status)

Sets the status of the notification sent by the gateway.

#### Signature

global void setStatus(commercepayments.NotificationStatus status)

#### Parameters

status

Type: [commercepayments.NotificationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_NotificationStatus.htm "Shows whether the payments platform successfully received the notification from the gateway.")

Shows whether the payments platform successfully received the notification from the gateway.

#### Return Value

Type: void

## Code Examples

```
commercepayments.BaseNotification notification = null;
        if ('CAPTURE'.equals(eventCode)) {
            notification = new commercepayments.CaptureNotification();
        } else if ('REFUND'.equals(eventCode)) {
            notification = new commercepayments.ReferencedRefundNotification();
        }
```

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- BaseNotification Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setGatewayReferenceDetails(gatewayReferenceDetails) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setGatewayReferenceNumber(gatewayReferenceNumber) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setGatewayResultCode(gatewayResultCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)
- setGatewayResultCodeDescription(gatewayResultCodeDescription) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_BaseNotification.htm)

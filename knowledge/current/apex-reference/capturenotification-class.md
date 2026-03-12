---
title: "CaptureNotification Class"
domain: apex-reference
topic: capturenotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:22.294Z
estimatedTokens: 2674
namespace: CommercePayments
keywords: [CaptureNotification, payment, gateway, notification, capture, transaction, adapter, creates, store, Usage, setAmount, amount, setGatewayAvsCode, gatewayAvsCode, setGatewayDate]
---

# CaptureNotification Class

> When a payment gateway sends a notification for a capture transaction,
            the payment gateway adapter creates the CaptureNotification object to store information about the
            notification.

**Namespace:** `CommercePayments`

# CaptureNotification Class

When a payment gateway sends a notification for a capture transaction, the payment gateway adapter creates the CaptureNotification object to store information about the notification.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

CaptureNotification is used in asynchronous payment gateway adapters.

Specify the CommercePayments namespace when creating an instance of this class. The constructor of this class takes no arguments. For example:

CommercePayments.CaptureNotification crn = new CommercePayments.CaptureNotification();

## Example

```

```

-   **[CaptureNotification Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_methods)**


## CaptureNotification Methods

The following are methods for CaptureNotification.

-   **[setAmount(amount)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setAmount)**
    Sets the transaction amount. Must be a non-negative value.
-   **[setGatewayAvsCode(gatewayAvsCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setGatewayAvsCode)**
    Sets the AVS (address verification system) result code that the gateway returned. Maximum length of 64 characters.
-   **[setGatewayDate(gatewayDate)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setGatewayDate)**
    Sets the date that the transaction occurred. Some gateways don’t send this value.
-   **[setGatewayMessage(gatewayMessage)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setGatewayMessage)**
    Sets error messages that the gateway returned for the payment request. Maximum length of 255 characters.
-   **[setGatewayReferenceDetails(gatewayReferenceDetails)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setGatewayReferenceDetails)**
    Sets additional data that you can use for subsequent transactions. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML.
-   **[setGatewayReferenceNumber(gatewayReferenceNumber)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setGatewayReferenceNumber)**
    Sets the unique gateway reference number for the transaction that the gateway returned. Maximum length of 255 characters.
-   **[setGatewayResultCode(gatewayResultCode)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setGatewayResultCode)**
    Sets a gateway-specific result code. The code can be mapped to a Salesforce-specific result code. Maximum length of 64 characters.
-   **[setGatewayResultCodeDescription(gatewayResultCodeDescription)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setGatewayResultCodeDescription)**
    Sets a description of the gateway-specific result code that a gateway returned. Maximum length of 1000 characters.
-   **[setId(id)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setId)**
    Sets the ID of a notification sent by the payment gateway.
-   **[setSalesforceResultCodeInfo(salesforceResultCodeInfo)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setSalesforceResultCodeInfo)**
    Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.
-   **[setStatus(status)](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm#apex_commercepayments_CaptureNotification_setStatus)**
    Sets the notification status to the same value that was sent by the gateway.

### setAmount(amount)

Sets the transaction amount. Must be a non-negative value.

#### Signature

global void setAmount(Double amount)

#### Parameters

amount

Type: [Double](atlas.en-us.apexref.meta/apexref/apex_methods_system_double.htm#apex_methods_system_double "Contains methods for the Double primitive data type.")

The amount to be debited or captured.

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

Sets the date that the transaction occurred. Some gateways don’t send this value.

#### Signature

global void setGatewayDate(Datetime gatewayDate)

#### Parameters

gatewayDate

Type: [Datetime](atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm#apex_methods_system_datetime "Contains methods for the Datetime primitive data type.")

Date and time of the gateway communication.

#### Return Value

Type: void

### setGatewayMessage(gatewayMessage)

Sets error messages that the gateway returned for the payment request. Maximum length of 255 characters.

#### Signature

global void setGatewayMessage(String gatewayMessage)

#### Parameters

gatewayMessage

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Information on error messages sent from the gateway.

#### Return Value

Type: void

### setGatewayReferenceDetails(gatewayReferenceDetails)

Sets additional data that you can use for subsequent transactions. You can use any data that isn’t normalized in financial entities. This field has a maximum length of 1000 characters and can store data as JSON or XML.

#### Signature

global void setGatewayReferenceDetails(String gatewayReferenceDetails)

#### Parameters

gatewayReferenceDetails

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setGatewayReferenceNumber(gatewayReferenceNumber)

Sets the unique gateway reference number for the transaction that the gateway returned. Maximum length of 255 characters.

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

Gateway-specific result code. Map this value to a Salesforce-specific result code.

#### Return Value

Type: void

### setGatewayResultCodeDescription(gatewayResultCodeDescription)

Sets a description of the gateway-specific result code that a gateway returned. Maximum length of 1000 characters.

#### Signature

global void setGatewayResultCodeDescription(String gatewayResultCodeDescription)

#### Parameters

gatewayResultCodeDescription

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the gateway’s result code. Use this field to learn more about why the gateway returned a certain result code.

#### Return Value

Type: void

### setId(id)

Sets the ID of a notification sent by the payment gateway.

#### Signature

global void setId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setSalesforceResultCodeInfo(salesforceResultCodeInfo)

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

#### Signature

global void setSalesforceResultCodeInfo(commercepayments.SalesforceResultCodeInfo salesforceResultCodeInfo)

#### Parameters

salesforceResultCodeInfo

Type: [commercepayments.SalesforceResultCodeInfo](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_SalesforceResultCodeInfo.htm#apex_class_commerce_payments_SalesforceResultCodeInfo "Stores Salesforce result code information from payment gateway adapters.")

Description of the Salesforce result code value.

#### Return Value

Type: void

### setStatus(status)

Sets the notification status to the same value that was sent by the gateway.

#### Signature

global void setStatus(commercepayments.NotificationStatus status)

#### Parameters

status

Type: [NotificationStatus](atlas.en-us.apexref.meta/apexref/apex_enum_commercepayments_NotificationStatus.htm "Shows whether the payments platform successfully received the notification from the gateway.")

Sets the Salesforce-specific result code information. Payment gateways have many response codes for payment calls. Salesforce uses the result code information to map payment gateway codes to a predefined set of standard Salesforce result codes.

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
- CaptureNotification Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setAmount(amount) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setGatewayAvsCode(gatewayAvsCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setGatewayDate(gatewayDate) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setGatewayMessage(gatewayMessage) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setGatewayReferenceDetails(gatewayReferenceDetails) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setGatewayReferenceNumber(gatewayReferenceNumber) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setGatewayResultCode(gatewayResultCode) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)
- setGatewayResultCodeDescription(gatewayResultCodeDescription) (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_CaptureNotification.htm)

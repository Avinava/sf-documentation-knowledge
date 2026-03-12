---
title: "NotificationSaveResult Class"
domain: apex-reference
topic: notificationsaveresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.961Z
estimatedTokens: 788
namespace: CommercePayments
keywords: [NotificationSaveResult, Contains, result, payment, platform’s, attempt, record, data, gateway’s, notification., Usage, Example, getErrorMessage, getStatusCode, isSuccess]
---

# NotificationSaveResult Class

> Contains the result of the payment platform’s attempt to record data
      from the gateway’s notification.

**Namespace:** `CommercePayments`

# NotificationSaveResult Class

Contains the result of the payment platform’s attempt to record data from the gateway’s notification.

## Namespace

[CommercePayments](atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm "Use the CommercePayments namespace to provide a safe and customizable platform for managing customer payments and refunds.")

## Usage

This class is used with asynchronous payments. It is the return type of the NotificiationClient.record operation and contains the result of the payment platform’s attempt to save notification details.

The constructor of this class takes no arguments. For example:

CommercePayments.NotificationSaveResult nsr = new CommercePayments.NotificationSaveResult();

## Example

commercepayments.NotificationSaveResult saveResult = commercepayments.NotificationClient.record(notification);

-   **[NotificationSaveResult Methods](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm#apex_commercepayments_NotificationSaveResult_methods)**


## NotificationSaveResult Methods

The following are methods for NotificationSaveResult.

-   **[getErrorMessage()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm#apex_commercepayments_NotificationSaveResult_getErrorMessage)**
    Gets the error message, if any, from the payment platform regarding its attempt to save the notification sent from the payment gateway.
-   **[getStatusCode()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm#apex_commercepayments_NotificationSaveResult_getStatusCode)**
    Gets the status code from the payment platform’s attempt to save the notification sent from the payment gateway.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm#apex_commercepayments_NotificationSaveResult_isSuccess)**
    Gets the status of whether the payment platform successfully saved the notification sent from the payment gateway.

### getErrorMessage()

Gets the error message, if any, from the payment platform regarding its attempt to save the notification sent from the payment gateway.

#### Signature

global String getErrorMessage()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getStatusCode()

Gets the status code from the payment platform’s attempt to save the notification sent from the payment gateway.

#### Signature

global Integer getStatusCode()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### isSuccess()

Gets the status of whether the payment platform successfully saved the notification sent from the payment gateway.

#### Signature

global Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- CommercePayments (atlas.en-us.apexref.meta/apexref/apex_namespace_commercepayments.htm)
- NotificationSaveResult Methods (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm)
- getErrorMessage() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm)
- getStatusCode() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_class_commercepayments_NotificationSaveResult.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)

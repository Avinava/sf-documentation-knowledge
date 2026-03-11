---
title: "NotificationSaveResult Methods"
domain: apex-reference
topic: notificationsaveresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.035Z
keywords: [NotificationSaveResult, Methods, Gets, error, message, any, payment, platform, regarding, its, attempt, save, notification, sent, gateway., getErrorMessage, Signature, Return, Value, getStatusCode]
---

# NotificationSaveResult Methods

> Gets the error message, if any, from the payment platform regarding
      its attempt to save the notification sent from the payment gateway.

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
---
title: "ActionableNotification Class"
domain: apex-reference
topic: actionablenotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-05-10T00:39:24.021Z
estimatedTokens: 1112
namespace: Messaging
keywords: [ActionableNotification, actionable, notification, getActionIdentifier, getNotificationTypeId, getRecipientId, getSenderId, getTargetId, getTargetPageRef]
---

> Contains information about an actionable custom notification.

**Namespace:** `Messaging`

# ActionableNotification Class

Contains information about an actionable custom notification.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce notifications and email functionality.")

## Example

This example shows how to create an ActionableNotification object by using the [ActionableNotification.Builder](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm#apex_class_Messaging_ActionableNotification_Builder "Contains methods to build an instance of the Messaging.ActionableNotification class, which is used to configure actionable notifications for mobile devices.") class.

```

```

-   **[ActionableNotification Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_methods)**


## ActionableNotification Methods

The following are methods for ActionableNotification.

-   **[getActionIdentifier()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getActionIdentifier)**
    Return the unique action identifier (API name) for the custom notification action.
-   **[getNotificationTypeId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getNotificationTypeId)**
    Return the ID of the custom notification type used for the notification.
-   **[getRecipientId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getRecipientId)**
    Return the user ID of the recipient of the notification.
-   **[getSenderId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getSenderId)**
    Return the user ID of the sender of the notification.
-   **[getTargetId()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getTargetId)**
    Return the record ID for the target record of the notification.
-   **[getTargetPageRef()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm#apex_Messaging_ActionableNotification_getTargetPageRef)**
    Return the PageReference for the navigation target of the notification.

### getActionIdentifier()

Return the unique action identifier (API name) for the custom notification action.

This actionIdentifier must belong to the action group associated with the custom notification.

#### Signature

public String getActionIdentifier()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getNotificationTypeId()

Return the ID of the custom notification type used for the notification.

#### Signature

public String getNotificationTypeId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getRecipientId()

Return the user ID of the recipient of the notification.

#### Signature

public String getRecipientId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSenderId()

Return the user ID of the sender of the notification.

#### Signature

public String getSenderId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTargetId()

Return the record ID for the target record of the notification.

#### Signature

public String getTargetId()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getTargetPageRef()

Return the PageReference for the navigation target of the notification.

#### Signature

public String getTargetPageRef()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Code Examples

```
Messaging.ActionableNotification notification =
new Messaging.ActionableNotification.Builder()
.withNotificationTypeId('0MLXXXXXXXXXXXX4AC')
.withActionIdentifier('testAction')
.withRecipientId('005XXXXXXXXXXXX')
.withSenderId('005XXXXXXXXXXXX')
.withTargetId('500XXXXXXXXXXXXYAI')
.withTargetPageRef('/lightning/r/Case/500XXXXXXXXXXXXYAI/view')
.build();
```

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- ActionableNotification.Builder (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification_Builder.htm)
- ActionableNotification Methods (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- getActionIdentifier() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- getNotificationTypeId() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- getRecipientId() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- getSenderId() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- getTargetId() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- getTargetPageRef() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_ActionableNotification.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)

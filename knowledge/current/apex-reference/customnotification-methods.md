---
title: "CustomNotification Methods"
domain: apex-reference
topic: customnotification-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.796Z
keywords: [CustomNotification, Methods, Sends, custom, notification, specified, users., send, users, Signature, Parameters, Return, Value, Example, setNotificationTypeId, setTitle, title, setBody, body, setSenderId]
---

# CustomNotification Methods

> Sends a custom notification to the specified users.

## CustomNotification Methods

The following are methods for CustomNotification.

-   **[send(users)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_send)**  
    Sends a custom notification to the specified users.
-   **[setNotificationTypeId(id)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_setNotificationTypeId)**  
    Sets the type of the custom notification.
-   **[setTitle(title)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_setTitle)**  
    Sets the title of the custom notification.
-   **[setBody(body)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_setBody)**  
    Sets the body of the custom notification.
-   **[setSenderId(id)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_setSenderId)**  
    Sets the sender of the custom notification.
-   **[setTargetId(targetId)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_setTargetId)**  
    Sets the target record of the custom notification.
-   **[setTargetPageRef(pageRef)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_setTargetPageRef)**  
    Sets the target page of the custom notification.

### send(users)

Sends a custom notification to the specified users.

#### Signature

public void send(Set<String\> users)

#### Parameters

users

Type: [Set](atlas.en-us.apexref.meta/apexref/apex_methods_system_set.htm#apex_methods_system_set "Represents a collection of unique elements with no duplicate values.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

Required. A set of recipient IDs. Each recipient ID corresponds to a recipient or recipient type that the notification should be sent to. Valid recipient or recipient type values are:

-   UserId — The notification is sent to this user, if this user is active.
-   AccountId — The notification is sent to all active users who are members of this account’s Account Team.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)
    
    #### Note
    
    This recipient type is valid if account teams are enabled for your org.
    
-   OpportunityId — The notification is sent to all active users who are members of this opportunity’s Opportunity Team.
    
    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)
    
    #### Note
    
    This recipient type is valid if team selling is enabled for your org.
    
-   GroupId — The notification is sent to all active users who are members of this group.
-   QueueId — The notification is sent to all active users who are members of this queue.

Values can be combined in a set, up to the maximum of 500 values.

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).

### setNotificationTypeId(id)

Sets the type of the custom notification.

#### Signature

public void setNotificationTypeId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the Custom Notification Type being used for the notification.

A notification type is required to send a custom notification. See [Custom Notification Usage](#custom_notification_usage).

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).

### setTitle(title)

Sets the title of the custom notification.

#### Signature

public void setTitle(String title)

#### Parameters

title

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The title of the notification, as it will be seen by recipients. Maximum characters: 250.

A title is required to send a custom notification. See [Custom Notification Usage](#custom_notification_usage).

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).

### setBody(body)

Sets the body of the custom notification.

#### Signature

public void setBody(String body)

#### Parameters

body

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The body of the notification, as it will be seen by recipients. Maximum characters: 750.

A body is required to send a custom notification. See [Custom Notification Usage](#custom_notification_usage).

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).

### setSenderId(id)

Sets the sender of the custom notification.

#### Signature

public void setSenderId(String id)

#### Parameters

id

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The User ID of the sender of the notification.

Setting a sender is optional. See [Custom Notification Usage](#custom_notification_usage).

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).

### setTargetId(targetId)

Sets the target record of the custom notification.

#### Signature

public void setTargetId(String targetId)

#### Parameters

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The Record ID for the target record of the notification.

Either a targetID or a targetPageRef is required to send a custom notification. See [Custom Notification Usage](#custom_notification_usage).

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).

### setTargetPageRef(pageRef)

Sets the target page of the custom notification.

#### Signature

public void setTargetPageRef(String pageRef)

#### Parameters

pageRef

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The PageReference for the navigation target of the notification.

Either a targetID or a targetPageRef is required to send a custom notification. See [Custom Notification Usage](#custom_notification_usage).

#### Return Value

Type: void

#### Example

See the [Custom Notification Example](#custom_notification_example_code).
---
title: "CustomNotification Class"
domain: apex-reference
topic: customnotification-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.751Z
estimatedTokens: 3846
namespace: Messaging
keywords: [CustomNotification, configure, send, custom, notifications, Apex, code, Usage, typeId, sender, title, targetId, targetPageRef, users, setNotificationTypeId]
---

# CustomNotification Class

> CustomNotification is used to
            create, configure, and send custom notifications from Apex code.

**Namespace:** `Messaging`

# CustomNotification Class

CustomNotification is used to create, configure, and send custom notifications from Apex code.

## Namespace

[Messaging](atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm "The Messaging namespace provides classes and methods for Salesforce outbound and inbound email functionality.")

## Usage

CustomNotification allows two approaches to creating and configuring a custom notification.

-   Create an instance with the default constructor, and then set notification attributes using the various setter methods.
-   Create an instance and configure notification parameters at the same time using the parameterized constructor.

Once the custom notification is configured, call [send()](#apex_Messaging_CustomNotification_send "Sends a custom notification to the specified users.") to send the notification.

**Notification Target**

The notification target is used by the receiving client application to navigate to an appropriate record or page when a user responds to a notification. For example, when a user is notified that a record was updated, responding to the notification can open the relevant record.

You must specify a target for a notification. The target can be specified using either the targetID or the targetPageRef attribute. Neither attribute is required, but if both are omitted, send() throws an exception. If there’s no natural target for a notification, set the targetID to a dummy value, such as 000000000000000AAA. A dummy value prevents the exception, and also prevents automatic navigation when responding to the notification in the client app.

You can set both targetID and targetPageRef in the same notification. The client app that receives the notification determines which target, if any, to use when responding to the notification.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

Before Winter ’21 you could set only a target record (targetID) for a notification. Most client applications expect to find a targetID in the notification payload. If you can’t update a client app to handle notifications that include only a targetPageRef, set the targetID to a dummy value.

**Execution Context and Notification Permissions**

By default Apex code executes in system mode, and doesn’t require user permissions to send notifications with CustomNotification. However, if your Apex code runs in a user context—for example, by executing anonymous Apex in the Developer Console—the Send Custom Notifications user permission is checked, and send() fails if you don’t have the required permission.

## Example

This example Apex class provides a static method for sending a custom notification to a recipient list. Call this method from a trigger, flow, or wherever you want to send a custom notification from Apex.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

This example uses a custom notification type with the DeveloperName (API name) Custom\_Notification. You can create a custom notification type using [Notification Builder in Setup](https://help.salesforce.com/s/articleView?id=platform.notif_builder.htm&language=en_US "HTML (New Window)") or [Tooling API](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_tooling.meta/api_tooling/tooling_api_objects_customnotificationtype.htm "HTML (New Window)"). Then, use your notification type’s DeveloperName (API name) in the query to find the ID of the notification type.

[CustomNotification.send()](#apex_Messaging_CustomNotification_send "Sends a custom notification to the specified users.") can throw an exception, which is handled minimally in this example. Add more substantial error handling to code you plan to use in production.

-   **[CustomNotification Constructors](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_constructors)**

-   **[CustomNotification Methods](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_methods)**


#### See Also

-   [*Salesforce Help*: Send Custom Notifications](https://help.salesforce.com/articleView?id=notif_builder_custom.htm&language=en_US "Salesforce Help: Send Custom Notifications - HTML (New Window)")

-   [*Actions Developer Guide*: Custom Notification Actions](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_action.meta/api_action/actions_obj_custom_notification.htm "Actions Developer Guide: Custom Notification Actions - HTML (New Window)")

-   [*Metadata API Developer Guide*: CustomNotificationType](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_meta.meta/api_meta/meta_customnotificationtype.htm "Metadata API Developer Guide: CustomNotificationType - HTML (New Window)")


## CustomNotification Constructors

The following are constructors for CustomNotification.

-   **[CustomNotification()](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_ctor_2)**
    Creates a new instance of the Messaging.CustomNotification class.
-   **[CustomNotification(typeId, sender, title, body, targetId, targetPageRef)](atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm#apex_Messaging_CustomNotification_ctor)**
    Creates an instance of the Messaging.CustomNotification class using the specified parameters. When you use this constructor, you don’t need to call the various setter methods to define the custom notification attributes.

### CustomNotification()

Creates a new instance of the Messaging.CustomNotification class.

#### Signature

public CustomNotification()

### CustomNotification(typeId, sender, title, body, targetId, targetPageRef)

Creates an instance of the Messaging.CustomNotification class using the specified parameters. When you use this constructor, you don’t need to call the various setter methods to define the custom notification attributes.

#### Signature

public CustomNotification(String typeId, String sender, String title, String body, String targetId, String targetPageRef)

#### Parameters

typeId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the Custom Notification Type being used for the notification.

sender

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The User ID of the sender of the notification.

title

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The title of the notification. Maximum characters: 250.

body

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The body of the notification. Maximum characters: 750.

targetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The Record ID for the target record of the notification.

You must specify either a targetID or a targetPageRef. See [Custom Notification Usage](#custom_notification_usage).

targetPageRef

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The PageReference for the navigation target of the notification. To see how to specify the target using JSON, see [pageReference Types](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_navigation_page_definitions.htm "HTML (New Window)").

You must specify either a targetID or a targetPageRe. See [Custom Notification Usage](#custom_notification_usage).

#### Usage

A client may see a truncated notification title or body depending on the delivery channel or app, and how the Connect API notification parameters are configured. For more information on the trimMessages query parameter, see [Notification](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_resources_notifications_list.htm "HTML (New Window)") .

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

## Code Examples

```apex
public without sharing class CustomNotificationFromApex {

    public static void notifyUsers(Set<String> recipientsIds, String targetId) {

        // Get the Id for our custom notification type
        CustomNotificationType notificationType = 
            [SELECT Id, DeveloperName 
             FROM CustomNotificationType 
             WHERE DeveloperName='Custom_Notification'];
        
        // Create a new custom notification
        Messaging.CustomNotification notification = new Messaging.CustomNotification();

        // Set the contents for the notification
        notification.setTitle('Apex Custom Notification');
        notification.setBody('The notifications are coming from INSIDE the Apex!');

        // Set the notification type and target
        notification.setNotificationTypeId(notificationType.Id);
        notification.setTargetId(targetId);
        
        // Actually send the notification
        try {
            notification.send(recipientsIds);
        }
        catch (Exception e) {
            System.debug('Problem sending notification: ' + e.getMessage());
        }
    }
}
```

## Related Topics

- Messaging (atlas.en-us.apexref.meta/apexref/apex_namespace_Messaging.htm)
- CustomNotification Constructors (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- CustomNotification Methods (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- CustomNotification() (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- CustomNotification(typeId, sender, title, body, targetId, targetPageRef) (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- send(users) (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- setNotificationTypeId(id) (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- setTitle(title) (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)
- setBody(body) (atlas.en-us.apexref.meta/apexref/apex_class_Messaging_CustomNotification.htm)

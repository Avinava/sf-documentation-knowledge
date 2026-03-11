---
title: "CustomNotification Constructors"
domain: apex-reference
topic: customnotification-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.796Z
keywords: [CustomNotification, Constructors, Creates, new, instance, Messaging.CustomNotification, class., Signature, typeId, sender, title, body, targetId, targetPageRef, Parameters, Usage]
---

# CustomNotification Constructors

> Creates a new instance of the Messaging.CustomNotification class.

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
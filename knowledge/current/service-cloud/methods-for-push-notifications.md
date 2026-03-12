---
title: "Methods for Push Notifications"
domain: service-cloud
topic: methods-for-push-notifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.151Z
estimatedTokens: 773
keywords: [Push, Notifications, notifications, visual, indicators, lists, detail, pages, console, show, record, field, changed, during, user’s, session., example, two, support, agents]
---

# Methods for Push Notifications

> Push notifications are visual indicators on lists and detail pages in a console that show
      when a record or field has changed during a user’s session. For example, if two support agents
      are working on the same case, and one agent changes the Priority, a push
      notification appears to 

# Methods for Push Notifications

Push notifications are visual indicators on lists and detail pages in a console that show when a record or field has changed during a user’s session. For example, if two support agents are working on the same case, and one agent changes the Priority, a push notification appears to the other agent so he or she spots the change and doesn’t duplicate the effort.

When administrators set up a Salesforce console, they choose when push notifications display, and which objects and fields trigger push notifications. Developers can use push notification methods to customize push notifications beyond the default visual indicators supplied by Salesforce. For example, developers can use the methods below to create personalized notifications about objects accessible to specific console users, thereby eliminating the need for email notifications.

Consider the following when using push notification methods:

-   Push notification listener response is only available for the objects and fields selected to trigger push notifications for a console.
-   When a Visualforce page includes a listener added by the addPushNotificationListener() method, the page receives notifications. The listener receives notifications when there is an update by any user to the objects selected for triggering console push notifications and the current user has access to the modified record. This functionality is slightly different from push notifications set up in the Salesforce user interface in that:
    -   Listeners receive update notifications for changes made by all users.
    -   When Choose How Lists Refresh is set to Refresh List Rows and the user is viewing an empty list view for an object set to trigger push notifications, a listener receives notifications for any record of that object created as well as any updates made to fields selected to trigger push notifications on the object.
    -   When Choose How Lists Refresh is set to Refresh List and the user is viewing a list view for an object set to trigger push notifications, a listener receives notifications for any record of that object created and any updates made to fields selected to trigger push notifications, where the viewing user is the owner of the record.
    -   The only way to stop receiving notifications is to remove listeners using the removePushNotificationListener() method.
-   Push notifications aren't available in the console in Professional Edition.

-   **[addPushNotificationListener()](atlas.en-us.api_console.meta/api_console/sforce_api_console_addpushnotificationlistener.htm)**
    Adds a listener for a push notification. A user can only register a listener once until he or she removes the listener, or the listener is removed by another user. This method is only available in API version 26.0 or later.
-   **[removePushNotificationListener()](atlas.en-us.api_console.meta/api_console/sforce_api_console_removepushnotificationlistener.htm)**
    Removes a listener that gets added for a push notification. This method is only available in API version 26.0 or later.

## Related Topics

- addPushNotificationListener() (atlas.en-us.api_console.meta/api_console/sforce_api_console_addpushnotificationlistener.htm)
- removePushNotificationListener() (atlas.en-us.api_console.meta/api_console/sforce_api_console_removepushnotificationlistener.htm)

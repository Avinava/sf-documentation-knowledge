---
title: "Using the Connect REST API Push Notification Resource (Optional)"
domain: pushImplGuide
topic: using-the-connect-rest-api-push-notification-resource-optional
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.730Z
estimatedTokens: 405
keywords: [Connect, REST, API, Push, Notification, Resource, prefer, send, notifications, looping, Apex, engine—in, words, want, simple]
---

# Using the Connect REST API Push Notification Resource (Optional)

> If you prefer to send push notifications without looping through the Apex engine—in other
      words, if you just want to push a simple message from an external client app on one mobile
      device to another—use the Connect REST API push notification resource. This resource is
      useful for se

# Using the Connect REST API Push Notification Resource (Optional)

If you prefer to send push notifications without looping through the Apex engine—in other words, if you just want to push a simple message from an external client app on one mobile device to another—use the Connect REST API push notification resource. This resource is useful for sending notifications of events that occur outside of Salesforce and can be handled entirely within the mobile external client app. You can use this resource in any type of custom app: a native Mobile SDK app, a hybrid Mobile SDK app, or an HTML5 app.

The Connect REST API resource establishes an HTTP session to send POST requests from the sending device to one or more receiving devices. This means that:

-   The sending app and the receiving apps must either be developed in the same organization or be installed from the same package.
-   Only the receiving apps are required to be registered for push notifications with Apple or Google.
-   Only the receiving apps are required to implement the Salesforce Mobile SDK push notification protocols.
-   Each app requires an external client app, but only the receiving external client apps must be configured for push notifications.

#### See Also

-   [Push Notifications Resource](atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifcations_push.htm "Send a mobile push notification to client apps on users’ devices. This resource is only accessible when the session is established with a client app that is developed in the same org or installed in the same package as the recipient’s client app.")

## Related Topics

- Push Notifications Resource (atlas.en-us.pushImplGuide.meta/pushImplGuide/connect_resources_notifcations_push.htm)

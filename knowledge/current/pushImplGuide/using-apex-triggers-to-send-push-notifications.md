---
title: "Using Apex Triggers to Send Push Notifications"
domain: pushImplGuide
topic: using-apex-triggers-to-send-push-notifications
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.656Z
estimatedTokens: 517
keywords: [Apex, Triggers, Send, Push, Notifications, registering, mobile, vendor, notification, service, creating, external, client, app, Sample]
---

# Using Apex Triggers to Send Push Notifications

> After registering with the mobile OS vendor for push notification service and
        creating a external client app, you can send push notifications to a mobile client app using
        Apex triggers.

# Using Apex Triggers to Send Push Notifications

After registering with the mobile OS vendor for push notification service and creating a external client app, you can send push notifications to a mobile client app using Apex triggers.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

Legacy Cloud Messaging API users are required to [migrate to the new Firebase Cloud Messaging API (HTTP v1) by June 2024](https://firebase.google.com/docs/cloud-messaging/migrate-v1). We recommend that you test your app’s compatibility with HTTP v1 before migrating.

Push notification triggers use methods in the Apex Messaging.PushNotification and Messaging.PushNotificationPayload classes. The external client app in the Salesforce organization represents the mobile client app that will receive the notifications.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=pushImplGuide)

#### Important

To send push notifications to a external client app, either of the following conditions must be met:

-   Apex triggers are added in the *same organization* in which the external client app is created.
-   Apex triggers are installed as part of a partner-provided managed package, along with the external client app.

## Sample Apex Trigger

This sample Apex trigger sends push notifications to the external client app named Test\_App, which corresponds to a mobile app on iOS mobile clients. The trigger fires after cases have been updated and sends the push notification to two users: the case owner and the user who last modified the case.

```

```

## Sample Android Payload

The trigger sample uses Messaging.PushNotificationPayload to create a payload for an iOS notification. Unlike iOS, Android doesn’t have special attributes or requirements for the payload; it just needs to be in JSON format. In Apex, you create the Android payload as a MAP<String,ANY> object. The Messaging.PushNotification class handles conversion to JSON. Here’s a sample Android payload.

```

```

## Code Examples

```apex
trigger caseAlert on Case (after update) {    
    
    for(Case cs : Trigger.New)  
    {
        // Instantiating a notification
        Messaging.PushNotification msg = 
            new Messaging.PushNotification();

        // Assembling the necessary payload parameters for Apple.
        // Apple params are: 
        // (<alert text>,<alert sound>,<badge count>,
        // <free-form data>)
        // This example doesn't use badge count or free-form data.
        // The number of notifications that haven't been acted
        // upon by the intended recipient is best calculated
        // at the time of the push. This timing helps
        // ensure accuracy across multiple target devices.
        Map<String, Object> payload = 
            Messaging.PushNotificationPayload.apple(
                'Case ' + cs.CaseNumber + ' status changed to: ' 
                + cs.Status, '', null, null);

        // Adding the assembled payload to the notification
        msg.setPayload(payload);

        // Getting recipient users
        String userId1 = cs.OwnerId;
        String userId2 = cs.LastModifiedById;

        // Adding recipient users to list
        Set<String> users = new Set<String>();
        users.add(userId1);
        users.add(userId2);                       

        // Sending the notification to the specified app and users.
        // Here we specify the API name of the external client app.  
        msg.send('Test_App', users);
    }
}
```

```apex
Map<String, Object> androidPayload = new Map<String, Object>();
androidPayload.put('number', '1');
androidPayload.put('name', 'test');
```

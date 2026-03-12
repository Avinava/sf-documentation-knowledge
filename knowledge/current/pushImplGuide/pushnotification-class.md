---
title: "PushNotification Class"
domain: pushImplGuide
topic: pushnotification-class
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.572Z
estimatedTokens: 117
namespace: Messaging
keywords: [PushNotification, configure, push, notifications, send, Apex, trigger]
---

# PushNotification Class

> PushNotification is used to
   configure push notifications and send them from an Apex trigger.

**Namespace:** `Messaging`

# PushNotification Class

PushNotification is used to configure push notifications and send them from an Apex trigger.

## Namespace

Messaging

## Example

This sample Apex trigger sends push notifications to the external client app named Test\_App, which corresponds to a mobile app on iOS mobile clients. The trigger fires after cases have been updated and sends the push notification to two users: the case owner and the user who last modified the case.

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

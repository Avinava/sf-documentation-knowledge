---
title: "Notifications for Chat Activity"
domain: service-sdk-ios
topic: notifications-for-chat-activity
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:06:33.003Z
estimatedTokens: 1032
keywords: [Notifications, Chat, Activity, there's, user, viewing, session, present, iOS, notification, system]
---

# Notifications for Chat Activity

> If there's chat activity when the user is not viewing the
            chat session, you can present that information to them using the iOS notification
            system.

# Notifications for Chat Activity

If there's chat activity when the user is not viewing the chat session, you can present that information to them using the iOS notification system.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=service_sdk_ios)

#### Important

The legacy chat product is scheduled for retirement on February 14, 2026, and is in maintenance mode until then. During this phase, you can continue to use chat, but we no longer recommend that you implement new chat channels. To avoid service interruptions to your customers, migrate to [Messaging for In-App and Web](https://help.salesforce.com/s/articleView?id=service.miaw_intro_landing.htm&type=5&language=en_US) before that date. Messaging offers many of the [chat features that you](https://help.salesforce.com/s/articleView?id=service.miaw_chat_vs_messaging.htm&type=5&language=en_US) love plus asynchronous conversations that can be picked back up at any time. Learn about chat retirement in [Help](https://help.salesforce.com/s/articleView?id=001790618&type=1&language=en_US).

Notifications can be sent to the user when the user isn't viewing the chat session. A notification can appear when the app is in the background, or when the app is in the foreground but the chat session is minimized. The following activities can cause notifications:

-   Agent has connected
-   Agent sent a message
-   Agent requested a file transfer
-   Agent canceled a file transfer
-   Agent ended a session
-   Session will timeout soon

To ensure that the app can send these notifications while in the background, chat must be configured to allow background execution (allowBackgroundExecution) and to allow for background notifications (allowBackgroundNotifications). Both these settings are turned on by default. See [Configure a Chat Session](atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm#configure_lac_session "Before starting a chat session, you have several ways to configure the session using the SCSChatConfiguration object. These configuration settings allow you to specify pre-chat fields, determine whether a session starts minimized or full screen, and get updates about the user's queue position.") for details.

1.  Import the UserNotifications framework in your AppDelegate class.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

2.  Register for local notifications in your AppDelegate's didFinishLaunchingWithOptions method.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

3.  Implement UNUserNotificationCenterDelegate. Handle the didReceiveNotificationResponse and willPresentNotification methods.

    iOS calls the didReceiveNotificationResponse method when your app is in the background. In this method, you can tell your app to enter the foreground and for chat to maximize. To perform this behavior, use the [handle(notification:)](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)handleNotification:) method on the [SCSChatInterface](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html) object, which is accessible from the chatUI property of the [ServiceCloud](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html) shared instance.

    iOS calls the willPresentNotification method when your app is in the foreground. To determine whether to display the notification, use the [shouldDisplayNotificationInForeground](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCSChatInterface.html#/c:objc\(cs\)SCSChatInterface\(im\)shouldDisplayNotificationInForeground) method (accessible from the chatUI property of the [ServiceCloud](https://forcedotcom.github.io/ServiceSDK-iOS/releases/api/234.1/Classes/SCServiceCloud.html) shared instance). If the Chat UI is already showing the relevant information related to this event, the method returns false.

    In Swift:

    ```

    ```

    In Objective-C:

    ```

    ```

## Code Examples

```
import UserNotifications
```

```
@import UserNotifications;
```

```
// Get the notification center object
let center = UNUserNotificationCenter.current()

// Register a delegate (see next step for delegate implementation)
center.delegate = self

// Request authorization
center.requestAuthorization(options: [.alert,.sound],
                            completionHandler: { granted, error in
  // Enable or disable features based on authorization
})

// Create general category
let generalCategory = UNNotificationCategory(identifier: "General", actions: [],
intentIdentifiers: [], options: .customDismissAction)
let categorySet: Set<UNNotificationCategory> = [generalCategory]

// Set category
center.setNotificationCategories(categorySet)
```

```
// Get the notification center object
UNUserNotificationCenter* center = [UNUserNotificationCenter currentNotificationCenter];

// Register a delegate (see next step for delegate implementation)
[center setDelegate:self];

// Request authorization
[center requestAuthorizationWithOptions:(UNAuthorizationOptionAlert + UNAuthorizationOptionSound)
        completionHandler:^(BOOL granted, NSError * _Nullable error) {
  // Enable or disable features based on authorization
}];

// Create general category
UNNotificationCategory* generalCategory = 
  [UNNotificationCategory
    categoryWithIdentifier:@"GENERAL"
                   actions:@[]
         intentIdentifiers:@[]
                   options:UNNotificationCategoryOptionCustomDismissAction];
    
// Set category
[center setNotificationCategories:[NSSet setWithObjects:generalCategory, nil]];
```

```
/** 
 This delegate method is executed when the application launches as a result
 of the user interacting with a notification when it is in the background.
 The result of passing the notification to Chat is that we will
 maximize if the notification was scheduled as a result of a chat event.
*/
func userNotificationCenter(_ center: UNUserNotificationCenter, 
                            didReceive response: UNNotificationResponse, 
                            withCompletionHandler completionHandler: 
                            @escaping () -> Void) {
  
  let chat = ServiceCloud.shared().chatUI!
  chat.handle(response.notification)
}

/** 
 This delegate method is executed when a notification is received while
 the app is in the foreground. Check with Chat to see whether it's
 appropriate to display the notification (or if the notification
 relates to information already being shown to the user).
*/
func userNotificationCenter(_ center: UNUserNotificationCenter, 
                            willPresent notification: UNNotification, 
                            withCompletionHandler completionHandler: 
                            @escaping (UNNotificationPresentationOptions) -> Void) {
  
  let chat = ServiceCloud.shared().chatUI!

  // Show we display this notification?
  if (chat.shouldDisplayNotificationInForeground()) {

    // Display notification as an alert
    completionHandler(.alert)
  }
}
```

## Related Topics

- Configure a Chat Session (atlas.en-us.noversion.service_sdk_ios.meta/service_sdk_ios/configure_lac_session.htm)

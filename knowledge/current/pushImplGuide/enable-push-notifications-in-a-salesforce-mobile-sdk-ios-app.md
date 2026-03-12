---
title: "Enable Push Notifications in a Salesforce Mobile SDK iOS App"
domain: pushImplGuide
topic: enable-push-notifications-in-a-salesforce-mobile-sdk-ios-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.673Z
estimatedTokens: 745
keywords: [Enable, Push, Notifications, Salesforce, Mobile, SDK, iOS, App, SFPushNotificationManager, handle, registration, import, <SalesforceSDKCore, SFPushNotificationManager>, runtime]
---

# Enable Push Notifications in a Salesforce Mobile SDK iOS App

> Salesforce Mobile SDK for iOS provides the SFPushNotificationManager class to handle push registration. To use
                it, import <SalesforceSDKCore/SFPushNotificationManager>. The SFPushNotificationManager class is available as a
                runtime
                singleton:

# Enable Push Notifications in a Salesforce Mobile SDK iOS App

Salesforce Mobile SDK for iOS provides the SFPushNotificationManager class to handle push registration. To use it, import <SalesforceSDKCore/SFPushNotificationManager>. The SFPushNotificationManager class is available as a runtime singleton:

**Swift**

```

```

**Objective-C**

```

```

This class implements four registration methods:

**Swift**

```

```

**Objective-C**

```

```

Mobile SDK calls registerForSalesforceNotifications after login and unregisterSalesforceNotifications at logout. You call the other two methods from your AppDelegate class.

Mobile SDK 8.2 updates the push notification implementation to use the iOS UNUserNotificationCenter class. This class authorizes the calling app to receive push notifications from APNS. Mobile SDK iOS template apps request authorization for alerts, sounds, and badges.

To decode encrypted notifications, you extend the iOS UNNotificationServiceExtension class. Mobile SDK provides a special app template that includes the boilerplate extension code for you to copy. See [Handle Notification Encryption in Salesforce Mobile SDK Apps](atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_encrypted_notifications.htm "Mobile notifications travel from Salesforce, through third-party messaging services to mobile carriers, then on to mobile devices. Such an indirect path only increases the opportunities for malicious attacks. To guard against snooping or hacking, Salesforce encrypts Notification Builder notifications. Your app is responsible for decrypting these notifications.").

1.  In your AppDelegate class, create an instance method named \- (void) registerForRemotePushNotifications.
    1.  In this method, request authorization to receive push notifications.

        ```

        ```

    2.  If authorization is granted, call the SFPushNotificationManager registerForRemoteNotifications method. If authorization isn’t granted or the operation returned an error, log the appropriate error messages.

        ```

        ```

2.  Call your registerForRemotePushNotifications in the application:didFinishLaunchingWithOptions: method.

    ```

    ```

    If registration succeeds, Apple passes a device token to the application:didRegisterForRemoteNotificationsWithDeviceToken: method of your AppDelegate class.

3.  In the application:didRegisterForRemoteNotificationsWithDeviceToken: method, register the device token from Apple with Mobile SDK’s push notification manager.
    1.  Call the SFPushNotificationManager didRegisterForRemoteNotificationsWithDeviceToken: method.

        ```

        ```

    2.  If the current user’s access token exists, call the SFPushNotificationManager registerSalesforceNotificationsWithCompletionBlock:failBlock: method.

        ```

        ```

4.  To log an error if registration with Apple fails, implement the application:didFailToRegisterForRemoteNotificationsWithError: method.

    ```

    ```

## Code Examples

```
PushNotificationManager.sharedInstance()
```

```
[SFPushNotificationManager sharedInstance]
```

```
func registerForRemoteNotifications() 

func application(_ application: UIApplication, 
    didRegisterForRemoteNotificationsWithDeviceToken deviceToken: Data) 

func registerSalesforceNotifications(completionBlock: (() → Void)?, 
    fail: (() → Void)?) 

func unregisterSalesforceNotifications(withCompletionBlock: UserAccount, 
    completionBlock: (() → Void)?) // for internal use
```

```
- (void)registerForRemoteNotifications;
- (void)didRegisterForRemoteNotificationsWithDeviceToken:
    (NSData*)deviceTokenData;
- (BOOL)registerForSalesforceNotifications; // for internal use
- (BOOL)unregisterSalesforceNotifications; // for internal use
```

```
- (void)registerForRemotePushNotifications {
    [[UNUserNotificationCenter currentNotificationCenter] 
        requestAuthorizationWithOptions:(UNAuthorizationOptionSound | 
                                         UNAuthorizationOptionAlert | 
                                         UNAuthorizationOptionBadge) 
                      completionHandler:^(BOOL granted, 
                                          NSError * _Nullable error) {
        if (granted) {

        } else {

        }

        if (error) {

        }
    }];
}
```

## Related Topics

- Handle Notification Encryption in Salesforce Mobile SDK Apps (atlas.en-us.pushImplGuide.meta/pushImplGuide/pns_encrypted_notifications.htm)

---
title: "Code Modifications (iOS)"
domain: mobile-sdk
topic: code-modifications-ios
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:40:27.133Z
estimatedTokens: 1336
keywords: [Code, Modifications, iOS, handle, notifications, apps, register, AppDelegate, provided, template, Swift, add, extension, decrypt, incoming, Notification, Builder, Registering, Receive, Implementing, Decryption, Push, Registration, Manually]
---

> To handle notifications in iOS apps, you register in the AppDelegate class using the provided template code. In Swift apps, you must
        add an extension to decrypt incoming Notification Builder notifications.

# Code Modifications (iOS)

To handle notifications in iOS apps, you register in the AppDelegate class using the provided template code. In Swift apps, you must add an extension to decrypt incoming Notification Builder notifications.

## Registering to Receive Notifications

Mobile SDK for iOS provides the SFPushNotificationManager class to handle push registration. To use it in Objective-C, import <SalesforceSDKCore/SFPushNotificationManager>. Swift doesn’t require a special import.

The SFPushNotificationManager class is available as a runtime shared instance:

Swift

```

```

Objective-C

```

```

This class implements these registration methods:

Swift

```

```

Objective-C

```

```

Mobile SDK calls unregisterSalesforceNotifications at logout.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

-   Salesforce encrypts Notification Builder notifications.
-   To support full content push notifications, your iOS app must implement the decryption class extension.
-   If a Mobile SDK app that hasn’t implemented decryption receives an encrypted Salesforce notification, the customer sees only the notification title.
-   Salesforce does not encrypt Apex push notifications.

## Implementing a Decryption Extension (Swift)

In Mobile SDK 8.2 and later, the forceios [iOSNativeSwiftTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/iOSNativeSwiftTemplate/iOSNativeSwiftTemplate) app requests notification authorization through the iOS UNUserNotificationCenter object. A specialized version of iOSNativeSwiftTemplate, [iOSNativeSwiftEncryptedNotificationTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/iOSNativeSwiftEncryptedNotificationTemplate), extends the UNNotificationServiceExtension iOS class to handle notification decryption. This extension class, [NotificationService](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/blob/master/iOSNativeSwiftEncryptedNotificationTemplate/NotificationServiceExtension/NotificationService.swift), provides boilerplate decryption code that Mobile SDK apps can use without changes. To support encrypted notifications, you must be using Mobile SDK 8.2 or later, and your app must include this extension.

To create a Swift project that supports Notification Builder encrypted notifications, you can use the iOSNativeSwiftEncryptedNotificationTemplate template with forceios. Even if you’re updating an existing Mobile SDK project, it’s easiest to start fresh with a new forceios template project. If you’d rather update a Swift project manually, skip to “Example: Add Push Registration Manually (Swift)”.

1.  Install the latest forceios version from node.js:

    ```

    ```

2.  Call the forceios createWithTemplate command:

    ```

    ```

3.  At the first prompt, enter iOSNativeSwiftEncryptedNotificationTemplate:

    ```

    ```

4.  In the remaining prompts, enter your company and project information. If your information is accepted, forceios creates a project that is ready for encrypted notifications.
5.  If you’re updating an older Mobile SDK project, copy your app-specific resources from your old project into the new project.

## Add Push Registration Manually (Swift)

This example requires an existing app built on Mobile SDK 8.2 or higher and based on the iOSSwiftNativeTemplate project.

**Configure Push Notification Registration in AppDelegate**

1.  In the application(\_:didFinishLaunchingWithOptions:) method, uncomment the call to registerForRemotePushNotifications.

    ```

    ```

    The registerForRemotePushNotifications method attempts to register your app with Apple for receiving remote notifications. If registration succeeds, Apple passes a device token to the application(\_:didRegisterForRemoteNotificationsWithDeviceToken:) method of your AppDelegate class.

2.  In the application(\_:didRegisterForRemoteNotificationsWithDeviceToken:) method, uncomment the call to didRegisterForRemoteNotifications(withDeviceToken:).

    ```

    ```

3.  To log a debugger error if registration with Apple fails, add the following code to the application(\_:didFailToRegisterForRemoteNotificationsWithError:) method.

    ```

    ```


**Add the Decryption Extension**

1.  In the Project navigator, select the target where you modified AppDelegate.
2.  In Project settings, select **Signing & Capabilities**.
3.  Click **\+ Capability** and search for “Push Notifications”. Double-click to add the capability.
4.  Follow the steps at [“Add a Service App Extension to Your Project” in *Modifying Content in Newly Delivered Notifications*](https://developer.apple.com/documentation/usernotifications/modifying_content_in_newly_delivered_notifications "HTML (New Window)") at developer.apple.com/documentation.
5.  If you plan to test the extension with its own settings, you can accept the prompt to activate a scheme. Otherwise, click **Cancel**.
6.  Clone or download the [github.com/forcedotcom/SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates "HTML (New Window)") repo.
7.  From the iOSNativeSwiftEncryptedNotificationTemplate/NotificationServiceExtension folder, replace the code in your new extension’s Swift file with the code from NotificationServiceExtension.swift.

## Code Examples

```
SFPushNotificationManager.sharedInstance()
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

- (BOOL)registerSalesforceNotificationsWithCompletionBlock:(nullable 
    void (^)(void))completionBlock failBlock:(nullable void (^)(void))failBlock;

- (BOOL)unregisterSalesforceNotificationsWithCompletionBlock:(SFUserAccount*)user 
    completionBlock:(nullable void (^)(void))completionBlock; // for internal use
```

```
[sudo] npm install -g forceios
```

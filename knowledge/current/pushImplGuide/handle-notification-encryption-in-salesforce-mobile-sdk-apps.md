---
title: "Handle Notification Encryption in Salesforce Mobile SDK Apps"
domain: pushImplGuide
topic: handle-notification-encryption-in-salesforce-mobile-sdk-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:35.696Z
estimatedTokens: 874
keywords: [Handle, Notification, Encryption, Salesforce, Mobile, SDK, Apps, notifications, travel, third-party, messaging, services, carriers, devices, indirect]
---

# Handle Notification Encryption in Salesforce Mobile SDK Apps

> Mobile notifications travel from Salesforce, through third-party messaging services to
    mobile carriers, then on to mobile devices. Such an indirect path only increases the
    opportunities for malicious attacks. To guard against snooping or hacking, Salesforce encrypts
    Notification Builder notifications. Your app is responsible for decrypting these
    notifications.

# Handle Notification Encryption in Salesforce Mobile SDK Apps

Mobile notifications travel from Salesforce, through third-party messaging services to mobile carriers, then on to mobile devices. Such an indirect path only increases the opportunities for malicious attacks. To guard against snooping or hacking, Salesforce encrypts Notification Builder notifications. Your app is responsible for decrypting these notifications.

Setting up encryption for notifications requires no configuration on the server. For client-side decryption, Salesforce Mobile SDK does most of the work for you. Mobile SDK negotiates the encryption policy with the Salesforce server and internally handles the exchange of public and private keys.

Your tasks for notification decryption on client apps depends on the mobile operating system.

iOS

Apps that are registered for Salesforce notifications must extend the UNNotificationServiceExtension class. A specialized Mobile SDK template app provides a boilerplate extension that you can bring into your iOS app, provided you’re using Mobile SDK 8.2 or later. Earlier versions of Mobile SDK do not fully support notification encryption.

Android

Mobile SDK for Android handles decryption internally and requires no client-side code changes.

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

## See Also

-   [UNNotificationServiceExtension](https://developer.apple.com/documentation/usernotifications/unnotificationserviceextension "HTML (New Window)") at [developer.apple.com](https://developer.apple.com/documentation)

## Code Examples

```
[sudo] npm install -g forceios
```

```
forceios createWithTemplate
Enter URI of repo containing template application or a Mobile SDK template name: 
    iOSNativeSwiftEncryptedNotificationTemplate
```

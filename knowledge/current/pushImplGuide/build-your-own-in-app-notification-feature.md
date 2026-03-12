---
title: "Build Your Own In-App Notification Feature"
domain: pushImplGuide
topic: build-your-own-in-app-notification-feature
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:35.703Z
estimatedTokens: 1185
keywords: [Build, Own, In-App, Notification, Feature, Salesforce, mobile, app, you’re, familiar, Bell, tray, current, user’s, recent]
---

# Build Your Own In-App Notification Feature

> If you use the Salesforce mobile app, you’re familiar with the Salesforce Bell. The Bell
  provides an in-app notification tray that lists the current user’s most recent notifications. With
  Salesforce Notification APIs, you can design and build your own tray.

# Build Your Own In-App Notification Feature

If you use the Salesforce mobile app, you’re familiar with the Salesforce Bell. The Bell provides an in-app notification tray that lists the current user’s most recent notifications. With Salesforce Notification APIs, you can design and build your own tray.

Queries calculate results from stored Notification Builder notifications. Salesforce provides REST APIs for the following Notification queries.

Notification

Get a specific notification for the context user.

Notifications

Get notifications for the context user.

Notifications Status

Get the “read” and “seen” properties a range of notifications.

Notification Update

Update the “read” and “seen” properties of a specific notification.

Notifications Update

Update the “read” and “seen” properties of a range of notifications.

For example, using these APIs, an app can

-   Display a list of notifications (Notifications)
-   When the customer taps a list entry, display the details of a single notification (Notification)
-   Set the state of a widget that indicates whether a notification has been read or seen (Notification)
-   Report how many notifications the customer hasn’t read or seen (Notifications Status)
-   Update the “read” or “seen” properties on one or more notifications after the customer visits your tray (Notification Update, Notifications Update)

## Custom In-App Notification Tray Template App

If you’re looking for a head start in Swift, Mobile SDK provides an example of a custom notifications tray in the [MobileSyncExplorerSwift](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/master/MobileSyncExplorerSwift "HTML (New Window)") template app. You can create your own app based on this template with the forceios createwithtemplate CLI command:

1.  Install the latest forceios version from node.js:

    ```

    ```

2.  Call the forceios createWithTemplate command:

    ```

    ```

3.  At the first prompt, enter MobileSyncExplorerSwift:

    ```

    ```

4.  In the remaining prompts, enter your company and project information. If your information is accepted, forceios creates a project with a notifications tray that you can customize.
5.  If you’re updating an older Mobile SDK project, copy your app-specific resources from your old project into the new project.

See the Reference section for more information on Notification APIs.

## Mobile SDK iOS Wrappers for Notification APIs

On iOS, Mobile SDK defines convenience methods for Notification APIs in the following classes:

Swift

```

```

Objective-C

```

```

The following methods are currently available for native apps only.

## Notification

Get a notification.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Notifications Status

Get the status of a range of notifications, including unread and unseen count.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Notifications

Get the given number (maximum 20) of archived Notification Builder notifications based on the given “before” or “after” date. In Mobile SDK, use the Swift FetchNotificationsRequestBuilder object or the Objective-C SFSDKFetchNotificationsRequestBuilder to create GET requests for notifications.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Notifications Update

Update the “read” and “seen” statuses of a given set of Notification Builder notifications. In Mobile SDK, use the Swift UpdateNotificationsRequestBuilder object or the Objective-C SFSDKUpdateNotificationsRequestBuilder object to create update requests.

To update a single notification, set the notificationId property. To update a range of notifications, set either the notificationIds or the before property. These properties—notificationId, notificationIds, and before—are mutually exclusive.

**Delegate Method**

Swift

```

```

Objective-C

```

```

**Block Method**

Not available.

## Mobile SDK Android Wrappers for Notification APIs

On Android, the RestRequest class defines the following convenience wrappers for Notification APIs.

## Notification

Get a notification.

```

```

## Notification Update

Update the “read” and “seen” statuses of a given Notification Builder notification.

```

```

## Notifications

Get the given number (maximum 20) of archived Notification Builder notifications based on the given “before” or “after” date.

```

```

## Notifications Status

Get the status of a range of notifications, including unread and unseen count.

```

```

## Notifications Update

Update the “read” and “seen” statuses of a given set of Notification Builder notifications.

```

```

## Code Examples

```
[sudo] npm install -g forceios
```

```
forceios createWithTemplate
Enter URI of repo containing template application or a Mobile SDK template name: 
    MobileSyncExplorerSwift
```

```
RestClient.shared.request(forNotification:apiVersion:)
```

```
- (SFRestRequest *)requestForNotification:(NSString *)notificationId apiVersion:(NSString *)apiVersion;
```

```
RestClient.shared.request(forNotificationsStatus:)
```

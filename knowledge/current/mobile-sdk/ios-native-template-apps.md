---
title: "iOS Native Template Apps"
domain: mobile-sdk
topic: ios-native-template-apps
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.023Z
estimatedTokens: 741
keywords: [iOS, Native, Template, Apps, Mobile, SDK, 9.0, updates, Swift, standards, maintains, Objective-C, previous, release, Templates]
---

# iOS Native Template Apps

> Mobile SDK 9.0
    updates its default Swift template to iOS 14 standards and maintains its Objective-C template
    from the previous release.

# iOS Native Template Apps

Mobile SDK 9.0 updates its default Swift template to iOS 14 standards and maintains its Objective-C template from the previous release.

![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

Here’s a comparison summary of the forceios default templates.

Swift Template

-   [iOSNativeSwiftTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/iOSNativeSwiftTemplate)
-   Demonstrates two levels of master-detail navigation.
-   Uses SwiftUI for all views
-   Demonstrates model-view architecture
-   Distributes management of app life-cycle events between AppDelegate and SceneDelegate
-   Handles asynchronous REST responses with various Combine Publisher objects
-   Demonstrates offline features using SmartStore and Mobile Sync

Objective-C Template

-   [iOSNativeTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/iOSNativeTemplate)
-   Displays a single list of contacts
-   Manages app life-cycle events through AppDelegate
-   Handles asynchronous REST responses in SFRestDelegate

You can find both templates in the [github.com/forcedotcom/SalesforceMobileSDK-Templates](https://github.com/forcedotcom/SalesforceMobileSDK-Templates "HTML (New Window)") repo. How you use them with forceios is slightly different.

-   To select the native Swift application type, press Return or type native\_swift:

    ```

    ```

-   To select the Objective-C application type, type native:

    ```

    ```


## Using Other Templates

Mobile SDK also offers the following specialized iOS templates.

[MobileSyncExplorerSwift](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/MobileSyncExplorerSwift)

A more extended example of Mobile Sync technology. Includes a Recent Contacts widget implementation. Also demonstrates iPad features, including multiple windows and landscape orientation support.

[iOSIDPTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/iOSIDPTemplate)

For creating identity provider apps with Mobile SDK.

[iOSNativeSwiftEncryptedNotificationTemplate](https://github.com/forcedotcom/SalesforceMobileSDK-Templates/tree/dev/iOSNativeSwiftEncryptedNotificationTemplate)

Demonstrates how to process encrypted notifications.

You use these templates with the forceios createwithtemplate command. For example, to create an app with the Swift encrypted notifications template:

-   ```

    ```

    ![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

    #### Note

    (Mobile SDK 8.0 and later) If you’re using a template from the SalesforceMobileSDK-Templates repo, you can specify just the template name without the URI path.

## Code Examples

```
$ forceios create
Enter your application type (native_swift or native, leave empty for native_swift): <Press Return>
...
```

```
$ forceios create
Enter your application type (native_swift or native, leave empty for native_swift): native
...
```

```
$ forceios createwithtemplate
Enter URI of repo containing template application: iOSNativeSwiftEncryptedNotificationTemplate
...
```

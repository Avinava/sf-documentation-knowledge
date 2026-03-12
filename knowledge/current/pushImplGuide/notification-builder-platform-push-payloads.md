---
title: "Notification Builder Platform Push Payloads"
domain: pushImplGuide
topic: notification-builder-platform-push-payloads
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.716Z
estimatedTokens: 359
keywords: [Notification, Builder, Platform, Push, Payloads, how, handle, payload, content, custom, notifications]
---

# Notification Builder Platform Push Payloads

> Learn about how we handle push payload content for custom notifications.

# Notification Builder Platform Push Payloads

Learn about how we handle push payload content for custom notifications.

Notification Builder Platform provides mobile push notifications for iOS apps through the Apple Push Notification Service (APNs) and for Android apps through the Firebase Cloud Messaging (FCM).

Push payloads are sent with encrypted content when the mobile app supplies an RSA public encryption key upon push registration with the Salesforce push notification service. When a payload is sent from a customer org to a user’s device, the mobile app processes and decrypts the payload. For more details about key registration and payload decryption, see the [Mobile SDK Development Guide](https://developer.salesforce.com/docs/atlas.en-us.mobile_sdk.meta/mobile_sdk/intro.htm "HTML (New Window)").

Push payloads are sent with unencrypted content if the mobile app doesn’t provide an encryption key.

#### See Also

-   [iOS Custom Push Payload Content](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_custom_push_payload_ios.htm&language=en_US "Use these keys and values to create custom iOS push notifications for your external client app.")

-   [Android Custom Push Payload Content](https://help.salesforce.com/apex/HTViewHelpDoc?id=connected_app_custom_push_payload_android.htm&language=en_US "Use these keys and values to create custom Android push notifications for your external client app.")

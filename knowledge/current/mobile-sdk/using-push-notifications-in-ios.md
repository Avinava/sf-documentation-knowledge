---
title: "Using Push Notifications in iOS"
domain: mobile-sdk
topic: using-push-notifications-in-ios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T09:06:31.940Z
estimatedTokens: 545
keywords: [Push, Notifications, iOS, developing, app, supports, remember, key, points, Configuration, Apple, Notification, Services]
---

# Using Push Notifications in iOS

> When developing an iOS app that supports push notifications, remember these key points:

# Using Push Notifications in iOS

When developing an iOS app that supports push notifications, remember these key points:

-   You must be a member of the iOS Developer Program.
-   You can test Apple push services only on an iOS physical device. Push notifications don’t work in the iOS simulator.
-   There are no guarantees that all push notifications will reach the target device, even if the notification is accepted by Apple.
-   Apple Push Notification Services setup requires the use of the OpenSSL command line utility provided in Mac OS X.

Before you can complete registration on the Salesforce side, you need to register with Apple Push Notification Services. The following instructions provide a general outline for what’s required. See [http://www.raywenderlich.com/32960/](http://www.raywenderlich.com/32960/ "HTML (New Window)") for complete instructions.

## Configuration for Apple Push Notification Services

Registering with Apple Push Notification Services (APNS) requires the following items.

Certificate Signing Request (CSR) File

Generate this request using the Keychain Access feature in Mac OS X. You’ll also use OpenSSL to export the CSR private key to a file for later use.

App ID from iOS Developer Program

In the iOS Developer Member Center, create an ID for your app, then use the CSR file to generate a certificate. Next, use OpenSSL to combine this certificate with the private key file to create a .p12 file. You’ll need this file later to configure your connected app.

iOS Provisioning Profile

From the iOS Developer Member Center, create a new provisioning profile using your iOS app ID and developer certificate. You then select the devices to include in the profile and download to create the provisioning profile. You can then add the profile to Xcode. Install the profile on your test device using Xcode's Organizer.

When you’ve completed the configuration, sign and build your app in Xcode. Check the build logs to verify that the app is using the correct provisioning profile. To view the content of your provisioning profile, run the following command at the Terminal window: security cms -D -i <*your profile*\>.mobileprovision

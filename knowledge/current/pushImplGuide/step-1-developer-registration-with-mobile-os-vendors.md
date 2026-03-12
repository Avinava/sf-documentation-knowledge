---
title: "Step 1. Developer Registration with Mobile
OS Vendors"
domain: pushImplGuide
topic: step-1-developer-registration-with-mobile-os-vendors
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.692Z
estimatedTokens: 1007
keywords: [Step, Developer, Registration, Mobile, Vendors, asks, vendor, prepared, handle, Salesforce, push, notifications, sent, app, you’ll]
---

# Step 1. Developer Registration with Mobile
OS Vendors

> This step asks the OS vendor to be prepared to handle Salesforce push notifications sent
    to your app. Developer registration also provides some information you’ll need to finish
    configuring your Salesforce external client app.

# Step 1. Developer Registration with Mobile OS Vendors

This step asks the OS vendor to be prepared to handle Salesforce push notifications sent to your app. Developer registration also provides some information you’ll need to finish configuring your Salesforce external client app.

To register your mobile client app, follow the process for your target mobile OS.

## Android Registration

When developing an Android app that supports push notifications, remember these key points:

-   You must be a member of the Android Developer Program.
-   You can test FCM push services only on an Android device with either the Android Market app or Google Play Services installed. Push notifications don’t work on an Android emulator.

Salesforce sends push notifications to Android apps through the Firebase Cloud Messaging for Android (FCM) framework. See [https://firebase.google.com/docs/cloud-messaging](https://firebase.google.com/docs/cloud-messaging "HTML (New Window)") for an overview of this framework.

To begin, create a Google API project for your app. Your project must have the FCM for Android feature enabled. See [https://firebase.google.com/docs/cloud-messaging/android/client](https://firebase.google.com/docs/cloud-messaging/android/client "HTML (New Window)") for instructions on setting up your project.

The setup process for your Google API project creates a key for your app. Once you’ve finished the project configuration, you’ll need to add the Key for Server Applications (API Key) from FCM to your external client app settings.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

Push notification registration occurs at the end of the OAuth login flow. Therefore, an app does not receive push notifications unless and until the user logs into a Salesforce org.

## iOS Registration

When developing an iOS app that supports push notifications, remember these key points:

-   You must be a member of the iOS Developer Program.
-   You can test Apple push services only on an iOS physical device. Push notifications don’t work in the iOS simulator.
-   There are no guarantees that all push notifications will reach the target device, even if the notification is accepted by Apple.
-   Apple Push Notification Services setup requires the use of the OpenSSL command line utility provided in Mac OS X.

Before you can complete registration on the Salesforce side, you need to register with Apple Push Notification Services (APNS).

Registration with APNS requires the following items.

Certificate Signing Request (CSR) File

Generate this request using the Keychain Access feature in Mac OS X. You’ll also use OpenSSL to export the CSR private key to a file for later use.

App ID from iOS Developer Program

In the iOS Developer Member Center, create an ID for your app, then use the CSR file to generate a certificate. Next, use OpenSSL to combine this certificate with the private key file to create an appkey.p12 file. You’ll need this file later to configure your external client app.

iOS Provisioning Profile

From the iOS Developer Member Center, create a new provisioning profile using your iOS app ID and developer certificate. You then select the devices to include in the profile and download to create the provisioning profile. You can then add the profile to Xcode. Install the profile on your test device using Xcode's Organizer.

When you’ve completed the configuration, sign and build your app in Xcode. Check the build logs to verify that the app is using the correct provisioning profile. To view the content of your provisioning profile, run the following command at the Terminal window: security cms -D -i <*your profile*\>.mobileprovision

For detailed instructions see:

-   [Local and Push Notification Programming Guide at https://developer.apple.com/library/mac](https://developer.apple.com/library/mac "HTML (New Window)")
-   [http://www.raywenderlich.com/32960/](http://www.raywenderlich.com/32960/ "HTML (New Window)")

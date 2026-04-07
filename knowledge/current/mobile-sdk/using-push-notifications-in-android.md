---
title: "Using Push Notifications in Android"
domain: mobile-sdk
topic: using-push-notifications-in-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-04-07T18:40:27.146Z
estimatedTokens: 420
keywords: [Push, Notifications, Android, Salesforce, apps, Firebase, Cloud, Messaging, FCM, framework]
---

> Salesforce sends push notifications to Android apps through the Firebase Cloud Messaging (FCM)
            framework. See Firebase
                Cloud Messaging for an overview of this framework.

# Using Push Notifications in Android

Salesforce sends push notifications to Android apps through the Firebase Cloud Messaging (FCM) framework. See [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/ "HTML (New Window)") for an overview of this framework.

When developing an Android app that supports push notifications, remember these key points:

-   You must
    -   be signed in to a Google account.
    -   have access to Firebase.
-   To test FCM push services, we recommend using an Android physical device with either the Android Market app or Google Play Services installed. Push notifications are less reliable on emulators and work only on the “Android with Google Play Services” emulator type.
-   You can also use the Send Test Notification link in your connected app detail view to perform a "dry run" test without pinging a device. You can also use this feature with Notification Builder push notifications.

To begin, create a Google API project for your app. Your project must have the FCM for Android feature enabled. See [Firebase Cloud Messaging](https://firebase.google.com/docs/cloud-messaging/ "HTML (New Window)") for instructions on setting up your project.

The setup process for your Google API project creates a key for your app. Once you’ve finished the project configuration, add the FCM key to your connected app settings.

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

Push notification registration occurs at the end of the OAuth login flow. Therefore, an app does not receive push notifications unless and until the user logs into a Salesforce organization.

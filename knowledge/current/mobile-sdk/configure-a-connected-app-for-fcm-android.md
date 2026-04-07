---
title: "Configure a Connected App For FCM (Android)"
domain: mobile-sdk
topic: configure-a-connected-app-for-fcm-android
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:27.116Z
estimatedTokens: 523
keywords: [Configure, Connected, App, FCM, Android, Salesforce, support, push, notifications]
---

> To configure your Salesforce connected app to support push notifications:

# Configure a Connected App For FCM (Android)

To configure your Salesforce connected app to support push notifications:

1.  If you have an existing Firebase project associated with your app, open the existing project. If not, create a project for your app in the [Google Firebase Console](https://console.firebase.google.com/ "HTML (New Window)").

    ![Important](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note_important.png&folder=mobile_sdk)

    #### Important

    If you previously set up notifications for your Android app, make sure that you proceed with the next steps using the existing Firebase project associated with your app. To avoid any disruption in your app’s notifications, confirm that the sender ID in the Firebase project matches your app’s existing sender ID.

2.  In the Firebase project, click the cog icon next to Project Overview, and then click **Project settings**.
3.  Collect the Firebase project ID.
    1.  Click the **General** tab.
    2.  Record the value in the Project ID field. You need the project ID for a later step.
4.  Generate an Admin SDK private key for your Firebase service account.
    1.  Select the **Service accounts** tab, and then click **Generate new private key**.
    2.  Download the JSON file that contains the private key. Note the location of the downloaded file, because you need it later.

        The file name format for this private key is similar to Pc-api-1234567890123456789-123-firebase-adminsdk-a1bcd-a1234bc5678.json.

5.  Create your mobile connected app in App Manager.
6.  In the Mobile App Settings section of your mobile connected app, complete these fields.
    1.  In the **App Platform** field, select **Android**.
    2.  Select **Push Messaging**.
    3.  In the **Platform** field, select **Android**.
    4.  In the **Firebase Admin SDK Private Key** field, upload the JSON file that contains the private key that you generated for your Firebase service account.
    5.  In the **Project ID** field, enter the project ID that you collected from the Firebase project.
7.  Save your changes.

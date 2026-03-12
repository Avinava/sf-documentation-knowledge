---
title: "Create an
  External
  Client App for Android"
domain: pushImplGuide
topic: create-an-external-client-app-for-android
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.677Z
estimatedTokens: 569
keywords: [External, Client, App, Android, Connected, apps, creation, restricted, Spring, ‘26, continue, However, recommend, instead, creating]
---

# Create an
  External
  Client App for Android

> Connected apps creation is restricted as of Spring ‘26. You can continue to use existing
    connected apps during and after Spring ‘26. However, we recommend using external client apps instead. If you must continue
    creating connected apps, contact Salesforce Support.

# Create an External Client App for Android

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

Connected apps creation is restricted as of Spring ‘26. You can continue to use existing connected apps during and after Spring ‘26. However, we recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) instead. If you must continue creating connected apps, contact Salesforce Support.

See [New connected apps can no longer be created in Spring ‘26](https://help.salesforce.com/s/articleView?id=005228017&language=en_US) for more details.

To create an external client app, log in to your Salesforce Developer Edition org and complete these steps.

1.  From Setup, in the Quick Find box, enter External Client, and then select **External Client Apps Manager**.
2.  Either click **Edit Settings** in the action menu for an existing external client app, or click **New External Client App** to create a new one.
3.  If you’re creating a new external client app:
    1.  Enter a unique name for your connected app. The API name field is auto-filled.
    2.  Optionally, fill in other fields, such as a description for your connected app.
    3.  Enter a contact email address.
    4.  In the OAuth Settings section, select **Enable OAuth Settings**.
    5.  Enter a callback URL.
    6.  Select OAuth scopes. At a minimum, select **Access and manage your data (api)** and **Perform requests on your behalf at any time (refresh\_token)**.
4.  Under Push Notification Settings, select **Enable Push**.
5.  For Mobile Platform, select **Android**.
6.  To [configure Android push notifications](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_mobile_push_notifications_android.htm&type=5&language=en_US) using HTTP v1, complete these steps.

    1.  For **Firebase Admin SDK Private Key**, upload the JSON file that contains the private key that you generated for your Firebase service account.
    2.  For **Firebase Project ID**, enter the project ID that you collected from the Firebase project.

7.  Save your work.

    After saving the external client app, you get a consumer key. Mobile apps use this key as their connection token.

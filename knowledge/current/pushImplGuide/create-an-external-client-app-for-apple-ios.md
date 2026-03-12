---
title: "Create
    an
    External Client App for Apple iOS"
domain: pushImplGuide
topic: create-an-external-client-app-for-apple-ios
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:35.682Z
estimatedTokens: 669
keywords: [External, Client, App, Apple, iOS, Connected, apps, creation, restricted, Spring, ‘26, continue, However, recommend, instead]
---

# Create
    an
    External Client App for Apple iOS

> Connected apps creation is restricted as of Spring ‘26. You can continue to use existing
        connected apps during and after Spring ‘26. However, we recommend using external client apps instead. If you must continue
        creating connected apps, contact Salesforce Support.

# Create an External Client App for Apple iOS

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

#### Note

Connected apps creation is restricted as of Spring ‘26. You can continue to use existing connected apps during and after Spring ‘26. However, we recommend using [external client apps](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps.htm&language=en_US) instead. If you must continue creating connected apps, contact Salesforce Support.

See [New connected apps can no longer be created in Spring ‘26](https://help.salesforce.com/s/articleView?id=005228017&language=en_US) for more details.

To create a connected app, log in to your Salesforce Developer Edition org and perform these steps.

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
5.  For Mobile Platform, select **iOS**.

    When you select the **iOS** option, the dialog expands to show more settings.

    ![Expanded Settings Dialog](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmobile_push_notifications%2Fimages%2Fpush-enabled_iOS_v2.png&folder=pushImplGuide)

6.  Upload the Signing Key from your Apple developer account.
7.  Enter the Key Identifier from your Apple developer account.
8.  Enter the Team ID from your Apple developer account.

    ![Authentication Settings, illustrating steps 6-8.](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fmobile_push_notifications%2Fimages%2Fpush-enabled_steps_iOS.png&folder=pushImplGuide)

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=pushImplGuide)

    #### Note

    You can use authentication tokens, push certificates, or both. If a token is provided, Salesforce always uses the token. We also use Application Bundle ID when it's provided. We recommend using Application Bundle ID to avoid problems with your push notification settings.

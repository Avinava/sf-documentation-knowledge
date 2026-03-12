---
title: "Set Up OAuth in Your Service Cloud Voice Connected App"
domain: voice-developer-guide
topic: set-up-oauth-in-your-service-cloud-voice-connected-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:36:21.625Z
estimatedTokens: 825
keywords: [OAuth, Service, Cloud, Voice, Connected, App, instructions, describe, how, Salesforce]
---

# Set Up OAuth in Your Service Cloud Voice Connected App

> These instructions describe how to set up OAuth in a Salesforce connected
  app.

# Set Up OAuth in Your Service Cloud Voice Connected App

These instructions describe how to set up OAuth in a Salesforce connected app.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=voice_developer_guide)

#### Note

Starting with the Spring '26 release, the creation of connected apps is disabled to promote the adoption of External Client Apps (ECA). To create a connected app, you must contact Customer Support. For more information, see this [knowledge Article](https://help.salesforce.com/s/articleView?id=005228017&type=1&language=en_US).

Before you start, [create a private key and a self-signed certificate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm).

1.  From **Setup**, enter Apps in the Quick Find box, and select **App Manager**. If you don’t already have a connected app for Amazon Connect, [create a connected app](https://help.salesforce.com/articleView?id=connected_app_create.htm&type=5&language=en_US).
2.  Click **Edit** in the dropdown menu.
3.  Click [Enable OAuth Settings](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&type=5&language=en_US).
4.  For the **Callback URL**, if it’s not already specified, enter: http://localhost:1717/OauthRedirect
5.  Select **Use digital signatures** and upload your self-signed certificate file.
6.  For the Selected OAuth Scopes, ensure that these scopes are selected.

    -   Manage user data via APIs (api)
    -   Perform requests on your behalf at any time (refresh\_token, offline\_acess)

7.  Save your settings.
8.  In the action menu for the connected app, click **Manage**, and then click **Manage Profiles**. To choose which users have access to this connected app, select the appropriate profiles. We recommend including a System Administrator profile. Verify that the Permitted Users value is set to **Admin approved users are pre-authorized** for the selected profiles.
9.  Save your work.
10.  From the saved connected app with OAuth, copy the **Consumer Key**, which is needed on the Amazon Connect instance.

     ![Connected app consumer key](/docs/resources/img/en-us/260.0?doc_id=images%2Fvoice_lambda_connected_app_consumer_key.png&folder=voice_developer_guide)


#### See Also

-   [*Salesforce Help:* Create a Private Key and Self-Signed Digital Certificate](https://developer.salesforce.com/docs/atlas.en-us.260.0.sfdx_dev.meta/sfdx_dev/sfdx_dev_auth_key_and_cert.htm "Salesforce Help: Create a Private Key and Self-Signed Digital
    Certificate - HTML (New Window)")

-   [*Salesforce Help:* Create a Connected App](https://help.salesforce.com/articleView?id=connected_app_create.htm&language=en_US "Salesforce Help: Create a Connected App - HTML (New Window)")

-   [*Salesforce Help:* Enable OAuth Settings for API Integration](https://help.salesforce.com/articleView?id=connected_app_create_api_integration.htm&language=en_US "Salesforce Help: Enable OAuth Settings for API Integration - HTML (New Window)")

-   [*Salesforce Help:* Manage OAuth Access Policies for a Connected App](https://help.salesforce.com/s/articleView?id=xcloud.connected_app_manage_oauth.htm&language=en_US "Salesforce Help: Manage OAuth Access Policies for a Connected App - HTML (New Window)")

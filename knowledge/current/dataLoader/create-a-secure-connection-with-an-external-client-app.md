---
title: "Create a Secure Connection with an External Client App"
domain: dataLoader
topic: create-a-secure-connection-with-an-external-client-app
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:24.270Z
estimatedTokens: 640
keywords: [Secure, Connection, External, Client, App, Salesforce, Data, Loader, org]
---

# Create a Secure Connection with an External Client App

> Use a Salesforce external client app to create a secure connection from Data Loader to your Salesforce org.

# Create a Secure Connection with an External Client App

Use a Salesforce external client app to create a secure connection from Data Loader to your Salesforce org.

These instructions are for Data Loader version 64.0.2 or later.

Before configuring Data Loader, create an external client app with OAuth enabled. See [Configure the External Client OAuth Settings](https://help.salesforce.com/s/articleView?id=xcloud.configure_external_client_app_oauth_settings.htm&language=en_US).

Configure the app with these settings:

-   Use the callback URL http://localhost:7171/OauthRedirect. If you choose a different port number, be sure to note it.
-   Select **Require Proof Key for Code Exchange (PKCE) extension for Supported Authorization Flows** to require Proof Key for Code Exchange.
-   Deselect **Require secret for Web Server Flow** to avoid storing the Consumer Secret in Data Loader.
-   For OAuth scopes, select **Perform requests at any time (refresh\_token, offline\_access)** and **Manage user data via APIs (api)**.

After you create the client app, use it to get the information you need to configure Data Loader.

1.  From Setup, in the Quick Find box, enter external client, and then select **External Client App Manager**.
2.  Select the external client app you created, then select the **Settings** tab.
3.  In the OAuth Settings section, click **Consumer Key and Secret**.

    This opens the Consumer Details page.

4.  In Data Loader, select **Settings** | **Settings**.
5.  In **Authentication host domain URL for Production**, enter your org's base URL.

    The base My Domain URL has the format https://mycompany.my.salesforce.com. For a sandbox org, enter the sandbox URL in **Authentication host domain URL for Sandbox**.

6.  In the Consumer Details page, copy the **Consumer Key**.

    -   Paste it into **External Client App Consumer Key (Production)** for a production org.
    -   Paste it into **External Client App Consumer Key (Sandbox)** for a sandbox org.

    Leave the **External Client App Consumer Secret** fields empty.

7.  If you specified a port other than 7171 for the external client app's callback URL, enter that port number in **OAuth PKCE callback port**.
8.  Click **OK**.

    Data Loader can now use OAuth 2.0 Web Server Flow to authenticate when logging into a Salesforce org.

9.  From Setup, in the Quick Find box, enter OAuth and select **Connected Apps OAuth Usage** to view a list of apps with OAuth access.
10.  Click **Block** to block the Dataloader Partner and Dataloader Bulk connected apps.

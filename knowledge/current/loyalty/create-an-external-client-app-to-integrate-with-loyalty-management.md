---
title: "Create an External Client App to Integrate with Loyalty Management"
domain: loyalty
topic: create-an-external-client-app-to-integrate-with-loyalty-management
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:52.666Z
estimatedTokens: 609
keywords: [External, Client, App, Integrate, Loyalty, Management, Mobile, SDK, access, Salesforce, APIs, enable, secure, integration, API]
---

# Create an External Client App to Integrate with Loyalty Management

> Create an external client app for Loyalty Management Mobile SDK to request access to
  Salesforce APIs and to enable secure integration with the APIs. To request access, integrate the
  app with the Salesforce API by using the OAuth 2.0 protocol.

# Create an External Client App to Integrate with Loyalty Management

Create an external client app for Loyalty Management Mobile SDK to request access to Salesforce APIs and to enable secure integration with the APIs. To request access, integrate the app with the Salesforce API by using the OAuth 2.0 protocol.

| Available in: all editions that have Loyalty Management enabled |
| --- |


| User Permissions Needed |
| --- |
| To read, create, update, or delete connected apps: | Customize ApplicationANDModify All DataORManage Connected Apps |

1.  Create an [External Client App](https://help.salesforce.com/s/articleView?id=xcloud.create_a_local_external_client_app.htm&type=5&language=en_US "HTML (New Window)").
2.  Under API (Enable OAuth Settings), select **Enable OAuth Settings**.
3.  In the Callback URL, enter a URL where Salesforce can send OAuth2 responses.
4.  Add these scopes to the Selected OAuth Scopes list.

    -   Access the identity URL service (id, profile, email, address, phone)
    -   Access Visualforce applications (visualforce)
    -   Manage user data via APIs (api)
    -   Perform requests at any time (refresh\_token, offline\_access)

5.  Select **Enable Authorization Code and Credential Flow**, and deselect **Require Proof Key for Code Exchange (PKCE) Extension for Supported Authorization Flows**, **Require Secret for Web Server Flow**, and **Require Secret for Refresh Token Flow**.
6.  Save the app.
7.  From Setup, in the Quick Find box, enter External Client Apps Manager, and then select **External Client Apps Manager**.
8.  From the actions list for the external client app, select **Edit Policies**.
9.  Under OAuth Policies, from the Permitted Users dropdown, select **Admin approved users are Pre-authorized** as the permitted users.
10.  Select **Relax IP restrictions** as the IP relaxation.
11.  Select **Refresh token is valid until revoked** as the refresh token policy.
12.  Save your changes.

From the App Manager, for the external client app, click **Manage Consumer Details**, and copy the consumer key and consumer secret. Use these credentials in mobile applications to authenticate with Salesforce APIs.

#### See Also

-   [*Mobile SDK Development Guide*: Create a Connected App](https://developer.salesforce.com/docs/atlas.en-us.noversion.mobile_sdk.meta/mobile_sdk/connected_apps_howto.htm "Mobile SDK Development Guide: Create a Connected App - HTML (New Window)")

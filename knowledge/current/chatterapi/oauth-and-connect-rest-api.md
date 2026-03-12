---
title: "OAuth and Connect REST API"
domain: chatterapi
topic: oauth-and-connect-rest-api
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:21.849Z
estimatedTokens: 431
keywords: [OAuth, Connect, REST, API, uses, securely, identify, application, connecting, Salesforce, Flows]
---

# OAuth and Connect REST API

> Connect REST API uses OAuth to securely identify your application before connecting to
    Salesforce.

# OAuth and Connect REST API

Connect REST API uses OAuth to securely identify your application before connecting to Salesforce.

To use Connect REST API, create a REST entry point in your org. Salesforce defines this entry point as an external client app. See [Step Two: Set Up Authorization](atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm "Create an external client app in a Salesforce org, enable OAuth, and configure an OAuth flow. Use the external client app to connect to Salesforce.") to create your external client app.

## OAuth Flows

A user must be authenticated before accessing Salesforce. OAuth has multiple authentication flows. There are several steps in each authentication flow, as dictated by the OAuth standard and the type of application trying to access Salesforce. On successful authorization, the client application receives access and refresh tokens.

For more information about setting up external client app OAuth flows, see [Set Up OAuth Flows](https://help.salesforce.com/s/articleView?id=xcloud.external_client_apps_oauth_flow_config.htm&type=5&language=en_US) in Salesforce Help.

-   **[Request Static Assets and Post Forms Directly from HTML](atlas.en-us.chatterapi.meta/chatterapi/intro_requesting_bearer_token_url.htm)**
    HTML pages that aren’t hosted on Salesforce have had difficulty displaying user and group images and posting file attachments in forms. The reason is that URLs for these assets require authentication, which is provided with a session cookie when pages are hosted on Salesforce. Pages not hosted on Salesforce don't have access to the session cookie. Also, it isn’t possible to pass an OAuth token from the HTML contexts <img\>, <a\>, and <form\>.

## Related Topics

- Step Two: Set Up Authorization (atlas.en-us.chatterapi.meta/chatterapi/CR_quickstart_oauth.htm)
- Request Static Assets and Post Forms Directly from HTML (atlas.en-us.chatterapi.meta/chatterapi/intro_requesting_bearer_token_url.htm)

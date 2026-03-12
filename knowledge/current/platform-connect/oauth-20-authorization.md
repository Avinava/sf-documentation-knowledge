---
title: "OAuth 2.0 Authorization"
domain: platform-connect
topic: oauth-20-authorization
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.257Z
estimatedTokens: 950
keywords: [OAuth, 2.0, Authorization, Canvas, supports, web, server, flow, user-agent, Connected, Apps]
---

# OAuth 2.0 Authorization

> Canvas supports the OAuth 2.0 web server flow and the OAuth 2.0
  user-agent flow.

# OAuth 2.0 Authorization

Canvas supports the OAuth 2.0 web server flow and the OAuth 2.0 user-agent flow.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

If your Canvas app URL contains a URL fragment identifier (#), then the hash mark (#) and all characters that follow are stripped from the URL during the authentication flow. To prevent unexpected behavior, avoid using hash marks (#) in a Canvas app URL.

When using OAuth with Canvas, you have two options.

-   Web server flow—To integrate a Canvas app with the Salesforce API, use the OAuth 2.0 web server flow, which implements the [OAuth 2.0 authorization code grant type](https://tools.ietf.org/html/rfc6749#section-4.1 "HTML (New Window)"). With this flow, the server hosting the web app must be able to protect the connected app’s identity, defined by the client ID and client secret. For more information, see [OAuth 2.0 Web Server Flow for Web App Integration](https://help.salesforce.com/articleView?id=remoteaccess_oauth_web_server_flow.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.
-   User-agent flow—With the OAuth 2.0 user-agent flow, users authorize a Canvas app to access data using an external or embedded browser. This flow uses the [OAuth 2.0 implicit grant type](https://tools.ietf.org/html/rfc6749#section-4.2 "HTML (New Window)"). For more information, see [OAuth 2.0 User-Agent Flow for Desktop or Mobile App Integration](https://help.salesforce.com/articleView?id=remoteaccess_oauth_user_agent_flow.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.

Regardless of which OAuth flow that you implement, the Canvas app must provide code for initiating the standards-based OAuth flow. OAuth considerations include:

-   Salesforce performs an HTTP GET when invoking the Canvas app URL.
-   With the user agent flow, all authorization is performed in the browser, and no server-side code is needed.

For more information about OAuth, see [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)") in *Salesforce Help*.

## Existing Connected Apps and OAuth

If you have an existing connected app that uses OAuth authorization and you want to expose that app as a Canvas app, you have two options.

-   Edit the existing app, and add the Canvas app information to it. Your app can continue to use the same client ID and secret.
-   Create a new Canvas app, which gets a new client ID and consumer secret. Make sure to update your app with the client ID and secret.

-   **[Canvas App User Flow—OAuth](atlas.en-us.platform_connect.meta/platform_connect/user_flow_oauth.htm)**
    If your canvas app uses OAuth authorization, the user experience varies depending on where the canvas app is located in the user interface and how user access is set.
-   **[Initiate OAuth Flow](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_code_example.htm)**
    Start the authorization process in your Canvas app by using OAuth 2.0. If you store or retrieve data, such as an authentication token, from your Canvas app’s local storage in the callback, use window.opener.localStorage instead of window.localStorage.

#### See Also

-   [Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm "When you create a Canvas app, you can use the signed request authentication method or the OAuth 2.0 authentication method.")

-   [Canvas App User Flow—OAuth](atlas.en-us.platform_connect.meta/platform_connect/user_flow_oauth.htm "If your canvas app uses OAuth authorization, the user experience varies depending on where the canvas app is located in the user interface and how user access is set.")

## Related Topics

- Canvas App User Flow—OAuth (atlas.en-us.platform_connect.meta/platform_connect/user_flow_oauth.htm)
- Initiate OAuth Flow (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_code_example.htm)
- Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_authentication.htm)

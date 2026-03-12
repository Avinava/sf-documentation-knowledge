---
title: "Authentication"
domain: platform-connect
topic: authentication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.226Z
estimatedTokens: 994
keywords: [Authentication, Canvas, app, signed, OAuth, 2.0]
---

# Authentication

> When you create a Canvas app, you can use the signed request
  authentication method or the OAuth 2.0 authentication method.

# Authentication

When you create a Canvas app, you can use the signed request authentication method or the OAuth 2.0 authentication method.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_connect)

#### Important

If your Canvas app URL contains a URL fragment identifier (#), then the hash mark (#) and all characters that follow are stripped from the URL during the authentication flow. To prevent unexpected behavior, avoid using hash marks (#) in a Canvas app URL.

-   [Signed request](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm "Signed request is the default authorization method for Canvas apps. The signed request authorization flow varies depending on whether the administrator gives users access to the Canvas app or if users can self-authorize. You can verify signed request information with a client secret, then use signed requests to customize the app and make subsequent calls to Salesforce.")—The default method of authentication for Canvas apps. The signed request containing the consumer key, access token, and other contextual information is provided to the Canvas app in one of these ways.
    -   The administrator allows access to the Canvas app for the user.
    -   The user approves the Canvas app in the OAuth flow.
-   [OAuth 2.0](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_authentication.htm "Canvas supports the OAuth 2.0 web server flow and the OAuth 2.0 user-agent flow.")—Canvas apps can use the OAuth 2.0 protocol to authorize and acquire access tokens. For more information about OAuth and the Lightning Platform, see [Authorize Apps with OAuth](https://help.salesforce.com/articleView?id=remoteaccess_authenticate.htm&language=en_US "HTML (New Window)").

-   **[Signed Request Authentication](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm)**
    Signed request is the default authorization method for Canvas apps. The signed request authorization flow varies depending on whether the administrator gives users access to the Canvas app or if users can self-authorize. You can verify signed request information with a client secret, then use signed requests to customize the app and make subsequent calls to Salesforce.
-   **[OAuth 2.0 Authorization](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_authentication.htm)**
    Canvas supports the OAuth 2.0 web server flow and the OAuth 2.0 user-agent flow.
-   **[SAML Single Sign-On for Canvas Apps](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_saml_sso_intro.htm)**
    Whether you use signed request or OAuth authorization, you can use SAML-based single sign-on (SSO) to provide your users with a seamless authentication flow. You can leverage Salesforce as an identity provider or as a service provider. SAML SSO enables you to give your users automatic authentication into your canvas app via SAML and authentication into Salesforce via the signed request.

#### See Also

-   [Canvas SDK](atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm "Canvas is a set of tools that enable you to integrate your apps within Salesforce. This framework includes an SDK that you can use to authenticate your app and retrieve data from Salesforce.")

-   [Understanding Authentication](https://salesforce.com/us/developer/docs/api_rest/index_Left.htm#StartTopic=Content/intro_understanding_authentication.htm "Understanding Authentication - HTML (New Window)")

-   [Canvas App User Flow—Signed Request](atlas.en-us.platform_connect.meta/platform_connect/user_flow_signed_request.htm)

-   [Canvas App User Flow—OAuth](atlas.en-us.platform_connect.meta/platform_connect/user_flow_oauth.htm "If your canvas app uses OAuth authorization, the user experience varies depending on where the canvas app is located in the user interface and how user access is set.")

## Related Topics

- Signed request (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm)
- OAuth 2.0 (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_authentication.htm)
- Signed Request Authentication (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_signed_req_authentication.htm)
- OAuth 2.0 Authorization (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_oauth_authentication.htm)
- SAML Single Sign-On for Canvas Apps (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_saml_sso_intro.htm)
- Canvas SDK (atlas.en-us.platform_connect.meta/platform_connect/canvas_framework_using_sdk.htm)
- Canvas App User Flow—Signed Request (atlas.en-us.platform_connect.meta/platform_connect/user_flow_signed_request.htm)
- Canvas App User Flow—OAuth (atlas.en-us.platform_connect.meta/platform_connect/user_flow_oauth.htm)

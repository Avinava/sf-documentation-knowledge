---
title: "JavaScript Examples for Headless Identity APIs"
domain: headless-identity
topic: javascript-examples-for-headless-identity-apis
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.902Z
estimatedTokens: 1037
keywords: [JavaScript, Examples, Headless, Identity, APIs, Postman, great, testing, learning, how, flows, doesn’t, show, app, interact]
---

# JavaScript Examples for Headless Identity APIs

> Postman is great for testing and learning how to set up headless identity flows, but it
    doesn’t show you how your app can interact with Headless Identity APIs. Use these high-level
    JavaScript examples to understand how your app can call these APIs in a real-world
    implementation. Like the rest of this guide, the examples here apply to single-page apps, also
    known as public clients. These examples don’t show you how to use these flows with client-server
    apps or private clients.

# JavaScript Examples for Headless Identity APIs

Postman is great for testing and learning how to set up headless identity flows, but it doesn’t show you how your app can interact with Headless Identity APIs. Use these high-level JavaScript examples to understand how your app can call these APIs in a real-world implementation. Like the rest of this guide, the examples here apply to single-page apps, also known as public clients. These examples don’t show you how to use these flows with client-server apps or private clients.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


These examples are for demonstration only and aren’t meant to be used in production. Always test code before deploying it to a production environment.

Unlike the Postman examples, these examples use the Proof Key for Code Exchange (PKCE) extension, which improves security. We strongly recommend that you always use PKCE when configuring these flows with public clients.

The examples present a simplified overview of each headless flow for public clients. For in-depth descriptions of the flows for both public and private clients, see these resources in Salesforce Help.

-   [Headless Identity APIs for Customers and Partners](https://help.salesforce.com/s/articleView?id=xcloud.headless_identity_customers_overview.htm&type=5&language=en_US "HTML (New Window)")
-   [Authorization Code and Credentials Flow for Public Clients](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_authcodecreds_singlepageapp.htm&type=5&language=en_US "HTML (New Window)")
-   [Authorization Code and Credentials Flow for Private Clients](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_authorization_code_credentials_flow.htm&type=5&language=en_US "HTML (New Window)")
-   [Headless Registration Flow for Public Clients](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_headless_registration_public_clients.htm&type=5&language=en_US "HTML (New Window)")
-   [Headless Registration Flow for Private Clients](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_headless_registration_private_clients.htm&type=5&language=en_US "HTML (New Window)")
-   [Headless Forgot Password Flow](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_headless_forgot_password_flow.htm&type=5&language=en_US "HTML (New Window)")—You can use this resource for public and private clients.

-   **[Headless Login JavaScript Examples](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_login.htm)**
    Use these high-level examples to understand how to implement headless login for a single-page app.
-   **[Headless Registration JavaScript Examples](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_registration_javascript.htm)**
    Use these high-level examples to understand how to implement headless registration for a single-page app.
-   **[Headless Forgot Password JavaScript Examples](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_forgotpassword.htm)**
    Use these high-level examples to understand how to implement the Headless Forgot Password Flow for a single-page app.
-   **[Building a Native Single Sign-On Experience JavaScript Examples](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_sso.htm)**
    Use these high-level examples to understand how to create a native single sign-on (SSO) experience for a single-page app. This configuration uses a redirect-based flow to make it seem like your app natively integrates with an SSO provider. It isn’t technically headless, but the user experience is the same as the headless flows.
-   **[Getting User Info JavaScript Examples](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_getuserinfo.htm)**
    When you get an access token via headless registration or headless login, you can retrieve user information with a request to the User Info endpoint. Use this example to understand how.

## Related Topics

- Headless Login JavaScript Examples (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_login.htm)
- Headless Registration JavaScript Examples (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_registration_javascript.htm)
- Headless Forgot Password JavaScript Examples (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_forgotpassword.htm)
- Building a Native Single Sign-On Experience JavaScript Examples (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_sso.htm)
- Getting User Info JavaScript Examples (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_javascript_getuserinfo.htm)

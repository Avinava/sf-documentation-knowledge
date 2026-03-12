---
title: "Use Postman to Work with Headless Identity APIs"
domain: headless-identity
topic: use-postman-to-work-with-headless-identity-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:31.956Z
estimatedTokens: 1552
keywords: [Postman, Work, Headless, Identity, APIs, Now, configured, org-wide, settings, Experience, Cloud, connected, app, configure, test]
---

# Use Postman to Work with Headless Identity APIs

> Now that you configured org-wide settings, Experience Cloud settings, and a connected
    app, you can configure and test out the headless identity flows. To make this process easier, we
    provide Postman examples that are customized for this example single-page app implementation.
    Use these examples to walk through the flows for headless registration, headless login, and
    headless password reset. The collection also contains examples for calling the User Info
    endpoint and logging out a user.

# Use Postman to Work with Headless Identity APIs

Now that you configured org-wide settings, Experience Cloud settings, and a connected app, you can configure and test out the headless identity flows. To make this process easier, we provide Postman examples that are customized for this example single-page app implementation. Use these examples to walk through the flows for headless registration, headless login, and headless password reset. The collection also contains examples for calling the User Info endpoint and logging out a user.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=headless_identity)

#### Note

For simplicity, these examples don’t use the OAuth 2.0 Proof Key for Code Exchange (PKCE) extension. For security, we strongly recommend that you always use PKCE when configuring these flows with public clients.

The examples in this collection are divided into four sections, each with examples representing key steps in the flow.

-   Headless Registration Flow—This section contains three examples.
    -   Registration - Initialize—Send a registration request to Headless Registration API.
    -   Registration - Authorize—Send an authorization request to Headless Login API.
    -   Registration - Token Exchange—Send an access token request to the token endpoint.
-   Headless Login via the Authorization Code and Credentials Flow—This section contains two examples.
    -   Username Password Login - Authorize—Send an authorization request to Headless Login API.
    -   Username Password Login - Token Exchange—Send an access token request to the token endpoint.
-   Confirming a successful login by calling the User Info endpoint—This section contains one example. You can use it to confirm the success of headless registration and headless login.
    -   Get User Info—Send a request to the User Info endpoint.
-   Forgot Password Flow—This section contains two examples.
    -   Forgot Password - Initialize—Send the initial password reset request to Headless Forgot Password API.
    -   Forgot Password - Change Password—Finish changing the password. with another request to Headless Forgot Password API.
-   Logging out the user by revoking the access token—This section contains one example. You can use it to revoke the access token you get during headless registration and headless login.
    -   Revoke Token—Send a request to the token revocation endpoint.

-   **[Set Up Your Postman Workspace](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_set_variables.htm)**
    To get started with Postman, fork the public Salesforce Developers collection and set your variables.
-   **[Headless Registration Flow: Send a Registration Request](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_registration.htm)**
    To configure the Headless Registration Flow, start with a request to Headless Registration API. This example walks you through sending a request with Postman.
-   **[Headless Registration Flow: Send an Authorization Request](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_registration_authorize.htm)**
    After you send a registration request to Headless Registration API, initialize the Authorization Code and Credentials Flow to complete the registration and log the user in. For this part of the flow, you call Headless Login API.
-   **[Headless Registration Flow: Send a Token Request](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_registration_token_exchange.htm)**
    After you receive the authorization code from Salesforce, exchange the code for an access token. This example walks you through initializing the code exchange with Postman.
-   **[Headless Login: Send an Authorization Request](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_login_authorize.htm)**
    To configure headless login, set up the Authorization Code and Credentials Flow. This Postman example walks you through the Authorization Code and Credentials Flow with a single-page app.
-   **[Headless Login: Send a Token Request](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_login_token_exchange.htm)**
    After you send the authorization request and get a code, exchange the code for an access token.
-   **[Headless Registration and Headless Login Flows: Get User Info](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_getuserinfo.htm)**
    Both headless registration and headless login are built on the Authorization Code and Credentials Flow, where you exchange an authorization code for an access token. After your app receives the access the token, the next step is processing it and creating the user session. This example walks you through calling the User Info endpoint to confirm that the login was successful and to provide the user information required for your app to create a session. You can use this example for both headless registration and headless login.
-   **[Headless Forgot Password Flow: Send a Password Reset Request](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_forgotpassword_initialize.htm)**
    To initialize the Headless Forgot Password Flow, send a password reset request. This example walks you through sending a request with Postman.
-   **[Headless Forgot Password Flow: Change the User’s Password](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_changepassword.htm)**
    After you receive a one-time password (OTP) from Salesforce, you can change your password with a new request to the forgot password endpoint. This example walks you through changing the password in Postman.
-   **[Headlessly Revoke an Access Token](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_revoketoken.htm)**
    To log out of your headless app, you can revoke the access token. This example walks you through headlessly revoking a token with Postman.

## Related Topics

- Set Up Your Postman Workspace (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_set_variables.htm)
- Headless Registration Flow: Send a Registration Request (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_registration.htm)
- Headless Registration Flow: Send an Authorization Request (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_registration_authorize.htm)
- Headless Registration Flow: Send a Token Request (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_registration_token_exchange.htm)
- Headless Login: Send an Authorization Request (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_login_authorize.htm)
- Headless Login: Send a Token Request (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_login_token_exchange.htm)
- Headless Registration and Headless Login Flows: Get User Info (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_getuserinfo.htm)
- Headless Forgot Password Flow: Send a Password Reset Request (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_forgotpassword_initialize.htm)
- Headless Forgot Password Flow: Change the User’s Password (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_changepassword.htm)
- Headlessly Revoke an Access Token (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_postman_revoketoken.htm)

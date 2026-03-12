---
title: "Set Up an External Client App for Headless Identity"
domain: headless-identity
topic: set-up-an-external-client-app-for-headless-identity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.852Z
estimatedTokens: 569
keywords: [External, Client, App, Headless, Identity, apps, framework, off-platform, data, Salesforce, APIs, integrate, single-page, configure, settings]
---

# Set Up an External Client App for Headless Identity

> The external client apps framework enables your off-platform app to request data from
    Salesforce APIs. To integrate your single-page app with Headless Identity APIs, create an
    external client app and configure its settings and access policies.

# Set Up an External Client App for Headless Identity

The external client apps framework enables your off-platform app to request data from Salesforce APIs. To integrate your single-page app with Headless Identity APIs, create an external client app and configure its settings and access policies.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


As part of the external client app setup, you enable the Authorization Code and Credentials Flow. With this flow, you can set up headless login. Enabling this flow is also a prerequisite for enabling headless registration. You also define what Salesforce data your app can access with scopes and configure other security settings and access policies. And you define a callback URL, which you use as the redirect\_uri parameter during headless flows.

After you create an external client app, you get a consumer key, or client\_id. During headless flows, your app passes the consumer key to Salesforce to identify itself.

-   **[Create an OAuth-Enabled External Client App](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_connected_app.htm)**
    Create your external client app for headless identity, add the required scopes, and enable the Authorization Code and Credentials flow at the app level.
-   **[Configure External Client App Policies](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_connected_app_policies.htm)**
    In a standard OAuth flow, users often see an approval page where they confirm that an external client app is allowed to access their Salesforce data. With headless identity flows, you don’t want to show users a Salesforce approval page. To preapprove access, configure OAuth policies on your external client app.
-   **[Get Your Consumer Key](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_get_consumer_key.htm)**
    When you create an external client app, it generates a consumer key, also known as a client ID. This value allows Salesforce to identify your third-party app during headless identity flows. Learn how to get your consumer key so that you can use it when configuring headless flows.

## Related Topics

- Create an OAuth-Enabled External Client App (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_create_connected_app.htm)
- Configure External Client App Policies (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_connected_app_policies.htm)
- Get Your Consumer Key (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_get_consumer_key.htm)

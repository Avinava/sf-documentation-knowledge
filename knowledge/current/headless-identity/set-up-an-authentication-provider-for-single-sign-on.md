---
title: "Set Up an Authentication Provider for Single Sign-On"
domain: headless-identity
topic: set-up-an-authentication-provider-for-single-sign-on
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:31.840Z
estimatedTokens: 442
keywords: [Authentication, Provider, Sign-On, providers, way, setting, SSO, external, identity, Google, Salesforce, link, app, experience, feels]
---

# Set Up an Authentication Provider for Single Sign-On

> Authentication providers are one way of setting up single sign-on (SSO) from an external
    identity provider, like Google, into Salesforce. With a single parameter, you can link an
    authentication provider to your app to create an SSO experience that feels native. For this
    example, we set up a Google authentication provider so that your users can log in to Google from
    your app.

# Set Up an Authentication Provider for Single Sign-On

Authentication providers are one way of setting up single sign-on (SSO) from an external identity provider, like Google, into Salesforce. With a single parameter, you can link an authentication provider to your app to create an SSO experience that feels native. For this example, we set up a Google authentication provider so that your users can log in to Google from your app.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


This guide shows you how to create a registration handler, set up an authentication provider, and add it to your Experience Cloud site. This guide doesn’t cover a Postman example for configuring the OAuth 2.0 web server flow or user-agent flow to use the sso\_provider parameter. For full setup instructions, see [Create a Native Single Sign-On Experience in Your App](https://help.salesforce.com/s/articleView?id=xcloud.remoteaccess_native_sso.htm&type=5&language=en_US) in Salesforce Help.

-   **[Create an Authentication Provider Registration Handler](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_auth_provider_registration_handler.htm)**
    Create an Apex registration handler to use with your authentication provider. When users log in to your third-party app with an external single sign-on (SSO) provider, the registration handler creates and updates their user records.
-   **[Configure a Google Authentication Provider](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_configure_auth_provider.htm)**
    For this example, configure a Google authentication provider so that users can log in with Google.

## Related Topics

- Create an Authentication Provider Registration Handler (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_auth_provider_registration_handler.htm)
- Configure a Google Authentication Provider (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_configure_auth_provider.htm)

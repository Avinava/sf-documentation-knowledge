---
title: "What Is Headless Identity?"
domain: headless-identity
topic: what-is-headless-identity
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:32.033Z
estimatedTokens: 1068
keywords: [Headless, Identity, Salesforce, gives, ability, separate, back-end, authentication, processes, front-end, experiences, calling, APIs, power, Customer]
---

# What Is Headless Identity?

> Salesforce Headless Identity gives you the ability to separate back-end authentication
  processes from front-end identity experiences. By calling Headless Identity APIs, you can use the
  power of Customer Identity for authentication while maintaining complete control over the user
  experience in an off-platform or third-party app. Salesforce offers three Headless Identity
  features: login with Headless Login API, registration with Headless Registration API, and password
  reset with Headless Forgot Password API. You can also link a single sign-on (SSO) provider to your
  headless app to create a native SSO experience.

# What Is Headless Identity?

Salesforce Headless Identity gives you the ability to separate back-end authentication processes from front-end identity experiences. By calling Headless Identity APIs, you can use the power of Customer Identity for authentication while maintaining complete control over the user experience in an off-platform or third-party app. Salesforce offers three Headless Identity features: login with Headless Login API, registration with Headless Registration API, and password reset with Headless Forgot Password API. You can also link a single sign-on (SSO) provider to your headless app to create a native SSO experience.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


Headless Identity use cases fall into two categories.

-   Apps that complement a customer-facing Experience Cloud site. Users fully interact with and log in to the Experience Cloud site and the app. For example, you build a mobile app in addition to your main Experience Cloud site because you want to target mobile-first users. You want to fully design the user experience to suit your company’s branding. You can completely control the user experience in your app while Salesforce provides identity services. And because you already have an Experience Cloud site, you can simplify your setup process.
-   Standalone apps. Users interact with and log in to your app, but not an Experience Cloud site. For example, your company builds your own customer-facing apps to align with your digital marketing strategy. Because you want to use Salesforce to manage customer outreach and store information, enabling your users to log in and register for your apps is important. But you still want full control over the user experience in your apps. Headless Identity means you can have it all—you can provide identity services to your apps, manage customers in Salesforce, and keep up with your company’s digital marketing strategy.

    For use cases in this category, you still create and set up an Experience Cloud site because Headless Identity APIs are exposed and configured through Experience Cloud. The Experience Cloud site also functions as a way to store your customer accounts and contact records and manage access to your app. But your users don’t interact with it directly.


-   **[About This Guide](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_guide_overview.htm)**
    This guide walks you through an end-to-end Headless Identity implementation, from completing your Salesforce setup to calling Headless Identity API. The example implementation in this guide is designed for a single-page app or public client.
-   **[Headless Login Overview](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_login_overview.htm)**
    You configure headless login via the Authorization Code and Credentials Flow, which is built on the OAuth 2.0 Authorization Code grant type. At the end of this flow, a user is logged in and can access Salesforce data. Here’s a high-level overview of how the flow works with a single-page app.
-   **[Headless Registration Overview](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_registration_overview.htm)**
    The Headless Registration Flow extends the Authorization Code and Credentials Flow. At the end of this flow, a new user is registered and logged in, and they can access Salesforce data. Here’s a high-level overview of how the flow works with a single-page app.
-   **[Headless Forgot Password Overview](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_forgot_password_overview.htm)**
    If your users can log in and register, they must also be able to reset their passwords. Here’s a high-level overview of how the Headless Forgot Password Flow works with a single-page app.
-   **[Building Native Single Sign-On Experiences](atlas.en-us.headless_identity.meta/headless_identity/headless_identity_single_sign_on.htm)**
    You can configure the OAuth 2.0 web-server and user-agent flows to create a native single sign-on (SSO) experience in your app. Use this feature to add SSO to your Headless Identity implementation.

## Related Topics

- About This Guide (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_guide_overview.htm)
- Headless Login Overview (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_login_overview.htm)
- Headless Registration Overview (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_registration_overview.htm)
- Headless Forgot Password Overview (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_forgot_password_overview.htm)
- Building Native Single Sign-On Experiences (atlas.en-us.headless_identity.meta/headless_identity/headless_identity_single_sign_on.htm)

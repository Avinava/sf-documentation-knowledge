---
title: "Building Native Single Sign-On Experiences"
domain: headless-identity
topic: building-native-single-sign-on-experiences
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:32.028Z
estimatedTokens: 643
keywords: [Building, Native, Sign-On, Experiences, configure, OAuth, 2.0, web-server, user-agent, flows, SSO, experience, app, feature, add]
---

# Building Native Single Sign-On Experiences

> You can configure the OAuth 2.0 web-server and user-agent flows to create a native single
    sign-on (SSO) experience in your app. Use this feature to add SSO to your Headless Identity
    implementation.

# Building Native Single Sign-On Experiences

You can configure the OAuth 2.0 web-server and user-agent flows to create a native single sign-on (SSO) experience in your app. Use this feature to add SSO to your Headless Identity implementation.

| Available in: both Salesforce Classic (not available in all orgs) and Lightning Experience |
| --- |
| Available in: Enterprise, Unlimited, and Developer Editions |


To create a native single sign-on experience in your app, you configure SSO with an authentication provider or SAML identity provider. You add this provider as a login option from your Experience Cloud settings. Then you configure the OAuth 2.0 web server flow or user-agent flow with your app. You pass in a parameter that specifies the name of the SSO provider you configured. On your app, you also build a button to display the option to log in with the SSO provider.

During the flow, when the user clicks the option to log in with the provider, the browser is redirected to your Experience Cloud site. Here, Salesforce checks for the SSO provider parameter specified in the authorization flow. The browser is then automatically redirected to the SSO provider. The user enters their credentials and the flow briefly redirects to your Experience Cloud site again before the user is redirected back to your app. These redirects happen automatically, giving the user the impression that your app is natively integrated with the external SSO provider—they don’t see or interact with your Experience Cloud site.

For example, you want to set up SSO between your app and Google, and you want it to feel like your app is natively integrated with Google. Here’s a simplified overview of the flow works when it’s configured.

![Sequence diagram showing SSO with a headless app](/docs/resources/img/en-us/260.0?doc_id=help%2Fbundle_identity%2Fimages%2Fheadless_sso_diagram.png&folder=headless_identity)

-   A user goes to your app and clicks a button so that they can log in with an external provider, such as Google (1).
-   The browser briefly redirects to the Experience Cloud login page.
-   Salesforce confirms that a Google SSO provider is enabled for the Experience Cloud site (2).
-   The browser automatically redirects to the Google login page.
-   The user enters their Google credentials (3).
-   Google authenticates the user. The browser is briefly redirected back to the Experience Cloud login page.
-   Salesforce finishes logging in the user (4).
-   The browser is automatically redirected back to your app.
-   The user is now logged in (5).

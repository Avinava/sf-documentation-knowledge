---
title: "SAML Single Sign-On for Canvas Apps"
domain: platform-connect
topic: saml-single-sign-on-for-canvas-apps
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.280Z
estimatedTokens: 538
keywords: [SAML, Sign-On, Canvas, Apps, Whether, signed, OAuth, authorization, SAML-based, SSO, provide, users, seamless, authentication, flow]
---

# SAML Single Sign-On for Canvas Apps

> Whether you use signed request or OAuth authorization, you
      can use SAML-based single sign-on (SSO) to provide your users with a seamless authentication
      flow. You can leverage Salesforce as an identity provider or as a service provider. SAML SSO
      enables you to give your users automatic authentication into your canvas app via SAML and
      authentication into Salesforce via the signed request.

# SAML Single Sign-On for Canvas Apps

Whether you use signed request or OAuth authorization, you can use SAML-based single sign-on (SSO) to provide your users with a seamless authentication flow. You can leverage Salesforce as an identity provider or as a service provider. SAML SSO enables you to give your users automatic authentication into your canvas app via SAML and authentication into Salesforce via the signed request.

SAML (Security Assertion Markup Language) is an XML-based standard for user authentication on the Web which allows the exchange of authorization data between two domains. With this feature you can create a canvas app that begins a standard SAML authentication flow when opened by a user. After this process completes, the user is authenticated into your Web application.

For canvas apps that use signed request authentication, two methods that are included in the Canvas SDK enable your canvas app to call into Salesforce to receive a new signed request directly or enable Salesforce to repost the signed request to your Web application endpoint. This results in a complete end-to-end authentication flow.

refreshSignedRequest Method

Returns a new signed request via a callback. After the SAML SSO process is completed, your app can call this method and receive a new signed request. This method is intended for developers who need to retrieve the signed request by using a more client-side JavaScript approach. (The Canvas SDK sends the signed request to your app.)

repost Method

Requests the parent window to initiate a POST to your canvas app and reloads the app page with a refreshed signed request. After the SAML SSO process is completed, your app can call this method and a new signed request is sent to your app via a POST. This method is for developers who want to retrieve the signed request using a more server-side approach. (Salesforce POSTs the signed request to your server.)

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_connect)

#### Note

The SAML Initiation Method Identity Provider Initiated is not supported for canvas apps on Lightning Platform sites.

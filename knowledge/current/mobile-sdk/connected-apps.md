---
title: "Connected Apps"
domain: mobile-sdk
topic: connected-apps
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:25.357Z
estimatedTokens: 248
keywords: [Connected, Apps, app, integrates, application, Salesforce, APIs, standard, SAML, OAuth, protocols, authenticate, provide, sign-on, tokens, addition, capabilities]
---

> A connected app integrates an application with Salesforce using APIs. Connected apps use
         standard SAML and OAuth protocols to authenticate, provide single sign-on, and provide
         tokens for use with Salesforce APIs. In addition to standard OAuth capabilities, connected
         apps a

# Connected Apps

A connected app integrates an application with Salesforce using APIs. Connected apps use standard SAML and OAuth protocols to authenticate, provide single sign-on, and provide tokens for use with Salesforce APIs. In addition to standard OAuth capabilities, connected apps allow Salesforce admins to set various security policies and have explicit control over who can use the corresponding apps.

Here’s a general list of information that you provide when you create a connected app.

-   Name, description, logo, and contact information
-   URL where Salesforce can locate the app for authorization or identification
-   Authorization protocol: OAuth, SAML, or both
-   IP ranges from where users can log in to connected app (optional)
-   Information about mobile policies that the connected app can enforce (optional)

On the most basic level, Salesforce Mobile SDK apps use connected apps to access Salesforce OAuth services, which enable access to Salesforce REST APIs.

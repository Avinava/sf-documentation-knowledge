---
title: "Authentication"
domain: apex-guide
topic: authentication
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:47.797Z
keywords: [Authentication]
---

# Authentication

# Authentication

Salesforce provides various ways to authenticate users. Build a combination of authentication methods to fit the needs of your org and your users’ use patterns.

-   **[Create a Custom Authentication Provider Plug-in](atlas.en-us.apexcode.meta/apexcode/authproviderplugin.htm)**  
    You can use Apex to create a custom OAuth-based authentication provider plug-in for single sign-on (SSO) to Salesforce.
-   **[OAuth 2.0 Token Exchange Handler Examples](atlas.en-us.apexcode.meta/apexcode/token_exchange_handler.htm)**  
    Sometimes you want to integrate Salesforce into a complex system where you have a primary app, a central identity provider, and multiple other apps and microservices. In this model, users log in to the primary app via the identity provider and access data provided by the other apps and microservices. To fit Salesforce into this model as one of the apps providing data, use the OAuth 2.0 token exchange flow, which implements an Apex token exchange handler.
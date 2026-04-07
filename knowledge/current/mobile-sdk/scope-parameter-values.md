---
title: "Scope Parameter Values"
domain: mobile-sdk
topic: scope-parameter-values
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:26.772Z
estimatedTokens: 1584
keywords: [Scope, OAuth, requires, configuration, server, client, agreement, two, sides, contract, Side]
---

> OAuth requires scope configuration both on server and on client. The
   agreement between the two sides defines the scope contract.

# Scope Parameter Values

OAuth requires scope configuration both on server and on client. The agreement between the two sides defines the scope contract.

-   **Server side**—Define scope permissions in a connected app on the Salesforce server. These settings determine which levels of access client apps, such as Mobile SDK apps, can request. At a minimum, configure your connected app OAuth settings to match what’s specified in your code. For most apps, refresh\_token, web, and api are sufficient.
-   **Client side**—Specify scope requests in your Mobile SDK app. Client scope requests must be a subset of the connected app’s scope permissions.

## Server Side Configuration

You can set the following scope parameter values.

| Value | Description |
| --- | --- |
| Perform ANSI SQL queries on Customer Data Platform data (cdp_query_api) | Allows ANSI SQL queries of Data Cloud data on behalf of the user. |
| Manage Pardot services (pardot_api) | Allows access to Marketing Cloud Account Engagement API services on behalf of the user. Manage the full extent of accessible services in Account Engagement. (Pardot is now Marketing Cloud Account Engagement.) |
| Manage Customer Data Platform profile data (cdp_profile_api) | Allows access to Data Cloud REST API data. Use this scope to manage profile records. |
| Access Connect REST API resources (chatter_api) | Allows access to Connect REST API resources on behalf of the user. |
| Manage Customer Data Platform Ingestion API data (cdp_ingest_api) | Allows access to Data Cloud Ingestion API data. Use this scope to upload and maintain external datasets in Data Cloud. This scope is packaged in a JSON web token (JWT). |
| Access Analytics REST API Charts Geodata resources (eclair_api) | Allows access to the Analytics REST API Charts Geodata resource. |
| Access Analytics REST API resources (wave_api) | Allows access to the Analytics REST API resources. |
| Manage user data via APIs (api) | Allows access to the current, logged-in user’s account using APIs, such as REST API and Bulk API 2.0. This scope also includes chatter_api, which allows access to Connect REST API resources. |
| Access custom permissions (custom_permissions) | Allows access to the custom permissions in an org associated with the connected app. This scope also shows whether the current user has each permission enabled. |
| Access the identity URL service (id, profile, email, address, phone) | Allows access to the identity URL service. You can request profile, email, address, or phone individually to get the same result as using id because they’re synonymous. |
| Access Lightning applications (lightning) | Allows hybrid apps to directly obtain Lightning child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow. |
| Access content resources (content) | Allows hybrid apps to directly obtain content child sessions through the OAuth 2.0 hybrid app token flow and hybrid app refresh token flow. |
| Access unique user identifiers (openid) | Allows access to the current, logged in user’s unique identifier for OpenID Connect apps.In the OAuth 2.0 user-agent flow and the OAuth 2.0 web server flow, use the openid scope. In addition to the access token, this scope enables you to receive a signed ID token that conforms to the OpenID Connect specifications. |
| Full access (full) | Allows access to all data accessible by the logged-in user, and encompasses all other scopes.full doesn’t return a refresh token. You must explicitly request the refresh_token scope to get a refresh token. |
| Perform requests at any time (refresh_token, offline_access) | Allows a refresh token to be returned when the requesting client is eligible to receive one. With a refresh token, the app can interact with the user’s data while the user is offline. This token is synonymous with requesting offline_access. |
| Access Visualforce applications (visualforce) | Allows access to customer-created Visualforce pages only. This scope doesn’t allow access to standard Salesforce UIs.To allow hybrid apps to directly obtain Visualforce child sessions, include this scope with the OAuth 2.0 hybrid app token flow or hybrid app refresh token flow. |
| Manage user data via Web browsers (web) | Allows use of the access_token on the web. This scope also includes visualforce, allowing access to customer-created Visualforce pages. |
| Access chatbot services (chatbot_api) | Allows access to Einstein Bot API services. |
| Access Headless Registration API (user_registration_api) | Allows access to the API for the Headless Registration Flow. If you set up your flow to require authentication, you must pass in an access token that includes this scope. |
| Access Headless Forgot Password API (forgot_password) | Allows access to the API for the Headless Forgot Password Flow. If you set up your flow to require authentication, you must pass in an access token that includes this scope. |
| Access all Data Cloud API resources (cdp_api) | Allows access to all Data Cloud API resources. |
| Access the Salesforce API Platform (sfap_api) | Allows access to the Salesforce API Platform, including API services accessed from api.salesforce.com or the equivalent operating zone endpoint. |
| Access Interaction API resources (interaction_api) | Reserved for future use. |

![Note](/docs/resources/img/en-us/noversion?doc_id=images%2Ficon_note.png&folder=mobile_sdk)

#### Note

For Mobile SDK apps, you’re always required to select refresh\_token in server-side Connected App settings. Even if you select the full scope, you still must explicitly select refresh\_token.

## Client Side Configuration

The following rules govern scope configuration for Mobile SDK apps.

| Scope | Mobile SDK App Configuration |
| --- | --- |
| refresh_token | Implicitly requested by Mobile SDK for your app; no need to include in your app’s list of scopes. |
| api | Include if you’re  making any Salesforce REST API calls (applies to most apps). |
| web | Include if your app accesses pages defined in a Salesforce org (for any app that loads Salesforce-based web pages.) |
| full | Include to request all permissions. (Mobile SDK implicitly requests refresh_token for you.) |
| chatter_api | Include if your app calls Connect REST APIs. |
| id | (Not needed) |
| visualforce | Use web instead. |

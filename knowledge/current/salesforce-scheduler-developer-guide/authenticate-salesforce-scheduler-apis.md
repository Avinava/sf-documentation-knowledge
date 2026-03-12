---
title: "Authenticate Salesforce Scheduler APIs"
domain: salesforce-scheduler-developer-guide
topic: authenticate-salesforce-scheduler-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:43.543Z
estimatedTokens: 362
keywords: [Authenticate, Salesforce, Scheduler, APIs, step, API-based, integration, connect, access, token, OAuth, authentication, secure, way, SOAP]
---

# Authenticate Salesforce Scheduler APIs

> The first step in an API-based integration is to connect to Salesforce
      and get an access token using OAuth. OAuth access token authentication is the most secure way
      to authenticate SOAP and REST API calls.

# Authenticate Salesforce Scheduler APIs

The first step in an API-based integration is to connect to Salesforce and get an access token using OAuth. OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

To build a custom appointment scheduling application using Salesforce Scheduler APIs for prospects or unauthenticated users, you must build it using a logged-in user. For example, an integration user or an administrator.

If you are working in a Salesforce organization that has a Developer Edition, an Enterprise Edition, or above, verify that you have the API Enabled permission. This permission is enabled by default. This permission allows you to access any Salesforce API.

When you have this permission, you can connect to Salesforce and authenticate. Then make a request to REST or Connect API and check the response. For more information, see [Connect REST API Quick Start](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/quickstart.htm "HTML (New Window)").

#### See Also

-   [Connect REST API Developer Guide: Connect REST API Quick Start](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/quickstart.htm "Connect REST API Developer Guide: Connect REST API Quick Start - HTML (New Window)")

---
title: "Authenticate with Salesforce Scheduler APIs"
domain: salesforce-scheduler-developer-guide
topic: authenticate-with-salesforce-scheduler-apis
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:44.163Z
estimatedTokens: 204
keywords: [Authenticate, Salesforce, Scheduler, APIs, step, API-based, integration, connect, access, token, OAuth, authentication, secure, way, SOAP]
---

# Authenticate with Salesforce Scheduler APIs

> The first step in an API-based integration is to connect to Salesforce and get an access
  token using OAuth. OAuth access token authentication is the most secure way to authenticate SOAP
  and REST API calls.

# Authenticate with Salesforce Scheduler APIs

The first step in an API-based integration is to connect to Salesforce and get an access token using OAuth. OAuth access token authentication is the most secure way to authenticate SOAP and REST API calls.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=salesforce_scheduler_developer_guide)

#### Note

It's not possible to modify an existing appointment via a guest user profile. You can use an integration user who has permissions to read and update only the required objects.

If you are working in a Salesforce organization that has a Developer Edition, an Enterprise Edition, or above, verify that you have the API Enabled permission. This permission is enabled by default. This permission allows you to access any Salesforce API.

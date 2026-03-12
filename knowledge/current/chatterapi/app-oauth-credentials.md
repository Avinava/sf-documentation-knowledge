---
title: "App Oauth Credentials"
domain: chatterapi
topic: app-oauth-credentials
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.173Z
estimatedTokens: 176
keywords: [App, Oauth, Credentials, primary, staged, consumer]
---

# App Oauth Credentials

> Represents the primary and staged credentials of a single OAuth consumer.

# App Oauth Credentials

Represents the primary and staged credentials of a single OAuth consumer.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The OAuth consumer's identifier | Small, 60.0 | 60.0 |
| key | String | The OAuth consumer's key | Small, 60.0 | 60.0 |
| name | String | The application's name | Small, 60.0 | 60.0 |
| secret | String | The OAuth consumer's secret | Small, 60.0 | 60.0 |
| stagedCredentials​Url | String | The URL for the staged credentials of the OAuth consumer | Small, 65.0 | 65.0 |
| url | String | The URL for the primary credentials of the OAuth consumer | Small, 60.0 | 60.0 |

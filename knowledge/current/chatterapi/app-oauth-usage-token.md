---
title: "App OAuth Usage Token"
domain: chatterapi
topic: app-oauth-usage-token
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.195Z
estimatedTokens: 259
keywords: [App, OAuth, Usage, Token, Refresh]
---

# App OAuth Usage Token

> Refresh token.

# App OAuth Usage Token

Refresh token.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accessTokenFormat | String | OAuth token format that the app issues (JWT or Opaque) | Small, 59.0 | 59.0 |
| appDeveloperName | String | App developer name. | Small, 59.0 | 59.0 |
| appIdentifier | String | App identifier. | Small, 59.0 | 59.0 |
| initialConnectionAt | String | Date and time of the refresh token row creation. | Small, 59.0 | 59.0 |
| lastUsedAt | String | Date and time of the last token issuance. | Small, 59.0 | 59.0 |
| revocationUrl | String | URL for the GET request to the OAuth Usage API for the app. This URL includes the token identifier and can be used to revoke a token. | Small, 59.0 | 59.0 |
| useCount | Integer | Number of access tokens issued by this refresh token. | Small, 59.0 | 59.0 |
| userIdentifier | String | Token owner's user identifier. | Small, 59.0 | 59.0 |
| username | String | Token owner's username. | Small, 59.0 | 59.0 |

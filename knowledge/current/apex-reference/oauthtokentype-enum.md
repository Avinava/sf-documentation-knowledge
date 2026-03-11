---
title: "OauthTokenType Enum"
domain: apex-reference
topic: oauthtokentype-enum
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:40.321Z
keywords: [OauthTokenType, Enum, Values]
---

# OauthTokenType Enum

# OauthTokenType Enum

Specifies the type of Salesforce-issued OAuth 2.0 token being revoked in the OauthToken.revokeToken method.

## Enum Values

The following are the values of the Auth.OauthTokenType enum.

| Value | Description |
| --- | --- |
| ACCESS_TOKEN | An opaque access token, which Salesforce grants to a client when it successfully completes an authorization flow. Salesforce grants opaque access tokens by default. |
| DELETE_TOKEN | A delete token, which can be queried and used to revoke refresh tokens and associated access tokens. |
| REFRESH_TOKEN | A refresh token, which Salesforce grants to a client as a result of the refresh token flow. Refresh tokens are used to get more access tokens. |
| ORG_JWT | A JSON Web Token (JWT)-based access token, which Salesforce grants to a client when it successfully completes an authorization flow. Salesforce grants JWT-based access tokens if you enable them for a connected app or external client app. |
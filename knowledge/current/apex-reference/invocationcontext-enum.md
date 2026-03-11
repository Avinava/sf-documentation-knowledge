---
title: "InvocationContext Enum"
domain: apex-reference
topic: invocationcontext-enum
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-11T15:42:40.310Z
keywords: [InvocationContext, Enum, Values, See]
---

# InvocationContext Enum

# InvocationContext Enum

The context in which the connected app is invoked, such as the protocol flow used and the token type issued, if any. Developers can use the context information to write code that is unique to the type of invocation.

## Enum Values

The following are the values of the Auth.InvocationContext enum.

| Value | Description |
| --- | --- |
| ASSET_TOKEN | Reserved for future use. |
| OAUTH1 | Context used when authentication is through ​an OAuth 1.0A flow. |
| OAUTH2_JWT_BEARER_TOKEN | Context used when authentication is through a JSON-based Web Token (JWT) bearer token flow. |
| OAUTH2_SAML_ASSERTION | Context used when authentication is through an OAuth 2.0 SAML assertion flow. |
| OAUTH2_SAML_BEARER_ASSERTION | Context used when authentication is through an OAuth 2.0 SAML bearer assertion flow. |
| OAUTH2_USERNAME_PASSWORD | Context used when authentication is through an OAuth 2.0 username-password flow. |
| OAUTH2_USER_AGENT_ID_TOKEN | Context used when issuing an ID token through an OAuth 2.0 user-agent flow. |
| OAUTH2_USER_AGENT_TOKEN | Context used when authentication is through an OAuth 2.0 user agent flow. |
| OAUTH2_WEB_SERVER | Context used when authentication is through a web server authentication flow. |
| OPENIDCONNECT | Context used when authentication is through an OpenID Connect authentication flow. |
| REFRESH_TOKEN | Context used when renewing tokens issued by a web server or user-agent flow. |
| SAML_ASSERTION | Context used when authentication is through a SAML assertion flow. |
| UNKNOWN | Context is unknown. |
| USERID_ENDPOINT | Context used when issuing an access token through a UserInfo endpoint. |

#### See Also

-   [Salesforce Help: Authenticating Apps with OAuth](https://help.salesforce.com/apex/HTViewHelpDoc?id=remoteaccess_authenticate.htm&language=en_US "Salesforce Help: Authenticating Apps with OAuth - html (New Window)")
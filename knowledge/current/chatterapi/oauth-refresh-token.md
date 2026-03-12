---
title: "OAuth Refresh Token"
domain: chatterapi
topic: oauth-refresh-token
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.793Z
estimatedTokens: 129
keywords: [OAuth, Refresh, Token, identifier]
---

# OAuth Refresh Token

> Delete a refresh token by token identifier.

# OAuth Refresh Token

Delete a refresh token by token identifier.

The token identifier is included in the revocation URL field in the [App OAuth Usage Token](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_token.htm).

Resource

```

```

Available version

59.0

HTTP methods

DELETE

Response for DELETE

[204:Successful Delete](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_error_responses.htm)

## Code Examples

```
/apps/oauth/usage/tokens/tokenIdentifier
```

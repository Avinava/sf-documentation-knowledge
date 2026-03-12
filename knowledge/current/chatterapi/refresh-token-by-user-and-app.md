---
title: "Refresh Token by User and App"
domain: chatterapi
topic: refresh-token-by-user-and-app
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.784Z
estimatedTokens: 126
keywords: [Refresh, Token, User, App, tokens]
---

# Refresh Token by User and App

> Get and delete the refresh tokens of the given user and
    app.

# Refresh Token by User and App

Get and delete the refresh tokens of the given user and app.

Resource

```

```

Available version

59.0

HTTP methods

GET, DELETE

Response body for GET

[App OAuth Usage Token Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_token_collection.htm "A collection of tokens.")

Response for DELETE

[204:Successful Delete](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_error_responses.htm)

## Code Examples

```
/apps/oauth/usage/externalClientAppIdentifier/userIdentifier/tokens
```

## Related Topics

- App OAuth Usage Token Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_token_collection.htm)

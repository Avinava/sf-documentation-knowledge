---
title: "OAuth Users by App ID"
domain: chatterapi
topic: oauth-users-by-app-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.789Z
estimatedTokens: 161
keywords: [OAuth, Users, App]
---

# OAuth Users by App ID

> Get a list of OAuth users for a given app.

# OAuth Users by App ID

Get a list of OAuth users for a given app.

Resource

```

```

Available version

59.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | Page number for the usage information. Defaults to 0. | Optional. | 59.0 |
| pageSize | Integer | Number of usage entries per page. Defaults to 100. | Optional. | 59.0 |

Response body for GET

[App OAuth Usage User Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_user_collection.htm "List of OAuth app users.")

## Code Examples

```
/apps/oauth/usage/appIdentifier/users
```

## Related Topics

- App OAuth Usage User Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_usage_user_collection.htm)

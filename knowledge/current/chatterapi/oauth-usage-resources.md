---
title: "OAuth Usage Resources"
domain: chatterapi
topic: oauth-usage-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:16.791Z
estimatedTokens: 161
keywords: [OAuth, Usage, Resources]
---

# OAuth Usage Resources

> Find information about OAuth Usage.

# OAuth Usage Resources

Find information about OAuth Usage.

Available resources are:

| Resource | Description |
| --- | --- |
| /apps/oauth/usage | Get a list of external client apps that have OAuth usage data. |
| /apps/oauth/usage/externalClientAppIdentifier/users | Get a list of OAuth users for a given app. |
| /apps/oauth/usage/tokens/tokenIdentifier | Delete a refresh token by token identifier. |
| /apps/oauth/usage/externalClientAppIdentifier/userIdentifier/tokens | Get and delete the refresh tokens of the given user and app. |
| /apps/oauth/usage/externalClientAppIdentifier/tokens | Delete the refresh tokens of a given app. |

## Related Topics

- /apps/oauth/usage (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage.htm)
- /apps/oauth/usage/externalClientAppIdentifier/users (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage_app_id_users.htm)
- /apps/oauth/usage/tokens/tokenIdentifier (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage_tokens_token_id.htm)
- /apps/oauth/usage/externalClientAppIdentifier/userIdentifier/tokens (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage_app_id_user_id_tokens.htm)
- /apps/oauth/usage/externalClientAppIdentifier/tokens (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage_app_id_tokens.htm)

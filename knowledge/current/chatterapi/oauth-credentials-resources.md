---
title: "OAuth Credentials Resources"
domain: chatterapi
topic: oauth-credentials-resources
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:15.999Z
estimatedTokens: 214
keywords: [OAuth, Credentials, Resources]
---

# OAuth Credentials Resources

> Find information about OAuth credentials.

# OAuth Credentials Resources

Find information about OAuth credentials.

Available resources are:

| Resource | Description |
| --- | --- |
| /apps/oauth/credentials/appIdentifier | Get OAuth credentials for all OAuth consumers associated with a given app by providing the app ID. |
| /apps/oauth/credentials/${appIdentifier}/oauthConsumerIdentifier | Get the OAuth key, secret, or both for a specific OAuth consumer by providing the consumer ID. |
| /apps/oauth/credentials/externalClientAppIdentifier​/oauthConsumerIdentifier/staged | Get or create staged credentials for the given app and OAuth consumer. |
| /apps/oauth/credentials/externalClientAppIdentifier​/oauthConsumerIdentifier/staged/stagedCredentialsIdentifier | Add OAuth credentials as staged credentials, replace primary credentials with staged credentials, or delete staged credentials. |

## Related Topics

- /apps/oauth/credentials/appIdentifier (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_credentials_by_app_id.htm)
- /apps/oauth/credentials/${appIdentifier}/oauthConsumerIdentifier (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_credentials_by_app_and_consumer_id.htm)
- /apps/oauth/credentials/externalClientAppIdentifier​/oauthConsumerIdentifier/staged (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oauth_credentials_staged_credentials.htm)
- /apps/oauth/credentials/externalClientAppIdentifier​/oauthConsumerIdentifier/staged/stagedCredentialsIdentifier (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oauth_credentials_staged_credentials_id.htm)

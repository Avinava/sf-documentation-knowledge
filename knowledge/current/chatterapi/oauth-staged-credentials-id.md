---
title: "OAuth Staged Credentials ID"
domain: chatterapi
topic: oauth-staged-credentials-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.004Z
estimatedTokens: 447
keywords: [OAuth, Staged, Credentials, Add, replace, primary]
---

# OAuth Staged Credentials ID

> Add OAuth credentials as staged credentials, replace primary credentials with staged
    credentials, or delete staged credentials.

# OAuth Staged Credentials ID

Add OAuth credentials as staged credentials, replace primary credentials with staged credentials, or delete staged credentials.

Resource

```

```

The externalClientAppIdentifier is the ID of the external client app, which can be retrieved from the [OAuth Usage](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage.htm "Get a list of external client apps that have OAuth usage data.") endpoint. The oauthConsumerIdentifier is the OAuth consumer ID, which can be retrieved by a call to the [OAuth Credentials by App ID](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_credentials_by_app_id.htm "Get OAuth credentials for all OAuth consumers associated with a given app by providing the app ID.") endpoint. The stagedCredentialsIdentifier is the ID of the staged credentials, which can be retrieved by a call to the [OAuth Staged Credentials](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oauth_credentials_staged_credentials.htm "Get or create staged credentials for the given app and OAuth consumer.") endpoint.

Available version

65.0

HTTP methods

GET, PATCH, DELETE

Request body for PATCH

[Staged Credentials Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_staged_credentials_input.htm "Request to rotate credentials with staged data.")

Response body for GET and PATCH

[App Oauth Staged Credentials](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_staged_credentials.htm "Information about an OAuth consumer's primary and staged credentials. Staged credentials are valid for 30 days unless they're deleted before then.")

Response for DELETE

[204: Successful Delete](https://developer.salesforce.com/docs/atlas.en-us.260.0.chatterapi.meta/chatterapi/connect_error_responses.htm)

## Code Examples

```
/apps/oauth/credentials/externalClientAppIdentifier/oauthConsumerIdentifier/staged/
stagedCredentialsIdentifier
```

## Related Topics

- OAuth Usage (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage.htm)
- OAuth Credentials by App ID (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_credentials_by_app_id.htm)
- OAuth Staged Credentials (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_oauth_credentials_staged_credentials.htm)
- Staged Credentials Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_staged_credentials_input.htm)
- App Oauth Staged Credentials (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_staged_credentials.htm)

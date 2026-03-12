---
title: "OAuth Staged Credentials"
domain: chatterapi
topic: oauth-staged-credentials
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.002Z
estimatedTokens: 293
keywords: [OAuth, Staged, Credentials, app, consumer]
---

# OAuth Staged Credentials

> Get or create staged credentials for the given app and OAuth consumer.

# OAuth Staged Credentials

Get or create staged credentials for the given app and OAuth consumer.

Resource

```

```

The externalClientAppIdentifier is the ID of the external client app, which can be retrieved from the [OAuth Usage](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage.htm "Get a list of external client apps that have OAuth usage data.") endpoint. The oauthConsumerIdentifier is the OAuth consumer ID, which can be retrieved by a call to the [OAuth Credentials by App ID](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_credentials_by_app_id.htm "Get OAuth credentials for all OAuth consumers associated with a given app by providing the app ID.") endpoint.

Available version

65.0

HTTP methods

GET, POST

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST doesn't take a request body and doesn't require request parameters.

Response body for GET and POST

[App Oauth Staged Credentials Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_staged_credentials_collection.htm "List of OAuth consumer's staged credentials associated with the app.")

## Code Examples

```
/apps/oauth/credentials/externalClientAppIdentifier/oauthConsumerIdentifier/staged
```

## Related Topics

- OAuth Usage (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_usage.htm)
- OAuth Credentials by App ID (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_credentials_by_app_id.htm)
- App Oauth Staged Credentials Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_staged_credentials_collection.htm)

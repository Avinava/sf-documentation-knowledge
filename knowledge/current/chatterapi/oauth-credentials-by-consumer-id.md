---
title: "OAuth Credentials by Consumer ID"
domain: chatterapi
topic: oauth-credentials-by-consumer-id
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.838Z
estimatedTokens: 242
keywords: [OAuth, Credentials, Consumer, key, secret, specific, providing]
---

# OAuth Credentials by Consumer ID

> Get the OAuth key, secret, or both for a specific OAuth consumer by
      providing the consumer ID.

# OAuth Credentials by Consumer ID

Get the OAuth key, secret, or both for a specific OAuth consumer by providing the consumer ID. OAuth consumer secrets must be kept secure. To access the secret for a consumer, include secret or keyandsecret as the value for the part parameter.

Resource

```

```

Available version

60.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| part | String | Part of the credential to return. Values are key , secret, and keyandsecret.If this parameter is excluded from the request, then the key is provided in the response. The secret value is returned only when specified in this parameter. | Optional | 60.0 |

Response body for GET

[App Oauth Credentials](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_credentials.htm "Represents the primary and staged credentials of a single OAuth consumer.")

## Code Examples

```
/apps/oauth/credentials/externalClientAppIdentifier/oauthConsumerIdentifier
```

## Related Topics

- App Oauth Credentials (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_app_oauth_credentials.htm)

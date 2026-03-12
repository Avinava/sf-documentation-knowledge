---
title: "External Auth Identity Provider Credentials"
domain: chatterapi
topic: external-auth-identity-provider-credentials
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.848Z
estimatedTokens: 284
keywords: [External, Auth, Identity, Provider, Credentials, provider's]
---

# External Auth Identity Provider Credentials

> Get, create, and update external auth identity provider
      credentials.

# External Auth Identity Provider Credentials

Get, create, and update external auth identity provider credentials.

Resource

```

```

Available version

62.0

HTTP methods

GET, PUT, POST

Request body for PUT and POST

Root XML tag

<externalAuthIdentityProviderCredentials>

JSON example for creating (POST) or replacing (PUT) an external auth identity provider's credentials

Use this example request body to create or update credentials for an external auth identity provider that uses OAuth2.0 authentication with an authorization code. Assume the credential has two values: clientId and clientSecret.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| credentials | External Auth Identity Provider Credential Input[] | List of an external auth identity provider's credentials. | Required | 62.0 |

Response body for GET, PUT, and POST

[External Auth Identity Provider Credentials](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_auth_identity_provider_credentials.htm "List of an external auth identity provider's credentials.")

## Code Examples

```
/named-credentials/external-auth-identity-provider-credentials/fullName
```

```
{
	"credentials": [
		{
			"credentialName": "clientId",
			"credentialValue": "SampleClientID"
		},
		{
			"credentialName": "clientSecret",
			"credentialValue": "SampleClientSecret"
		}
	]
}
```

## Related Topics

- External
												Auth Identity Provider Credential
											Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_auth_identity_provider_credential_input.htm)
- External Auth Identity Provider
              Credentials (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_auth_identity_provider_credentials.htm)
- External Auth Identity Provider
                Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_auth_identity_provider_credential.htm)
- External Auth Identity Provider Credentials (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider_credentials.htm)

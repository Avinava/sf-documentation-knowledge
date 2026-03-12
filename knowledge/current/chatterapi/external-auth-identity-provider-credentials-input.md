---
title: "External Auth Identity Provider Credentials Input"
domain: chatterapi
topic: external-auth-identity-provider-credentials-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.619Z
estimatedTokens: 257
keywords: [External, Auth, Identity, Provider, Credentials, Input]
---

# External Auth Identity Provider Credentials Input

> External auth identity provider credentials input.

# External Auth Identity Provider Credentials Input

External auth identity provider credentials input.

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

#### See Also

-   [External Auth Identity Provider Credentials](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider_credentials.htm "Get, create, and update external auth identity provider credentials.")

## Code Examples

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
- External Auth Identity Provider Credentials (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider_credentials.htm)

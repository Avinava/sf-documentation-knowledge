---
title: "External Auth Identity Provider Input"
domain: chatterapi
topic: external-auth-identity-provider-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.625Z
estimatedTokens: 711
keywords: [External, Auth, Identity, Provider, Input]
---

# External Auth Identity Provider Input

> External auth identity provider input.

# External Auth Identity Provider Input

External auth identity provider input.

Root XML tag

<externalAuthIdentityProvider>

JSON example

To create an external auth identity provider, you must also use the POST method with the [/named-credentials/external-auth-identity-provider-credentials/fullName](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider_credentials.htm "Get, create, and update external auth identity provider credentials.") resource to populate the identity provider's credentials.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authenticationFlow | String | Authentication flow to get tokens to call protected APIs. Values are:AuthorizationCode | Required | 62.0 |
| authenticationProtocol | String | Authentication protocol required to access the external system. Values are:OAuth | Required | 62.0 |
| authorizeUrl | String | Authorization endpoint URL for the external system. | Required when the authenticationProtocol is OAuth and the authenticationFlow is AuthorizationCode. Otherwise, Optional. | 62.0 |
| clientAuthentication | String | Client authentication method that describes how credentials are sent to the authorization server. Values are:ClientSecretBasicClientSecretPostDefaults to ClientSecretBasic. | Optional | 63.0 |
| description | String | External auth identity provider description. | Optional | 62.0 |
| fullName | String | Full name of the external auth identity provider. The full name can include a namespace prefix. | Required | 62.0 |
| label | String | External auth identity provider label. | Required | 62.0 |
| parameters | External Auth Identity Provider Parameter Input[] | List of custom request parameters to customize and extend requests to the identity provider’s token endpoint. | Optional | 63.0 |
| standardExternal​IdentityProvider | String | Reference to a standard external auth identity provider. | Optional | 63.0 |
| tokenUrl | String | Token endpoint URL to retrieve tokens from the external system. Required for all OAuth 2.0 authentication flows. | Required | 62.0 |
| userInfoUrl | String | User info URL to retrieve user profile information from the external system.Applicable only when the authenticationProtocol is OAuth. | Optional | 62.0 |

#### See Also

-   [External Auth Identity Provider](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider.htm "Get, update, and delete an external auth identity provider.")

-   [External Auth Identity Providers](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_providers.htm "Get a list of external auth identity providers in the org. Create an external auth identity provider.")

## Code Examples

```
{
    "label": "ExternalIdp2",
    "fullName": "ExternalIdp2",
    "description": "OAuth Browser flow for connected app",
    "authenticationProtocol": "OAuth",
    "authenticationFlow": "AuthorizationCode",
    "clientAuthentication": "ClientSecretPost",
    "authorizeUrl": "https://identityprovider.com/services/oauth2/authorize",
    "tokenUrl": "https://identityprovider.com/services/oauth2/token",
    "userInfoUrl": "https://identityprovider.com/services/userinfo",
    "parameters": [
        {
            "parameterName": "PkceEnabled",
            "parameterType": "IdentityProviderOptions",
            "parameterValue": "true"
        },
        {
            "parameterName": "ExampleName",
            "parameterType": "AuthorizeRequestQueryParameter",
            "parameterValue": "ExampleValue",
            "sequenceNumber": 1
        }
    ]
}
```

## Related Topics

- /named-credentials/external-auth-identity-provider-credentials/fullName (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider_credentials.htm)
- External Auth Identity Provider
												Parameter Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_auth_identity_provider_parameter_input.htm)
- External Auth Identity Provider (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_provider.htm)
- External Auth Identity Providers (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_named_credentials_external_auth_identity_providers.htm)

---
title: "External Auth Identity Provider Parameter"
domain: chatterapi
topic: external-auth-identity-provider-parameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.545Z
estimatedTokens: 312
keywords: [External, Auth, Identity, Provider]
---

# External Auth Identity Provider Parameter

> External auth identity provider parameter.

# External Auth Identity Provider Parameter

External auth identity provider parameter.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| parameterName | String | The name of the external auth identity provider parameter. | Small, 63.0 | 63.0 |
| parameterType | String | Parameter type for an external auth identity provider. Values are:AuthorizeRequestQueryParameterIdentityProviderOptionsManagedByComponentManagedByFeatureRefreshRequestBodyParameterRefreshRequestHttpHeaderRefreshRequestQueryParameterTokenRequestBodyParameterTokenRequestHttpHeaderTokenRequestQueryParameter | Small, 63.0 | 63.0 |
| parameterValue | String | If parameterType describes a literal value then the literal value is stored in this property. | Small, 63.0 | 63.0 |
| sequenceNumber | Integer | Specifies the order of parameters to apply when an external auth identity provider has more than one parameter. Priority is from lower to higher numbers, for example, 1 is the highest priority. | Small, 63.0 | 63.0 |

#### See Also

-   [External Auth Identity Provider](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_auth_identity_provider.htm "External auth identity provider.")

## Related Topics

- External Auth Identity Provider (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_auth_identity_provider.htm)

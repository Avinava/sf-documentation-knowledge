---
title: "ConnectApi.ExternalAuthIdentityProviderParameter"
domain: apex-reference
topic: connectapiexternalauthidentityproviderparameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.727Z
keywords: [ConnectApi.ExternalAuthIdentityProviderParameter, See]
---

# ConnectApi.ExternalAuthIdentityProviderParameter

# ConnectApi.ExternalAuthIdentityProviderParameter

External auth identity provider parameter.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| parameterName | String | The name of the external auth identity provider parameter. | 63.0 |
| parameterType | ConnectApi.​ExternalAuth​IdentityProvider​ParameterType | Parameter type for an external auth identity provider. Values are:AuthorizeRequestQueryParameterIdentityProviderOptionsManagedByComponentManagedByFeatureRefreshRequestBodyParameterRefreshRequestHttpHeaderRefreshRequestQueryParameterTokenRequestBodyParameterTokenRequestHttpHeaderTokenRequestQueryParameter | 63.0 |
| parameterValue | String | If parameterType describes a literal value then the literal value is stored in this property. | 63.0 |
| sequenceNumber | Integer | Specifies the order of parameters to apply when an external auth identity provider has more than one parameter. Priority is from lower to higher numbers, for example, 1 is the highest priority. | 63.0 |

#### See Also

-   [ConnectApi.ExternalAuthIdentityProvider](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm "External auth identity provider.")
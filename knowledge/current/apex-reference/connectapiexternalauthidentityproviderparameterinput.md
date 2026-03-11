---
title: "ConnectApi.ExternalAuthIdentityProviderParameterInput"
domain: apex-reference
topic: connectapiexternalauthidentityproviderparameterinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.144Z
keywords: [ConnectApi.ExternalAuthIdentityProviderParameterInput, See]
---

# ConnectApi.ExternalAuthIdentityProviderParameterInput

# ConnectApi.ExternalAuthIdentityProviderParameterInput

External auth identity provider parameter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parameterName | String | The name of the external auth identity provider parameter. | Required | 63.0 |
| parameterType | ConnectApi.​ExternalAuth​IdentityProvider​ParameterType | Parameter type for an external auth identity provider. Values are:AuthorizeRequestQueryParameterIdentityProviderOptionsManagedByComponentManagedByFeatureRefreshRequestBodyParameterRefreshRequestHttpHeaderRefreshRequestQueryParameterTokenRequestBodyParameterTokenRequestHttpHeaderTokenRequestQueryParameter | Required | 63.0 |
| parameterValue | String | If parameterType describes a literal value then the literal value is stored in this property. | Optional | 63.0 |
| sequenceNumber | Integer | Specifies the order of parameters to apply when an external auth identity provider has more than one parameter. Priority is from lower to higher numbers, for example, 1 is the highest priority. | Optional | 63.0 |

#### See Also

-   [ConnectApi.ExternalAuthIdentityProviderInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_auth_identity_provider.htm "External auth identity provider input.")
---
title: "ConnectApi.ExternalAuthIdentityProviderParameter"
domain: apex-reference
topic: connectapiexternalauthidentityproviderparameter
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.251Z
estimatedTokens: 305
keywords: [ConnectApi.ExternalAuthIdentityProviderParameter, External, auth, identity, provider, parameter.]
---

# ConnectApi.ExternalAuthIdentityProviderParameter

> External auth identity provider parameter.

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

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ExternalAuth​IdentityProvider​ParameterType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.ExternalAuthIdentityProvider (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_auth_identity_provider.htm)

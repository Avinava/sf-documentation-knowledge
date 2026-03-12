---
title: "ConnectApi.ExternalCredentialParameterInput"
domain: apex-reference
topic: connectapiexternalcredentialparameterinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.135Z
estimatedTokens: 298
keywords: [External, credential, input]
---

# ConnectApi.ExternalCredentialParameterInput

> External credential parameter input.

# ConnectApi.ExternalCredentialParameterInput

External credential parameter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | Parameter ID. | Optional | 58.0 |
| parameter​Description | String | Parameter description. | Optional | 58.0 |
| parameterName | String | Parameter name of the external credential. | Required | 58.0 |
| parameterType | ConnectApi.​ExternalCredential​ParameterType | Parameter type of the external credential. Values are:AdditionalRefreshStatusCodeAuthParameterAuthProviderAuthProviderUrlAuthProviderUrlQueryParameterJwtBodyClaimJwtHeaderClaimManagedByComponentManagedByFeatureSigningCertificate | Required | 58.0 |
| parameterValue | String | Parameter value of the external credential. | Required | 58.0 |

#### See Also

-   [ConnectApi.ExternalCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm "Input used to create or update an external credential.")

-   [ConnectApi.ExternalCredentialPrincipalInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential_principal.htm "External credential principal input.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​ExternalCredential​ParameterType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ExternalCredentialInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm)
- ConnectApi.ExternalCredentialPrincipalInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential_principal.htm)

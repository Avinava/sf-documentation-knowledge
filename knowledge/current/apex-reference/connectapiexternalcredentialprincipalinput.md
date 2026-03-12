---
title: "ConnectApi.ExternalCredentialPrincipalInput"
domain: apex-reference
topic: connectapiexternalcredentialprincipalinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:24.888Z
estimatedTokens: 267
keywords: [ConnectApi.ExternalCredentialPrincipalInput, External, credential, principal, input.]
---

# ConnectApi.ExternalCredentialPrincipalInput

> External credential principal input.

# ConnectApi.ExternalCredentialPrincipalInput

External credential principal input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the principal external credential parameter. | Optional | 58.0 |
| parameters | List<ConnectApi.​ExternalCredential​ParameterInput> | List of external credential parameters. | Optional | 58.0 |
| principalName | String | Principal name. | Required | 58.0 |
| principalType | ConnectApi.​CredentialPrincipal​Type | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 58.0 |
| sequenceNumber | Integer | Sequence number. | Required | 58.0 |

#### See Also

-   [ConnectApi.ExternalCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm "Input used to create or update an external credential.")

-   [ConnectApi.NamedCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm "Input used to create or update a named credential.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​ExternalCredential​ParameterInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential_parameter.htm)
- ConnectApi.​CredentialPrincipal​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- ConnectApi.ExternalCredentialInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm)
- ConnectApi.NamedCredentialInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm)

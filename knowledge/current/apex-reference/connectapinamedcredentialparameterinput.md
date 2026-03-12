---
title: "ConnectApi.NamedCredentialParameterInput"
domain: apex-reference
topic: connectapinamedcredentialparameterinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:25.424Z
estimatedTokens: 213
namespace: AllowedManagedPackageNamespaces
keywords: [Named, credential, input]
---

# ConnectApi.NamedCredentialParameterInput

> Named credential parameter input.

**Namespace:** `AllowedManagedPackageNamespaces`

# ConnectApi.NamedCredentialParameterInput

Named credential parameter input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the parameter. | Optional | 58.0 |
| parameter​Description | String | Description of the parameter. | Optional | 58.0 |
| parameterName | String | Name of the parameter. | Required | 58.0 |
| parameterType | ConnectApi.​NamedCredential​ParameterType | Type of named credential parameter. Values are:AllowedManagedPackageNamespacesClientCertificateConnectionStatus | Required | 58.0 |
| parameterValue | String | Value of the parameter. | Required | 58.0 |

#### See Also

-   [ConnectApi.NamedCredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm "Input used to create or update a named credential.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​NamedCredential​ParameterType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.NamedCredentialInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential.htm)

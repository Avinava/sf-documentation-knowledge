---
title: "ConnectApi.NamedCredentialParameterInput"
domain: apex-reference
topic: connectapinamedcredentialparameterinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.342Z
keywords: [ConnectApi.NamedCredentialParameterInput, See]
---

# ConnectApi.NamedCredentialParameterInput

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
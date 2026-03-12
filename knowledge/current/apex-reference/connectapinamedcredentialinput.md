---
title: "ConnectApi.NamedCredentialInput"
domain: apex-reference
topic: connectapinamedcredentialinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:25.416Z
estimatedTokens: 350
keywords: [ConnectApi.NamedCredentialInput, Input, named, credential]
---

# ConnectApi.NamedCredentialInput

> Input used to create or update a named credential.

# ConnectApi.NamedCredentialInput

Input used to create or update a named credential.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| calloutOptions | ConnectApi.​NamedCredential​CalloutOptionsInput | Callout options. | Required | 58.0 |
| calloutUrl | String | URL of the named credential in a callout. | Required | 58.0 |
| customHeaders | List<ConnectApi.​CredentialCustom​HeaderInput> | Custom HTTP headers. | Optional | 58.0 |
| description | String | Description of the named credential. | Optional | 64.0 |
| developerName | String | Named credential developer name. | Required for creating a named credentialOptional for updating a named credential | 58.0 |
| external​Credentials | List<ConnectApi.​ExternalCredential​Input> | External credentials used by the named credential. In version 58.0 and later only one external credential is supported. | Required | 58.0 |
| masterLabel | String | Named credential label. | Required | 58.0 |
| network​Connection | ConnectApi.​NetworkConnection​Input | PrivateConnect outbound network connection. | Optional depending on type | 58.0 |
| parameters | List<ConnectApi.​NamedCredential​ParameterInput> | Named credential parameters. | Optional | 58.0 |
| type | ConnectApi.​NamedCredential​Type | Type of named credential. Values are:PrivateEndpointSecuredEndpoint | Required | 58.0 |

## Related Topics

- ConnectApi.​NamedCredential​CalloutOptionsInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential_callout_options.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CredentialCustom​HeaderInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential_custom_header.htm)
- ConnectApi.​ExternalCredential​Input (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_external_credential.htm)
- ConnectApi.​NetworkConnection​Input (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_network_connection.htm)
- ConnectApi.​NamedCredential​ParameterInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_named_credential_parameter.htm)
- ConnectApi.​NamedCredential​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)

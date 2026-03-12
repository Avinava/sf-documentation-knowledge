---
title: "ConnectApi.NamedCredential"
domain: apex-reference
topic: connectapinamedcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:28.071Z
estimatedTokens: 560
namespace: String
keywords: [ConnectApi.NamedCredential, Named, credential, associated, external]
---

# ConnectApi.NamedCredential

> Named credential associated with an external
    credential.

**Namespace:** `String`

# ConnectApi.NamedCredential

Named credential associated with an external credential.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| calloutOptions | ConnectApi.​NamedCredential​CalloutOptions | Callout options for the named credential. | 58.0 |
| calloutStatus | ConnectApi.​CalloutStatus | Indicates whether a named credential is enabled for callout. Values are:DisabledEnabled | 59.0 |
| calloutUrl | String | URL of the named credential in a callout. | 58.0 |
| createdByNamespace | String | Namespace of the package that created the named credential. | 59.0 |
| customHeaders | List<ConnectApi.​CredentialCustom​Header> | Custom HTTP headers for the named credential. | 58.0 |
| description | String | Description of the named credential. | 64.0 |
| developerName | String | Fully qualified developer name of the named credential. | 56.0 |
| externalCredentials | List<ConnectApi.​ExternalCredential> | External credentials used by the named credential. | 58.0 |
| id | String | Named credential ID. | 58.0 |
| masterLabel | String | Named credential label. | 56.0 |
| networkConnection | ConnectApi.​NetworkConnection | PrivateConnect outbound network connection for the named credential. | 58.0 |
| parameters | List<ConnectApi.​NamedCredential​Parameter> | Named credential parameters. | 58.0 |
| type | ConnectApi.​NamedCredentialType | Type of named credential. Values are:PrivateEndpointSecuredEndpoint | 58.0 |
| url | String | Connect REST API URL of the named credential. | 58.0 |

#### See Also

-   [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")

-   [ConnectApi.NamedCredentialList](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential_list.htm "List of named credentials.")

## Related Topics

- ConnectApi.​NamedCredential​CalloutOptions (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential_callout_options.htm)
- ConnectApi.​CalloutStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CredentialCustom​Header (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential_custom_header.htm)
- ConnectApi.​ExternalCredential (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm)
- ConnectApi.​NetworkConnection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_network_connection.htm)
- ConnectApi.​NamedCredential​Parameter (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential_parameter.htm)
- ConnectApi.​NamedCredentialType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.ExternalCredential (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm)

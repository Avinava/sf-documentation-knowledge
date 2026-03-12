---
title: "ConnectApi.ExternalCredential"
domain: apex-reference
topic: connectapiexternalcredential
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.260Z
estimatedTokens: 791
namespace: String
keywords: [ConnectApi.ExternalCredential, External, credential, including, named, credentials, principals, associated, status, principal., Important]
---

# ConnectApi.ExternalCredential

> External credential, including the named credentials and principals
      associated with it and the type and status of each principal.

**Namespace:** `String`

# ConnectApi.ExternalCredential

External credential, including the named credentials and principals associated with it and the type and status of each principal.

If you don’t have the View Setup and Configuration permission, some properties are empty or show limited information.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| authenticationProtocol | ConnectApi.​CredentialAuthentication​Protocol | Authentication protocol of the external credential. Values are:AwsSv4BasicCustomJwtOAuth | 56.0 |
| authenticationProtocol​Variant | ConnectApi.​CredentialAuthentication​ProtocolVariant | Authentication protocol variant of the external credential. Values are:AwsSv4_STS—AWS Signature Version 4 with Security Token Service.ClientCredentialsClientSecret—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.ClientCredentialsClientSecretBasic—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.ClientCredentialsJwtAssertion—OAuth 2.0 Client Credentials JSON Web Token assertion.JwtBearer—OAuth 2.0 JSON Web Token bearer flow.NoAuthentication—No authentication.RolesAnywhere—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere. | 57.0 |
| authenticationStatus | ConnectApi.​CredentialAuthentication​Status | Status of the credential authentication. Values are:Configured—Credential has all required credentials for at least one principal.NotConfigured—Credential isn’t configured.Unknown—Credential status can’t be determined because the authentication protocol is custom. | 56.0 |
| createdByNamespace | String | Namespace of the package that created the external credential. | 59.0 |
| customHeaders | List<ConnectApi.​CredentialCustom​Header> | List of custom headers. | 57.0 |
| developerName | String | Fully qualified developer name of the external credential. | 56.0 |
| id | String | External credential ID. | 58.0 |
| masterLabel | String | External credential label. | 56.0 |
| parameters | List<ConnectApi.​ExternalCredential​Parameter> | List of parameters of the external credential. | 57.0 |
| principals | List<ConnectApi.​ExternalCredential​Principal> | List of principals the credential has. | 56.0 |
| relatedNamed​Credentials | List<ConnectApi.​NamedCredential> | List of named credentials associated to the external credential. | 56.0 |
| url | String | Connect REST API URL for the external credential. | 58.0 |

#### See Also

-   [ConnectApi.ExternalCredentialList](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_list.htm "List of external credentials.")

-   [ConnectApi.NamedCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential.htm "Named credential associated with an external credential.")

## Related Topics

- ConnectApi.​CredentialAuthentication​Protocol (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CredentialAuthentication​ProtocolVariant (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​CredentialAuthentication​Status (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​CredentialCustom​Header (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_credential_custom_header.htm)
- ConnectApi.​ExternalCredential​Parameter (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_parameter.htm)
- ConnectApi.​ExternalCredential​Principal (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_principal.htm)
- ConnectApi.​NamedCredential (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_named_credential.htm)
- ConnectApi.ExternalCredentialList (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential_list.htm)

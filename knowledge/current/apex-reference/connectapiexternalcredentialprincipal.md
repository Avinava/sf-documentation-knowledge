---
title: "ConnectApi.ExternalCredentialPrincipal"
domain: apex-reference
topic: connectapiexternalcredentialprincipal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:38.742Z
keywords: [ConnectApi.ExternalCredentialPrincipal, See]
---

# ConnectApi.ExternalCredentialPrincipal

# ConnectApi.ExternalCredentialPrincipal

External credential principal.

If you don’t have the View Setup and Configuration permission, some properties are empty or show limited information.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| authenticationStatus | ConnectApi.​CredentialAuthentication​Status | Status of the credential authentication. Values are:Configured—Credential has all required credentials for at least one principal.NotConfigured—Credential isn’t configured.Unknown—Credential status can’t be determined because the authentication protocol is custom. | 56.0 |
| id | String | ID of the external credential principal. | 58.0 |
| parameters | List<ConnectApi.​ExternalCredential​Parameter> | List of external credential parameters. | 58.0 |
| principalAccess | List<ConnectApi.​ExternalCredential​PrincipalAccess> | List of access entities associated with the external credential principal. | 58.0 |
| principalName | String | Name of the external credential named principal. | 56.0 |
| principalType | ConnectApi.​CredentialPrincipal​Type | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | 56.0 |
| sequenceNumber | Integer | Sequence number of the external credential principal. | 58.0 |

#### See Also

-   [ConnectApi.ExternalCredential](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")
---
title: "External Credential Principal"
domain: chatterapi
topic: external-credential-principal
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:18.565Z
estimatedTokens: 389
keywords: [External, Credential, Principal]
---

# External Credential Principal

> External credential principal.

# External Credential Principal

External credential principal.

If you don’t have the View Setup and Configuration permission, some properties are empty or show limited information.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| authentication​Status | String | Status of the credential authentication. Values are:Configured—Credential has all required credentials for at least one principal.NotConfigured—Credential isn’t configured.Unknown—Credential status can’t be determined because the authentication protocol is custom. | Small, 56.0 | 56.0 |
| id | String | ID of the external credential principal. | Medium, 58.0 | 58.0 |
| parameters | String[] | List of external credential parameters. | Medium, 58.0 | 58.0 |
| principalAccess | External Credential Principal Access[] | List of access entities associated with the external credential principal. | Medium, 58.0 | 58.0 |
| principalName | String | Name of the external credential named principal. | Small, 56.0 | 56.0 |
| principalType | String | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Small, 56.0 | 56.0 |
| sequenceNumber | Integer | Sequence number of the external credential principal. | Medium, 58.0 | 58.0 |

#### See Also

-   [External Credential](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential.htm "External credential, including the named credentials and principals associated with it and the type and status of each principal.")

## Related Topics

- External Credential Principal Access (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential_principal_access.htm)
- External Credential (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_credential.htm)

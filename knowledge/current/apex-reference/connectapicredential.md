---
title: "ConnectApi.Credential"
domain: apex-reference
topic: connectapicredential
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.488Z
keywords: [ConnectApi.Credential]
---

# ConnectApi.Credential

# ConnectApi.Credential

Credential.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| authentication​Protocol | ConnectApi.​CredentialAuthentication​Protocol | Authentication protocol of the external credential. Values are:AwsSv4BasicCustomJwtOAuth | 56.0 |
| authentication​ProtocolVariant | ConnectApi.​CredentialAuthentication​ProtocolVariant | Authentication protocol variant of the external credential. Values are:AwsSv4_STS—AWS Signature Version 4 with Security Token Service.ClientCredentialsClientSecret—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.ClientCredentialsClientSecretBasic—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.ClientCredentialsJwtAssertion—OAuth 2.0 Client Credentials JSON Web Token assertion.JwtBearer—OAuth 2.0 JSON Web Token bearer flow.NoAuthentication—No authentication.RolesAnywhere—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere. | 57.0 |
| authentication​Status | ConnectApi.​CredentialAuthentication​Status | Status of the credential authentication. Values are:Configured—Credential has all required credentials for at least one principal.NotConfigured—Credential isn’t configured.Unknown—Credential status can’t be determined because the authentication protocol is custom. | 56.0 |
| credentials | Map<String, ConnectApi.​CredentialValue> | Map of protocol-specific credentials. | 56.0 |
| externalCredential | String | Fully qualified developer name of the external credential. | 56.0 |
| principalName | String | Name of the external credential named principal. | 56.0 |
| principalType | ConnectApi.​CredentialPrincipal​Type | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | 56.0 |
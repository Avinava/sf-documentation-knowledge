---
title: "ConnectApi.CredentialInput"
domain: apex-reference
topic: connectapicredentialinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:37.048Z
keywords: [ConnectApi.CredentialInput]
---

# ConnectApi.CredentialInput

# ConnectApi.CredentialInput

Credential input.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authentication​Protocol | ConnectApi.​Credential​Authentication​Protocol | Authentication protocol of the external credential. Values are:AwsSv4BasicCustomJwtOAuth | Required | 56.0 |
| authentication​ProtocolVariant | ConnectApi.​Credential​Authentication​ProtocolVariant | Authentication protocol variant of the external credential. Values are:AwsSv4_STS—AWS Signature Version 4 with Security Token Service.ClientCredentialsClientSecret—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.ClientCredentialsClientSecretBasic—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.ClientCredentialsJwtAssertion—OAuth 2.0 Client Credentials JSON Web Token assertion.JwtBearer—OAuth 2.0 JSON Web Token bearer flow.NoAuthentication—No authentication.RolesAnywhere—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere.If specified, the authentication protocol variant must match the actual protocol variant of the external credential. | Optional | 57.0 |
| credentials | Map<String, ConnectApi.​Credential​ValueInput> | Map of protocol-specific credentials.Authentication protocols have credential allowlists and encryption rules.AwsSv4—awsAccessKeyId (not encrypted), awsSecretAccessKey (encrypted), awsRoleArn (not encrypted)Custom—Any credential name is valid (user sets encryption rules) | Required | 56.0 |
| externalCredential | String | Fully qualified developer name of the external credential. | Required | 56.0 |
| principalName | String | Name of the external credential named principal. | Required if principalType is NamedPrincipal | 56.0 |
| principalType | ConnectApi.​Credential​Principal​Type | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 56.0 |
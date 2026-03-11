---
title: "ConnectApi.ExternalCredentialInput"
domain: apex-reference
topic: connectapiexternalcredentialinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.148Z
keywords: [ConnectApi.ExternalCredentialInput, Important]
---

# ConnectApi.ExternalCredentialInput

# ConnectApi.ExternalCredentialInput

Input used to create or update an external credential.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

Where possible, we changed noninclusive terms to align with our company value of Equality. We maintained certain terms to avoid any effect on customer implementations.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| authentication​Protocol | ConnectApi.​Credential​Authentication​Protocol | Authentication protocol of the external credential. Values are:AwsSv4BasicCustomJwtOAuth | Required | 58.0 |
| authentication​ProtocolVariant | ConnectApi.​Credential​Authentication​ProtocolVariant | Authentication protocol variant of the external credential. Values are:AwsSv4_STS—AWS Signature Version 4 with Security Token Service.ClientCredentialsClientSecret—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s request body.ClientCredentialsClientSecretBasic—OAuth 2.0 Client Credentials client secret. Client secrets are sent in the callout’s authorization header, as with Basic authentication.ClientCredentialsJwtAssertion—OAuth 2.0 Client Credentials JSON Web Token assertion.JwtBearer—OAuth 2.0 JSON Web Token bearer flow.NoAuthentication—No authentication.RolesAnywhere—AWS Signature Version 4 with Identity and Access Management (IAM) Roles Anywhere.If specified, the authentication protocol variant must match the actual protocol variant of the external credential. | Optional | 58.0 |
| customHeaders | List<ConnectApi.​CredentialCustom​HeaderInput> | List of credential custom headers. | Optional | 58.0 |
| developerName | String | Fully qualified developer name of the external credential. | Required for creating an external credentialOptional for updating an external credential | 58.0 |
| masterLabel | String | External credential label. | Required | 58.0 |
| parameters | List<ConnectApi.​ExternalCredential​ParameterInput> | List of external credential parameters. | Optional depending on authenticationProtocol and authenticationVariant | 58.0 |
| principals | List<ConnectApi.​ExternalCredential​PrincipalInput> | List of principals the credential has. | Optional | 58.0 |
---
title: "ConnectApi.NamedCredentialInput"
domain: apex-reference
topic: connectapinamedcredentialinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.336Z
keywords: [ConnectApi.NamedCredentialInput]
---

# ConnectApi.NamedCredentialInput

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
---
title: "ConnectApi.OAuthCredentialAuthUrl"
domain: apex-reference
topic: connectapioauthcredentialauthurl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.371Z
keywords: [ConnectApi.OAuthCredentialAuthUrl]
---

# ConnectApi.OAuthCredentialAuthUrl

# ConnectApi.OAuthCredentialAuthUrl

OAuth authentication URL for a credential.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| authenticationUrl | String | Authentication URL for the user external credential.Authentication URLs have encoded and escaped special characters. Before using the URL, undo the encoded and escaped characters. | 56.0 |
| external​Credential | String | Fully qualified developer name of the external credential. | 56.0 |
| principalName | String | Name of the external credential named principal. | 56.0 |
| principalType | ConnectApi.​CredentialPrincipal​Type | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | 56.0 |
---
title: "ConnectApi.OAuthCredentialAuthUrl"
domain: apex-reference
topic: connectapioauthcredentialauthurl
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:28.121Z
estimatedTokens: 181
keywords: [ConnectApi.OAuthCredentialAuthUrl, OAuth, authentication, URL, credential]
---

# ConnectApi.OAuthCredentialAuthUrl

> OAuth authentication URL for a credential.

# ConnectApi.OAuthCredentialAuthUrl

OAuth authentication URL for a credential.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| authenticationUrl | String | Authentication URL for the user external credential.Authentication URLs have encoded and escaped special characters. Before using the URL, undo the encoded and escaped characters. | 56.0 |
| external​Credential | String | Fully qualified developer name of the external credential. | 56.0 |
| principalName | String | Name of the external credential named principal. | 56.0 |
| principalType | ConnectApi.​CredentialPrincipal​Type | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | 56.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CredentialPrincipal​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)

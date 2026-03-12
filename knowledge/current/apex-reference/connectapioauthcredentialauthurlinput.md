---
title: "ConnectApi.OAuthCredentialAuthUrlInput"
domain: apex-reference
topic: connectapioauthcredentialauthurlinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.213Z
estimatedTokens: 169
keywords: [ConnectApi.OAuthCredentialAuthUrlInput, OAuth, authentication, flow.]
---

# ConnectApi.OAuthCredentialAuthUrlInput

> OAuth authentication flow.

# ConnectApi.OAuthCredentialAuthUrlInput

OAuth authentication flow.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| external​Credential | String | Fully qualified developer name of the external credential. | Required | 56.0 |
| principalName | String | Name of the external credential named principal. | Required if principalType is NamedPrincipal | 56.0 |
| principalType | ConnectApi.​CredentialPrincipal​Type | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 56.0 |
| returnUrl | String | Return URL to apply to the authentication URL. | Optional | 56.0 |

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​CredentialPrincipal​Type (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)

---
title: "OAuth Credential Auth URL Input"
domain: chatterapi
topic: oauth-credential-auth-url-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.216Z
estimatedTokens: 179
keywords: [OAuth, Credential, Auth, URL, Input, authentication, flow]
---

# OAuth Credential Auth URL Input

> OAuth authentication flow input.

# OAuth Credential Auth URL Input

OAuth authentication flow input.

Root XML tag

<oAuthCredentialAuthUrl>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| externalCredential | String | Fully qualified developer name of the external credential. | Required | 56.0 |
| principalName | String | Name of the external credential named principal. | Required if principalType is NamedPrincipal | 56.0 |
| principalType | String | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 56.0 |
| returnUrl | String | Return URL to apply to the authentication URL. | Optional | 56.0 |

## Code Examples

```
{
"externalCredential": "salesforceOAuthExternalCredential",
"principalName": "defaultNamedPrincipal",
"principalType": "NamedPrincipal",
"returnUrl": "lightning/setup/SetupOneHome/home"
}
```

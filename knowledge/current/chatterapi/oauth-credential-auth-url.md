---
title: "OAuth Credential Auth URL"
domain: chatterapi
topic: oauth-credential-auth-url
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.946Z
estimatedTokens: 194
keywords: [OAuth, Credential, Auth, URL, authentication]
---

# OAuth Credential Auth URL

> OAuth authentication URL for a credential.

# OAuth Credential Auth URL

OAuth authentication URL for a credential.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| authenticationUrl | String | Authentication URL for the user external credential.Authentication URLs have encoded and escaped special characters. Before using the URL, undo the encoded and escaped characters. | Small, 56.0 | 56.0 |
| externalCredential | String | Fully qualified developer name of the external credential. | Small, 56.0 | 56.0 |
| principalName | String | Name of the external credential named principal. | Small, 56.0 | 56.0 |
| principalType | String | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Small, 56.0 | 56.0 |

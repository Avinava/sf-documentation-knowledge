---
title: "External Credential OAuth URL"
domain: chatterapi
topic: external-credential-oauth-url
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.868Z
estimatedTokens: 280
keywords: [External, Credential, OAuth, URL, token, flow]
---

# External Credential OAuth URL

> Get the URL for the OAuth token flow for an external
      credential.

# External Credential OAuth URL

Get the URL for the OAuth token flow for an external credential.

Resource

```

```

Available version

56.0

HTTP methods

POST

POST methods typically create an item, but for this resource POST is used to retrieve information.

Request body for POST

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

Response body for POST

[OAuth Credential Auth URL](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_auth_credential_auth_url.htm "OAuth authentication URL for a credential.")

## Code Examples

```
/named-credentials/credential/auth-url/o-auth
```

```
{
"externalCredential": "salesforceOAuthExternalCredential",
"principalName": "defaultNamedPrincipal",
"principalType": "NamedPrincipal",
"returnUrl": "lightning/setup/SetupOneHome/home"
}
```

## Related Topics

- OAuth Credential Auth URL (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_o_auth_credential_auth_url.htm)

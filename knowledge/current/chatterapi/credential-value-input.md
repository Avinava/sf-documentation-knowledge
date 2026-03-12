---
title: "Credential Value Input"
domain: chatterapi
topic: credential-value-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.459Z
estimatedTokens: 245
keywords: [Credential, Input]
---

# Credential Value Input

> Credential value input.

# Credential Value Input

Credential value input.

Authentication protocols have credential allowlists and encryption rules.

-   AwsSv4—awsAccessKeyId (not encrypted), awsSecretAccessKey (encrypted), awsRoleArn (not encrypted)
-   Custom—Any credential name is valid (user sets encryption rules)

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| encrypted | Boolean | Specifies whether the value of the credential is encrypted (true) or not (false). | Required | 56.0 |
| revision | Integer | Revision number of a short-lived credential, such as OAuthToken. If the provided revision isn’t the latest version, the authentication endpoint refreshes the credential. | Optional | 58.0 |
| value | String | Value of the credential. | Required | 56.0 |

#### See Also

-   [Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_input.htm "Credential input.")

## Code Examples

```
{
value: "aws-secret-value",
encrypted: true
}
```

## Related Topics

- Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_credential_input.htm)

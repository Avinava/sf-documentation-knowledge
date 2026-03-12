---
title: "ConnectApi.CredentialValueInput"
domain: apex-reference
topic: connectapicredentialvalueinput
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:24.989Z
estimatedTokens: 240
keywords: [ConnectApi.CredentialValueInput, Credential, input]
---

# ConnectApi.CredentialValueInput

> Credential value input.

# ConnectApi.CredentialValueInput

Credential value input.

Authentication protocols have credential allowlists and encryption rules.

-   AwsSv4—awsAccessKeyId (not encrypted), awsSecretAccessKey (encrypted), awsRoleArn (not encrypted)
-   Custom—Any credential name is valid (user sets encryption rules)

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| encrypted | Boolean | Specifies whether the value of the credential is encrypted (true) or not (false). | Required | 56.0 |
| revision | Integer | Revision number of a short-lived credential, such as OAuthToken. If the provided revision isn’t the latest version, the authentication endpoint refreshes the credential. | Optional | 58.0 |
| value | String | Value of the credential. | Required | 56.0 |

#### See Also

-   [ConnectApi.CredentialInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential.htm "Credential input.")

## Related Topics

- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.CredentialInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_credential.htm)

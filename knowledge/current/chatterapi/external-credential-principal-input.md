---
title: "External Credential Principal Input"
domain: chatterapi
topic: external-credential-principal-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.646Z
estimatedTokens: 287
keywords: [External, Credential, Principal, Input]
---

# External Credential Principal Input

> External credential principal input.

# External Credential Principal Input

External credential principal input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the principal external credential parameter. | Optional | 58.0 |
| parameters | External Credential Parameter Input[] | List of external credential parameters. | Optional depending on the authenticationProtocol and authenticationVariant values of the External Credential Input | 58.0 |
| principalName | String | Principal name. | Required | 58.0 |
| principalType | String | Type of credential principal. Values are:AwsStsPrincipalNamedPrincipalPerUserPrincipal | Required | 58.0 |
| sequenceNumber | Integer | Sequence number. | Required | 58.0 |

#### See Also

-   [External Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm "Input used to create or update an external credential.")

-   [Named Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm "Input used to create or update a named credential.")

## Code Examples

```
{
   "principalName": "SamplePrincipal",
   "principalType": "NamedPrincipal",
   "sequenceNumber": 1
}
```

## Related Topics

- External Credential Parameter Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_parameter_input.htm)
- External Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm)
- Named Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm)

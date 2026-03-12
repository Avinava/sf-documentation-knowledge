---
title: "External Credential Parameter Input"
domain: chatterapi
topic: external-credential-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.641Z
estimatedTokens: 294
keywords: [External, Credential, Input]
---

# External Credential Parameter Input

> External credential parameter input.

# External Credential Parameter Input

External credential parameter input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | Parameter ID. | Optional | 58.0 |
| parameter​Description | String | Parameter description. | Optional | 58.0 |
| parameterName | String | Parameter name of the external credential. | Required | 58.0 |
| parameterType | String | Parameter type of the external credential. Values are:AdditionalRefreshStatusCodeAuthParameterAuthProviderAuthProviderUrlAuthProviderUrlQueryParameterJwtBodyClaimJwtHeaderClaimManagedByComponentManagedByFeatureSigningCertificate | Required | 58.0 |
| parameterValue | String | Parameter value of the external credential. | Required | 58.0 |

#### See Also

-   [External Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm "Input used to create or update an external credential.")

-   [External Credential Principal Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_principal_input.htm "External credential principal input.")

## Code Examples

```
{
   "parameterName": "AwsService",
   "parameterType": "AuthParameter",
   "parameterValue": "dynamodb"
}
```

## Related Topics

- External Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_input.htm)
- External Credential Principal Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_external_credential_principal_input.htm)

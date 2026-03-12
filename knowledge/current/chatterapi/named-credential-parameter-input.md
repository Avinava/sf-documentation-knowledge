---
title: "Named Credential Parameter Input"
domain: chatterapi
topic: named-credential-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:12.177Z
estimatedTokens: 209
namespace: AllowedManagedPackageNamespaces
keywords: [Named, Credential, Input]
---

# Named Credential Parameter Input

> Named credential parameter input.

**Namespace:** `AllowedManagedPackageNamespaces`

# Named Credential Parameter Input

Named credential parameter input.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | ID of the parameter. | Optional | 58.0 |
| parameter​Description | String | Description of the parameter. | Optional | 58.0 |
| parameterName | String | Name of the parameter. | Required | 58.0 |
| parameterType | String | Type of named credential parameter. Values are:AllowedManagedPackageNamespacesClientCertificateConnectionStatus | Required | 58.0 |
| parameterValue | String | Value of the parameter. | Required | 58.0 |

#### See Also

-   [Named Credential Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm "Input used to create or update a named credential.")

## Code Examples

```
{
   "parameterName": "NamespaceOne",
   "parameterType": "AllowedManagedPackageNamespaces",
   "parameterValue": "namespace1",
   "parameterDescription": "This is a description"
}
```

## Related Topics

- Named Credential Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_named_credential_input.htm)

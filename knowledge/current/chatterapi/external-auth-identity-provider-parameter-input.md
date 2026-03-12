---
title: "External Auth Identity Provider Parameter Input"
domain: chatterapi
topic: external-auth-identity-provider-parameter-input
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:11.630Z
estimatedTokens: 283
keywords: [External, Auth, Identity, Provider, Input]
---

# External Auth Identity Provider Parameter Input

> External auth identity provider parameter input.

# External Auth Identity Provider Parameter Input

External auth identity provider parameter input.

Root XML tag

<externalAuthIdentityProvider>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| parameterName | String | The name of the external auth identity provider parameter. | Required | 63.0 |
| parameterType | String | Parameter type for an external auth identity provider. Values are:AuthorizeRequestQueryParameterIdentityProviderOptionsManagedByComponentManagedByFeatureRefreshRequestBodyParameterRefreshRequestHttpHeaderRefreshRequestQueryParameterTokenRequestBodyParameterTokenRequestHttpHeaderTokenRequestQueryParameter | Required | 63.0 |
| parameterValue | String | If parameterType describes a literal value then the literal value is stored in this property. | Optional | 63.0 |
| sequenceNumber | Integer | Specifies the order of parameters to apply when an external auth identity provider has more than one parameter. Priority is from lower to higher numbers, for example, 1 is the highest priority. | Optional | 63.0 |

## Code Examples

```
{
    "parameterName": "PkceEnabled",
    "parameterType": "IdentityProviderOptions",
    "parameterValue": "true"
},
{
    "parameterName": "ExampleName",
    "parameterType": "AuthorizeRequestQueryParameter",
    "parameterValue": "ExampleValue",
    "sequenceNumber": 1
}
```

---
title: "Commerce Extension Provider Mapping Input"
domain: chatterapi
topic: commerce-extension-provider-mapping-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.331Z
estimatedTokens: 171
keywords: [Commerce, Extension, Provider, Mapping, Input, map, webstore]
---

# Commerce Extension Provider Mapping Input

> Describes information used to map an extension provider to a webstore.

# Commerce Extension Provider Mapping Input

Describes information used to map an extension provider to a webstore.

Root XML tag

<MappingInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | Mapping ID. | Optional | 59.0 |
| webstoreId | String | ID of the webstore. | Required | 59.0 |
| providerName | String | Unique name of the extension provider. | Required | 59.0 |
| epn | String | Extension point name (unique identifier for an extension). For valid values, see the RegisteredExternalService object's ExtensionPointName field. | Optional | 59.0 |

## Code Examples

```
{
  "webstoreId": "0ZExx000000003FGAQ",
  "providerName": "UltimateInventory"
}
```

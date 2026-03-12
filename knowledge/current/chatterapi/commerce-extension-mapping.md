---
title: "Commerce Extension Mapping"
domain: chatterapi
topic: commerce-extension-mapping
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.008Z
estimatedTokens: 401
keywords: [Commerce, Extension, Mapping, modify, provider, Apex, implements, webstore]
---

# Commerce Extension Mapping

> Delete, get, or modify a Commerce extension mapping. An extension provider is an Apex
    Class that implements a Commerce extension.

# Commerce Extension Mapping

Delete, get, or modify a Commerce extension mapping. An extension provider is an Apex Class that implements a Commerce extension.

Resource

```

```

Available version

58.0

Requires Chatter

No

HTTP methods

DELETE, GET, PUT

Response body for GET and PUT

[Commerce Extension Mapping](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mapping_output.htm "Mapping of a Commerce extension provider to a webstore.")

Request body for PUT

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

Request parameters for PUT

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| mappingInput​Representation | Object | An Commerce Extension Provider Mapping Input object, which describes information used to map an extension provider to a webstore. You can provide this information in the request body or as a URL parameter. | Optional | 58.0 |
| providerName | String | Unique name of the extension provider. | Optional | 58.0 |
| webstoreId | String | ID of the webstore. | Optional | 58.0 |

## Code Examples

```
/commerce/extension/mappings/mappingId
```

```
{
  "webstoreId": "0ZExx000000003FGAQ",
  "providerName": "UltimateInventory"
}
```

## Related Topics

- Commerce Extension Mapping (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_mapping_output.htm)
- Commerce Extension Provider Mapping Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_commerce_extension_provider_mapping_input.htm)

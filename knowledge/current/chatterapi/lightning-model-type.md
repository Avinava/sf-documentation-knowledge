---
title: "Lightning Model Type"
domain: chatterapi
topic: lightning-model-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:19.261Z
estimatedTokens: 372
keywords: [Lightning, Model]
---

# Lightning Model Type

> Details about lightning model types.

# Lightning Model Type

Details about lightning model types.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the type from the schema.json. | Small, 64.0 | 64.0 |
| descriptor | String | Descriptor of the type from the query parameters. | Small, 64.0 | 64.0 |
| developerName | String | Developer name, or API name, of the type. | Small, 64.0 | 64.0 |
| editorConfig | Map<String, Object> | Editor configuration for the specified target. | Big, 64.0 | 64.0 |
| errorDetails | Lightning Model Types Error | Lightning Model Types error details. | Small, 64.0 | 64.0 |
| id | String | 18-character ID of the Type. This is returned for the database-based (Custom) types only. | Small, 64.0 | 64.0 |
| namespacePrefix | String | Namespace prefix that is associated with the type. Refer to a type using the namespacePrefix__developerName notation, or fully qualified name. | Small, 64.0 | 64.0 |
| rendererConfig | Map<String, Object> | Renderer configuration for the specified target. | Big, 64.0 | 64.0 |
| schema | Map<String, Object> | JSON schema definition (schema.json) of the type. | Big, 64.0 | 64.0 |
| title | String | Title of the type from the schema.json. | Small, 64.0 | 64.0 |

#### See Also

-   [Lightning Model Types Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_model_types_collection.htm "Collection of lightning model types.")

## Related Topics

- Lightning Model Types Error (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_model_types_error.htm)
- Lightning Model Types Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_model_types_collection.htm)

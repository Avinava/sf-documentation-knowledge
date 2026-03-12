---
title: "Lightning Type Detail"
domain: chatterapi
topic: lightning-type-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.274Z
estimatedTokens: 399
keywords: [Lightning, Detail, Detailed]
---

# Lightning Type Detail

> Detailed information about a lightning type.

# Lightning Type Detail

Detailed information about a lightning type.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the type from the schema.json. | Small, 64.0 | 64.0 |
| developerName | String | Developer name, or API name, of the type. | Small, 64.0 | 64.0 |
| editorConfig | Map<String, Object> | Editor configuration for the specified target. | Big, 64.0 | 64.0 |
| id | String | 18-character ID of the type. This is returned for the database-based (Custom) types only. | Small, 64.0 | 64.0 |
| namespacePrefix | String | Namespace prefix that is associated with the type. Refer to a type using the namespacePrefix__developerName notation, or fully qualified name. | Small, 64.0 | 64.0 |
| rendererConfig | Map<String, Object> | Renderer configuration for the specified target. | Big, 64.0 | 64.0 |
| schema | Map<String, Object> | The JSON schema definition (schema.json) of the type. | Big, 64.0 | 64.0 |
| source | String | Source of the Lightning type. Values are:Standard—Standard type provided out-of-the-box by Salesforce.Custom—Custom type created in the org.Managed—Type that was installed from a managed package. | Small, 65.0 | 65.0 |
| title | String | Title of the type from the schema.json. | Small, 64.0 | 64.0 |

#### See Also

-   [Lightning Type](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_lightning_type.htm "Get detailed information, such as JSON schema definition, editor configuration, and renderer configuration about each Lightning type.")

## Related Topics

- Lightning Type (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_lightning_type.htm)

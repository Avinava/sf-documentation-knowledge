---
title: "ConnectApi.AbstractContentHubItemType"
domain: apex-reference
topic: connectapiabstractcontenthubitemtype
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.029Z
estimatedTokens: 285
keywords: [ConnectApi.AbstractContentHubItemType, item, associated, repository, folder]
---

# ConnectApi.AbstractContentHubItemType

> An item type associated with a repository folder.

# ConnectApi.AbstractContentHubItemType

An item type associated with a repository folder.

This class is abstract.

Superclass of:

-   [ConnectApi.ContentHubItemTypeDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm "The details of an item type associated with a repository folder.")
-   [ConnectApi.ContentHubItemTypeSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_summary.htm "The summary of an item type associated with a repository folder.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| contentStream​Support | ConnectApi.​ContentHub​StreamSupport | Support for content streaming. Values are:ContentStreamAllowedContentStreamNotAllowedContentStreamRequired | 39.0 |
| description | String | Description of the item type. | 39.0 |
| displayName | String | Display name of the item type. | 39.0 |
| id | String | ID of the item type. | 39.0 |
| isVersionable | Boolean | Indicates whether the item type can have versions. | 39.0 |
| url | String | URL to the detailed information of the item type. | 39.0 |

## Related Topics

- ConnectApi.ContentHubItemTypeDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_detail.htm)
- ConnectApi.ContentHubItemTypeSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_item_type_summary.htm)
- ConnectApi.​ContentHub​StreamSupport (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)

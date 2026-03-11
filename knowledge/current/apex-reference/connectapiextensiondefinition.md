---
title: "ConnectApi.ExtensionDefinition"
domain: apex-reference
topic: connectapiextensiondefinition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.708Z
keywords: [ConnectApi.ExtensionDefinition, See]
---

# ConnectApi.ExtensionDefinition

# ConnectApi.ExtensionDefinition

An extension's definition.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canAccess | Boolean | Indicates whether users can access the extension when it’s associated with a feed element. | 40.0 |
| canCreate | Boolean | Indicates whether users can create a feed element with the extension in the org. | 40.0 |
| createdDate | Datetime | Date when the extension was created. | 40.0 |
| description | String | Description of the extension. | 40.0 |
| iconUrl | String | URL to the icon for the extension. | 40.0 |
| id | String | ID of the extension. | 40.0 |
| information​Collection | List<ConnectApi.​AbstractExtension​Information> | Collection of extension information. | 40.0 |
| isEnabled​InCommunity | Boolean | Indicates whether the extension is enabled in the site. | 40.0 only |
| isEnabled​InLightningPublisher | Boolean | Indicates whether the extension is enabled in the Lightning publisher. | 40.0 only |
| name | String | Name of the extension. | 40.0 |
| position | Integer | Position in which the extension is displayed in the publisher. | 41.0 |

#### See Also

-   [ConnectApi.ExtensionDefinitions](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_extension_definition_collection.htm "A collection of extension definitions.")
---
title: "Extension Definition"
domain: chatterapi
topic: extension-definition
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.513Z
estimatedTokens: 376
keywords: [Extension, Definition, extension's]
---

# Extension Definition

> An extension's definition.

# Extension Definition

An extension's definition.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| canAccess | Boolean | Indicates whether users can access the extension when it’s associated with a feed element. | Small, 40.0 | 40.0 |
| canCreate | Boolean | Indicates whether users can create a feed element with the extension in the org. | Small, 40.0 | 40.0 |
| createdDate | String | Date when the extension was created. Format is ISO 8601. | Small, 40.0 | 40.0 |
| description | String | Description of the extension. | Big, 40.0 | 40.0 |
| iconUrl | String | URL to the icon for the extension. | Small, 40.0 | 40.0 |
| id | String | ID of the extension. | Small, 40.0 | 40.0 |
| information​Collection | Lightning Extension Information[] | Collection of extension information. | Small, 40.0 | 40.0 |
| isEnabled​InCommunity | Boolean | Indicates whether the extension is enabled in the site. | Small, 40.0 | 40.0 only |
| isEnabled​InLightning​Publisher | Boolean | Indicates whether the extension is enabled in the Lightning publisher. | Small, 40.0 | 40.0 only |
| name | String | Name of the extension. | Medium, 40.0 | 40.0 |
| position | Integer | Position in which the extension is displayed in the publisher. | Small, 41.0 | 41.0 |

#### See Also

-   [Extension Definition Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_extension_definition_collection.htm "Collection of extension definitions.")

## Related Topics

- Lightning Extension Information (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_lightning_extension_information.htm)
- Extension Definition Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_extension_definition_collection.htm)

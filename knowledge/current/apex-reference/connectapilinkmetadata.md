---
title: "ConnectApi.LinkMetadata"
domain: apex-reference
topic: connectapilinkmetadata
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.054Z
keywords: [ConnectApi.LinkMetadata, See]
---

# ConnectApi.LinkMetadata

# ConnectApi.LinkMetadata

Metadata for a link.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| description | String | Description of the link. | 42.0 |
| frameSource | String | HTML required to display the resource. | 42.0 |
| height | Integer | Height required to display the HTML. | 42.0 |
| originalUrl | String | Original URL that was used to request the metadata. | 42.0 |
| providerUrl | String | URL of the provider that the information is retrieved from. | 42.0 |
| source | ConnectApi.​LinkMetadataSource | Source of the link metadata. Values are:None—Link metadata wasn’t retrieved.Sfdc—Salesforce is the source. | 42.0 |
| thumbnailUrl | String | Thumbnail of the resource. | 42.0 |
| title | String | Title of the link. | 42.0 |
| type | ConnectApi.​LinkMetadataType | Type of link that the metadata represents. Values are:Error—Link metadata couldn’t be retrieved.Link—Represents a link.None—Link metadata wasn’t retrieved because the link isn’t an allowed domain.Photo—Represents a photo.Rich—Represents rich content, typically HTML content.Unknown—Link metadata was retrieved, but the type is unknown.Video—Represents a video. | 42.0 |
| url | String | URL of the image to display, if one is available. | 42.0 |
| width | Integer | Width required to display the HTML. | 42.0 |

#### See Also

-   [ConnectApi.LinkMetadataCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_link_metadata_collection.htm "Collection of link metadata.")
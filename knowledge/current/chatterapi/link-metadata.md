---
title: "Link Metadata"
domain: chatterapi
topic: link-metadata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.709Z
estimatedTokens: 134
keywords: [Link, Metadata, URLs]
---

# Link Metadata

> Metadata for a link.

# Link Metadata

Metadata for a link.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| description | String | Description of the link. | Small, 42.0 | 42.0 |
| frameSource | String | HTML required to display the resource. | Small, 42.0 | 42.0 |
| height | Integer | Height required to display the HTML. | Small, 42.0 | 42.0 |
| originalUrl | String | Original URL that was used to request the metadata. | Small, 42.0 | 42.0 |
| providerUrl | String | URL of the provider that the information is retrieved from. | Small, 42.0 | 42.0 |
| source | String | Source of the link metadata. Values are:None—Link metadata wasn’t retrieved.Sfdc—Salesforce is the source. | Small, 42.0 | 42.0 |
| thumbnailUrl | String | Thumbnail of the resource. | Small, 42.0 | 42.0 |
| title | String | Title of the link. | Small, 42.0 | 42.0 |
| type | String | Type of link that the metadata represents. Values are:Error—Link metadata couldn’t be retrieved.Link—Represents a link.None—Link metadata wasn’t retrieved because the link isn’t an allowed domain.Photo—Represents a photo.Rich—Represents rich content, typically HTML content.Unknown—Link metadata was retrieved, but the type is unknown.Video—Represents a video. | Small, 42.0 | 42.0 |
| url | String | URL of the image to display, if one is available. | Small, 42.0 | 42.0 |
| width | Integer | Width required to display the HTML. | Small, 42.0 | 42.0 |

#### See Also

-   [Link Metadata Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_link_metadata_collection.htm "Collection of link metadata.")

## Code Examples

```
/chatter/link-metadata
```

```
/connect/communities/communityId/chatter/link-metadata
```

## Related Topics

- Link Metadata Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_link_metadata_collection.htm)

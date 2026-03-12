---
title: "Message Segment: Inline Image"
domain: chatterapi
topic: message-segment-inline-image
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.197Z
estimatedTokens: 268
keywords: [Message, Segment, Inline, Image, feed]
---

# Message Segment: Inline Image

> An inline image in the feed body.

# Message Segment: Inline Image

An inline image in the feed body.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| altText | String | Alt text for the inline image. | Small, 35.0 | 35.0 |
| contentSize | Integer | Size of the file in bytes. | Small, 35.0 | 35.0 |
| fileExtension | String | Extension of the file, such as gif. | Small, 37.0 | 37.0 |
| imageDetails | Image File Detail | Details for the image, or null if the file isn’t an image. | Big, 41.0 | 41.0 |
| text | String | Alt text for the inline image or the ID of the inline image if no alt text is available. | Small, 35.0 | 35.0 |
| thumbnails | File Preview Collection | Information about the available thumbnails for the image. | Medium, 35.0 | 35.0 |
| type | String | InlineImage | Small, 35.0 | 35.0 |
| url | String | URL to the latest version of the inline image. | Small, 35.0 | 35.0 |

#### See Also

-   [Feed Item Body](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm "Chatter feed item body.")

## Related Topics

- Image File Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_image_file_detail.htm)
- File Preview Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_preview_collection.htm)
- Feed Item Body (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_item_body.htm)

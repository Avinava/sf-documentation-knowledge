---
title: "Feed Item Attachment: Content"
domain: chatterapi
topic: feed-item-attachment-content
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.753Z
estimatedTokens: 1014
keywords: [Feed, Item, Attachment, Content]
---

# Feed Item Attachment: Content

> Content feed item attachment.

# Feed Item Attachment: Content

Content feed item attachment.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This response body isn’t available in version 32.0 and later. In version 32.0 and later, [Content Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_capability.htm "If a comment has this capability, it has a file attachment.") is used.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| checkSum | String | MD5 checksum for the file. | Small, 29.0 | 26.0–31.0 |
| contentUrl | String | URL for link files and Google Docs; otherwise the value is null. | Small, 31.0 | 31.0–31.0 |
| description | String | Description of the attachment. | Small, 29.0 | 23.0–31.0 |
| downloadUrl | String | File’s URL. This value is null if the content is a link or a Google Doc. | Small, 29.0 | 23.0–31.0 |
| fileExtension | String | Extension of the file. | Small, 29.0 | 26.0–31.0 |
| fileSize | String | Size of the file in bytes. If size cannot be determined, returns unknown. | Small, 29.0 | 23.0–31.0 |
| fileType | String | Type of file. | Small, 29.0 | 23.0–31.0 |
| hasImagePreview | Boolean | true if the file has a preview image available, false otherwise. | Small, 29.0 | 23.0–29.0 |
| hasPdfPreview | Boolean | true if the file has a PDF preview available, false otherwise. | Small, 29.0 | 23.0–31.0 |
| id | String | 18-character ID of the content. | Small, 29.0 | 23.0–31.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Small, 29.0 | 26.0–31.0 |
| mimeType | String | MIME type content of the file. | Small, 29.0 | 23.0–31.0 |
| renditionUrl | String | URL to the rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Small, 29.0 | 26.0–31.0 |
| renditionUrl​240By180 | String | URL to the 240 x 180 rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Small, 30.0 | 30.0–31.0 |
| renditionUrl​720By480 | String | URL to the 720 x 480 rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Small, 30.0 | 30.0–31.0 |
| textPreview | String | Text preview of the file if available; null otherwise. | Big, 30.0 | 30.0–31.0 |
| thumb​120By90​RenditionStatus | String | Specifies the rendering status of the 120 x 90 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Medium, 30.0 | 30.0–31.0 |
| thumb​240By180​RenditionStatus | String | Specifies the rendering status of the 240 x 180 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Medium, 30.0 | 30.0–31.0 |
| thumb​720By480​RenditionStatus | String | Specifies the rendering status of the 720 x 480 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Medium, 30.0 | 30.0–31.0 |
| title | String | Title of the file. | Small, 29.0 | 23.0–31.0 |
| type | String | Content | Small, 29.0 | 27.0–31.0 |
| versionId | String | 18-character ID of this version of the content. | Medium, 29.0 | 23.0–31.0 |

## Related Topics

- Content Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_capability.htm)

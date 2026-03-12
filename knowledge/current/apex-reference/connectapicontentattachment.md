---
title: "ConnectApi.ContentAttachment"
domain: apex-reference
topic: connectapicontentattachment
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:26.798Z
estimatedTokens: 902
keywords: [ConnectApi.ContentAttachment, Attachments, feed, items, ContentPost., Important]
---

# ConnectApi.ContentAttachment

> Attachments in feed items with the type ContentPost.

# ConnectApi.ContentAttachment

Attachments in feed items with the type ContentPost.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=apexref)

#### Important

This class isn’t available in version 32.0 and later. In version 32.0 and later, [ConnectApi.ContentCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_capability.htm "If a comment has this capability, it has a file attachment.") is used.

Subclass of [ConnectApi.FeedItemAttachment](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm "Feed item attachment.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| checkSum | String | MD5 checksum for the file. | 28.0–31.0 |
| contentUrl | String | URL for link files and Google Docs; otherwise the value is null. | 31.0–31.0 |
| description | String | Description of the attachment. | 28.0–31.0 |
| downloadUrl | String | File’s URL. This value is null if the content is a link or a Google Doc. | 28.0–31.0 |
| fileExtension | String | File’s extension. | 28.0–31.0 |
| fileSize | String | Size of the file in bytes. If size cannot be determined, returns unknown. | 28.0–31.0 |
| fileType | String | Type of file. | 28.0–31.0 |
| hasImagePreview | Boolean | true if the file has a preview image available, otherwise ,false. | 28.0–29.0 |
| hasPdfPreview | Boolean | true if the file has a PDF preview available, otherwise, false. | 28.0–31.0 |
| id | String | Content’s 18-character ID. | 28.0–31.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | 28.0–31.0 |
| mimeType | String | File’s MIME type. | 28.0–31.0 |
| renditionUrl | String | URL to the file’s rendition resource. | 28.0–31.0 |
| renditionUrl​240By180 | String | URL to the 240 x 180 rendition resource for the file.For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | 30.0–31.0 |
| renditionUrl​720By480 | String | URL to the 720 x 480 rendition resource for the file.For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | 30.0–31.0 |
| textPreview | String | Text preview of the file if available; null otherwise. | 30.0–31.0 |
| thumb​120By90​RenditionStatus | String | Specifies the rendering status of the 120 x 90 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 30.0–31.0 |
| thumb​240By180​RenditionStatus | String | Specifies the rendering status of the 240 x 180 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 30.0–31.0 |
| thumb​720By480​RenditionStatus | String | Specifies the rendering status of the 720 x 480 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 30.0–31.0 |
| title | String | Title of the file. | 28.0–31.0 |
| versionId | String | 18-character ID for this version of the content. | 28.0–31.0 |

## Related Topics

- ConnectApi.ContentCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_capability.htm)
- ConnectApi.FeedItemAttachment (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_item_attachment.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)

---
title: "ConnectApi.ContentCapability"
domain: apex-reference
topic: connectapicontentcapability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:38.439Z
keywords: [ConnectApi.ContentCapability, See]
---

# ConnectApi.ContentCapability

# ConnectApi.ContentCapability

If a comment has this capability, it has a file attachment.

Subclass of [ConnectApi.FeedElementCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_feed_element_capability.htm "A feed element capability, which defines the characteristics of a feed element.").

For files attached to a feed post (instead of a comment) in version 36.0 and later, use [ConnectApi.FilesCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_content_capability.htm "If a feed element has this capability, it has one or more file attachments.").

If content is deleted from a feed element after it’s posted or if the access to the content is changed to private, the ConnectApi.ContentCapability exists, however most of its properties are null.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| checksum | String | MD5 checksum for the file. | 32.0 |
| contentUrl | String | URL of the content for links and Google docs. | 32.0 |
| description | String | Description of the attachment. | 32.0 |
| downloadUrl | String | URL to the content. | 32.0 |
| fileExtension | String | Extension of the file. | 32.0 |
| fileSize | String | Size of the file in bytes. If size cannot be determined, returns Unknown. | 32.0 |
| fileType | String | Type of file. | 32.0 |
| hasPdfPreview | Boolean | true if the file has a PDF preview available, false otherwise. | 32.0 |
| id | String | 18-character ID of the content. | 32.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | 32.0 |
| mimeType | String | MIME type of the file. | 32.0 |
| renditionUrl | String | URL to the rendition resource for the file. Renditions are processed asynchronously and may not be available immediately after the file has been uploaded. | 32.0 |
| renditionUrl240By180 | String | URL to the 240x180 size rendition resource for the file. Renditions are processed asynchronously and may not be available immediately after the file has been uploaded. | 32.0 |
| renditionUrl720By480 | String | URL to the 720x480 size rendition resource for the file. Renditions are processed asynchronously and may not be available immediately after the file has been uploaded. | 32.0 |
| sharingOption | ConnectApi.​FileSharingOption | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | 35.0 |
| textPreview | String | Text preview of the file if available, null otherwise. The maximum number of characters is 200. | 32.0 |
| thumb120By90​RenditionStatus | String | The status of the rendering of the 120x90 pixel sized preview image of the file. Should be either Processing, Failed, Success, or Na if unavailable. | 32.0 |
| thumb240By180​RenditionStatus | String | The status of the rendering of the 240x180 pixel sized preview image of the file. Should be either Processing, Failed, Success, or Na if unavailable. | 32.0 |
| thumb720By480​RenditionStatus | String | The status of the rendering of the 720x480 pixel sized preview image of the file. Should be either Processing, Failed, Success, or Na if unavailable. | 32.0 |
| title | String | Title of the file. | 32.0 |
| versionId | String | Version ID of the file. | 32.0 |

#### See Also

-   [ConnectApi.CommentCapabilities](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_comment_capabilities.htm "A set of capabilities on a comment.")
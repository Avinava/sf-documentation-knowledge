---
title: "Content"
domain: chatterapi
topic: content
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.970Z
estimatedTokens: 1109
keywords: [Content, file, attached, feed, item]
---

# Content

> A file attached to a feed item.

# Content

A file attached to a feed item.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| checksum | String | MD5 checksum for the file. | Small, 36.0 | 36.0 |
| contentHub​Repository | Files Connect Repository | External data source associated with this file, or null if it doesn’t point to an external file. | Small, 36.0 | 36.0 |
| contentUrl | String | URL of the content for links and Google docs. | Small, 36.0 | 36.0 |
| description | String | Description of the attachment. | Small, 36.0 | 36.0 |
| downloadUrl | String | URL to the content. | Small, 36.0 | 36.0 |
| external​DocumentUrl | String | External URL this file points to, or null if it doesn’t point to an external file. | Small, 36.0 | 36.0 |
| fileExtension | String | Extension of the file. | Small, 36.0 | 36.0 |
| fileSize | String | Size of the file in bytes. If size can’t be determined, returns unknown. | Small, 36.0 | 36.0 |
| fileType | String | Type of file, such as PDF. | Small, 36.0 | 36.0 |
| hasPdfPreview | Boolean | true if the file has a PDF preview available, false otherwise. | Medium, 36.0 | 36.0 |
| id | String | 18-character ID of the content. | Small, 36.0 | 36.0 |
| imageDetails | Image File Detail | Image details, or null if the file isn’t an image. | Big, 40.0 | 40.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync.NoteSalesforce Files Sync was retired on May 25, 2018. | Small, 36.0 | 36.0 |
| mimeType | String | MIME type of the file. | Small, 36.0 | 36.0 |
| renditionUrl | String | URL to the rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Small, 36.0 | 36.0 |
| renditionUrl​240By180 | String | URL to the 240 x 180 pixel rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Small, 36.0 | 36.0 |
| renditionUrl​720By480 | String | URL to the 720 x 480 pixel rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Small, 36.0 | 36.0 |
| repositoryFile​Id | String | ID of the file in the external repository, or null if the file isn’t external. | Small, 36.0 | 36.0 |
| repositoryFile​Url | String | URL to the Connect REST API resource giving access to the external repository file properties, or null if this file doesn’t point to an external file. | Small, 36.0 | 36.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Medium, 36.0 | 36.0 |
| textPreview | String | Text preview of the file if available; null otherwise. | Big, 36.0 | 36.0 |
| thumb​120By90​​RenditionStatus | String | Specifies the rendering status of the 120 x 90 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Medium, 36.0 | 36.0 |
| thumb​240By180​​RenditionStatus | String | Specifies the rendering status of the 240 x 180 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Medium, 36.0 | 36.0 |
| thumb​720By480​​RenditionStatus | String | Specifies the rendering status of the 720 x 480 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Medium, 36.0 | 36.0 |
| title | String | Title of the file. | Small, 36.0 | 36.0 |
| versionId | String | Version ID of the file. | Medium, 36.0 | 36.0 |

#### See Also

-   [Files Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_content_capability.htm "If a feed element has this capability, it has one or more file attachments.")

## Related Topics

- Files Connect Repository (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm)
- Image File Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_image_file_detail.htm)
- Files Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_content_capability.htm)

---
title: "ConnectApi.Content"
domain: apex-reference
topic: connectapicontent
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:26.895Z
estimatedTokens: 869
keywords: [ConnectApi.Content, file, attached, feed, item]
---

# ConnectApi.Content

> A file attached to a feed item.

# ConnectApi.Content

A file attached to a feed item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| checksum | String | MD5 checksum for the file. | 36.0 |
| contentUrl | String | URL of the content for links. | 36.0 |
| description | String | Description of the attachment. | 36.0 |
| downloadUrl | String | URL to the content. | 36.0 |
| fileExtension | String | Extension of the file. | 36.0 |
| fileSize | String | Size of the file in bytes. If size can’t be determined, returns unknown. | 36.0 |
| fileType | String | Type of file, such as PDF. | 36.0 |
| hasPdfPreview | Boolean | true if the file has a PDF preview available; false otherwise. | 36.0 |
| id | String | 18-character ID of the content. | 36.0 |
| imageDetails | ConnectApi.ContentImageFileDetails | Image details, or null if the file isn’t an image. | 40.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync.NoteSalesforce Files Sync was retired on May 25, 2018. | 36.0 |
| mimeType | String | MIME type of the file. | 36.0 |
| renditionUrl | String | URL to the rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | 36.0 |
| renditionUrl​240By180 | String | URL to the 240 x 180 pixel rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | 36.0 |
| renditionUrl​720By480 | String | URL to the 720 x 480 pixel rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | 36.0 |
| sharingOption | ConnectApi.​FileSharingOption | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | 36.0 |
| textPreview | String | Text preview of the file if available; null otherwise. | 36.0 |
| thumb120By90​RenditionStatus | String | Specifies the rendering status of the 120 x 90 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 36.0 |
| thumb240By180​RenditionStatus | String | Specifies the rendering status of the 240 x 180 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 36.0 |
| thumb720By480​RenditionStatus | String | Specifies the rendering status of the 720 x 480 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 36.0 |
| title | String | Title of the file. | 36.0 |
| versionId | String | Version ID of the file. | 36.0 |

#### See Also

-   [ConnectApi.FilesCapability](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_content_capability.htm "If a feed element has this capability, it has one or more file attachments.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.ContentImageFileDetails (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_image_file_detail.htm)
- ConnectApi.​FileSharingOption (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.FilesCapability (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_multiple_content_capability.htm)

---
title: "Content Capability"
domain: chatterapi
topic: content-capability
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:17.980Z
estimatedTokens: 1121
keywords: [Content, Capability, comment, file, attachment]
---

# Content Capability

> If a comment has this capability, it has a file attachment.

# Content Capability

If a comment has this capability, it has a file attachment.

For files attached to a feed post (instead of a comment) in version 36.0 and later, use [Files Capability](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_content_capability.htm "If a feed element has this capability, it has one or more file attachments.").

If content is deleted from a feed element after it’s posted or if the access to the content is changed to private, the Content Capability exists, however most of its properties are null.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| checksum | String | MD5 checksum for the file. | Small, 32.0 | 32.0 |
| contentHub​Repository | Files Connect Repository | The external data source associated with this file, or null if it doesn’t point to an external file. | Small, 32.0 | 32.0 |
| contentUrl | String | URL of the content for links and Google docs. | Small, 32.0 | 32.0 |
| description | String | Description of the attachment. | Small, 32.0 | 32.0 |
| downloadUrl | String | URL to the content. | Small, 32.0 | 32.0 |
| external​DocumentUrl | String | The external URL this file points to, or null if it does not point to an external file. | Small, 32.0 | 32.0 |
| fileExtension | String | Extension of the file. | Small, 32.0 | 32.0 |
| fileSize | String | Size of the file in bytes. If size cannot be determined, returns Unknown. | Small, 32.0 | 32.0 |
| fileType | String | Type of file. | Small, 32.0 | 32.0 |
| hasPdfPreview | Boolean | true if the file has a PDF preview available, false otherwise. | Medium, 32.0 | 32.0 |
| id | String | 18-character ID of the content. | Small, 32.0 | 32.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Small, 32.0 | 32.0 |
| mimeType | String | MIME type of the file. | Small, 32.0 | 32.0 |
| renditionUrl | String | URL to the rendition resource for the file. Renditions are processed asynchronously and may not be available immediately after the file has been uploaded. | Small, 32.0 | 32.0 |
| renditionUrl​240By180 | String | URL to the 240x180 size rendition resource for the file. Renditions are processed asynchronously and may not be available immediately after the file has been uploaded. | Small, 32.0 | 32.0 |
| renditionUrl​720By480 | String | URL to the 720x480 size rendition resource for the file. Renditions are processed asynchronously and may not be available immediately after the file has been uploaded. | Small, 32.0 | 32.0 |
| repository​FileId | String | ID of the file in the external repository, or null if the file isn’t external. | Small, 36.0 | 36.0 |
| repository​FileUrl | String | The URL of the Connect REST API resource giving access to the external repository file properties, or null if this file doesn’t point to an external file. | Small, 32.0 | 32.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Medium, 35.0 | 35.0 |
| textPreview | String | Text preview of the file if available, null otherwise. The maximum number of characters is 200. | Big, 32.0 | 32.0 |
| thumb​120By90​RenditionStatus | String | The status of the rendering of the 120x90 pixel sized preview image of the file. Should be either Processing, Failed, Success, or Na if unavailable. | Medium, 32.0 | 32.0 |
| thumb​240By180​RenditionStatus | String | The status of the rendering of the 240x180 pixel sized preview image of the file. Should be either Processing, Failed, Success, or Na if unavailable. | Medium, 32.0 | 32.0 |
| thumb​720By480​RenditionStatus | String | The status of the rendering of the 720x480 pixel sized preview image of the file. Should be either Processing, Failed, Success, or Na if unavailable. | Medium, 32.0 | 32.0 |
| title | String | Title of the file. | Small, 32.0 | 32.0 |
| versionId | String | Version ID of the file. | Medium, 32.0 | 32.0 |

#### See Also

-   [Feed Element Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm "A container for all capabilities that can be included with a feed element.")

-   [Comment Capabilities](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm "A container for all capabilities that can be included with a comment.")

## Related Topics

- Files Capability (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_multiple_content_capability.htm)
- Files Connect Repository (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm)
- Feed Element Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_feed_element_capabilities.htm)
- Comment Capabilities (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_comment_capabilities.htm)

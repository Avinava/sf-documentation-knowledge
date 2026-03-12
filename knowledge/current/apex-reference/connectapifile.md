---
title: "ConnectApi.File"
domain: apex-reference
topic: connectapifile
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:27.435Z
estimatedTokens: 1370
keywords: [ConnectApi.File, File.]
---

# ConnectApi.File

> File.

# ConnectApi.File

File.

This class is abstract.

Subclass of [ConnectApi.ActorWithId](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm "Actor with ID.").

Superclass of [ConnectApi.FileSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_sum.htm "A file summary.").

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| checksum | String | MD5 checksum for the file. | 28.0 |
| content​ModifiedDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. File-specific modified date, which is updated only for direct file operations, such as rename. Modifications to the file from outside of Salesforce can update this date. | 32.0 |
| contentSize | Integer | Size of the file in bytes. | 28.0 |
| contentUrl | String | If the file is a link, returns the URL, otherwise, the string null. | 28.0 |
| createdDate | Datetime | ISO 8601 date string when the file was created. | 41.0 |
| description | String | Description of the file. | 28.0 |
| downloadUrl | String | URL to the file, that can be used for downloading the file. | 28.0 |
| fileExtension | String | Extension of the file. | 28.0 |
| fileType | String | Type of file, such as PDF, PowerPoint. | 28.0 |
| flashRendition​Status | String | Specifies if a flash preview version of the file has been rendered.NoteFlash renditions were retired on July 16, 2021. | 28.0 |
| isFileAsset | Boolean | Specifies whether the file is an asset. | 46.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | 28.0 |
| isMajorVersion | Boolean | true if the file is a major version; false if the file is a minor version. Major versions can’t be replaced. | 31.0 |
| mimeType | String | File’s MIME type. | 28.0 |
| moderationFlags | ConnectApi.​ModerationFlags | Information about the moderation flags on a file. If ConnectApi.Features.communityModeration is false, this property is null. | 30.0 |
| modifiedDate | Datetime | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. Modifications to the file from within Salesforce update this date. | 28.0 |
| name | String | Name of the file. | 28.0 |
| origin | String | Specifies the file source. Valid values are:Chatter—file came from ChatterContent—file came from content | 28.0 |
| owner | ConnectApi.​User​Summary | File’s owner. | 28.0 |
| pdfRendition​Status | String | Specifies if a PDF preview version of the file has been rendered. | 28.0 |
| publishStatus | ConnectApi.​FilePublishStatus | Specifies the publish status of the file.PendingAccess—File is pending publishing.PrivateAccess—File is private.PublicAccess—File is public. | 28.0 |
| renditionUrl | String | URL to the rendition for the file. | 28.0 |
| renditionUrl​240By180 | String | URL to the 240 x 180 rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | 29.0 |
| renditionUrl​720By480 | String | URL to the 720 x 480 rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | 29.0 |
| sharingOption | ConnectApi.​FileSharingOption | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | 35.0 |
| sharingPrivacy | ConnectApi.​FileSharingPrivacy | Sharing privacy of a file. Values are:None—File is visible to anyone with record access.PrivateOnRecords—File is private on records. | 41.0 |
| sharingRole | ConnectApi.​FileSharingType | Sharing role of the file.Admin—Owner permission, but doesn’t own the file.Collaborator—Viewer permission, and can edit, change permissions, and upload a new version of a file.Owner—Collaborator permission, and can make a file private, and delete a file.Viewer—Can view, download, and share a file.WorkspaceManaged—Permission controlled by the library. | 28.0 |
| systemModstamp | Datetime | ISO 8601 date string indicating when a user or any automated system process, such as a trigger, updated the file. | 41.0 |
| textPreview | String | Text preview of the file if available; null otherwise. | 30.0 |
| thumb120By90​RenditionStatus | String | Specifies the rendering status of the 120 x 90 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 28.0 |
| thumb240By180​RenditionStatus | String | Specifies the rendering status of the 240 x 180 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 28.0 |
| thumb720By480​RenditionStatus | String | Specifies the rendering status of the 720 x 480 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | 28.0 |
| title | String | Title of the file. | 28.0 |
| versionNumber | String | File’s version number. | 28.0 |

## Related Topics

- ConnectApi.ActorWithId (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_actorWithIdOutput.htm)
- ConnectApi.FileSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_sum.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Datetime (atlas.en-us.apexref.meta/apexref/apex_methods_system_datetime.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- ConnectApi.​ModerationFlags (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_moderationFlags.htm)
- ConnectApi.​User​Summary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_user_summary.htm)
- ConnectApi.​FileSharingOption (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.​FileSharingPrivacy (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)

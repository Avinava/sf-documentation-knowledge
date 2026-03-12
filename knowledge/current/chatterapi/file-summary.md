---
title: "File Summary"
domain: chatterapi
topic: file-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:18.854Z
estimatedTokens: 2031
keywords: [File, Summary]
---

# File Summary

> Description of a file.

# File Summary

Description of a file.

For all rendition properties, note the following: For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded.

| Property | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| checkSum | String | MD5 checksum for the file. | Big, 29.0 | 26.0 |
| contentSize | Integer | Size of the file in bytes. | Small, 29.0 | 24.0 |
| contentHub​Repository | Files Connect Repository | External data source associated with this file, or null if it doesn’t point to an external file. | Small, 32.0 | 32.0 |
| content​ModifiedDate | String | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. File-specific modified date, which is updated only for direct file operations, such as rename. Modifications to the file from outside of Salesforce can update this date. | Small, 32.0 | 32.0 |
| contentUrl | String | If the file is a link, returns the URL, otherwise the string null. | Small, 29.0 | 24.0 |
| contentVersionId | String | ID of the content version. | Small, 62.0 | 62.0 |
| createdDate | String | ISO 8601 date string when the file was created. | Small, 41.0 | 41.0 |
| description | String | Description of the file. | Medium, 29.0 | 24.0 |
| downloadUrl | String | URL to the file. | Small, 29.0 | 26.0 |
| external​DocumentUrl | String | External URL this file points to, or null if it doesn’t point to an external file. | Small, 32.0 | 32.0 |
| external​FilePermission​Information | External File Permission Information | External file permission information, such as available groups, available permission types, and current sharing status, or null for non-external files or when includeExternalFilePermissionsInfo is false. | Big, 35.0 | 35.0 |
| flash​RenditionStatus | String | Specifies if a flash preview version of the file has been rendered.NoteFlash renditions were retired on July 16, 2021. | Big, 29.0 | 24.0 |
| fileExtension | String | Extension of the file. | Small, 29.0 | 26.0 |
| fileType | String | Type of file, such as PDF, PowerPoint. | Medium, 29.0 | 24.0 |
| id | String | 18-character ID of the file. | Small, 29.0 | 24.0 |
| isFileAsset | Boolean | Specifies whether the file is an asset. | Small, 46.0 | 46.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Medium, 29.0 | 26.0 |
| isMajorVersion | Boolean | true if the file is a major version; false if the file is a minor version. Major versions can’t be replaced. | Medium, 31.0 | 31.0 |
| mimeType | String | MIME type of the file. | Medium, 29.0 | 26.0 |
| moderationFlags | Moderation Flags | Flags for this file. Moderators can view and act on flagged items.If the communityModeration property of the Features response body is false, this property is null. | Big, 30.0 | 30.0 |
| modifiedDate | String | ISO 8601 format date string, for example, 2011-02-25T18:24:31.000Z. Modifications to the file from within Salesforce update this date. | Small, 29.0 | 24.0 |
| motif | Motif | Small, medium, and large icons indicating that the object is a file. The motif can also contain the object’s base color.The icon is not a preview of the file. | Small, 29.0 | 27.0 |
| mySubscription | Reference | If the context user is following this file, contains information about the subscription, otherwise null. | Medium, 29.0 | 23.0 |
| name | String | Name of the file. | Small, 29.0 | 24.0 |
| origin | String | Specifies the file source. Valid values are:Chatter—file came from ChatterContent—file came from contentFileField—file came from a record or other form | Big, 29.0 | 24.0 |
| owner | User Summary | Owner of the file. | Small, 29.0 | 24.0 |
| parentFolder | Reference | Reference to the parent folder. | Small, 29.0 | 28.0 |
| pdfRendition​Status | String | Specifies if a PDF preview version of the file has been rendered. | Big, 29.0 | 24.0 |
| publishStatus | String | Publish status of the file. One of these values:PendingAccess—File is pending publishing.PrivateAccess—File is private.PublicAccess—File is public. | Small, 29.0 | 29.0 |
| renditionUrl | String | URL to the rendition resource for the file. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Medium, 29.0 | 26.0 |
| renditionUrl​240By180 | String | URL to the 240px by 180px rendition for the file, if available. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Medium, 29.0 | 29.0 |
| renditionUrl​720By480 | String | URL to the 720px by 480px rendition for the file, if available. For shared files, renditions process asynchronously after upload. For private files, renditions process when the first file preview is requested, and aren’t available immediately after the file is uploaded. | Medium, 29.0 | 29.0 |
| repositoryFile​Id | String | ID of the file in the external repository, or null if the file isn’t external. | Small, 36.0 | 36.0 |
| repositoryFile​Url | String | URL to the Connect REST API resource giving access to the external repository file properties, or null if this file doesn’t point to an external file. | Small, 32.0 | 32.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Medium, 35.0 | 35.0 |
| sharingPrivacy | String | Sharing privacy of a file. Values are:None—File is visible to anyone with record access.PrivateOnRecords—File is private on records. | Medium, 41.0 | 41.0 |
| sharingRole | String | Sharing role of the file. One of these values:Admin—Owner permission, but doesn’t own the file.Collaborator—Viewer permission, and can edit, change permissions, and upload a new version of a file.Owner—Collaborator permission, and can make a file private, and delete a file.Viewer—Can view, download, and share a file.WorkspaceManaged—Permission controlled by the library. | Medium, 29.0 | 29.0 |
| systemModstamp | String | ISO 8601 date string indicating when a user or any automated system process, such as a trigger, updated the file. | Small, 41.0 | 41.0 |
| textPreview | String | Text preview of the file if available; null otherwise. | Big, 30.0 | 30.0 |
| thumb​120By90​​RenditionStatus | String | Specifies the rendering status of the 120 x 90 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Small, 29.0 | 24.0 |
| thumb​240By180​​RenditionStatus | String | Specifies the rendering status of the 240 x 180 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Small, 29.0 | 24.0 |
| thumb​720By480​​RenditionStatus | String | Specifies the rendering status of the 720 x 480 preview image of the file. One of these values:Processing—Image is being rendered.Failed—Rendering process failed.Success—Rendering process was successful.Na—Rendering is not available for this image. | Small, 29.0 | 24.0 |
| title | String | Title of the file. | Small, 29.0 | 24.0 |
| type | String | ContentDocument | Small, 29.0 | 24.0 |
| url | String | URL to the file. | Small, 29.0 | 24.0 |
| versionNumber | String | Version number of the file. | Medium, 29.0 | 24.0 |

#### See Also

-   [File Summary Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_files_page.htm "File summary page.")

-   [Folder Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item.htm "Description of an item (file or folder) in a folder.")

## Related Topics

- Files Connect Repository (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_ContentHubRepository.htm)
- External File Permission Information (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_file_permission_information.htm)
- Moderation Flags (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_moderation_flags.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- User Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_user_summary.htm)
- File Summary Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_files_page.htm)
- Folder Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item.htm)

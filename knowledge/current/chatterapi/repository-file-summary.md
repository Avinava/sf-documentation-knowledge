---
title: "Repository File Summary"
domain: chatterapi
topic: repository-file-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.952Z
estimatedTokens: 716
keywords: [Repository, File, Summary]
---

# Repository File Summary

> Description of a repository file.

# Repository File Summary

Description of a repository file.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| checkinComment | String | Checkin comment of the file. | Small, 32.0 | 32.0 |
| contentBody | String | Text of the file’s content if available, otherwise null. | Big, 43.0 | 43.0 |
| contentItem​Size | Long | Length in bytes of the content of the file, including files that are larger than 2 GB. | Small, 65.0 | 65.0 |
| contentSize | Integer | Length in bytes of the content of the file, for files that are smaller than 2 GB. | Small, 32.0 | 32.0 |
| createdBy | String | Name of user who created the file. | Small, 32.0 | 32.0 |
| createdDate | String | Created date of the file in ISO 8601 format. | Small, 32.0 | 32.0 |
| description | String | File description. | Small, 32.0 | 32.0 |
| downloadUrl | String | URL to the repository file content. | Small, 32.0 | 32.0 |
| external​ContentUrl | String | URL to this file’s content in the external system. | Small, 32.0 | 32.0 |
| external​DocumentUrl | String | URL to this file in the external system. | Small, 32.0 | 32.0 |
| external​FilePermission​Information | External File Permission Information | External file permission information, such as available groups, available permission types, and current sharing status, or null when includeExternalFilePermissionsInfo is false. | Big, 36.0 | 36.0 |
| id | String | ID of the file. | Small, 32.0 | 32.0 |
| itemTypeUrl | String | URL to the item type information. | Small, 35.0 | 35.0 |
| mimeType | String | Mime type of the file. | Small, 32.0 | 32.0 |
| modifiedBy | String | Name of user who last modified the file. | Small, 32.0 | 32.0 |
| modifiedDate | String | Modified date of the file in ISO 8601 format. | Small, 32.0 | 32.0 |
| motif | Motif | Motif of the file. | Small, 32.0 | 32.0 |
| name | String | Name of the file. | Small, 32.0 | 32.0 |
| previewUrl​Thumbnail | String | URL to the thumbnail (240 x 180 PNG) preview. | Small, 36.0 | 36.0 |
| previewUrl​ThumbnailBig | String | URL to the big thumbnail (720 x 480 PNG) preview. | Small, 36.0 | 36.0 |
| previewUrl​ThumbnailTiny | String | URL to the tiny thumbnail (120 x 90 PNG) preview. | Small, 36.0 | 36.0 |
| previewsUrl | String | URL to the previews. | Small, 36.0 | 36.0 |
| repository | Reference | File external repository. | Small, 32.0 | 32.0 |
| title | String | Title of the file. | Small, 32.0 | 32.0 |
| type | String | Record type, file. | Small, 32.0 | 32.0 |
| url | String | Connect REST API URL to the file. | Small, 32.0 | 32.0 |
| versionId | String | ID of the file version in the external system. | Small, 32.0 | 32.0 |

#### See Also

-   [Repository Folder Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_item.htm "Description of a folder item.")

## Related Topics

- External File Permission Information (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_external_file_permission_information.htm)
- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Repository Folder Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_item.htm)

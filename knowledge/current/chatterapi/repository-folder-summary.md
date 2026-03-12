---
title: "Repository Folder Summary"
domain: chatterapi
topic: repository-folder-summary
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:20.971Z
estimatedTokens: 399
keywords: [Repository, Folder, Summary]
---

# Repository Folder Summary

> Summary of a repository folder.

# Repository Folder Summary

Summary of a repository folder.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdBy | String | Name of user who created the folder. | Small, 32.0 | 32.0 |
| createdDate | String | Created date of the folder in ISO 8601 format. | Small, 32.0 | 32.0 |
| description | String | Folder description. | Small, 32.0 | 32.0 |
| externalFolderUrl | String | Connect REST API URL to this folder in the external system. | Small, 32.0 | 32.0 |
| folderItemsUrl | String | Connect REST API URL that lists the files and folders in this folder. | Small, 32.0 | 32.0 |
| id | String | ID of the folder. | Small, 32.0 | 32.0 |
| itemTypeUrl | String | URL to the item type information. | Small, 35.0 | 35.0 |
| modifiedBy | String | Name of user who last modified the folder. | Small, 32.0 | 32.0 |
| modifiedDate | String | Last modified date of the folder in ISO 8601 format. | Small, 32.0 | 32.0 |
| motif | Motif | Motif of the folder. | Small, 32.0 | 32.0 |
| name | String | Name of the folder. | Small, 32.0 | 32.0 |
| path | String | The absolute path of the folder in the external system. | Small, 32.0 | 32.0 |
| repository | Reference | The folder external repository. | Small, 32.0 | 32.0 |
| type | String | Record type, folder. | Small, 32.0 | 32.0 |
| url | String | Connect REST API URL to this folder. | Small, 32.0 | 32.0 |

#### See Also

-   [Repository Folder Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_item.htm "Description of a folder item.")

## Related Topics

- Motif (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_motif.htm)
- Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_reference.htm)
- Repository Folder Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_item.htm)

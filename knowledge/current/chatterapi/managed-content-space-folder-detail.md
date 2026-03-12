---
title: "Managed Content Space Folder Detail"
domain: chatterapi
topic: managed-content-space-folder-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.587Z
estimatedTokens: 409
keywords: [Managed, Content, Space, Folder, Detail]
---

# Managed Content Space Folder Detail

> Managed content space folder.

# Managed Content Space Folder Detail

Managed content space folder.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| createdBy | String | ID of the user who created the managed content folder. | Small, 53.0 | 53.0 |
| createdDate | String | Date when the managed content folder was created. | Small, 53.0 | 53.0 |
| folderHierarchy | Managed Content Space Folder[] | List of parent folders in the hierarchy, starting from the root up to the direct parent of the managed content folder. | Small, 53.0 | 53.0 |
| folderType | String | Type of folder. Values are:SharedWithSpace—Special folder to view the folders or workspaces that are shared with a workspace.Standard—Folder created by a user.System—Internal folder, such as the root folder. | Small, 61.0 | 61.0 |
| id | String | ID of the managed content space folder. | Small, 53.0 | 53.0 |
| isShared | Boolean | Specifies whether the folder is shared with another workspace (true) or not (false). | Small, 61.0 | 61.0 |
| lastModifiedBy | String | ID of the user who most recently modified the managed content folder. | Small, 53.0 | 53.0 |
| lastModifiedDate | String | Date when the managed content folder was most recently modified. | Small, 53.0 | 53.0 |
| name | String | Name of the managed content space folder. | Small, 53.0 | 53.0 |
| parentFolderId | String | ID of the parent folder of the managed content space folder. | Small, 53.0 | 53.0 |

#### See Also

-   [CMS Folder](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_cms_folder.htm "Get a managed content folder.")

## Related Topics

- Managed Content Space Folder (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_managed_content_space_folder.htm)
- CMS Folder (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_managed_content_cms_folder.htm)

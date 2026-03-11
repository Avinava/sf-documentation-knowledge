---
title: "ConnectApi.RepositoryFolderItem"
domain: apex-reference
topic: connectapirepositoryfolderitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.935Z
keywords: [ConnectApi.RepositoryFolderItem, See]
---

# ConnectApi.RepositoryFolderItem

# ConnectApi.RepositoryFolderItem

A folder item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| file | ConnectApi.​Repository​FileSummary | If the folder item is a file, the file summary. If the folder item is a folder, null. | 39.0 |
| folder | ConnectApi.​Repository​FolderSummary | If the folder item is a folder, the folder summary. If the folder item is a file, null. | 39.0 |
| type | ConnectApi.​FolderItemType | Type of item in a folder. Values are:filefolder | 39.0 |

#### See Also

-   [ConnectApi.RepositoryFolderItemsCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm "A collection of repository folder items.")
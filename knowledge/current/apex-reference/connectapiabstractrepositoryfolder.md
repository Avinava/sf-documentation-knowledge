---
title: "ConnectApi.AbstractRepositoryFolder"
domain: apex-reference
topic: connectapiabstractrepositoryfolder
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:25.918Z
estimatedTokens: 234
keywords: [ConnectApi.AbstractRepositoryFolder, repository, folder.]
---

# ConnectApi.AbstractRepositoryFolder

> A repository folder.

# ConnectApi.AbstractRepositoryFolder

A repository folder.

This class is abstract.

Subclass of [ConnectApi.AbstractRepositoryItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_item.htm "A repository item.").

Superclass of:

-   [ConnectApi.RepositoryFolderDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm "A detailed description of a repository folder.")
-   [ConnectApi.RepositoryFolderSummary](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_summary.htm "A summary of a repository folder.")

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| externalFolderUrl | String | URL of this folder in the external system. | 39.0 |
| folderItemsUrl | String | URL that lists the files and folders in this folder. | 39.0 |
| path | String | Absolute path of the folder in the external system. | 39.0 |

## Related Topics

- ConnectApi.AbstractRepositoryItem (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_abstract_repository_item.htm)
- ConnectApi.RepositoryFolderDetail (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm)
- ConnectApi.RepositoryFolderSummary (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_summary.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)

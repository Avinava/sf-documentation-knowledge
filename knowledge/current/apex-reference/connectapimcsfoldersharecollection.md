---
title: "ConnectApi.MCSFolderShareCollection"
domain: apex-reference
topic: connectapimcsfoldersharecollection
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:27.688Z
estimatedTokens: 233
keywords: [ConnectApi.MCSFolderShareCollection, Collection, targets, managed, content, space, folder, shared, with.]
---

# ConnectApi.MCSFolderShareCollection

> Collection of targets that a managed content space folder is shared with.

# ConnectApi.MCSFolderShareCollection

Collection of targets that a managed content space folder is shared with.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| folderId | String | ID of the managed content space folder. | 63.0 |
| shares | List<ConnectApi.​MCSFolder​Share> | List of targets that a managed content space folder is shared with. | 63.0 |

#### See Also

-   [patchMCSFolderShares(folderId, mcsFolderShareCollectionUpdateInput)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_patchMCSFolderShares_2 "Update the targets that a managed content space folder is shared with.")

-   [getMCSFolderShares(folderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getMCSFolderShares_1 "Get targets that a managed content space folder is shared with.")

## Related Topics

- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​MCSFolder​Share (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share.htm)
- patchMCSFolderShares(folderId, mcsFolderShareCollectionUpdateInput) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- getMCSFolderShares(folderId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)

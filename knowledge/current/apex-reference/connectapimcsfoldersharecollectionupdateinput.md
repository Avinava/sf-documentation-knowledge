---
title: "ConnectApi.MCSFolderShareCollectionUpdateInput"
domain: apex-reference
topic: connectapimcsfoldersharecollectionupdateinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:25.066Z
estimatedTokens: 244
keywords: [ConnectApi.MCSFolderShareCollectionUpdateInput, Update, targets, managed, content, space, folder, shared, with.]
---

# ConnectApi.MCSFolderShareCollectionUpdateInput

> Update the targets that a managed content space folder is shared with.

# ConnectApi.MCSFolderShareCollectionUpdateInput

Update the targets that a managed content space folder is shared with.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| shareWith | List<ConnectApi.​MCSFolder​ShareInput> | List of target IDs to share the managed content space folder with.Supported target IDs are the root folder IDs of workspaces. To get the root folder ID for a space, use the getManagedContentSpace(contentSpaceId) method. | Required if unshareWith isn’t specified | 63.0 |
| unshareWith | List<String> | Comma-separated list of target IDs to unshare the managed content space folder with. | Required if shareWith isn’t specified | 63.0 |

#### See Also

-   [getMCSFolderShares(folderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm#apex_ConnectAPI_ManagedContent_getMCSFolderShares_1 "Get targets that a managed content space folder is shared with.")

## Related Topics

- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​MCSFolder​ShareInput (atlas.en-us.apexref.meta/apexref/apex_connectapi_input_m_c_s_folder_share.htm)
- getManagedContentSpace(contentSpaceId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- getMCSFolderShares(folderId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ManagedContent_static_methods.htm)

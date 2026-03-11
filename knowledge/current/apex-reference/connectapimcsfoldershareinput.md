---
title: "ConnectApi.MCSFolderShareInput"
domain: apex-reference
topic: connectapimcsfoldershareinput
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:37.259Z
keywords: [ConnectApi.MCSFolderShareInput, See]
---

# ConnectApi.MCSFolderShareInput

# ConnectApi.MCSFolderShareInput

Target to share a managed content space folder with.

| Property | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targetId | String | ID of the target to share the managed content space folder with.Supported target IDs are the root folder IDs of workspaces. To get the root folder ID for a space, use the getManagedContentSpace(contentSpaceId) method. | Optional | 63.0 |

#### See Also

-   [ConnectApi.MCSFolderShareCollectionUpdateInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_m_c_s_folder_share_collection_update.htm "Update the targets that a managed content space folder is shared with.")
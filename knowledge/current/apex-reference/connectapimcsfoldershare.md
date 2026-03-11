---
title: "ConnectApi.MCSFolderShare"
domain: apex-reference
topic: connectapimcsfoldershare
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:42:39.064Z
keywords: [ConnectApi.MCSFolderShare, See]
---

# ConnectApi.MCSFolderShare

# ConnectApi.MCSFolderShare

Target that a managed content space folder is shared with.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| canUserUnshare | Boolean | Specifies whether the user has permission to unshare with the target space (true) or not (false). Content Manager or higher role in the target workspace has permission to unshare. | 63.0 |
| shareStatus | ConnectApi.​MCSFolderShare​Status | Status of sharing a managed content space folder. Values are:PendingSharePendingUnshareShared | 63.0 |
| targetId | String | ID of the share target. | 63.0 |
| targetLabel | String | Label of the share target. | 63.0 |

#### See Also

-   [ConnectApi.MCSFolderShareCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_m_c_s_folder_share_collection.htm "Collection of targets that a managed content space folder is shared with.")
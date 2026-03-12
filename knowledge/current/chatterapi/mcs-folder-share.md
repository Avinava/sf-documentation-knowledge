---
title: "MCS Folder Share"
domain: chatterapi
topic: mcs-folder-share
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.367Z
estimatedTokens: 234
keywords: [MCS, Folder, Share, Target, managed, content, space, shared]
---

# MCS Folder Share

> Target that a managed content space folder is shared with.

# MCS Folder Share

Target that a managed content space folder is shared with.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| canUserUnshare | Boolean | Specifies whether the user has permission to unshare with the target space (true) or not (false). Content Manager or higher role in the target workspace has permission to unshare. | Small, 63.0 | 63.0 |
| shareStatus | String | Status of sharing a managed content space folder. Values are:PendingSharePendingUnshareShared | Small, 63.0 | 63.0 |
| targetId | String | ID of the share target. | Small, 63.0 | 63.0 |
| targetLabel | String | Label of the share target. | Small, 63.0 | 63.0 |

#### See Also

-   [MCS Folder Share Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_m_c_s_folder_share_collection.htm "Collection of targets that a managed content space folder is shared with.")

## Related Topics

- MCS Folder Share Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_m_c_s_folder_share_collection.htm)

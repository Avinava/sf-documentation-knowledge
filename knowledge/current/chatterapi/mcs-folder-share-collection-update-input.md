---
title: "MCS Folder Share Collection Update Input"
domain: chatterapi
topic: mcs-folder-share-collection-update-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.991Z
estimatedTokens: 242
keywords: [MCS, Folder, Share, Collection, Input, targets, managed, content, space, shared]
---

# MCS Folder Share Collection Update Input

> Update the targets that a managed content space folder is shared with.

# MCS Folder Share Collection Update Input

Update the targets that a managed content space folder is shared with.

Root XML tag

<mcsFolderShareCollectionUpdateInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| shareWith | MCS Folder Share Input[] | List of target IDs to share the managed content space folder with.Supported target IDs are the root folder IDs of workspaces. To get the root folder ID of a space, use the CMS Space resource. | Required if unshareWith isn’t specified | 63.0 |
| unshareWith | String[] | Comma-separated list of target IDs to unshare the managed content space folder with. | Required if shareWith isn’t specified | 63.0 |

#### See Also

-   [CMS Folder Shares](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_folder_shares.htm "Get or update the targets that a managed content space folder is shared with.")

## Code Examples

```
{
"shareWith" : [
    {
    "targetId" : "0Zu000000000001"
    },
    {
    "targetId" : "0Zu000000000002"
    }
    ],
"unshareWith" : ["0Zu000000000003", "0Zu000000000004"]
}
```

## Related Topics

- MCS Folder
                        Share Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_m_c_s_folder_share_input.htm)
- CMS Space (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_space.htm)
- CMS Folder Shares (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_folder_shares.htm)

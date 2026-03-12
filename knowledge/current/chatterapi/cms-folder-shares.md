---
title: "CMS Folder Shares"
domain: chatterapi
topic: cms-folder-shares
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:13.841Z
estimatedTokens: 348
keywords: [CMS, Folder, Shares, targets, managed, content, space, shared]
---

# CMS Folder Shares

> Get or update the targets that a managed content space folder is shared
    with.

# CMS Folder Shares

Get or update the targets that a managed content space folder is shared with.

Workspaces are the only supported sharing targets. To get targets that a managed content space folder can be shared with, use [CMS Folder Share Targets](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_folder_share_targets.htm "Get targets that a managed content space folder can be shared with.").

Resource

```

```

Available version

63.0

HTTP methods

GET, PATCH

Request body for PATCH

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

Response body for GET and PATCH

[MCS Folder Share Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_m_c_s_folder_share_collection.htm "Collection of targets that a managed content space folder is shared with.")

## Code Examples

```
/connect/cms/folders/folderId/shares
```

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

- CMS Folder Share
          Targets (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_folder_share_targets.htm)
- MCS Folder
                        Share Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_m_c_s_folder_share_input.htm)
- CMS Space (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_space.htm)
- MCS Folder Share Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_m_c_s_folder_share_collection.htm)

---
title: "MCS Folder Share Input"
domain: chatterapi
topic: mcs-folder-share-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.994Z
estimatedTokens: 186
keywords: [MCS, Folder, Share, Input, Target, managed, content, space]
---

# MCS Folder Share Input

> Target to share a managed content space folder with.

# MCS Folder Share Input

Target to share a managed content space folder with.

Root XML tag

<mcsFolderShareInputRepresentation>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| targetId | String | ID of the target to share the managed content space folder with.Supported target IDs are the root folder IDs of workspaces. To get the root folder ID of a space, use the CMS Space resource. | Required | 63.0 |

#### See Also

-   [MCS Folder Share Collection Update Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_m_c_s_folder_share_collection_update_input.htm "Update the targets that a managed content space folder is shared with.")

## Code Examples

```
{
"targetId" : "0Zu000000000001"
}
```

## Related Topics

- CMS Space (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_cms_space.htm)
- MCS Folder Share Collection Update Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_m_c_s_folder_share_collection_update_input.htm)

---
title: "Files Connect Permission Input"
domain: chatterapi
topic: files-connect-permission-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:21.142Z
estimatedTokens: 153
keywords: [Files, Connect, Permission, Input]
---

# Files Connect Permission Input

> A permission.

# Files Connect Permission Input

A permission.

Root XML tag

<contentHubPermission>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| directory​EntryId | String | ID of the user or group. | Required | 35.0 |
| permission​TypesIds | String[] | List of IDs of the permission types. | Required | 35.0 |

#### See Also

-   [Files Connect Permission Collection Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_permission_collection_input.htm "A collection of permissions to apply or remove.")

## Code Examples

```
{
"directoryEntryId" : "AnyoneInMyDomain",
"permissionTypesIds" : ["CanView","CanEdit"]
}
```

## Related Topics

- Files Connect Permission Collection Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_permission_collection_input.htm)

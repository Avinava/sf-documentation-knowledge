---
title: "Files Connect Permission Collection Input"
domain: chatterapi
topic: files-connect-permission-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.410Z
estimatedTokens: 150
keywords: [Files, Connect, Permission, Collection, Input, permissions, apply, remove]
---

# Files Connect Permission Collection Input

> A collection of permissions to apply or remove.

# Files Connect Permission Collection Input

A collection of permissions to apply or remove.

Root XML tag

<contentHubPermissions>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| permissions​ToApply | Files Connect Permission Input[] | List of permissions to apply to the file. | Required if permissions​ToRemove isn’t specified | 35.0 |
| permissions​ToRemove | Files Connect Permission Input[] | List of permissions to remove from the file. | Required if permissions​ToApply isn’t specified | 35.0 |

## Code Examples

```
{
"permissionsToApply": [
   {
      "directoryEntryId" : "Anyone",
      "permissionTypesIds" : ["CanView"]
   }
   ],
"permissionsToRemove": [
   {
      "directoryEntryId" : "AnyoneInMyDomain",
      "permissionTypesIds" : ["CanDelete","CanEdit"]
   }
   ]
}
```

## Related Topics

- Files Connect Permission Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_permission_input.htm)

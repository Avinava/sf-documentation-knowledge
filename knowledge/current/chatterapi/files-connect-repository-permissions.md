---
title: "Files Connect Repository Permissions"
domain: chatterapi
topic: files-connect-repository-permissions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.769Z
estimatedTokens: 311
keywords: [Files, Connect, Repository, Permissions, file]
---

# Files Connect Repository Permissions

> Get or update the permissions of a repository file.

# Files Connect Repository Permissions

Get or update the permissions of a repository file.

Managing external file permissions is supported for Google Drive, SharePoint Online, and OneDrive for Business.

Resource

```

```

```

```

The repositoryItemId must be a file ID.

Available version

35.0

HTTP methods

GET, HEAD, PATCH

Response body for GET

[Files Connect Permission Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_permission_collection.htm "A collection of permissions.")

Request body for PATCH

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

Response body for PATCH

[Files Connect Permission Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_permission_collection.htm "A collection of permissions.")

## Code Examples

```
/connect/content-hub/repositories/repositoryId/items/repositoryItemId/permissions
```

```
/connect/communities/communityId/content-hub/repositories/repositoryId/items/repositoryItemId/permissions
```

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

- Files Connect Permission Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_permission_collection.htm)
- Files Connect Permission Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_permission_input.htm)

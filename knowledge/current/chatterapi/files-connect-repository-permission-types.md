---
title: "Files Connect Repository Permission Types"
domain: chatterapi
topic: files-connect-repository-permission-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.765Z
estimatedTokens: 132
keywords: [Files, Connect, Repository, Permission, file]
---

# Files Connect Repository Permission Types

> Get the permission types of a repository file.

# Files Connect Repository Permission Types

Get the permission types of a repository file.

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

GET, HEAD

Response body for GET

[Repository Permission Type Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_permission_type_collection.htm "A collection of permission types.")

## Code Examples

```
/connect/content-hub/repositories/repositoryId/items/repositoryItemId/permissions/types
```

```
/connect/communities/communityId/content-hub/repositories/repositoryId/items/repositoryItemId/permissions/types
```

## Related Topics

- Repository Permission Type Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_permission_type_collection.htm)

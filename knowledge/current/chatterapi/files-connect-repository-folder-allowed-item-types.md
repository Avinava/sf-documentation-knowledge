---
title: "Files Connect Repository Folder Allowed Item Types"
domain: chatterapi
topic: files-connect-repository-folder-allowed-item-types
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.745Z
estimatedTokens: 292
keywords: [Files, Connect, Repository, Folder, Allowed, Item, created]
---

# Files Connect Repository Folder Allowed Item Types

> Returns item types that are allowed to be created in the repository
      folder.

# Files Connect Repository Folder Allowed Item Types

Returns item types that are allowed to be created in the repository folder.

To get information about a specific item type, make a GET request to [/connect/content-hub/repositories/repositoryId/item-types/repositoryItemTypeId](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_item_type.htm#connect_resources_content_hub_repository_item_type "Returns information about an item type associated with a repository.").

Resource

```

```

```

```

Available version

35.0

HTTP methods

GET, HEAD

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | Specifies the item types. Values are:Any—Includes files and folders.FilesOnly—Includes files only.FoldersOnly—Includes folders only.In version 35.0, specify FilesOnly. | Optional | 35.0 |

Response body for GET

[Files Connect Allowed Item Type Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_allowed_item_type_collection.htm "The item types allowed to be created in the repository folder.")

## Code Examples

```
/connect/content-hub/repositories/repositoryId/folders/repositoryFolderId/allowed-item-types
```

```
/connect/communities/communityId/content-hub/repositories/repositoryId/folders/repositoryFolderId/allowed-item-types
```

## Related Topics

- /connect/content-hub/repositories/repositoryId/item-types/repositoryItemTypeId (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_item_type.htm)
- Files Connect Allowed Item Type Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_content_hub_allowed_item_type_collection.htm)

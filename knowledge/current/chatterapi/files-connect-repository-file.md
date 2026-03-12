---
title: "Files Connect Repository File"
domain: chatterapi
topic: files-connect-repository-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.729Z
estimatedTokens: 413
keywords: [Files, Connect, Repository, File]
---

# Files Connect Repository File

> Get information about or update a Files Connect repository
    file.

# Files Connect Repository File

Get information about or update a Files Connect repository file.

Resource

```

```

```

```

Available version

32.0

The communities resource is available in version 35.0 and later.

HTTP methods

GET, HEAD, PATCH

PATCH is supported in version 35.0 and later.

Request parameters for GET

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| includeExternal​FilePermissions​Info | Boolean | Specifies whether to include permission information, such as whether the file is shared and what are the available permission types.Managing external file permissions is supported for Google Drive, SharePoint Online, and OneDrive for Business. | Optional | 36.0 |

Request body for PATCH

Root XML tag

<contentHubInputItem>

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| fields | Files Connect Field Value Input[] | List of fields for the item. | Required to create a SharePoint file in a repository because the file name is required; otherwise optional | 35.0 |
| itemTypeId | String | ID of the item type, such as L3NpdGVzL0FDRVRfRklMRUNPTk5FQ1RfSU5U:​5f33e0f4-b33c-4127-b9e4-dd5a73dd2f1b:​0c847e7c-d4a2-4136-bfda-c468fae2d087:0x0101.To get the itemTypeId, use the Files Connect Repository Folder Allowed Item Types resource. | Required to create a file in a repository | 35.0 |

Response body for GET and PATCH

[Repository File Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_file_detail.htm "Detailed description of a repository file.")

## Code Examples

```
/connect/content-hub/repositories/repositoryId/files/repositoryFileId
```

```
/connect/communities/communityId/content-hub/repositories/repositoryId/files/repositoryFileId
```

```
{
   "itemTypeId" : "L3NpdGVzL0FDRVRfRklMRUNPTk5FQ1RfSU5U:5f33e0f4-b33c-4127-b9e4-dd5a73dd2f1b:0c847e7c-d4a2-4136-bfda-c468fae2d087:0x0101",
   "fields" : [
   {
      "name" : "name",
      "value" : "Content Hub Simple Create Specs"
   },
   {
      "name" : "description",
      "value" : "Document explaining the various connect api endpoints required for simple create"
   }]
}
```

## Related Topics

- Files Connect Field Value Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_field_value_input.htm)
- Files Connect Repository Folder Allowed
                                       Item Types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_item_types.htm)
- Repository File Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_file_detail.htm)

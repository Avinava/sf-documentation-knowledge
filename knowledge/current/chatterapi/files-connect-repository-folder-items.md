---
title: "Files Connect Repository Folder Items"
domain: chatterapi
topic: files-connect-repository-folder-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:14.753Z
estimatedTokens: 780
keywords: [Files, Connect, Repository, Folder, Items, folders, file]
---

# Files Connect Repository Folder Items

> Get information about the files and folders in a repository folder.
      Create a file in a repository folder.

# Files Connect Repository Folder Items

Get information about the files and folders in a repository folder. Create a file in a repository folder.

To upload a file, send it in a multipart/form-data request. You can include metadata for the file in the multipart/form-data request as a JSON or XML request body. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Resource

```

```

```

```

Available version

32.0

The communities resource is available in version 35.0 and later.

HTTP methods

GET, HEAD, POST

POST is supported in version 35.0 and later.

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | Optional | 32.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are between 1 and 100. If you pass in null, the default is 25. | Optional | 32.0 |

Response body for GET

[Repository Folder Items Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_items_collection.htm "A collection of repository folder items.")

Request body for POST

Uploads to repositories are limited to 75 MB.

Before you create an item in a repository folder, check to see which item types you’re allowed to create. Make a GET request to [/connect/content-hub/repositories/repositoryId/folders/repositoryFolderId/allowed-item-types](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_item_types.htm#connect_resources_content_hub_repository_folder_item_types "Returns item types that are allowed to be created in the repository folder.").

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

Response body for POST

[Repository Folder Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_item.htm "Description of a folder item.")

Example POST request

This example creates a file and uploads it to an external repository. The example shows the body parts in a multipart/form-data request. The first body part is a Files Connect Item Input request body. The second is the content of the file. For more information, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

```

```

## Code Examples

```
/connect/communities/communityId/content-hub/repositories/repositoryId/folders/repositoryFolderId/items
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

```
POST /services/data/v66.0/connect/content-hub/repositories/0XCxx000000002CGAQ/
folders/folder:0Bz0nXuFg43SiflFNdFNIaUJrY2hQaHVIVHMxYVpHd2ZHeXphTW83TElzcE84RUJ2Q3Q4Rm8/items

Authorization: OAuth <SALESFORCE_ACCESS_TOKEN>
OZ7S29JEM_7Ctq1lst2dzoV.owisJc0KacUbDxyae
User-Agent: Jakarta Commons-HttpClient/3.0.1
Host: instance_name
Content-Length: 489
Content-Type: multipart/form-data; boundary=a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Accept: application/json

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Type: application/json
Content-Disposition: form-data; name="json"

{
   "itemTypeId" : "L3NpdGVzL0FDRVRfRklMRUNPTk5FQ1RfSU5U:5f33e0f4-b33c-4127-b9e4-dd5a73dd2f1b:0c847e7c-d4a2-4136-bfda-c468fae2d087:0x0101",
   "fields" : [
   {
      "name" : "name",
      "value" : "Items Sharepoint 012.png"
   },
   {
      "name" : "description",
      "value" : "This is a test file"
   }]
}

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="fileData"; filename="items_Sharepoint_012.png"
Content-Type: image/png

...PNG...

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq--
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Repository Folder Items Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_items_collection.htm)
- /connect/content-hub/repositories/repositoryId/folders/repositoryFolderId/allowed-item-types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_item_types.htm)
- Files Connect Field Value Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_content_hub_field_value_input.htm)
- Files Connect Repository Folder Allowed
                                       Item Types (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_content_hub_repository_folder_item_types.htm)
- Repository Folder Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_repository_folder_item.htm)

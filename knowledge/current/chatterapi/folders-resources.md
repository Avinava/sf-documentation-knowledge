---
title: "Folders Resources"
domain: chatterapi
topic: folders-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.427Z
estimatedTokens: 1602
keywords: [Folders, Resources, folder, contents, Modify, add, items]
---

# Folders Resources

> Get information about a folder or the contents of a folder. Modify,
         delete, and add items to folders.

# Folders Resources

Get information about a folder or the contents of a folder. Modify, delete, and add items to folders.

Available resources:

| Resource | Description |
| --- | --- |
| /connect/folders/folderId | Get information about the specified folder. Move, rename, and delete a folder. |
| /connect/folders/folderId/items | Get information about the contents of a folder. Add a file to a folder and create a folder. |
| /connect/folders/folderId/folder-shares/link | A folder shared as a link. Create, access, and delete a folder’s share link. |

## Folder Information

Get information about the specified folder. Move, rename, and delete a folder. Deleting a folder deletes all the folders within that folder and removes all files from the deleted folders.

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

You can use root as the folderId.

Available since version

36.0

In versions 30.0–35.0, use /chatter/folders/folderId, which requires Chatter.

HTTP methods

GET, HEAD, PATCH, DELETE

Request body for PATCH

[Folder Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_input.htm "Folder input.")

Request parameters for PATCH

**Move a folder**

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isInMy​FileSync | Boolean | true if the folder and all folders in this folder are synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Optional | 33.0 |
| parent​FolderId | String | The ID of the new parent folder. If null, the folder is removed from its current folder. If the specified ID is root, the folder is moved to the root of the user’s folder hierarchy. | Required | 30.0 |

**Rename a folder**

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| isInMy​FileSync | Boolean | true if the folder and all folders in this folder are synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Optional | 33.0 |
| name | String | The new name for the folder | Required | 30.0 |

Response body for GET and PATCH

[Folder](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder.htm "Description of a folder.")

## Folder Contents

Get information about the contents of a folder. Add a file to a folder and create a folder.

To create a folder, you can use a request body or request parameters in a POST request.

To create a file, you must send it as a body part in a multipart/form-data POST request. You can send the description and title information in a JSON or XML rich input body in a part of the multipart/form-data request. Alternately, you can send the description, title, and type in request parameters. See [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files). To upload a file to the Files home, use [/connect/files/users/me](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm "Upload a file, including references to external files, to the Files home or get information about files a user owns. These files don’t include files shared with a user, files a user follows, or general organization files.").

Resource

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

You can use root as the folderId.

Available since version

36.0

In versions 30.0–35.0, use /chatter/folders/folderId/items, which requires Chatter.

HTTP methods

GET and POST

Request parameters for GET

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | String | Specifies a filter for items within a folder. | Optional | 33.0 |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | Optional | 30.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | Optional | 30.0 |

Response body for GET

[Folder Item Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item_page.htm "A paged collection of Folder Item response bodies.")

Request body for POST

[Folder Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_item_input.htm "Folder item input.")

Request parameters for POST

**Add a file to a folder**

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| desc | String | The description of the file | Optional | 30.0 |
| isInMy​FileSync | Boolean | true if the folder and all folders in this folder are synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Optional | 33.0 |
| sharing​Option | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Optional | 35.0 |
| sharing​Privacy | String | Sharing privacy of a file. Values are:None—File is visible to anyone with record access.PrivateOnRecords—File is private on records. | Optional | 41.0 |
| title | String | The title of the file | Optional | 30.0 |
| type | String | The item type. To add a file to a folder, the value must be File. | Required | 30.0 |

**Create a folder**

| Parameter | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| folderPath | String | The path to the folder | Required | 30.0 |
| isInMy​FileSync | Boolean | true if the folder and all folders in this folder are synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Optional | 33.0 |
| type | String | The item type. To create a folder, the value must be Folder. | Required | 30.0 |

Response body for POST

[Folder Item](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item.htm "Description of an item (file or folder) in a folder.")

Example for adding a file to a folder

```

```

Example for creating a folder

```

```

-   **[Folders Shares Link](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_folders_share_link.htm)**
    A folder shared as a link. Create, access, and delete a folder’s share link.

## Code Examples

```
{
   "file" :
      {
         "description" : "Yearly Report for Universal Containers Box Division",
         "title" : "Yearly.txt"
      },
   "type" : "File"
}
```

```
{
   "folder" :
      {
         "path" : "my_documents/my_folder"
      },
   "type" : "Folder"
}
```

## Related Topics

- /connect/folders/folderId/folder-shares/link (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_folders_share_link.htm)
- Folder Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_input.htm)
- Folder (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder.htm)
- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /connect/files/users/me (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm)
- Folder Item Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item_page.htm)
- Folder Item
                     Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_item_input.htm)
- Folder Item (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_folder_item.htm)
- Folders Shares Link (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_folders_share_link.htm)

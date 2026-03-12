---
title: "File Information"
domain: chatterapi
topic: file-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.382Z
estimatedTokens: 1787
keywords: [File, including, references, external, files, Upload, new, version, Rename, move, different, folder]
---

# File Information

> Get information about a specified file, including
   references to external files. Upload a new version of an existing file, including references to
   external files. Rename a file, move a file to a different folder, and delete a
  file.

# File Information

Get information about a specified file, including references to external files. Upload a new version of an existing file, including references to external files. Rename a file, move a file to a different folder, and delete a file.

To upload a new version of an existing file, make a POST request. Upload the new version as a binary part in a multipart/form-data request. See [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files). To upload a new file to the Files home, use [/connect/files/users/me](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm "Upload a file, including references to external files, to the Files home or get information about files a user owns. These files don’t include files shared with a user, files a user follows, or general organization files.").

Resource

```

```

```

```

Available since version

36.0

In versions 24.0–35.0, use /chatter/files/fileId and /connect/communities/communityId/chatter/files/fileId, which require Chatter.

HTTP methods

GET, POST, PATCH, and DELETE

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=chatterapi)

#### Note

POST, PATCH, and DELETE available since version 26.0.

Request body for POST

Root XML tag

<fileInput>

JSON

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| content​BodyId | String | ID of the content body. | Optional | 62.0 |
| content​ModifiedDate | String | File-specific last modified date that can be used to set a client-side modified date. Specify the date in ISO 8601 format. | Optional | 32.0 |
| desc | String | Description of the file to be uploaded. | Optional | 24.0 |
| fieldName | String | Name of a custom field on the ContentVersion object. The API name of the customer field must end with fileupload__c. | Optional | 62.0 |
| fieldValue | String | Value to store for the custom field specified in fieldName for the uploaded file. | Optional | 62.0 |
| firstPublish​LocationId | String | ID of the location where the version was first published. | Optional | 62.0 |
| includeExternal​FilePermissions​Info | Boolean | Specifies whether to include permission information, such as whether the file is shared and what are the available permission types, for external files.This property can be used with POST requests to /connect/files/users/userId, but not with POST requests to /connect/files/fileId. | Optional | 35.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Optional | 31.0 |
| isMajorVersion | Boolean | true if the file is a major version; false if the file is a minor version. Major versions can’t be replaced. | Optional | 31.0 |
| networkId | String | ID of the Experience Cloud site where this file originated. | Optional | 62.0 |
| parentFolderId | String | ID of the containing folder. | Optional | 31.0 |
| pathOnClient | String | Complete path of the file. | Optional | 62.0 |
| repository​FileId | String | ID of the external file.This property can be used with POST requests to /connect/files/users/userId, but not with POST requests to /connect/files/fileId.If you specify repositoryFileId, don’t specify repositoryFileUri. | Optional | 32.0 |
| repository​FileUri | String | URI of the external file, such as https://drive.google.com/file/d/​0B7a_ei8brT1TMy1CQ0o5NmZQNEE/view.This property can be used with POST requests to /connect/files/users/userId, but not with POST requests to /connect/files/fileId.If you specifyrepositoryFileUri, don’t specify repositoryFileId. | Optional | 39.0 |
| repositoryId | String | ID of the external data source.This property can be used with POST requests to /connect/files/users/userId, but not with POST requests to /connect/files/fileId. | Required if repositoryFileId is specified. Otherwise, Optional. | 32.0 |
| reuseReference | Boolean | Specifies whether to reuse the latest version of a reference you own to an external file rather than creating a duplicate reference.This property can be used with POST requests to /connect/files/users/userId, but not with POST requests to /connect/files/fileId. | Optional | 36.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Optional | 35.0 |
| sharingPrivacy | String | Sharing privacy of a file. Values are:None—File is visible to anyone with record access.PrivateOnRecords—File is private on records. | Optional | 41.0 |
| title | String | Title of the file. | Optional | 24.0 |

Request parameters for POST

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| desc | String | Description of the file to be uploaded. | 26.0 |
| isDataSync | Boolean | Indicates whether an automated client generates the request. | 31.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | 31.0 |
| isMajorVersion | Boolean | true if the file is a major version; false if the file is a minor version. Major versions can’t be replaced. | 31.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | 35.0 |
| sharingPrivacy | String | Sharing privacy of a file. Values are:None—File is visible to anyone with record access.PrivateOnRecords—File is private on records. | 41.0 |
| title | String | Title of the file. | 26.0 |

Request parameters for GET

Get information about the specified file.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| versionNumber | Integer | Specify an existing version number for the file. If not specified, the latest version is returned. | 23.0 |

Request parameters for PATCH

Update the title of a file or move a file to a different folder.

| Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| desc | String | A new description for the file | 32.0 |
| title | String | A new title for the file | 26.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | 31.0 |
| parentFolderId | String | ID of the containing folder | 31.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | 35.0 |
| sharingPrivacy | String | Sharing privacy of a file. Values are:None—File is visible to anyone with record access.PrivateOnRecords—File is private on records. | 41.0 |

Response body for GET, POST, and PATCH

[File Detail](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_details.htm "Includes all the File Summary response body with these additional items.")

Response body for DELETE

Returns a status code of 204.

Example

This PATCH request updates the title of a file:

```

```

## Code Examples

```
/connect/communities/communityId/files/fileId
```

```
{
     "desc" : "Employee Survey Results",
     "title" : "emp_surv_results"
}
```

```
/connect/files/069D00000001FHF?title=A+New+Title
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- /connect/files/users/me (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_users_files_general.htm)
- File Detail (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file_details.htm)

---
title: "Users Files, General"
domain: chatterapi
topic: users-files-general
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:16.947Z
estimatedTokens: 2192
keywords: [Users, Files, General, Upload, file, including, references, external, home, user, owns, don’t, include, shared, follows]
---

# Users Files, General

> Upload a file, including references to external files,
         to the Files home or get information about files a user owns. These files don’t
         include files shared with a user, files a user follows, or general organization
      files.

# Users Files, General

Upload a file, including references to external files, to the Files home or get information about files a user owns. These files don’t include files shared with a user, files a user follows, or general organization files.

When you upload a file to the Files home, it is private and available only to the file owner.

To upload a file, send it in a multipart/form-data request. You can include the description and title of the file in the multipart/form-data request as a JSON or XML request body. You can also send the information as request parameters. For information about how to create the multipart/form-data message, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

To upload multiple files in the same call, see [Batch Resource](atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm "Create a request body with a batch of up to 25 subrequests and send them to the server in a single request to improve your application’s performance. The response bodies and HTTP statuses for each subrequest in the batch are returned within a single response body. Each subrequest counts against rate limits.").

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=chatterapi)

#### Important

This resource can return a large amount of data and, when it does, takes some time to process.

Resource

```

```

```

```

Available since version

36.0

In versions 24.0–35.0, use /chatter/users/userId/files and /connect/communities/communityId/chatter/users/userId/files, which require Chatter.

HTTP methods

GET, POST, or HEAD

POST is available to guest users in version 62.0 and later.

Request body for POST

To upload a file, provide the binary file in a multipart/form-data body part where name="fileData". See [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

Root XML tag

<fileInput>

JSON example for creating a file

```

```

JSON example for creating a reference to an external file

```

```

JSON example for a guest user creating a file

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

| Name | Type | Description | Required or Optional | Available version |
| --- | --- | --- | --- | --- |
| content​ModifiedDate | String | File-specific last modified date that can be used to set a client-side modified date. Specify the date in ISO 8601 format. | Optional | 32.0 |
| desc | String | Description of the file | Optional | 24.0 |
| includeExternal​FilePermissions​Info | Boolean | Specifies whether to include permission information, such as whether the file is shared and what are the available permission types, for external files. | Optional | 35.0 |
| isDataSync | Boolean | An automated client generates the request. | Optional | 31.0 |
| isInMyFileSync | Boolean | true if the file is synced with Salesforce Files Sync; false otherwise.NoteSalesforce Files Sync was retired on May 25, 2018. | Optional | 31.0 |
| isMajorVersion | Boolean | true if the file is a major version; false if the file is a minor version. Major versions can’t be replaced. The default value is false. | Optional | 31.0 |
| repository​FileId | String | ID of the external file. | Optional | 32.0 |
| repository​FileUri | String | URI of the external file, such as https://drive.google.com/file/d/​0B7a_ei8brT1TMy1CQ0o5NmZQNEE/view. | Optional | 39.0 |
| repositoryId | String | ID of the external data source. | Required if repositoryFileId is specified. Otherwise, Optional. | 32.0 |
| reuseReference | Boolean | Specifies whether to reuse the latest version of a reference you own to an external file rather than creating a duplicate reference. | Optional | 36.0 |
| sharingOption | String | Sharing option of the file. Values are:Allowed—Resharing of the file is allowed.Restricted—Resharing of the file is restricted. | Optional | 35.0 |
| sharingPrivacy | String | Sharing privacy of a file. Values are:None—File is visible to anyone with record access.PrivateOnRecords—File is private on records. | Optional | 41.0 |
| title | String | Title of the file | Optional | 24.0 |

Request parameters for GET

| Parameter Name | Type | Description | Available Since |
| --- | --- | --- | --- |
| page | Integer | An integer specifying a page of items. The default value is 0, which returns the first page. | 24.0 |
| pageSize | Integer | Specifies the number of items per page. Valid values are from 1 through 100. If you don't specify a size, the default is 25. | 24.0 |
| q | String | A query string to filter the results. The string must contain at least two characters, not including wildcards. For information about wildcards, see Wildcards. | 27.0 |

Response body for GET

[File Summary Page](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_files_page.htm "File summary page.")

Response body for POST

[File Summary](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm "Description of a file.")

Example POST request

This example creates a file and uploads it to Salesforce. The example shows the body parts in a multipart/form-data request. The first body part is a File Input request body. The second is the content of the file. For more information, see [Uploading Binary Files](atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm#cc_upload_binary_files).

```

```

## Code Examples

```
/connect/communities/communityId/files/users/userId
```

```
{ 
   "desc":"Employee Survey Results",
   "title":"emp_surv_results"
}
```

```
{ 
   "repositoryId":"0XCB00000004CHJ",
   "repositoryFileId":"document:1AnPHWYq_j56yryuRbxiVp93rD2qGqNWx7yZHvidxDpQ"
}
```

```
{
   "contentBodyId": "05Txx0000004CH6EAM",
   "title": "Screenshot 2024-06-17 at 6.24.49 PM",
   "networkId": "0DBxx0000004CH6GAM",
   “pathOnClient”: ”Screenshot 2024-06-17 at 6.24.49 PM.png”,
   "firstPublishLocationId": null,
   "fieldName": "Guest_Record_Main_fileupload__c",
   "fieldValue": "Version1"
}
```

```
POST /services/data/v66.0/connect/files/users/me

Authorization: OAuth <SALESFORCE_ACCESS_TOKEN>
OZ7S29JEM_7Ctq1lst2dzoV.owisJc0KacUbDxyae
User-Agent: Jakarta Commons-HttpClient/3.0.1
Host: instance_name
Content-Length: 489
Content-Type: multipart/form-data; boundary=a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Accept: application/json

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Type: application/json; charset=UTF-8
Content-Disposition: form-data; name="json"

{
   "title":"BoatPrices"
}

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq
Content-Disposition: form-data; name="fileData"; filename="BoatPrices.txt"
Content-Type: application/octet-stream; charset=ISO-8859-1

...contents of BoatPrices.txt...

--a7V4kRcFA8E79pivMuV2tukQ85cmNKeoEgJgq--
```

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Batch Resource (atlas.en-us.chatterapi.meta/chatterapi/connect_resources_batch.htm)
- Wildcards (atlas.en-us.chatterapi.meta/chatterapi/intro_wildcards.htm)
- File Summary
                  Page (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_files_page.htm)
- File Summary (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_file.htm)

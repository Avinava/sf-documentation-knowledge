---
title: "File Input"
domain: chatterapi
topic: file-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:11.716Z
estimatedTokens: 991
keywords: [File, Input, new]
---

# File Input

> A new file.

# File Input

A new file.

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

#### See Also

-   [Folder Item Input](atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_item_input.htm "Folder item input.")

## Code Examples

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

## Related Topics

- Uploading Binary Files (atlas.en-us.chatterapi.meta/chatterapi/intro_input.htm)
- Folder Item Input (atlas.en-us.chatterapi.meta/chatterapi/connect_requests_folder_item_input.htm)

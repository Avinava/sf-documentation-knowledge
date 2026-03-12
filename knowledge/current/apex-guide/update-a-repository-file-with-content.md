---
title: "Update a Repository File with Content"
domain: apex-guide
topic: update-a-repository-file-with-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.452Z
estimatedTokens: 328
keywords: [Update, Repository, File, Content, Call, update, repository, file, content.]
---

# Update a Repository File with Content

> Call a method to update a repository file with content.

# Update a Repository File with Content

Call a method to update a repository file with content.

Call [updateRepositoryFile(repositoryId, repositoryFileId, file, fileData)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_8) to update the content and metadata of a file in a repository. After the file is updated, we show the file’s ID, name, description, external URL, and download URL.

```

```

#### See Also

-   [*Apex Reference Guide*: ConnectApi.ContentHubItemInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm "Apex Reference Guide:
    ConnectApi.ContentHubItemInput - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.ContentHubFieldValueInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_content_hub_field_value.htm "Apex Reference Guide:
    ConnectApi.ContentHubFieldValueInput - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.BinaryInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_binary.htm "Apex Reference Guide: ConnectApi.BinaryInput - HTML (New Window)")

## Code Examples

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs', gDriveFileId = 'document:1q9OatVpcyYBK-JWzp_PhR75ulQghwFP15zhkamKrRcQ';

final ConnectApi.ContentHubItemInput updatedItem = new ConnectApi.ContentHubItemInput();
updatedItem.itemTypeId = 'document'; //see getAllowedTypes for any file item types available for creation/update
updatedItem.fields = new List<ConnectApi.ContentHubFieldValueInput>();

//Metadata: name field
final ConnectApi.ContentHubFieldValueInput fieldValueInputName = new ConnectApi.ContentHubFieldValueInput();
fieldValueInputName.name = 'name';
fieldValueInputName.value =  'updated file name.txt';
updatedItem.fields.add(fieldValueInputName);

//Binary content
final Blob updatedFileBlob = Blob.valueOf('even more awesome content for updated file');
final String updatedFileMimeType = 'text/plain';
final ConnectApi.BinaryInput fileBinaryInput = new ConnectApi.BinaryInput(updatedFileBlob, updatedFileMimeType, updatedFileName);

final ConnectApi.RepositoryFileDetail updatedFile = ConnectApi.ContentHub.updateRepositoryFile(gDriveRepositoryId, gDriveFileId, updatedItem);
System.debug(String.format('Updated file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\',
 external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'',  new String[]{ updatedFile.id, updatedFile.name, updatedFile.description, updatedFile.externalDocumentUrl, updatedFile.downloadUrl}));
```

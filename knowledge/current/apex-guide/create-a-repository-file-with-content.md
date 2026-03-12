---
title: "Create a Repository File with Content"
domain: apex-guide
topic: create-a-repository-file-with-content
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.285Z
estimatedTokens: 338
keywords: [Repository, File, Content, Call, binary, Google, Drive, folder]
---

# Create a Repository File with Content

> Call a method to create a file with binary content in a Google Drive repository
    folder.

# Create a Repository File with Content

Call a method to create a file with binary content in a Google Drive repository folder.

Call [addRepositoryItem(repositoryId, repositoryFolderId, file, filedata)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_7) to create a file with binary content in a Google Drive repository folder. After the file is created, we show the file’s ID, name, description, external URL, and download URL.

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
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';

final ConnectApi.ContentHubItemInput newItem = new ConnectApi.ContentHubItemInput();
newItem.itemTypeId = 'document'; //see getAllowedTypes for any file item types available for creation/update
newItem.fields = new List<ConnectApi.ContentHubFieldValueInput>();

//Metadata: name field
Final String newFileName = 'new folder item name.txt';
final ConnectApi.ContentHubFieldValueInput fieldValueInput = new ConnectApi.ContentHubFieldValueInput();
fieldValueInput.name = 'name';
fieldValueInput.value = newFileName;
newItem.fields.add(fieldValueInput);

//Metadata: description field
final ConnectApi.ContentHubFieldValueInput fieldValueInputDesc = new ConnectApi.ContentHubFieldValueInput();
fieldValueInputDesc.name = 'description';
fieldValueInputDesc.value = 'It does describe it';
newItem.fields.add(fieldValueInputDesc);

//Binary content
final Blob newFileBlob = Blob.valueOf('awesome content for brand new file');
final String newFileMimeType = 'text/plain';
final ConnectApi.BinaryInput fileBinaryInput = new ConnectApi.BinaryInput(newFileBlob, newFileMimeType, newFileName);

final ConnectApi.RepositoryFolderItem newFolderItem = ConnectApi.ContentHub.addRepositoryItem(gDriveRepositoryId, gDriveFolderId, newItem, fileBinaryInput);
final ConnectApi.RepositoryFileSummary newFile = newFolderItem.file;
System.debug(String.format('New file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\' 
 external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'', new String[]{ newFile.id, newFile.name, newFile.description, newFile.externalDocumentUrl, newFile.downloadUrl}));
```

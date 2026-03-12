---
title: "Create a Repository File Without Content (Metadata Only)"
domain: apex-guide
topic: create-a-repository-file-without-content-metadata-only
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.288Z
estimatedTokens: 292
keywords: [Repository, File, Content, Metadata, Call, binary, Google, Drive, folder]
---

# Create a Repository File Without Content (Metadata Only)

> Call a method to create a file without binary content (metadata only) in a Google Drive
    repository folder.

# Create a Repository File Without Content (Metadata Only)

Call a method to create a file without binary content (metadata only) in a Google Drive repository folder.

Call [addRepositoryItem(repositoryId, repositoryFolderId, file)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_5) to create a file without binary content (metadata only) in a Google Drive repository folder. After the file is created, we show the file’s ID, name, description, external URL, and download URL.

```

```

#### See Also

-   [*Apex Reference Guide*: ConnectApi.ContentHubItemInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm "Apex Reference Guide:
    ConnectApi.ContentHubItemInput - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.ContentHubFieldValueInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_content_hub_field_value.htm "Apex Reference Guide:
    ConnectApi.ContentHubFieldValueInput - HTML (New Window)")

## Code Examples

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';

final ConnectApi.ContentHubItemInput newItem = new ConnectApi.ContentHubItemInput();
newItem.itemTypeId = 'document'; //see getAllowedTypes for any file item types available for creation/update
newItem.fields = new List<ConnectApi.ContentHubFieldValueInput>();

//Metadata: name field
final ConnectApi.ContentHubFieldValueInput fieldValueInput = new ConnectApi.ContentHubFieldValueInput();
fieldValueInput.name = 'name';
fieldValueInput.value = 'new folder item name.txt';
newItem.fields.add(fieldValueInput);

//Metadata: description field
final ConnectApi.ContentHubFieldValueInput fieldValueInputDesc = new ConnectApi.ContentHubFieldValueInput();
fieldValueInputDesc.name = 'description';
fieldValueInputDesc.value = 'It does describe it';
newItem.fields.add(fieldValueInputDesc);

final ConnectApi.RepositoryFolderItem newFolderItem = ConnectApi.ContentHub.addRepositoryItem(gDriveRepositoryId, gDriveFolderId, newItem);
final ConnectApi.RepositoryFileSummary newFile = newFolderItem.file;
System.debug(String.format('New file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\' 
 external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'', new String[]{ newFile.id, newFile.name, newFile.description, newFile.externalDocumentUrl, newFile.downloadUrl}));
```

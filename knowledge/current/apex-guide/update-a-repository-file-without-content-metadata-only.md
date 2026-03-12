---
title: "Update a Repository File Without Content (Metadata Only)"
domain: apex-guide
topic: update-a-repository-file-without-content-metadata-only
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.461Z
estimatedTokens: 271
keywords: [Update, Repository, File, Without, Content, Metadata, Only, Call, update, metadata, repository, file.]
---

# Update a Repository File Without Content (Metadata Only)

> Call a method to update the metadata of a repository file.

# Update a Repository File Without Content (Metadata Only)

Call a method to update the metadata of a repository file.

Call [updateRepositoryFile(repositoryId, repositoryFileId, file)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_7) to update the metadata of a file in a repository folder. After the file is updated, we show the file’s ID, name, description, external URL, download URL.

```

```

#### See Also

-   [*Apex Reference Guide*: ConnectApi.ContentHubItemInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm "Apex Reference Guide:
    ConnectApi.ContentHubItemInput - HTML (New Window)")

-   [*Apex Reference Guide*: ConnectApi.ContentHubFieldValueInput](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_connectapi_input_content_hub_field_value.htm "Apex Reference Guide:
    ConnectApi.ContentHubFieldValueInput - HTML (New Window)")

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

final ConnectApi.RepositoryFileDetail updatedFile = ConnectApi.ContentHub.updateRepositoryFile(gDriveRepositoryId, gDriveFileId, updatedItem);
System.debug(String.format('Updated file - id: \'\'{0}\'\', name: \'\'{1}\'\', description: \'\'{2}\'\',
 external URL: \'\'{3}\'\', download URL: \'\'{4}\'\'',  new String[]{ updatedFile.id, updatedFile.name, updatedFile.description, updatedFile.externalDocumentUrl, updatedFile.downloadUrl}));
```

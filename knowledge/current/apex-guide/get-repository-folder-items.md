---
title: "Get Repository Folder Items"
domain: apex-guide
topic: get-repository-folder-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.376Z
estimatedTokens: 137
keywords: [Get, Repository, Folder, Items, Call, get, collection, repository, folder, items.]
---

# Get Repository Folder Items

> Call a method to get a collection of repository folder items.

# Get Repository Folder Items

Call a method to get a collection of repository folder items.

Call [getRepositoryFolderItems(repositoryId, repositoryFolderId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_1) to get the collection of items in a repository folder. For files, we show the file’s name, size, external URL, and download URL. For folders, we show the folder’s name, description, and external URL.

```

```

## Code Examples

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';
final ConnectApi.RepositoryFolderItemsCollection folderItemsColl = ConnectApi.ContentHub.getRepositoryFolderItems(gDriveRepositoryId,gDriveFolderId);
final List<ConnectApi.RepositoryFolderItem> folderItems = folderItemsColl.items;
System.debug('Number of items in repository folder: ' + folderItems.size());
for(ConnectApi.RepositoryFolderItem item : folderItems){
   ConnectApi.RepositoryFileSummary fileSummary = item.file;
   if(fileSummary != null){
      System.debug(String.format('File item - name: \'\'{0}\'\', size: {1}, external URL: \'\'{2}\'\', download URL: \'\'{3}\'\'', new String[]{ fileSummary.name, String.valueOf(fileSummary.contentSize), fileSummary.externalDocumentUrl, fileSummary.downloadUrl}));
      }else{
         ConnectApi.RepositoryFolderSummary folderSummary = item.folder;
         System.debug(String.format('Folder item - name: \'\'{0}\'\', description: \'\'{1}\'\'',  new String[]{ folderSummary.name, folderSummary.description}));
      }
}
```

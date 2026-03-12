---
title: "Get a Repository Folder"
domain: apex-guide
topic: get-a-repository-folder
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.373Z
estimatedTokens: 86
keywords: [Get, Repository, Folder, Call, get, repository, folder.]
---

# Get a Repository Folder

> Call a method to get a repository folder.

# Get a Repository Folder

Call a method to get a repository folder.

Call [getRepositoryFolder(repositoryId, repositoryFolderId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolder_3) to get a repository folder.

```

```

## Code Examples

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFolderId = 'folder:0B0lTys1KmM3sSVJ2bjIzTGFqSWs';
final ConnectApi.RepositoryFolderDetail folder = ConnectApi.ContentHub.getRepositoryFolder(gDriveRepositoryId, gDriveFolderId);
System.debug(String.format('Folder - name: \'\'{0}\'\', description: \'\'{1}\'\', external URL: \'\'{2}\'\', folder items URL: \'\'{3}\'\'', 
   new String[]{ folder.name, folder.description, folder.externalFolderUrl, folder.folderItemsUrl}));
```

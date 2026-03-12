---
title: "Get a Repository File Without Permissions Information"
domain: apex-guide
topic: get-a-repository-file-without-permissions-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:34.339Z
estimatedTokens: 106
keywords: [Repository, File, Permissions, Call, permission]
---

# Get a Repository File Without Permissions Information

> Call a method to get a repository file without permission information.

# Get a Repository File Without Permissions Information

Call a method to get a repository file without permission information.

Call [getRepositoryFile(repositoryId, repositoryFileId)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_3) to get a repository file without permissions information.

```

```

## Code Examples

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId = 'file:0B0lTys1KmM3sTmxKNjVJbWZja00';
final ConnectApi.RepositoryFileDetail file = ConnectApi.ContentHub.getRepositoryFile(gDriveRepositoryId, gDriveFileId);
System.debug(String.format('File - name: \'\'{0}\'\', size: {1}, external URL: \'\'{2}\'\', download URL: \'\'{3}\'\'', 
   new String[]{ file.name, String.valueOf(file.contentSize), file.externalDocumentUrl, file.downloadUrl}));
```

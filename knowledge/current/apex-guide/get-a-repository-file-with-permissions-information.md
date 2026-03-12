---
title: "Get a Repository File with Permissions Information"
domain: apex-guide
topic: get-a-repository-file-with-permissions-information
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:34.366Z
estimatedTokens: 113
keywords: [Get, Repository, File, Permissions, Information, Call, get, repository, file, permission, information.]
---

# Get a Repository File with Permissions Information

> Call a method to get a repository file with permission information.

# Get a Repository File with Permissions Information

Call a method to get a repository file with permission information.

Call [getRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_4) to get a repository file with permissions information.

```

```

## Code Examples

```apex
final String gDriveRepositoryId = '0XCxx00000000ODGAY', gDriveFileId = 'file:0B0lTys1KmM3sTmxKNjVJbWZja00';

final ConnectApi.RepositoryFileDetail file = ConnectApi.ContentHub.getRepositoryFile(gDriveRepositoryId, gDriveFileId, true);
System.debug(String.format('File - name: \'\'{0}\'\', size: {1}, external URL: \'\'{2}\'\', download URL: \'\'{3}\'\'', new String[]{ file.name, String.valueOf(file.contentSize), file.externalDocumentUrl, file.downloadUrl}));
final ConnectApi.ExternalFilePermissionInformation externalFilePermInfo = file.externalFilePermissionInformation;

//permission types
final List<ConnectApi.ContentHubPermissionType> permissionTypes = externalFilePermInfo.externalFilePermissionTypes;
for(ConnectApi.ContentHubPermissionType permissionType : permissionTypes){
   System.debug(String.format('Permission type - id: \'\'{0}\'\', label: \'\'{1}\'\'', new String[]{ permissionType.id, permissionType.label}));
}

//permission groups
final List<ConnectApi.RepositoryGroupSummary> groups = externalFilePermInfo.repositoryPublicGroups;
for(ConnectApi.RepositoryGroupSummary ggroup : groups){
   System.debug(String.format('Group - id: \'\'{0}\'\', name: \'\'{1}\'\', type: \'\'{2}\'\'', new String[]{ ggroup.id, ggroup.name, ggroup.type.name()}));
}
```

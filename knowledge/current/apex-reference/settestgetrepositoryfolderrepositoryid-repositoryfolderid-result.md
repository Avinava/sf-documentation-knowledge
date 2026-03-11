---
title: "setTestGetRepositoryFolder(repositoryId, repositoryFolderId,
      result)"
domain: apex-reference
topic: settestgetrepositoryfolderrepositoryid-repositoryfolderid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepositoryFolder, repositoryId, repositoryFolderId, result, Register, ConnectApi.RepositoryFolderDetail, object, returned, matching, getRepositoryFolder, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetRepositoryFolder(repositoryId, repositoryFolderId,
      result)

> Register a ConnectApi.RepositoryFolderDetail
    object to be returned when the matching getRepositoryFolder(repositoryId, repositoryFolderId) method is called in a test
    context. Use the method with the same parameters or you receive an exception.

### setTestGetRepositoryFolder(repositoryId, repositoryFolderId, result)

Register a ConnectApi.RepositoryFolderDetail object to be returned when the matching getRepositoryFolder(repositoryId, repositoryFolderId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepositoryFolder(String repositoryId, String repositoryFolderId, ConnectApi.RepositoryFolderDetail result)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFolderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository folder.

result

Type: [ConnectApi.RepositoryFolderDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm#apex_connectapi_output_repository_folder_detail "A detailed description of a repository folder.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepositoryFolder(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolder_3 "Get a repository folder.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
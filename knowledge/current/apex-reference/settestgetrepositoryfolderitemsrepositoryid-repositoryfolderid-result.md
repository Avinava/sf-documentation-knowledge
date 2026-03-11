---
title: "setTestGetRepositoryFolderItems(repositoryId,
      repositoryFolderId, result)"
domain: apex-reference
topic: settestgetrepositoryfolderitemsrepositoryid-repositoryfolderid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepositoryFolderItems, repositoryId, repositoryFolderId, result, Register, ConnectApi.RepositoryFolderItemsCollection, object, returned, matching, getRepositoryFolderItems, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetRepositoryFolderItems(repositoryId,
      repositoryFolderId, result)

> Register a ConnectApi.RepositoryFolderItemsCollection object to be returned when the matching
      getRepositoryFolderItems(repositoryId,
      repositoryFolderId) method is called in a test context. Use the method with the same
    parameters or you receive an exception.

### setTestGetRepositoryFolderItems(repositoryId, repositoryFolderId, result)

Register a ConnectApi.RepositoryFolderItemsCollection object to be returned when the matching getRepositoryFolderItems(repositoryId, repositoryFolderId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepositoryFolderItems(String repositoryId, String repositoryFolderId, ConnectApi.RepositoryFolderItemsCollection result)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFolderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository folder.

result

Type: [ConnectApi.RepositoryFolderItemsCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepositoryFolderItems(repositoryId, repositoryFolderId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFolderItems_1 "Get repository folder items.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
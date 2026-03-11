---
title: "getRepositoryFolderItems(repositoryId,
      repositoryFolderId)"
domain: apex-reference
topic: getrepositoryfolderitemsrepositoryid-repositoryfolderid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepositoryFolderItems, repositoryId, repositoryFolderId, Get, repository, folder, items., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example, See]
---

# getRepositoryFolderItems(repositoryId,
      repositoryFolderId)

> Get repository folder items.

### getRepositoryFolderItems(repositoryId, repositoryFolderId)

Get repository folder items.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RepositoryFolderItemsCollection getRepositoryFolderItems(String repositoryId, String repositoryFolderId)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFolderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository folder.

#### Return Value

Type: [ConnectApi.RepositoryFolderItemsCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_items_collection.htm#apex_connectapi_output_repository_folder_items_collection "A collection of repository folder items.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets the collection of items in a repository folder. For files, we show the file’s name, size, external URL, and download URL. For folders, we show the folder’s name, description, and external URL.

```

```

#### See Also

-   [setTestGetRepositoryFolderItems(repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolderItems_1 "Register a ConnectApi.RepositoryFolderItemsCollection object to be returned when the matching getRepositoryFolderItems(repositoryId, repositoryFolderId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
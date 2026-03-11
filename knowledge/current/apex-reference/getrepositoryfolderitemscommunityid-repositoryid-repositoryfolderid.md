---
title: "getRepositoryFolderItems(communityId, repositoryId,
      repositoryFolderId)"
domain: apex-reference
topic: getrepositoryfolderitemscommunityid-repositoryid-repositoryfolderid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepositoryFolderItems, communityId, repositoryId, repositoryFolderId, Get, repository, folder, items, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# getRepositoryFolderItems(communityId, repositoryId,
      repositoryFolderId)

> Get repository folder items in an Experience Cloud site.

### getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId)

Get repository folder items in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RepositoryFolderItemsCollection getRepositoryFolderItems(String communityId, String repositoryId, String repositoryFolderId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

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

#### See Also

-   [setTestGetRepositoryFolderItems(communityId, repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolderItems_2 "Register a ConnectApi.RepositoryFolderItemsCollection object to be returned when the matching getRepositoryFolderItems(communityId, repositoryId, repositoryFolderId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
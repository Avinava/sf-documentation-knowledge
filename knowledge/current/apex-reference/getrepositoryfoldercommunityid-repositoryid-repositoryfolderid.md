---
title: "getRepositoryFolder(communityId, repositoryId,
      repositoryFolderId)"
domain: apex-reference
topic: getrepositoryfoldercommunityid-repositoryid-repositoryfolderid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepositoryFolder, communityId, repositoryId, repositoryFolderId, Get, repository, folder, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, See]
---

# getRepositoryFolder(communityId, repositoryId,
      repositoryFolderId)

> Get a repository folder in an Experience Cloud site.

### getRepositoryFolder(communityId, repositoryId, repositoryFolderId)

Get a repository folder in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RepositoryFolderDetail getRepositoryFolder(String communityId, String repositoryId, String repositoryFolderId)

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

Type: [ConnectApi.RepositoryFolderDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_detail.htm#apex_connectapi_output_repository_folder_detail "A detailed description of a repository folder.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRepositoryFolder(communityId, repositoryId, repositoryFolderId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFolder_4 "Register a ConnectApi.RepositoryFolderDetail object to be returned when the matching getRepositoryFolder(communityId, repositoryId, repositoryFolderId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
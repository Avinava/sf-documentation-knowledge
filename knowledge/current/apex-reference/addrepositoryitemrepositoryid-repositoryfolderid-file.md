---
title: "addRepositoryItem(repositoryId, repositoryFolderId,
      file)"
domain: apex-reference
topic: addrepositoryitemrepositoryid-repositoryfolderid-file
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.055Z
keywords: [addRepositoryItem, repositoryId, repositoryFolderId, file, Add, repository, item., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example, See]
---

# addRepositoryItem(repositoryId, repositoryFolderId,
      file)

> Add a repository item.

### addRepositoryItem(repositoryId, repositoryFolderId, file)

Add a repository item.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RepositoryFolderItem addRepositoryItem(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFolderId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository folder.

file

Type: [ConnectApi.ContentHubItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

#### Return Value

Type: [ConnectApi.RepositoryFolderItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example creates a file without binary content (metadata only) in a Google Drive repository folder. After the file is created, we show the file’s ID, name, description, external URL, and download URL.

```

```

#### See Also

-   [setTestAddRepositoryItem(repositoryId, repositoryFolderId, file, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestAddRepositoryItem_5 "Register a ConnectApi.RepositoryFolderItem object to be returned when the matching addRepositoryItem(repositoryId, repositoryFolderId, file) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
---
title: "addRepositoryItem(repositoryId, repositoryFolderId, file,
      fileData)"
domain: apex-reference
topic: addrepositoryitemrepositoryid-repositoryfolderid-file-filedata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.055Z
keywords: [addRepositoryItem, repositoryId, repositoryFolderId, file, fileData, Add, repository, item, including, binary, file., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# addRepositoryItem(repositoryId, repositoryFolderId, file,
      fileData)

> Add a repository item, including the binary file.

### addRepositoryItem(repositoryId, repositoryFolderId, file, fileData)

Add a repository item, including the binary file.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RepositoryFolderItem addRepositoryItem(String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData)

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

fileData

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

#### Return Value

Type: [ConnectApi.RepositoryFolderItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example creates a file with binary content and metadata in a Google Drive repository folder. After the file is created, we show the file’s ID, name, description, external URL, and download URL.

```

```

#### See Also

-   [setTestAddRepositoryItem(repositoryId, repositoryFolderId, file, fileData, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestAddRepositoryItem_7 "Register a ConnectApi.RepositoryFolderItem object to be returned when the matching addRepositoryItem(repositoryId, repositoryFolderId, file, fileData) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
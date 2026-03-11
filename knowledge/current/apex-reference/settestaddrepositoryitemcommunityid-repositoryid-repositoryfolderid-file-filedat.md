---
title: "setTestAddRepositoryItem(communityId, repositoryId,
      repositoryFolderId, file, fileData, result)"
domain: apex-reference
topic: settestaddrepositoryitemcommunityid-repositoryid-repositoryfolderid-file-filedat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestAddRepositoryItem, communityId, repositoryId, repositoryFolderId, file, fileData, result, Register, ConnectApi.RepositoryFolderItem, object, returned, matching, addRepositoryItem, method, called, test, context., same, parameters, receive]
---

# setTestAddRepositoryItem(communityId, repositoryId,
      repositoryFolderId, file, fileData, result)

> Register a ConnectApi.RepositoryFolderItem object
    to be returned when the matching addRepositoryItem(communityId,
      repositoryId, repositoryFolderId, file, fileData) method is called in a test context.
    Use the method with the same parameters or you receive an exception.

### setTestAddRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData, result)

Register a ConnectApi.RepositoryFolderItem object to be returned when the matching addRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestAddRepositoryItem(String communityId, String repositoryId, String repositoryFolderId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData, ConnectApi.RepositoryFolderItem result)

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

file

Type: [ConnectApi.ContentHubItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

fileData

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

result

Type: [ConnectApi.RepositoryFolderItem](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_folder_item.htm#apex_connectapi_output_repository_folder_item "A folder item.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [addRepositoryItem(communityId, repositoryId, repositoryFolderId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_addRepositoryItem_8 "Add a repository item, including the binary file, in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
---
title: "setTestUpdateRepositoryFile(repositoryId, repositoryFileId,
      file, result)"
domain: apex-reference
topic: settestupdaterepositoryfilerepositoryid-repositoryfileid-file-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.057Z
keywords: [setTestUpdateRepositoryFile, repositoryId, repositoryFileId, file, result, Register, ConnectApi.RepositoryFileDetail, object, returned, matching, updateRepositoryFile, method, called, test, context., same, parameters, receive, exception., API]
---

# setTestUpdateRepositoryFile(repositoryId, repositoryFileId,
      file, result)

> Register a ConnectApi.RepositoryFileDetail object
    to be returned when the matching updateRepositoryFile(repositoryId, repositoryFileId, file) method is called in a
    test context. Use the method with the same parameters or you receive an exception.

### setTestUpdateRepositoryFile(repositoryId, repositoryFileId, file, result)

Register a ConnectApi.RepositoryFileDetail object to be returned when the matching updateRepositoryFile(repositoryId, repositoryFileId, file) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestUpdateRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.RepositoryFileDetail result)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository file.

file

Type: [ConnectApi.ContentHubItemInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_content_hub_item.htm#apex_connectapi_input_content_hub_item "Item type ID and fields of the item type.")

The item type ID and fields of the item type.

result

Type: [ConnectApi.RepositoryFileDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [updateRepositoryFile(repositoryId, repositoryFileId, file, fileData)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_updateRepositoryFile_8 "Update the content of a repository file.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
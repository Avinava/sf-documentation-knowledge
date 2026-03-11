---
title: "updateRepositoryFile(repositoryId, repositoryFileId, file,
      fileData)"
domain: apex-reference
topic: updaterepositoryfilerepositoryid-repositoryfileid-file-filedata
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [updateRepositoryFile, repositoryId, repositoryFileId, file, fileData, Update, content, repository, file., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example, See]
---

# updateRepositoryFile(repositoryId, repositoryFileId, file,
      fileData)

> Update the content of a repository file.

### updateRepositoryFile(repositoryId, repositoryFileId, file, fileData)

Update the content of a repository file.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RepositoryFileDetail updateRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.ContentHubItemInput file, ConnectApi.BinaryInput fileData)

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

When updating the metadata of a repository file, only the name field can be updated.

fileData

Type: [ConnectApi.BinaryInput](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_binary.htm#apex_connectapi_input_binary "Create a ConnectApi.BinaryInput object to attach files to feed items and comments, to add repository files, to create managed content, and to replace managed content variants.")

The binary file.

#### Return Value

Type: [ConnectApi.RepositoryFileDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example updates the content and name of a file in a Google Drive repository. After the file is updated, we show the file’s ID, name, description, external URL, and download URL.

```

```

#### See Also

-   [setTestUpdateRepositoryFile(repositoryId, repositoryFileId, file, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestUpdateRepositoryFile_7 "Register a ConnectApi.RepositoryFileDetail object to be returned when the matching updateRepositoryFile(repositoryId, repositoryFileId, file) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
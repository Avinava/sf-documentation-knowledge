---
title: "setTestGetRepositoryFile(repositoryId, repositoryFileId,
      result)"
domain: apex-reference
topic: settestgetrepositoryfilerepositoryid-repositoryfileid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepositoryFile, repositoryId, repositoryFileId, result, Register, ConnectApi.RepositoryFileDetail, object, returned, matching, getRepositoryFile, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetRepositoryFile(repositoryId, repositoryFileId,
      result)

> Register a ConnectApi.RepositoryFileDetail object
    to be returned when the matching getRepositoryFile(repositoryId,
      repositoryFileId) method is called in a test context. Use the method with the same
    parameters or you receive an exception.

### setTestGetRepositoryFile(repositoryId, repositoryFileId, result)

Register a ConnectApi.RepositoryFileDetail object to be returned when the matching getRepositoryFile(repositoryId, repositoryFileId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepositoryFile(String repositoryId, String repositoryFileId, ConnectApi.RepositoryFileDetail result)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository file.

result

Type: [ConnectApi.RepositoryFileDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepositoryFile(repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositoryFile_3 "Get a repository file.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
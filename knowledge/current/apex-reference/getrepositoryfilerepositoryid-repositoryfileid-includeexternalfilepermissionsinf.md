---
title: "getRepositoryFile(repositoryId, repositoryFileId,
      includeExternalFilePermissionsInfo)"
domain: apex-reference
topic: getrepositoryfilerepositoryid-repositoryfileid-includeexternalfilepermissionsinf
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepositoryFile, repositoryId, repositoryFileId, includeExternalFilePermissionsInfo, Get, repository, file, without, permissions, information., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example]
---

# getRepositoryFile(repositoryId, repositoryFileId,
      includeExternalFilePermissionsInfo)

> Get a repository file with or without permissions information.

### getRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo)

Get a repository file with or without permissions information.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.RepositoryFileDetail getRepositoryFile(String repositoryId, String repositoryFileId, Boolean includeExternalFilePermissionsInfo)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository file.

includeExternalFilePermissionsInfo

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include permission information, such as whether the file is shared and what are the available permission types.

Managing external file permissions is supported for Google Drive, SharePoint Online, and OneDrive for Business.

#### Return Value

Type: [ConnectApi.RepositoryFileDetail](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_repository_file_detail.htm#apex_connectapi_output_repository_file_detail "A detailed description of a repository file.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

```

```

#### See Also

-   [setTestGetRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositoryFile_4 "Register a ConnectApi.RepositoryFileDetail object to be returned when the matching getRepositoryFile(repositoryId, repositoryFileId, includeExternalFilePermissionsInfo) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
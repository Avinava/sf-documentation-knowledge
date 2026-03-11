---
title: "getPreviews(repositoryId, repositoryFileId)"
domain: apex-reference
topic: getpreviewsrepositoryid-repositoryfileid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.055Z
keywords: [getPreviews, repositoryId, repositoryFileId, Get, information, repository, file’s, supported, previews., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example, See]
---

# getPreviews(repositoryId, repositoryFileId)

> Get information about a repository file’s supported previews.

### getPreviews(repositoryId, repositoryFileId)

Get information about a repository file’s supported previews.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FilePreviewCollection getPreviews(String repositoryId, String repositoryFileId)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository file.

#### Return Value

Type: [ConnectApi.FilePreviewCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview_collection.htm#apex_connectapi_output_file_preview_collection "A collection of file previews.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets all supported preview formats and their respective URLs and number of renditions. For each supported preview format, we show every rendition URL available.

```

```

#### See Also

-   [setTestGetPreviews(repositoryId, repositoryFileId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetPreviews_1 "Register a ConnectApi.FilePreviewCollection object to be returned when the matching getPreviews(repositoryId, repositoryFileId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
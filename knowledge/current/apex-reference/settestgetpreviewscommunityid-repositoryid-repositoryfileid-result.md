---
title: "setTestGetPreviews(communityId, repositoryId,
      repositoryFileId, result)"
domain: apex-reference
topic: settestgetpreviewscommunityid-repositoryid-repositoryfileid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetPreviews, communityId, repositoryId, repositoryFileId, result, Register, ConnectApi.FilePreviewCollection, object, returned, matching, getPreviews, method, called, test, context., same, parameters, receive, exception., API]
---

# setTestGetPreviews(communityId, repositoryId,
      repositoryFileId, result)

> Register a ConnectApi.FilePreviewCollection
    object to be returned when the matching getPreviews(communityId,
      repositoryId, repositoryFileId) method is called in a test context. Use the method
    with the same parameters or you receive an exception.

### setTestGetPreviews(communityId, repositoryId, repositoryFileId, result)

Register a ConnectApi.FilePreviewCollection object to be returned when the matching getPreviews(communityId, repositoryId, repositoryFileId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetPreviews(String communityId, String repositoryId, String repositoryFileId, ConnectApi.FilePreviewCollection result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

repositoryFileId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository file.

result

Type: [ConnectApi.FilePreviewCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview_collection.htm#apex_connectapi_output_file_preview_collection "A collection of file previews.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getPreviews(communityId, repositoryId, repositoryFileId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getPreviews_2 "Get information about a repository file’s supported previews in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
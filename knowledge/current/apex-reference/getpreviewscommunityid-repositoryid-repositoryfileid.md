---
title: "getPreviews(communityId, repositoryId,
      repositoryFileId)"
domain: apex-reference
topic: getpreviewscommunityid-repositoryid-repositoryfileid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getPreviews, communityId, repositoryId, repositoryFileId, Get, information, repository, file’s, supported, previews, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return]
---

# getPreviews(communityId, repositoryId,
      repositoryFileId)

> Get information about a repository file’s supported previews in an Experience Cloud
    site.

### getPreviews(communityId, repositoryId, repositoryFileId)

Get information about a repository file’s supported previews in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.FilePreviewCollection getPreviews(String communityId, String repositoryId, String repositoryFileId)

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

#### Return Value

Type: [ConnectApi.FilePreviewCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_file_preview_collection.htm#apex_connectapi_output_file_preview_collection "A collection of file previews.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetPreviews(communityId, repositoryId, repositoryFileId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetPreviews_2 "Register a ConnectApi.FilePreviewCollection object to be returned when the matching getPreviews(communityId, repositoryId, repositoryFileId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
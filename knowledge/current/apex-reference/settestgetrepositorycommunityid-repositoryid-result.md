---
title: "setTestGetRepository(communityId, repositoryId,
      result)"
domain: apex-reference
topic: settestgetrepositorycommunityid-repositoryid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepository, communityId, repositoryId, result, Register, ConnectApi.ContentHubRepository, object, returned, matching, getRepository, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestGetRepository(communityId, repositoryId,
      result)

> Register a ConnectApi.ContentHubRepository object
    to be returned when the matching getRepository(communityId,
      repositoryId) method is called in a test context. Use the method with the same
    parameters or you receive an exception.

### setTestGetRepository(communityId, repositoryId, result)

Register a ConnectApi.ContentHubRepository object to be returned when the matching getRepository(communityId, repositoryId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepository(String communityId, String repositoryId, ConnectApi.ContentHubRepository result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

result

Type: [ConnectApi.ContentHubRepository](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm#apex_connectapi_output_content_hub_repository "A repository.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepository(communityId, repositoryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_2 "Get a repository in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
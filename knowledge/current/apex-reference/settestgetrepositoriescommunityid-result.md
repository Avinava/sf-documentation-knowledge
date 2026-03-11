---
title: "setTestGetRepositories(communityId, result)"
domain: apex-reference
topic: settestgetrepositoriescommunityid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepositories, communityId, result, Register, getRepositories, object, returned, matching, ConnectApi.ContentHubRepositoryCollection, method, called, test, context., same, parameters, receive, exception., API, Version, Signature]
---

# setTestGetRepositories(communityId, result)

> Register a getRepositories(communityId) object to
    be returned when the matching ConnectApi.ContentHubRepositoryCollection method is called in a test context. Use
    the method with the same parameters or you receive an exception.

### setTestGetRepositories(communityId, result)

Register a getRepositories(communityId) object to be returned when the matching ConnectApi.ContentHubRepositoryCollection method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepositories(String communityId, ConnectApi.ContentHubRepositoryCollection result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

result

Type: [ConnectApi.ContentHubRepositoryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepositories(communityId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_2 "Get a list of repositories in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
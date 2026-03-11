---
title: "setTestGetRepositories(communityId, pageParam, pageSize,
      result)"
domain: apex-reference
topic: settestgetrepositoriescommunityid-pageparam-pagesize-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepositories, communityId, pageParam, pageSize, result, Register, ConnectApi.ContentHubRepositoryCollection, object, returned, matching, getRepositories, method, called, test, context., same, parameters, receive, exception., API]
---

# setTestGetRepositories(communityId, pageParam, pageSize,
      result)

> Register a ConnectApi.ContentHubRepositoryCollection object to be returned when the matching
      getRepositories(communityId, pageParam, pageSize)
    method is called in a test context. Use the method with the same parameters or you receive an
    exception.

### setTestGetRepositories(communityId, pageParam, pageSize, result)

Register a ConnectApi.ContentHubRepositoryCollection object to be returned when the matching getRepositories(communityId, pageParam, pageSize) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepositories(String communityId, Integer pageParam, Integer pageSize, ConnectApi.ContentHubRepositoryCollection result)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default page size is 25.

result

Type: [ConnectApi.ContentHubRepositoryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepositories(communityId, pageParam, pageSize)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_4 "Get a page of repositories in an Experience Cloud site.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
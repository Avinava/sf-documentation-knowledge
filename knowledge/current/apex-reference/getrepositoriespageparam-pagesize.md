---
title: "getRepositories(pageParam, pageSize)"
domain: apex-reference
topic: getrepositoriespageparam-pagesize
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepositories, pageParam, pageSize, Get, page, repositories., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, See]
---

# getRepositories(pageParam, pageSize)

> Get a page of repositories.

### getRepositories(pageParam, pageSize)

Get a page of repositories.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContentHubRepositoryCollection getRepositories(Integer pageParam, Integer pageSize)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 100. If you pass in null, the default page size is 25.

#### Return Value

Type: [ConnectApi.ContentHubRepositoryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRepositories(pageParam, pageSize, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositories_3 "Register a ConnectApi.ContentHubRepositoryCollection object to be returned when the matching getRepositories(pageParam, pageSize) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
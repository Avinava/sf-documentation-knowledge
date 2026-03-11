---
title: "getRepositories(communityId)"
domain: apex-reference
topic: getrepositoriescommunityid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepositories, communityId, Get, list, repositories, Experience, Cloud, site., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, See]
---

# getRepositories(communityId)

> Get a list of repositories in an Experience Cloud site.

### getRepositories(communityId)

Get a list of repositories in an Experience Cloud site.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContentHubRepositoryCollection getRepositories(String communityId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID for an Experience Cloud site, internal, or null.

#### Return Value

Type: [ConnectApi.ContentHubRepositoryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### See Also

-   [setTestGetRepositories(communityId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositories_2 "Register a getRepositories(communityId) object to be returned when the matching ConnectApi.ContentHubRepositoryCollection method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
---
title: "setTestGetRepositories(result)"
domain: apex-reference
topic: settestgetrepositoriesresult
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepositories, result, Register, ConnectApi.ContentHubRepositoryCollection, object, returned, matching, getRepositories, method, called, test, context., same, parameters, receive, exception., API, Version, Signature, Parameters]
---

# setTestGetRepositories(result)

> Register a ConnectApi.ContentHubRepositoryCollection object to be returned when the matching
      getRepositories() method is called in a test context.
    Use the method with the same parameters or you receive an exception.

### setTestGetRepositories(result)

Register a ConnectApi.ContentHubRepositoryCollection object to be returned when the matching getRepositories() method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepositories(ConnectApi.ContentHubRepositoryCollection result)

#### Parameters

result

Type: [ConnectApi.ContentHubRepositoryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepositories()](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepositories_1 "Get a list of repositories.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
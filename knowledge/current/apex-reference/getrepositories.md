---
title: "getRepositories()"
domain: apex-reference
topic: getrepositories
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepositories, Get, list, repositories., API, Version, Requires, Chatter, Signature, Return, Value, Usage, Example, See]
---

# getRepositories()

> Get a list of repositories.

### getRepositories()

Get a list of repositories.

#### API Version

39.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContentHubRepositoryCollection getRepositories()

#### Return Value

Type: [ConnectApi.ContentHubRepositoryCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository_collection.htm#apex_connectapi_output_content_hub_repository_collection "A collection of repositories.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

This example gets all repositories and gets the first SharePoint online repository found.

```

```

#### See Also

-   [setTestGetRepositories(result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepositories_1 "Register a ConnectApi.ContentHubRepositoryCollection object to be returned when the matching getRepositories() method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
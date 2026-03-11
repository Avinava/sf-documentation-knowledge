---
title: "getRepository(repositoryId)"
domain: apex-reference
topic: getrepositoryrepositoryid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [getRepository, repositoryId, Get, repository., API, Version, Requires, Chatter, Signature, Parameters, Return, Value, Usage, Example, See]
---

# getRepository(repositoryId)

> Get a repository.

### getRepository(repositoryId)

Get a repository.

#### API Version

369.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ContentHubRepository getRepository(String repositoryId)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

#### Return Value

Type: [ConnectApi.ContentHubRepository](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm#apex_connectapi_output_content_hub_repository "A repository.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.

#### Example

```

```

#### See Also

-   [setTestGetRepository(repositoryId, result)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_setTestGetRepository_1 "Register a ConnectApi.ContentHubRepository object to be returned when the matching getRepository(repositoryId) method is called in a test context. Use the method with the same parameters or you receive an exception.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
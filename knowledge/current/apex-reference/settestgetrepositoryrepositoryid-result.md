---
title: "setTestGetRepository(repositoryId, result)"
domain: apex-reference
topic: settestgetrepositoryrepositoryid-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.056Z
keywords: [setTestGetRepository, repositoryId, result, Register, ConnectApi.ContentHubRepository, object, returned, matching, getRepository, method, called, test, context., same, parameters, receive, exception., API, Version, Signature]
---

# setTestGetRepository(repositoryId, result)

> Register a ConnectApi.ContentHubRepository object
    to be returned when the matching getRepository(repositoryId) method is called in a test context. Use the method with
    the same parameters or you receive an exception.

### setTestGetRepository(repositoryId, result)

Register a ConnectApi.ContentHubRepository object to be returned when the matching getRepository(repositoryId) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

40.0

#### Signature

public static Void setTestGetRepository(String repositoryId, ConnectApi.ContentHubRepository result)

#### Parameters

repositoryId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the repository.

result

Type: [ConnectApi.ContentHubRepository](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_content_hub_repository.htm#apex_connectapi_output_content_hub_repository "A repository.")

Object containing test data.

#### Return Value

Type: Void

#### See Also

-   [getRepository(repositoryId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_ContentHub_static_methods.htm#apex_ConnectAPI_ContentHub_getRepository_1 "Get a repository.")
    
-   [*Apex Developer Guide*: Testing ConnectApi Code](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/connectAPI_TestingApex.htm "Apex Developer Guide: Testing ConnectApi Code - HTML (New Window)")
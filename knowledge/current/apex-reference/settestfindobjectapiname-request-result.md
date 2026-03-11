---
title: "setTestFind(objectApiName, request, result)"
domain: apex-reference
topic: settestfindobjectapiname-request-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [setTestFind, objectApiName, request, result, Registers, ConnectApi.ScopedSearchResults, object, returned, matching, find, method, called, test, context., same, parameters, receive, exception., API, Version]
---

# setTestFind(objectApiName, request, result)

> Registers a ConnectApi.ScopedSearchResults
    object to be returned when the matching find(objectApiName,
      request) method is called in a test context. Use the method with the same parameters
    or you receive an exception.

### setTestFind(objectApiName, request, result)

Registers a ConnectApi.ScopedSearchResults object to be returned when the matching find(objectApiName, request) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

public static Void setTestFind(String objectApiName, ConnectApi.SearchRequest request, ConnectApi.ScopedSearchResults result)

#### Parameters

objectApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the object to search.

request

Type: [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm "Search request input for searching an object.")

ConnectApi.SearchRequest input class with more information about what and how to search.

result

Type: [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")

Object containing test data.

#### Return Value

Type: Void
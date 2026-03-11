---
title: "find(objectApiName, request)"
domain: apex-reference
topic: findobjectapiname-request
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [find, objectApiName, request, Search, object, keywords, return, results., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value, Usage]
---

# find(objectApiName, request)

> Search an object using keywords and return results.

### find(objectApiName, request)

Search an object using keywords and return results.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ScopedSearchResults find(String objectApiName, ConnectApi.SearchRequest request)

#### Parameters

objectApiName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

API name of the object to search.

request

Type: [ConnectApi.SearchRequest](atlas.en-us.apexref.meta/apexref/apex_connectapi_input_search_reques.htm "Search request input for searching an object.")

ConnectApi.SearchRequest input class with more information about what and how to search.

#### Return Value

Type: [ConnectApi.ScopedSearchResults](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_scoped_search_result.htm "Keyword search results for an object.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.
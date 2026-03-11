---
title: "setTestFindAndGroup(q, result)"
domain: apex-reference
topic: settestfindandgroupq-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [setTestFindAndGroup, result, Registers, ConnectApi.SearchResultGroups, object, returned, matching, findAndGroup, method, called, test, context., same, parameters, receive, exception., API, Version, Signature, Parameters]
---

# setTestFindAndGroup(q, result)

> Registers a ConnectApi.SearchResultGroups
    object to be returned when the matching findAndGroup(q)
    method is called in a test context. Use the method with the same parameters or you receive an
    exception.

### setTestFindAndGroup(q, result)

Registers a ConnectApi.SearchResultGroups object to be returned when the matching findAndGroup(q) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

public static Void setTestFindAndGroup(String q, ConnectApi.SearchResultGroups result)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

One or more keywords to search for in the org.

result

Type: [ConnectApi.SearchResultGroups](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

Object containing test data.

#### Return Value

Type: Void
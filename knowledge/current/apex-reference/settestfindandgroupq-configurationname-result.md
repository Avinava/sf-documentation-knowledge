---
title: "setTestFindAndGroup(q, configurationName,
    result)"
domain: apex-reference
topic: settestfindandgroupq-configurationname-result
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [setTestFindAndGroup, configurationName, result, Registers, ConnectApi.SearchResultGroups, object, returned, matching, findAndGroup, method, called, test, context., same, parameters, receive, exception., API, Version, Signature]
---

# setTestFindAndGroup(q, configurationName,
    result)

> Registers a ConnectApi.SearchResultGroups
    object to be returned when the matching findAndGroup(q,
      configurationName) method is called in a test context. Use the method with the same
    parameters or you receive an exception.

### setTestFindAndGroup(q, configurationName, result)

Registers a ConnectApi.SearchResultGroups object to be returned when the matching findAndGroup(q, configurationName) method is called in a test context. Use the method with the same parameters or you receive an exception.

#### API Version

63.0

#### Signature

public static Void setTestFindAndGroup(String q, String configurationName, ConnectApi.SearchResultGroups result)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

One or more keywords to search for in the org.

configurationName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Search configuration to apply.

result

Type: [ConnectApi.SearchResultGroups](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

Object containing test data.

#### Return Value

Type: Void
---
title: "findAndGroup(q, configurationName)"
domain: apex-reference
topic: findandgroupq-configurationname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [findAndGroup, configurationName, Search, objects, keyword, search, configuration., returns, result, groups., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return]
---

# findAndGroup(q, configurationName)

> Search objects using keyword search and a configuration. The search returns result
    groups.

### findAndGroup(q, configurationName)

Search objects using keyword search and a configuration. The search returns result groups.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SearchResultGroups findAndGroup(String q, String configurationName)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

One or more keywords to search for in the org.

configurationName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Search configuration to apply.

#### Return Value

Type: [ConnectApi.SearchResultGroups](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.
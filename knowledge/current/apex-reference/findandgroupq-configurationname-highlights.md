---
title: "findAndGroup(q, configurationName,
    highlights)"
domain: apex-reference
topic: findandgroupq-configurationname-highlights
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.772Z
keywords: [findAndGroup, configurationName, highlights, Search, objects, keyword, search, configuration, highlights., returns, result, groups., API, Version, Available, Guest, Users, Requires, Chatter, Signature]
---

# findAndGroup(q, configurationName,
    highlights)

> Search objects using keyword search, a configuration, and highlights. The search
    returns result groups.

### findAndGroup(q, configurationName, highlights)

Search objects using keyword search, a configuration, and highlights. The search returns result groups.

#### API Version

63.0

#### Available to Guest Users

63.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SearchResultGroups findAndGroup(String q, String configurationName, Boolean highlights)

#### Parameters

q

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

One or more keywords to search for in the org.

configurationName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Search configuration to apply.

highlights

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether search generates a text highlight (true) or not (false).

#### Return Value

Type: [ConnectApi.SearchResultGroups](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_search_result.htm "Results of searching objects using keywords.")

#### Usage

To test code that uses this method, use the matching set test method (prefix the method name with setTest). Use the set test method with the same parameters or the code throws an exception.
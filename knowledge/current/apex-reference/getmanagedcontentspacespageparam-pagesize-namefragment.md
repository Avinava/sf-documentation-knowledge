---
title: "getManagedContentSpaces(pageParam, pageSize, nameFragment)"
domain: apex-reference
topic: getmanagedcontentspacespageparam-pagesize-namefragment
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:32.231Z
keywords: [getManagedContentSpaces, pageParam, pageSize, nameFragment, Get, managed, content, spaces., API, Version, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getManagedContentSpaces(pageParam, pageSize, nameFragment)

> Get managed content spaces.

### getManagedContentSpaces(pageParam, pageSize, nameFragment)

Get managed content spaces.

#### API Version

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.ManagedContentSpaceCollectionRepresentation getManagedContentSpaces(Integer pageParam, Integer pageSize, String nameFragment)

#### Parameters

pageParam

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of the page you want returned. Starts at 0. If you pass in null or 0, the first page is returned.

pageSize

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Specifies the number of items per page. Valid values are from 1 through 250. If you pass in null, the default size is 25.

nameFragment

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name fragment to filter spaces that contain the value in the workspace name.

#### Return Value

Type: [ConnectApi.ManagedContentSpaceCollectionRepresentation](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_managed_content_space_collection.htm "Collection of managed content spaces.")
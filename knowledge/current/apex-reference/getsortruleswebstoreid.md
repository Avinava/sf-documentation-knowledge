---
title: "getSortRules(webstoreId)"
domain: apex-reference
topic: getsortruleswebstoreid
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.799Z
keywords: [getSortRules, webstoreId, Get, sort, rules, live, index., API, Version, Available, Guest, Users, Requires, Chatter, Signature, Parameters, Return, Value]
---

# getSortRules(webstoreId)

> Get sort rules for the live index.

### getSortRules(webstoreId)

Get sort rules for the live index.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.SortRulesCollection getSortRules(String webstoreId)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

#### Return Value

Type: [ConnectApi.SortRulesCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_sort_rules_collection_output.htm "Collection of sort rules.")
---
title: "QueryBuilder Class"
domain: apex-reference
topic: querybuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.136Z
keywords: [QueryBuilder, Class, Cogrouping, means, two, input, streams, grouped, independently, arranged, side, side., Only, data, exists, both, groups, appears, results., cogroup]
---

# QueryBuilder Class

> Cogrouping means that two input streams are grouped independently
      and arranged side by side. Only data that exists in both groups appears in the
    results.

### cogroup(cogroupNodes, groups)

Cogrouping means that two input streams are grouped independently and arranged side by side. Only data that exists in both groups appears in the results.

#### Signature

global static Wave.QueryNode cogroup(List<Wave.QueryNode> cogroupNodes, List<List<String\>> groups)

#### Parameters

cogroupNodes

Type: [wave.QueryNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

List of nodes to group.

groups

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The type of grouping.

#### Return Value

Type: [wave.QueryNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")
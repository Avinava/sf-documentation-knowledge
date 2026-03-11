---
title: "QueryBuilder Methods"
domain: apex-reference
topic: querybuilder-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.136Z
keywords: [QueryBuilder, Methods, Load, stream, dataset., load, datasetID, datasetVersionID, Signature, Parameters, Return, Value, count, get, projection, union, unionNodes, cogroup, cogroupNodes, groups]
---

# QueryBuilder Methods

> Load a stream from a dataset.

## QueryBuilder Methods

The following are methods for QueryBuilder.

-   **[load(datasetID, datasetVersionID)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm#apex_wave_QueryBuilder_load)**  
    Load a stream from a dataset.
-   **[count()](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm#apex_wave_QueryBuilder_count)**  
    Calculate the number of rows that match the query criteria.
-   **[get(projection)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm#apex_wave_QueryBuilder_get)**  
    Query by selecting specific attributes.
-   **[union(unionNodes)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm#unique_855823339)**  
    Combine multiple result sets into one result set.
-   **[cogroup(cogroupNodes, groups)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm#unique_2085094201)**  
    Cogrouping means that two input streams are grouped independently and arranged side by side. Only data that exists in both groups appears in the results.

### load(datasetID, datasetVersionID)

Load a stream from a dataset.

#### Signature

public static wave.QueryNode load(String datasetID, String datasetVersionID)

#### Parameters

datasetID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID of the dataset.

datasetVersionID

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The ID identifying the version of the dataset.

#### Return Value

Type: [wave.QueryNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### count()

Calculate the number of rows that match the query criteria.

#### Signature

public static wave.ProjectionNode count()

#### Return Value

Type: [wave.ProjectionNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### get(projection)

Query by selecting specific attributes.

#### Signature

public static wave.ProjectionNode get(String proj)

#### Parameters

proj

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name of the column to query.

#### Return Value

Type: [wave.ProjectionNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### union(unionNodes)

Combine multiple result sets into one result set.

#### Signature

global static Wave.QueryNode union(List<Wave.QueryNode> unionNodes)

#### Parameters

unionNodes

Type: List<[wave.QueryNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")\>

List of nodes to combine.

#### Return Value

Type: [wave.QueryNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

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
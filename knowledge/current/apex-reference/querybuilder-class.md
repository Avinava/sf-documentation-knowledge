---
title: "QueryBuilder Class"
domain: apex-reference
topic: querybuilder-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.357Z
estimatedTokens: 1308
keywords: [QueryBuilder, provides, constructing, well-formed, SAQL, queries, pass, CRM, Analytics., Usage, Examples, load, datasetID, datasetVersionID, count, get, projection, union, unionNodes, cogroup]
---

# QueryBuilder Class

> The QueryBuilder class provides methods for constructing well-formed
      SAQL queries to pass to CRM Analytics.

# QueryBuilder Class

The QueryBuilder class provides methods for constructing well-formed SAQL queries to pass to CRM Analytics.

## Namespace

wave

## Usage

Use QueryBuilder and its associated classes, Wave.ProjectionNode and Wave.QueryNode, to incrementally build your SAQL statement. For example:

```

```

## Examples

QueryBuilder is the core of this first phase of the CRM Analytics Apex SDK, so let’s take a closer look. Here’s a simple count query.

```

```

The resulting SAQL query looks like this:

```

```

Here’s a more complex example that uses a union statement.

```

```

The resulting SAQL query has two projection streams, qa and qb.

```

```

-   **[QueryBuilder Methods](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm#apex_wave_QueryBuilder_methods)**


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

## Code Examples

```apex
public static void executeApexQuery(String name){
  Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{
    Wave.QueryBuilder.get('State').alias('State'), 
    Wave.QueryBuilder.get('City').alias('City'), 
    Wave.QueryBuilder.get('Revenue').avg().alias('avg_Revenue'), 
    Wave.QueryBuilder.get('Revenue').sum().alias('sum_Revenue'),                                     
    Wave.QueryBuilder.count().alias('count')};
                
  ConnectApi.LiteralJson result = Wave.QueryBuilder.load('0FbD00000004DSzKAM', '0FcD00000004FEZKA2')
    .group(new String[]{'State', 'City'})
    .foreach(projs)
    .execute('q');
  String response = result.json;
}
```

```
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.count().alias('c')};
String query = Wave.QueryBuilder.load('datasetId', 'datasetVersionId').group().foreach(projs).build('q');
```

```
q = load "datasetId/datasetVersionId";
q = group q by all;
q = foreach q generate count as c;
```

```apex
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.get('Name'), Wave.QueryBuilder.get('AnnualRevenue').alias('Revenue')};
Wave.QueryNode nodeOne = Wave.QueryBuilder.load('datasetOne','datasetVersionOne').foreach(projs);
Wave.QueryNode nodeTwo = Wave.QueryBuilder.load('datasetTwo', 'datasetVersionTwo').foreach(projs);
String query = Wave.QueryBuilder.union(new List<Wave.QueryNode>{nodeOne, nodeTwo}).build('q');
```

```
qa = load "datasetOne/datasetVersionOne";
qa = foreach q generate Name,AnnualRevenue as Revenue;
qb = load "datasetTwo/datasetVersionTwo";
qb = foreach q generate Name,AnnualRevenue as Revenue;
q = union qa, qb;
```

## Related Topics

- QueryBuilder Methods (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm)
- load(datasetID, datasetVersionID) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm)
- count() (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm)
- get(projection) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm)
- union(unionNodes) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm)
- cogroup(cogroupNodes, groups) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryBuilder.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- wave.QueryNode (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- wave.ProjectionNode (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)

---
title: "QueryNode Class"
domain: apex-reference
topic: querynode-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.742Z
estimatedTokens: 1732
keywords: [QueryNode, Define, node, query, projection, groups, order, filters, Execute, Usage, build, streamName, foreach, projections, group]
---

# QueryNode Class

> Define each node of the query - such as projection, groups, order,
      filters. Execute the query.

# QueryNode Class

Define each node of the query - such as projection, groups, order, filters. Execute the query.

## Namespace

wave

## Usage

Refer to the QueryBuilder example.

-   **[QueryNode Methods](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_methods)**


## QueryNode Methods

The following are methods for QueryNode.

-   **[build(streamName)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_build)**
    Build the query string represented by this QueryNode and assign it to a stream name.
-   **[foreach(projections)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_foreach)**
    Applies a set of expressions to every row in a dataset. This action is often referred to as projection.
-   **[group(groups)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_group)**
    Groups matched records (group by specific dataset attributes).
-   **[group()](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_group_2)**
    Groups matched records (group by all).
-   **[order(orders)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#unique_1182561177)**
    Sorts in ascending or descending order on one or more fields.
-   **[cap(cap)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#unique_1978474163)**
    Limits the number of results that are returned.
-   **[filter(filterCondition)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_filter_2)**
    Selects rows from a dataset based on a filter condition (a predicate).
-   **[filter(filterConditions)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#apex_wave_QueryNode_filter)**
    Selects rows from a dataset based on multiple filter conditions (predicates).
-   **[execute(streamName)](atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm#unique_777067081)**
    Execute the query and return rows as JSON.

### build(streamName)

Build the query string represented by this QueryNode and assign it to a stream name.

#### Signature

public String build(String streamName)

#### Parameters

streamName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The identifier for the stream - for example, “q”.

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SAQL query string represented by the QueryNode.

### foreach(projections)

Applies a set of expressions to every row in a dataset. This action is often referred to as projection.

#### Signature

public wave.QueryNode foreach(List<wave.ProjectionNode> projections)

#### Parameters

projections

Type: List<[wave.ProjectionNode](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")\>

A list of ProjectionNodes to be added to this QueryNode.

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### group(groups)

Groups matched records (group by specific dataset attributes).

#### Signature

public wave.QueryNode group(List<String\> groups)

#### Parameters

groups

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of expressions.

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

#### Example

```

```

### group()

Groups matched records (group by all).

#### Signature

public wave.QueryNode group()

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

#### Example

```

```

### order(orders)

Sorts in ascending or descending order on one or more fields.

#### Signature

public wave.QueryNode group(List<String\> groups)

#### Parameters

groups

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of column names and associated ascending or descending keywords, for example

```

```

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### cap(cap)

Limits the number of results that are returned.

#### Signature

global Wave.QueryNode cap(Integer cap)

#### Parameters

cap

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The maximum number of rows to return.

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### filter(filterCondition)

Selects rows from a dataset based on a filter condition (a predicate).

#### Signature

public wave.QueryNode filter(String filterCondition)

#### Parameters

filterCondition

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

For example: filter('Name != \\'My Name\\'')

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### filter(filterConditions)

Selects rows from a dataset based on multiple filter conditions (predicates).

#### Signature

public wave.QueryNode filter(List<String\> filterCondition)

#### Parameters

filterCondition

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

A list of filter conditions.

#### Return Value

Type: [wave.QueryNode](#apex_class_wave_QueryNode "Define each node of the query - such as projection, groups, order, filters. Execute the query.")

### execute(streamName)

Execute the query and return rows as JSON.

#### Signature

global ConnectApi.LiteralJson execute(String streamName)

#### Parameters

streamName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The query stream to execute. For example:

```

```

#### Return Value

Type: ConnectApi.LiteralJson

## Code Examples

```
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.get('Name'), Wave.QueryBuilder.get('Revenue').sum().alias('REVENUE_SUM')};
ConnectApi.LiteralJson result = Wave.QueryBuilder.load('datasetId', 'datasetVersionId').group(new String[]{'Name'}).foreach(projs).build('q');
```

```
String query = Wave.QueryBuilder.load('datasetId', 'datasetVersionId').group().foreach(projs).build('q');
```

```apex
List<List<String>>{new List<String>{'Name', 'asc'}, new List<String>{'Revenue', 'desc'}}
```

```
ConnectApi.LiteralJson result = Wave.QueryBuilder.load('datasetId',
      'datasetVersionId').group().foreach(projs).execute('q');
```

## Related Topics

- QueryNode Methods (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- build(streamName) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- foreach(projections) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- group(groups) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- group() (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- order(orders) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- cap(cap) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- filter(filterCondition) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- filter(filterConditions) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)
- execute(streamName) (atlas.en-us.apexref.meta/apexref/apex_class_wave_QueryNode.htm)

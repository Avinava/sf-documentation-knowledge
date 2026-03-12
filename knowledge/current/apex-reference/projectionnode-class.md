---
title: "ProjectionNode Class"
domain: apex-reference
topic: projectionnode-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.722Z
estimatedTokens: 929
keywords: [ProjectionNode, Add, aggregate, functions, query, define, alias, Usage, sum, avg, min, max, count, unique]
---

# ProjectionNode Class

> Add aggregate functions to the query, or define an
    alias.

# ProjectionNode Class

Add aggregate functions to the query, or define an alias.

## Namespace

[wave](atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm#apex_namespace_wave "The classes in the Wave namespace are part of the CRM Analytics Analytics SDK, designed to facilitate querying CRM Analytics data from Apex code.")

## Usage

Refer to the QueryBuilder example.

-   **[ProjectionNode Methods](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_methods)**


## ProjectionNode Methods

The following are methods for ProjectionNode.

-   **[sum()](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_sum)**
    Returns the sum of a numeric field.
-   **[avg()](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_avg)**
    Returns the average value of a numeric field.
-   **[min()](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_min)**
    Returns the minimum value of a field.
-   **[max()](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_max)**
    Returns the maximum value of a field.
-   **[count()](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_count)**
    Returns the number of rows that match the query criteria.
-   **[unique()](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_unique)**
    Returns the count of unique values.
-   **[alias(name)](atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm#apex_wave_ProjectionNode_alias)**
    Define output column names.

### sum()

Returns the sum of a numeric field.

#### Signature

public wave.ProjectionNode sum()

#### Return Value

Type: [wave.ProjectionNode](#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### avg()

Returns the average value of a numeric field.

#### Signature

public wave.ProjectionNode avg()

#### Return Value

Type: [wave.ProjectionNode](#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### min()

Returns the minimum value of a field.

#### Signature

public wave.ProjectionNode min()

#### Return Value

Type: [wave.ProjectionNode](#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### max()

Returns the maximum value of a field.

#### Signature

public wave.ProjectionNode max()

#### Return Value

Type: [wave.ProjectionNode](#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### count()

Returns the number of rows that match the query criteria.

#### Signature

public wave.ProjectionNode count()

#### Return Value

Type: [wave.ProjectionNode](#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### unique()

Returns the count of unique values.

#### Signature

public wave.ProjectionNode unique()

#### Return Value

Type: [wave.ProjectionNode](#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

### alias(name)

Define output column names.

#### Signature

public wave.ProjectionNode alias(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The name to use for this column. For example, this code defines the alias c:

```

```

#### Return Value

Type: [wave.ProjectionNode](#apex_class_wave_ProjectionNode "Add aggregate functions to the query, or define an alias.")

## Code Examples

```
Wave.ProjectionNode[] projs = new Wave.ProjectionNode[]{Wave.QueryBuilder.count().alias('c')};
```

## Related Topics

- wave (atlas.en-us.apexref.meta/apexref/apex_namespace_wave.htm)
- ProjectionNode Methods (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- sum() (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- avg() (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- min() (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- max() (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- count() (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- unique() (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- alias(name) (atlas.en-us.apexref.meta/apexref/apex_class_wave_ProjectionNode.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)

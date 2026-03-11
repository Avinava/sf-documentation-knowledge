---
title: "ProjectionNode Methods"
domain: apex-reference
topic: projectionnode-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.128Z
keywords: [ProjectionNode, Methods, Returns, sum, numeric, field., Signature, Return, Value, avg, min, max, count, unique, alias, name, Parameters]
---

# ProjectionNode Methods

> Returns the sum of a numeric field.

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
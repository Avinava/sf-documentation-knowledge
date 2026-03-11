---
title: "GroupingColumn Class"
domain: apex-reference
topic: groupingcolumn-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.847Z
keywords: [GroupingColumn, Class, Returns, level, grouping, column., getGroupingLevel, Syntax, Return, Value, Usage]
---

# GroupingColumn Class

> Returns the level of grouping for the column.

### getGroupingLevel()

Returns the level of grouping for the column.

#### Syntax

public Integer getGroupingLevel()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

-   In a summary report, 0, 1, or 2 indicates grouping at the first, second, or third row level.
-   In a matrix report, 0 or 1 indicates grouping at the first or second row or column level.
---
title: "Dimension Methods"
domain: apex-reference
topic: dimension-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.839Z
keywords: [Dimension, Methods, Returns, information, row, column, grouping, list., getGroupings, Syntax, Return, Value]
---

# Dimension Methods

> Returns information for each row or column grouping as
a list.

## Dimension Methods

The following are methods for Dimension. All are instance methods.

-   **[getGroupings()](atlas.en-us.apexref.meta/apexref/apex_class_reports_dimension.htm#apex_Reports_Dimension_getGroupings)**  
    Returns information for each row or column grouping as a list.

### getGroupings()

Returns information for each row or column grouping as a list.

#### Syntax

public List<Reports.GroupingValue> getGroupings()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.GroupingValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm#apex_class_reports_groupingvalue "Contains grouping values for a row or column, including the key, label, and value.")\>
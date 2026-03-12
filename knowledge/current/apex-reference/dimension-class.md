---
title: "Dimension Class"
domain: apex-reference
topic: dimension-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.029Z
estimatedTokens: 279
namespace: Reports
keywords: [Dimension, Contains, information, row, column, grouping., getGroupings, Syntax]
---

# Dimension Class

> Contains information for each row or column grouping.

**Namespace:** `Reports`

# Dimension Class

Contains information for each row or column grouping.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getGroupings() (atlas.en-us.apexref.meta/apexref/apex_class_reports_dimension.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Reports.GroupingValue (atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm)

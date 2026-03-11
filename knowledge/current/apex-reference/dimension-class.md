---
title: "Dimension Class"
domain: apex-reference
topic: dimension-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.839Z
keywords: [Dimension, Class, Returns, information, row, column, grouping, list., getGroupings, Syntax, Return, Value]
---

# Dimension Class

> Returns information for each row or column grouping as
a list.

### getGroupings()

Returns information for each row or column grouping as a list.

#### Syntax

public List<Reports.GroupingValue> getGroupings()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Reports.GroupingValue](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingvalue.htm#apex_class_reports_groupingvalue "Contains grouping values for a row or column, including the key, label, and value.")\>
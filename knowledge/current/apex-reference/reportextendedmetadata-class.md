---
title: "ReportExtendedMetadata Class"
domain: apex-reference
topic: reportextendedmetadata-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.869Z
keywords: [ReportExtendedMetadata, Class, Returns, map, row, column, grouping, its, metadata., Contains, values, identified, groupingsDown, groupingsAcross, lists., getGroupingColumnInfo, Syntax, Return, Value]
---

# ReportExtendedMetadata Class

> Returns a map of each row or column grouping to its metadata.
Contains values for each grouping that is identified in the groupingsDown
and groupingsAcross lists.

### getGroupingColumnInfo()

Returns a map of each row or column grouping to its metadata. Contains values for each grouping that is identified in the groupingsDown and groupingsAcross lists.

#### Syntax

public MAP<String,Reports.GroupingColumn> getGroupingColumnInfo()

#### Return Value

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[Reports.GroupingColumn](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_class_reports_groupingcolumn "Contains methods for describing fields that are used for column grouping.")\>
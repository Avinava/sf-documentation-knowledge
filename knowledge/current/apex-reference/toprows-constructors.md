---
title: "TopRows Constructors"
domain: apex-reference
topic: toprows-constructors
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.829Z
keywords: [TopRows, Constructors, Creates, instance, Reports.TopRows, class, specified, parameters., rowLimit, direction, Signature, Parameters]
---

# TopRows Constructors

> Creates an instance of the Reports.TopRows class using the specified parameters.

## TopRows Constructors

The following are constructors for TopRows.

-   **[TopRows(rowLimit, direction)](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_ctor)**  
    Creates an instance of the Reports.TopRows class using the specified parameters.
-   **[TopRows()](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_ctor_2)**  
    Creates an instance of the Reports.TopRows class. You can then set values by using the class’s set methods.

### TopRows(rowLimit, direction)

Creates an instance of the Reports.TopRows class using the specified parameters.

#### Signature

public TopRows(Integer rowLimit, Reports.ColumnSortOrder direction)

#### Parameters

rowLimit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

The number of rows returned in the report.

direction

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

The sort order of the report rows.

### TopRows()

Creates an instance of the Reports.TopRows class. You can then set values by using the class’s set methods.

#### Signature

public TopRows()
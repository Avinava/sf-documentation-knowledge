---
title: "SortColumn Methods"
domain: apex-reference
topic: sortcolumn-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.794Z
keywords: [SortColumn, Methods, Returns, column, used, sort, records, report., getSortColumn, Signature, Return, Value, getSortOrder, setSortColumn, sortColumn, Parameters, setSortOrder, SortOrder]
---

# SortColumn Methods

> Returns the column used to sort the records in the
    report.

## SortColumn Methods

The following are methods for SortColumn.

-   **[getSortColumn()](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_getSortColumn)**  
    Returns the column used to sort the records in the report.
-   **[getSortOrder()](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_getSortOrder)**  
    Returns the the sort order— ascending or descending—for the sort column.
-   **[setSortColumn(sortColumn)](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_setSortColumn)**  
    Sets the column used to sort the records in the report.
-   **[setSortOrder(SortOrder)](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_setSortOrder_2)**  
    Sets the sort order— ascending or descending—for the sort column.

### getSortColumn()

Returns the column used to sort the records in the report.

#### Signature

public String getSortColumn()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getSortOrder()

Returns the the sort order— ascending or descending—for the sort column.

#### Signature

public Reports.ColumnSortOrder getSortOrder()

#### Return Value

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

### setSortColumn(sortColumn)

Sets the column used to sort the records in the report.

#### Signature

public void setSortColumn(String sortColumn)

#### Parameters

sortColumn

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: void

### setSortOrder(SortOrder)

Sets the sort order— ascending or descending—for the sort column.

#### Signature

public void setSortOrder(Reports.ColumnSortOrder sortOrder)

#### Parameters

sortOrder

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

#### Return Value

Type: void
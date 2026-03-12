---
title: "SortColumn Class"
domain: apex-reference
topic: sortcolumn-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.967Z
estimatedTokens: 721
namespace: Reports
keywords: [SortColumn, Contains, information, sort, column, used, report., getSortColumn, getSortOrder, setSortColumn, sortColumn, setSortOrder, SortOrder]
---

# SortColumn Class

> Contains information about the sort column used in the
    report.

**Namespace:** `Reports`

# SortColumn Class

Contains information about the sort column used in the report.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[SortColumn Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm#apex_reports_SortColumn_methods)**


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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- SortColumn Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm)
- getSortColumn() (atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm)
- getSortOrder() (atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm)
- setSortColumn(sortColumn) (atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm)
- setSortOrder(SortOrder) (atlas.en-us.apexref.meta/apexref/apex_class_reports_SortColumn.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.ColumnSortOrder (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm)

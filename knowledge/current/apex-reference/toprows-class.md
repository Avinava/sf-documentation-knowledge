---
title: "TopRows Class"
domain: apex-reference
topic: toprows-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.015Z
estimatedTokens: 1359
namespace: Reports
keywords: [TopRows, Contains, working, information, row, limit, filter., rowLimit, direction, getDirection, getRowLimit, setDirection, setRowLimit, toString]
---

# TopRows Class

> Contains methods and constructors for working with information about a
      row limit filter.

**Namespace:** `Reports`

# TopRows Class

Contains methods and constructors for working with information about a row limit filter.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[TopRows Constructors](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_constructors)**

-   **[TopRows Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_methods)**


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

## TopRows Methods

The following are methods for TopRows.

-   **[getDirection()](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_getDirection)**
    Returns the sort order of the report rows.
-   **[getRowLimit()](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_getRowLimit)**
    Returns the maximum number of rows shown in the report.
-   **[setDirection(value)](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_setDirection)**
    Sets the sort order of the report’s rows.
-   **[setDirection(direction)](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_setDirection_2)**
    Sets the sort order of the report’s rows.
-   **[setRowLimit(rowLimit)](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_setRowLimit)**
    Sets the maximum number of rows included in the report.
-   **[toString()](atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm#apex_reports_TopRows_toString)**
    Returns a string.

### getDirection()

Returns the sort order of the report rows.

#### Signature

public Reports.ColumnSortOrder getDirection()

#### Return Value

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

### getRowLimit()

Returns the maximum number of rows shown in the report.

#### Signature

public Integer getRowLimit()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

### setDirection(value)

Sets the sort order of the report’s rows.

#### Signature

public void setDirection(String value)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

For possible values, see [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.").

#### Return Value

Type: void

### setDirection(direction)

Sets the sort order of the report’s rows.

#### Signature

public void setDirection(Reports.ColumnSortOrder direction)

#### Parameters

direction

Type: [Reports.ColumnSortOrder](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm#apex_enum_reports_columnsortorder "The Reports.ColumnSortOrder enum describes the order that the grouping column uses to sort data.")

#### Return Value

Type: void

### setRowLimit(rowLimit)

Sets the maximum number of rows included in the report.

#### Signature

public void setRowLimit(Integer rowLimit)

#### Parameters

rowLimit

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Return Value

Type: void

### toString()

Returns a string.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- TopRows Constructors (atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm)
- TopRows Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm)
- TopRows(rowLimit, direction) (atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm)
- TopRows() (atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm)
- Integer (atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm)
- Reports.ColumnSortOrder (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columnsortorder.htm)
- getDirection() (atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm)
- getRowLimit() (atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm)
- setDirection(value) (atlas.en-us.apexref.meta/apexref/apex_class_reports_TopRows.htm)

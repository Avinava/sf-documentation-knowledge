---
title: "TopRows Methods"
domain: apex-reference
topic: toprows-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.830Z
keywords: [TopRows, Methods, Returns, sort, order, report, rows., getDirection, Signature, Return, Value, getRowLimit, setDirection, value, Parameters, direction, setRowLimit, rowLimit, toString]
---

# TopRows Methods

> Returns the sort order of the report rows.

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
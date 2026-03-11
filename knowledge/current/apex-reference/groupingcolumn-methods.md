---
title: "GroupingColumn Methods"
domain: apex-reference
topic: groupingcolumn-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.847Z
keywords: [GroupingColumn, Methods, Returns, unique, API, name, field, bucket, used, column, grouping., getName, Syntax, Return, Value, getLabel, getDataType, getGroupingLevel, Usage]
---

# GroupingColumn Methods

> Returns the unique API name of the field or bucket field
that is used for column grouping.

## GroupingColumn Methods

The following are methods for GroupingColumn. All are instance methods.

-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getName)**  
    Returns the unique API name of the field or bucket field that is used for column grouping.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getLabel)**  
    Returns the localized display name of the field that is used for column grouping.
-   **[getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getDataType)**  
    Returns the data type of the field that is used for column grouping.
-   **[getGroupingLevel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_groupingcolumn.htm#apex_Reports_GroupingColumn_getGroupingLevel)**  
    Returns the level of grouping for the column.

### getName()

Returns the unique API name of the field or bucket field that is used for column grouping.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the localized display name of the field that is used for column grouping.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDataType()

Returns the data type of the field that is used for column grouping.

#### Syntax

public Reports.ColumnDataType getDataType()

#### Return Value

Type: [Reports.ColumnDataType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm "The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.")

### getGroupingLevel()

Returns the level of grouping for the column.

#### Syntax

public Integer getGroupingLevel()

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

-   In a summary report, 0, 1, or 2 indicates grouping at the first, second, or third row level.
-   In a matrix report, 0 or 1 indicates grouping at the first or second row or column level.
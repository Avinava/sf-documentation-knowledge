---
title: "DetailColumn Instance Methods"
domain: apex-reference
topic: detailcolumn-instance-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.836Z
keywords: [DetailColumn, Instance, Methods, Returns, unique, API, name, detail, column, field., getName, Syntax, Return, Value, getLabel, getDataType]
---

# DetailColumn Instance Methods

> Returns the unique API name of the detail column field.

## DetailColumn Instance Methods

The following are instance methods for DetailColumn. All are instance methods.

-   **[getName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_Reports_DetailColumn_getName)**  
    Returns the unique API name of the detail column field.
-   **[getLabel()](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_Reports_DetailColumn_getLabel)**  
    Returns the localized display name of a standard field, the ID of a custom field, or the API name of a bucket field that has detailed data.
-   **[getDataType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm#apex_Reports_DetailColumn_getDataType)**  
    Returns the data type of a detail column field.

### getName()

Returns the unique API name of the detail column field.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getLabel()

Returns the localized display name of a standard field, the ID of a custom field, or the API name of a bucket field that has detailed data.

#### Syntax

public String getLabel()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getDataType()

Returns the data type of a detail column field.

#### Syntax

public Reports.ColumnDataType getDataType()

#### Return Value

Type: [Reports.ColumnDataType](atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm "The Reports.ColumnDataType enum describes the type of data in a column. It is returned by the getDataType method.")
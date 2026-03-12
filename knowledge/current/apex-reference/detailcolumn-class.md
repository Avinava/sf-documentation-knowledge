---
title: "DetailColumn Class"
domain: apex-reference
topic: detailcolumn-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:23.425Z
estimatedTokens: 540
namespace: Reports
keywords: [DetailColumn, describing, contain, detailed, data, listed, report, metadata, Instance, getName, getLabel, getDataType]
---

# DetailColumn Class

> Contains methods for describing fields that contain detailed
data. Detailed data fields are also listed in the report metadata.

**Namespace:** `Reports`

# DetailColumn Class

Contains methods for describing fields that contain detailed data. Detailed data fields are also listed in the report metadata.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

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

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- getName() (atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm)
- getLabel() (atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm)
- getDataType() (atlas.en-us.apexref.meta/apexref/apex_class_reports_detailcolumn.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Reports.ColumnDataType (atlas.en-us.apexref.meta/apexref/apex_enum_reports_columndatatype.htm)

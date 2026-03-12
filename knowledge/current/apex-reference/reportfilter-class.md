---
title: "ReportFilter Class"
domain: apex-reference
topic: reportfilter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:23.105Z
estimatedTokens: 2898
namespace: Reports
keywords: [ReportFilter, Contains, information, report, filter, including, column, operator, value., filterType, Syntax, entityName, getColumn, getEntityName, getFilterType, getOperator, getValue, setColumn, setEntityName, setFilterType]
---

# ReportFilter Class

> Contains information about a report filter, including column,
operator, and value.

**Namespace:** `Reports`

# ReportFilter Class

Contains information about a report filter, including column, operator, and value.

## Namespace

[Reports](atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm "The Reports namespace provides classes for accessing the same data as is available in the Salesforce Reports and Dashboards REST API.")

-   **[ReportFilter Constructors](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_constructors)**

-   **[ReportFilter Methods](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_methods)**


## ReportFilter Constructors

The following are constructors for ReportFilter.

-   **[ReportFilter()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_ctor_2)**
    Creates a new instance of the Reports.ReportFilter class. You can then set values by using the “set” methods.
-   **[ReportFilter(column, operator, value)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_ctor)**
    Creates a new instance of the Reports.ReportFilter class by using the specified parameters.
-   **[ReportFilter(column, operator, value, filterType)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#unique_193057151)**
    Creates a new instance of the Reports.ReportFilter class by using the specified parameters.
-   **[ReportFilter(column, operator, value, filterType, entityName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_ctor_4)**
    Creates a new instance of the Reports.ReportFilter class by using the specified parameters.

### ReportFilter()

Creates a new instance of the Reports.ReportFilter class. You can then set values by using the “set” methods.

#### Signature

public ReportFilter()

### ReportFilter(column, operator, value)

Creates a new instance of the Reports.ReportFilter class by using the specified parameters.

#### Signature

public ReportFilter(String column, String operator, String value)

#### Parameters

column

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

operator

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### ReportFilter(column, operator, value, filterType)

Creates a new instance of the Reports.ReportFilter class by using the specified parameters.

#### Syntax

public ReportFilterType(String column, String operator, String value, Reports.ReportFilterType filterType)

#### Parameters

column

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

operator

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

filterType

Type: [ReportFilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_FilterType.htm "The types of values included in a report filter type.")

### ReportFilter(column, operator, value, filterType, entityName)

Creates a new instance of the Reports.ReportFilter class by using the specified parameters.

#### Syntax

public ReportFilterType(String column, String operator, String value, Reports.ReportFilterType filterType, String entityName)

#### Parameters

column

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

operator

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

filterType

Type: [ReportFilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_FilterType.htm "The types of values included in a report filter type.")

entityName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## ReportFilter Methods

The following are methods for ReportFilter. All are instance methods.

-   **[getColumn()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_getColumn)**
    Returns the unique API name for the field that’s being filtered.
-   **[getEntityName()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_getEntityName)**
    Returns the entity name used in the report filter. Use the entity name to handle ambiguous field names across entities, specifically when using cross filters.
-   **[getFilterType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_getFilterType)**
    Returns the type of report filter.
-   **[getOperator()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_getOperator)**
    Returns the unique API name for the condition that is used to filter a field, such as “greater than” or “not equal to.” Filter conditions depend on the data type of the field.
-   **[getValue()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_getValue)**
    Returns the value that the field is being filtered by. For example, the field Age can be filtered by a numeric value.
-   **[setColumn(column)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_setColumn)**
    Sets the unique API name for the field that’s being filtered.
-   **[setEntityName(entityName)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_setEntityName)**
    Sets the entity name to use in the report filter. Use the entity name to handle ambiguous field names across entities, specifically when using cross filters.
-   **[setFilterType()](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_setFilterType)**
    Sets the type of report filter.
-   **[setOperator(operator)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_setOperator)**
    Sets the unique API name for the condition that is used to filter a field, such as “greater than” or “not equal to.” Filter conditions depend on the data type of the field.
-   **[setValue(value)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_setValue)**
    Sets the value by which a field can be filtered. For example, the field Age can be filtered by a numeric value.
-   **[toString(column)](atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm#apex_Reports_ReportFilter_toString)**
    Returns a string representation of the filter.

### getColumn()

Returns the unique API name for the field that’s being filtered.

#### Syntax

public String getColumn()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getEntityName()

Returns the entity name used in the report filter. Use the entity name to handle ambiguous field names across entities, specifically when using cross filters.

#### Syntax

public String getEntityName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getFilterType()

Returns the type of report filter.

#### Syntax

public String getFilterType()

#### Return Value

Type: [ReportFilterType Enum](atlas.en-us.apexref.meta/apexref/apex_enum_reports_FilterType.htm "The types of values included in a report filter type.")

### getOperator()

Returns the unique API name for the condition that is used to filter a field, such as “greater than” or “not equal to.” Filter conditions depend on the data type of the field.

#### Syntax

public String getOperator()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### getValue()

Returns the value that the field is being filtered by. For example, the field Age can be filtered by a numeric value.

#### Syntax

public String getValue()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### setColumn(column)

Sets the unique API name for the field that’s being filtered.

#### Syntax

public Void setColumn(String column)

#### Parameters

column

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setEntityName(entityName)

Sets the entity name to use in the report filter. Use the entity name to handle ambiguous field names across entities, specifically when using cross filters.

#### Syntax

public Void setEntityName(String entityName)

#### Parameters

operator

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setFilterType()

Sets the type of report filter.

#### Syntax

public Void setFilterType(String column)

#### Parameters

column

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setOperator(operator)

Sets the unique API name for the condition that is used to filter a field, such as “greater than” or “not equal to.” Filter conditions depend on the data type of the field.

#### Syntax

public Void setOperator(String operator)

#### Parameters

operator

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### setValue(value)

Sets the value by which a field can be filtered. For example, the field Age can be filtered by a numeric value.

#### Syntax

public Void setValue(String value)

#### Parameters

value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

#### Return Value

Type: Void

### toString(column)

Returns a string representation of the filter.

#### Signature

public String toString()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

## Related Topics

- Reports (atlas.en-us.apexref.meta/apexref/apex_namespace_Reports.htm)
- ReportFilter Constructors (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm)
- ReportFilter Methods (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm)
- ReportFilter() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm)
- ReportFilter(column, operator, value) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm)
- ReportFilter(column, operator, value, filterType) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm)
- ReportFilter(column, operator, value, filterType, entityName) (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ReportFilterType Enum (atlas.en-us.apexref.meta/apexref/apex_enum_reports_FilterType.htm)
- getColumn() (atlas.en-us.apexref.meta/apexref/apex_class_reports_reportfilter.htm)

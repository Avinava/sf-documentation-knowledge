---
title: "Filter Properties"
domain: apex-reference
topic: filter-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.585Z
keywords: [Filter, Properties, Name, column, that’s, being, evaluated, simple, comparative, type, filter., columnName, Signature, Property, Value, columnValue, subfilters, tableName]
---

# Filter Properties

> Name of the column that’s being evaluated in a simple comparative type
      of filter.

## Filter Properties

The following are properties for Filter.

-   **[columnName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_DataSource_Filter_columnName)**  
    Name of the column that’s being evaluated in a simple comparative type of filter.
-   **[columnValue](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_DataSource_Filter_columnValue)**  
    Value that the filter compares records against in a simple comparative type of filter.
-   **[subfilters](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_DataSource_Filter_subfilters)**  
    List of subfilters for compound filter types, such as NOT\_, AND\_, and OR\_.
-   **[tableName](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_DataSource_Filter_tableName)**  
    Name of the table whose column is being evaluated in a simple comparative type of filter.
-   **[type](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_DataSource_Filter_type)**  
    Type of filter operation that limits the returned data.

### columnName

Name of the column that’s being evaluated in a simple comparative type of filter.

#### Signature

public String columnName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### columnValue

Value that the filter compares records against in a simple comparative type of filter.

#### Signature

public Object columnValue {get; set;}

#### Property Value

Type: Object

### subfilters

List of subfilters for compound filter types, such as NOT\_, AND\_, and OR\_.

#### Signature

public List<DataSource.Filter> subfilters {get; set;}

#### Property Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[DataSource.Filter](#apex_class_DataSource_Filter "Represents a WHERE clause in a SOSL or SOQL query.")\>

### tableName

Name of the table whose column is being evaluated in a simple comparative type of filter.

#### Signature

public String tableName {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### type

Type of filter operation that limits the returned data.

#### Signature

public DataSource.FilterType type {get; set;}

#### Property Value

Type: [DataSource.FilterType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_FilterType.htm "Referenced by the type property on a DataSource.Filter.")
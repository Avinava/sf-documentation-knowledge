---
title: "Filter Class"
domain: apex-reference
topic: filter-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:20.510Z
estimatedTokens: 854
namespace: DataSource
keywords: [Filter, Usage, columnName, columnValue, subfilters, tableName]
---

# Filter Class

> Represents a WHERE

**Namespace:** `DataSource`

# Filter Class

Represents a WHERE clause in a SOSL or SOQL query.

## Namespace

[DataSource](atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm "The DataSource namespace provides the classes for the Apex Connector Framework. Use the Apex Connector Framework to develop a custom adapter for Salesforce Connect. Then connect your Salesforce organization to any data anywhere via the Salesforce Connect custom adapter.")

## Usage

Compound types require child filters. Specifically, the subfilters property can’t be null if the type property is NOT\_, AND\_, or OR\_.

-   **[Filter Properties](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm#apex_DataSource_Filter_properties)**


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

## Related Topics

- DataSource (atlas.en-us.apexref.meta/apexref/apex_namespace_DataSource.htm)
- Filter Properties (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm)
- columnName (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm)
- columnValue (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm)
- subfilters (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm)
- tableName (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm)
- type (atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Filter.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- DataSource.FilterType (atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_FilterType.htm)

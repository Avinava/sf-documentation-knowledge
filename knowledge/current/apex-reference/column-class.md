---
title: "Column Class"
domain: apex-reference
topic: column-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.541Z
keywords: [Column, Class, Returns, new, column, data, type, URL_TYPE, specified, name, length, 000, characters., url, Signature, Parameters, Return, Value]
---

# Column Class

> Returns a new column of data type URL_TYPE with the specified name and the length of 1,000
    characters.

### url(name)

Returns a new column of data type URL\_TYPE with the specified name and the length of 1,000 characters.

#### Signature

public static DataSource.Column url(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the column.

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")

The returned column has these property values.

| Property | Value |
| --- | --- |
| name | name |
| label | name |
| description | name |
| isSortable | true |
| isFilterable | true |
| type | DataSource.DataType.URL_TYPE |
| length | 1000 |
| decimalPlaces | 0 |
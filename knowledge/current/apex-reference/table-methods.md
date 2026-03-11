---
title: "Table Methods"
domain: apex-reference
topic: table-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.635Z
keywords: [Table, Methods, Returns, table, metadata, specified, parameter, values., get, name, labelSingular, labelPlural, description, nameColumn, columns, Signature, Parameters, Return, Value]
---

# Table Methods

> Returns the table metadata with the specified parameter
    values.

## Table Methods

The following are methods for Table.

-   **[get(name, labelSingular, labelPlural, description, nameColumn, columns)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_get)**  
    Returns the table metadata with the specified parameter values.
-   **[get(name, nameColumn, columns)](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_get_2)**  
    Returns the table metadata with the specified parameter values, using the name for the labels and description.

### get(name, labelSingular, labelPlural, description, nameColumn, columns)

Returns the table metadata with the specified parameter values.

#### Signature

public static DataSource.Table get(String name, String labelSingular, String labelPlural, String description, String nameColumn, List<DataSource.Column> columns)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the external table.

labelSingular

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Singular form of the user-friendly name for the table. The labelSingular becomes the object label in the Salesforce user interface.

labelPlural

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Plural form of the user-friendly name for the table. The labelPlural becomes the object’s plural label in the Salesforce user interface.

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Description of the external table.

nameColumn

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the table column that becomes the name field of the external object when the administrator syncs the table.

columns

Type: List<[DataSource.Column](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")\>

List of table columns.

#### Return Value

Type: [DataSource.Table](#apex_class_DataSource_Table "Describes a table on an external system that the Salesforce Connect custom adapter connects to. This class extends the DataSourceUtil class and inherits its methods.")

### get(name, nameColumn, columns)

Returns the table metadata with the specified parameter values, using the name for the labels and description.

#### Signature

public static DataSource.Table get(String name, String nameColumn, List<DataSource.Column> columns)

DataSource.Table, get, \[String, String, List<DataSource.Column>\], DataSource.Table

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the external table.

nameColumn

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the table column that becomes the name field of the external object when the administrator syncs the table.

columns

Type: List<[DataSource.Column](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")\>

List of table columns.

#### Return Value

Type: [DataSource.Table](#apex_class_DataSource_Table "Describes a table on an external system that the Salesforce Connect custom adapter connects to. This class extends the DataSourceUtil class and inherits its methods.")

The returned table metadata has these property values.

| Property | Value |
| --- | --- |
| name | name |
| labelSingular | name |
| labelPlural | name |
| description | name |
| nameColumn | nameColumn |
| columns | columns |
---
title: "Table Properties"
domain: apex-reference
topic: table-properties
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.635Z
keywords: [Table, Properties, List, table, columns., columns, Signature, Property, Value, description, labelPlural, labelSingular, name, nameColumn]
---

# Table Properties

> List of table columns.

## Table Properties

The following are properties for Table.

-   **[columns](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_columns)**  
    List of table columns.
-   **[description](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_description)**  
    Description of what the table represents.
-   **[labelPlural](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_labelPlural)**  
    Plural form of the user-friendly name for the table. The labelPlural becomes the object’s plural label in the Salesforce user interface.
-   **[labelSingular](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_labelSingular)**  
    Singular form of the user-friendly name for the table. The labelSingular becomes the object label in the Salesforce user interface. We recommend that you make object labels unique across all standard, custom, and external objects in the org.
-   **[name](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_name)**  
    Name of the table on the external system.
-   **[nameColumn](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Table.htm#apex_DataSource_Table_nameColumn)**  
    Name of the table column that becomes the name field of the external object when the administrator syncs the table.

### columns

List of table columns.

#### Signature

public List<DataSource.Column> columns {get; set;}

#### Property Value

Type: List<[DataSource.Column](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_Column.htm#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")\>

### description

Description of what the table represents.

#### Signature

public String description {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### labelPlural

Plural form of the user-friendly name for the table. The labelPlural becomes the object’s plural label in the Salesforce user interface.

#### Signature

public String labelPlural {get; set;}

DataSource.Table, labelPlural

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### labelSingular

Singular form of the user-friendly name for the table. The labelSingular becomes the object label in the Salesforce user interface. We recommend that you make object labels unique across all standard, custom, and external objects in the org.

#### Signature

public String labelSingular {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### name

Name of the table on the external system.

#### Signature

public String name {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

### nameColumn

Name of the table column that becomes the name field of the external object when the administrator syncs the table.

#### Signature

public String nameColumn {get; set;}

#### Property Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
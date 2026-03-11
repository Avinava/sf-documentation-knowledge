---
title: "multipicklist(name, picklistValues)"
domain: apex-reference
topic: multipicklistname-picklistvalues
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.541Z
keywords: [multipicklist, name, picklistValues, Returns, new, column, data, type, PICKLIST_MULTISELECT_TYPE, specified, picklist, values., Signature, Parameters, Return, Value]
---

# multipicklist(name, picklistValues)

> Returns a new column of data type PICKLIST_MULTISELECT_TYPE with the specified name and picklist values.

### multipicklist(name, picklistValues)

Returns a new column of data type PICKLIST\_MULTISELECT\_TYPE with the specified name and picklist values.

#### Signature

public static DataSource.Column multipicklist(String name, List<Map<String,String>> picklistValues)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the column.

picklistValues

Type: List<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>>

List of picklist values.

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")
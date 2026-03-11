---
title: "multipicklist(name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted)"
domain: apex-reference
topic: multipicklistname-picklistvalues-ispicklistalphabeticallysorted-ispicklistrestri
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.541Z
keywords: [multipicklist, name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted, Returns, new, column, data, type, PICKLIST_MULTISELECT_TYPE, specified, picklist, values., specify, whether, sorted, alphabetically, restricted., Signature]
---

# multipicklist(name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted)

> Returns a new column of data type PICKLIST_MULTISELECT_TYPE with the specified name and picklist values. You can also
    specify whether the picklist is sorted alphabetically or if the picklist is
    restricted.

### multipicklist(name, picklistValues, isPicklistAlphabeticallySorted, isPicklistRestricted)

Returns a new column of data type PICKLIST\_MULTISELECT\_TYPE with the specified name and picklist values. You can also specify whether the picklist is sorted alphabetically or if the picklist is restricted.

#### Signature

public static DataSource.Column multipicklist(String name, List<Map<String,String>> picklistValues, Boolean isPicklistAlphabeticallySorted, Boolean isPicklistRestricted)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the column.

picklistValues

Type: List<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>>

isPicklistAlphabeticallySorted

Indicates whether the picklist is sorted alphabetically.

isPicklistRestricted

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates whether the picklist is restricted.

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")
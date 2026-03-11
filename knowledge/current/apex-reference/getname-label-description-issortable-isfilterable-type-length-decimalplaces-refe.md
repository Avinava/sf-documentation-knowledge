---
title: "get(name, label, description, isSortable, isFilterable, type,
      length, decimalPlaces, referenceTo, referenceTargetField, picklistValuesObj,
      isPicklistAlphabeticallySorted, isPicklistRestricted)"
domain: apex-reference
topic: getname-label-description-issortable-isfilterable-type-length-decimalplaces-refe
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.541Z
keywords: [get, name, label, description, isSortable, isFilterable, type, length, decimalPlaces, referenceTo, referenceTargetField, picklistValuesObj, isPicklistAlphabeticallySorted, isPicklistRestricted, Returns, new, column, specified, Column, property]
---

# get(name, label, description, isSortable, isFilterable, type,
      length, decimalPlaces, referenceTo, referenceTargetField, picklistValuesObj,
      isPicklistAlphabeticallySorted, isPicklistRestricted)

> Returns a new column with the 13 specified Column property values.

### get(name, label, description, isSortable, isFilterable, type, length, decimalPlaces, referenceTo, referenceTargetField, picklistValuesObj, isPicklistAlphabeticallySorted, isPicklistRestricted)

Returns a new column with the 13 specified Column property values.

#### Signature

public static DataSource.Column get(String name, String label, String description, Boolean isSortable, Boolean isFilterable, DataSource.DataType type, Integer length, Integer decimalPlaces, String referenceTo, String referenceTargetField, Object picklistValuesObj, Boolean isPicklistAlphabeticallySorted, Boolean isPicklistRestricted)

#### Parameters

See [Column Properties](#apex_DataSource_Column_properties) for information about each parameter.

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

label

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

description

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

isSortable

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

isFilterable

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

type

Type: [DataSource.DataType](atlas.en-us.apexref.meta/apexref/apex_enum_DataSource_DataType.htm "Specifies the data types that are supported by the Apex Connector Framework.")

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

decimalPlaces

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

referenceTo

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

referenceTargetField

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

picklistValuesObj

Type: Object

isPicklistAlphabeticallySorted

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

isPicklistRestricted

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")
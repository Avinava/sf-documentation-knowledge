---
title: "currency(name, length, decimalPlaces)"
domain: apex-reference
topic: currencyname-length-decimalplaces
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.541Z
keywords: [currency, name, length, decimalPlaces, Returns, new, column, data, type, CURRENCY_TYPE., Signature, Parameters, Return, Value]
---

# currency(name, length, decimalPlaces)

> Returns a new column of data type CURRENCY_TYPE.

### currency(name, length, decimalPlaces)

Returns a new column of data type CURRENCY\_TYPE.

#### Signature

public static DataSource.Column currency(String name, Integer length, Integer decimalPlaces)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the column.

length

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of characters allowed in the column.

decimalPlaces

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Number of decimal places to the right of the decimal point.

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")
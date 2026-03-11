---
title: "email(name)"
domain: apex-reference
topic: emailname
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.541Z
keywords: [email, name, Returns, new, column, data, type, EMAIL_TYPE., Signature, Parameters, Return, Value]
---

# email(name)

> Returns a new column of data type EMAIL_TYPE.

### email(name)

Returns a new column of data type EMAIL\_TYPE.

#### Signature

public static DataSource.Column email(String name)

#### Parameters

name

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Name of the column.

#### Return Value

Type: [DataSource.Column](#apex_class_DataSource_Column "Describes a column on a DataSource.Table. This class extends the DataSourceUtil class and inherits its methods.")
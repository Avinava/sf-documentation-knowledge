---
title: "FilterOperator Class"
domain: apex-reference
topic: filteroperator-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.842Z
keywords: [FilterOperator, Class, Returns, unique, API, name, filter, operator., Possible, values, restricted, based, data, type, column, being, filtered., example, multipicklist, fields]
---

# FilterOperator Class

> Returns the unique API name of the filter operator. Possible
values for this name are restricted based on the data type of the
column being filtered.  For example multipicklist fields can use the following filter operators: “equals,”
“not equal to,” “includes,” and “excludes.”
Bucket fields are considered to be of the String type.

### getName()

Returns the unique API name of the filter operator. Possible values for this name are restricted based on the data type of the column being filtered.  For example multipicklist fields can use the following filter operators: “equals,” “not equal to,” “includes,” and “excludes.” Bucket fields are considered to be of the String type.

#### Syntax

public String getName()

#### Return Value

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")
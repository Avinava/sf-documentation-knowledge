---
title: "TableResult Class"
domain: apex-reference
topic: tableresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.650Z
keywords: [TableResult, Class, Returns, subset, data, rows, meet, query, criteria, number, table, TableResult., get, tableSelection, Signature, Parameters, Return, Value]
---

# TableResult Class

> Returns the subset of data rows that meet the query criteria, and
      the number of rows in the table, in a TableResult.

### get(tableSelection, rows)

Returns the subset of data rows that meet the query criteria, and the number of rows in the table, in a TableResult.

#### Signature

public static DataSource.TableResult get(DataSource.TableSelection tableSelection, List<Map<String,Object\>> rows)

#### Parameters

tableSelection

Type: [DataSource.TableSelection](atlas.en-us.apexref.meta/apexref/apex_class_DataSource_TableSelection.htm#apex_class_DataSource_TableSelection "Contains a breakdown of the SOQL or SOSL query. Its properties represent the FROM, ORDER BY, SELECT, and WHERE clauses in the query.")

Query details that represent the FROM, ORDER BY, SELECT, and WHERE clauses in a SOQL or SOSL query.

rows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>>

Rows of data.

#### Return Value

Type: [DataSource.TableResult](#apex_class_DataSource_TableResult "Contains the results of a search or query.")
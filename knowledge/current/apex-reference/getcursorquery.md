---
title: "getCursor(query)"
domain: apex-reference
topic: getcursorquery
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [getCursor, query, Creates, cursor, specified, SOQL, executed., Signature, Parameters, Return, Value]
---

# getCursor(query)

> Creates a cursor when the specified SOQL query is executed.

### getCursor(query)

Creates a cursor when the specified SOQL query is executed.

#### Signature

public static Database.Cursor getCursor(String query)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

#### Return Value

Type: [Database.Cursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_class_Database_Cursor "Contains methods to fetch records and to get the number of cursor rows returned from a SOQL query.")
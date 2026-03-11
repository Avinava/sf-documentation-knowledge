---
title: "getPaginationCursor(query)"
domain: apex-reference
topic: getpaginationcursorquery
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [getPaginationCursor, query, Creates, pagination, cursor, specified, SOQL, executed., Signature, Parameters, Return, Value]
---

# getPaginationCursor(query)

> Creates a pagination cursor when the specified SOQL query is executed.

### getPaginationCursor(query)

Creates a pagination cursor when the specified SOQL query is executed.

#### Signature

public static Database.PaginationCursor getPaginationCursor(String query)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

#### Return Value

Type: [Database.PaginationCursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_PaginationCursor.htm#apex_class_Database_PaginationCursor "This class represents a pagination cursor that can traverse a SOQL query result set. It contains methods that fetch rows by page. It also contains a method that returns the total number of rows in the result set.")
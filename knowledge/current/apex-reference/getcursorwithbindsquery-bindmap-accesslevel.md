---
title: "getCursorWithBinds(query, bindMap, accessLevel)"
domain: apex-reference
topic: getcursorwithbindsquery-bindmap-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [getCursorWithBinds, query, bindMap, accessLevel, Creates, cursor, specified, SOQL, executed., Signature, Parameters, Return, Value]
---

# getCursorWithBinds(query, bindMap, accessLevel)

> Creates a cursor when the specified SOQL query is executed.

### getCursorWithBinds(query, bindMap, accessLevel)

Creates a cursor when the specified SOQL query is executed.

#### Signature

public static Database.Cursor getCursorWithBinds(String query, Map bindMap, Object accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query to be run.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")

A map that contains placeholder keys for each bind variable specified in the SOQL query string and its value.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.Cursor](atlas.en-us.apexref.meta/apexref/apex_class_Database_Cursor.htm#apex_class_Database_Cursor "Contains methods to fetch records and to get the number of cursor rows returned from a SOQL query.")
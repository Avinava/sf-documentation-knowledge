---
title: "countQuery(query, accessLevel)"
domain: apex-reference
topic: countqueryquery-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.169Z
keywords: [countQuery, query, accessLevel, Returns, number, records, dynamic, SOQL, would, return, executed., Signature, Parameters, Return, Value, Usage]
---

# countQuery(query, accessLevel)

> Returns the number of records that a dynamic SOQL query would return when
    executed.

### countQuery(query, accessLevel)

Returns the number of records that a dynamic SOQL query would return when executed.

#### Signature

public static Integer countQuery(String query, System.AccessLevel accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Each executed countQuery method counts against the governor limit for SOQL queries.
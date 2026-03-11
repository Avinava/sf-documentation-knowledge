---
title: "countQueryWithBinds(query, bindMap, accessLevel)"
domain: apex-reference
topic: countquerywithbindsquery-bindmap-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.169Z
keywords: [countQueryWithBinds, query, bindMap, accessLevel, Returns, number, records, dynamic, SOQL, would, return, executed., Bind, variables, resolved, Map, parameter, directly, key, rather]
---

# countQueryWithBinds(query, bindMap, accessLevel)

> Returns the number of records that a dynamic SOQL query would return when executed.
        Bind variables in the query are resolved from the bindMap Map parameter
        directly with the key, rather than from Apex code variables.

### countQueryWithBinds(query, bindMap, accessLevel)

Returns the number of records that a dynamic SOQL query would return when executed. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.

#### Signature

public static Integer countQueryWithBinds(String query, Map<String, Object> bindMap, System.AccessLevel accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

SOQL query that includes Apex bind variables preceded by a colon. All bind variables must have a key in the bindMap Map.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."), Object>

A map that contains keys for each bind variable specified in the SOQL queryString and its value. The keys can’t be null or duplicates, and the values can’t be null or empty strings.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced.

#### Return Value

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

#### Usage

For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Each executed countQueryWithBinds method counts against the governor limit for SOQL queries.

#### Example

In this example, the SOQL query uses a bind variable for an Account name. Its value (Acme Inc.) is passed in to the method using the nameBind Map. The accountName variable isn't (and doesn’t have to be) in scope when the query is executed within the method.

```

```
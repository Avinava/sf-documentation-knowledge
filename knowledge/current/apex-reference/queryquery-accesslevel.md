---
title: "query(query, accessLevel)"
domain: apex-reference
topic: queryquery-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.586Z
keywords: [query, accessLevel, Performs, dynamic, SOSL, query., Signature, Parameters, Return, Value, Usage]
---

# query(query, accessLevel)

> Performs a dynamic SOSL query.

### query(query, accessLevel)

Performs a dynamic SOSL query.

#### Signature

public static List<List<SObject>> query(String query, System.AccessLevel accessLevel)

#### Parameters

query

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

A SOSL query string.

To create a SOSL query that includes the WITH SNIPPET clause, use the [Search.find(String searchQuery)](#apex_System_Search_find "Performs a dynamic SOSL query that can include the SOSL WITH SNIPPET clause. Snippets provide more context for users in Salesforce Knowledge article search results.") method instead.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\[\]\]

#### Usage

This method can be used wherever a static SOSL query can be used, such as in regular assignment statements and for loops.

For more information, see [Dynamic SOSL](https://developer.salesforce.com/docs/atlas.en-us.258.0.apexcode.meta/apexcode/apex_dynamic_sosl.htm).
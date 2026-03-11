---
title: "query(queryString, accessLevel)"
domain: apex-reference
topic: queryquerystring-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [query, queryString, accessLevel, Creates, dynamic, SOQL, runtime., Signature, Parameters, Return, Value, Usage]
---

# query(queryString, accessLevel)

> Creates a dynamic SOQL query at runtime.

### query(queryString, accessLevel)

Creates a dynamic SOQL query at runtime.

#### Signature

public static List<SObject> query(String queryString, System.AccessLevel accessLevel)

#### Parameters

queryString

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

#### Usage

This method can be used wherever a static SOQL query can be used, such as in regular assignment statements and for loops. Unlike inline SOQL, fields in bind variables aren’t supported. For more information, see [Dynamic SOQL](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_dynamic_soql.htm).

Database.query() calls containing an inner query for a related child object may not return the entire result set based on the size and complexity of the records requested. Instead, use Database.getQueryLocator() in conjunction with Apex Batch. Alternatively, you can use the same SOQL query with SOAP API to be able to access all the resulting records. 

Each executed query method counts against the governor limit for SOQL queries.
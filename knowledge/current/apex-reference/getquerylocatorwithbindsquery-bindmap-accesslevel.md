---
title: "getQueryLocatorWithBinds(query, bindMap,
    accessLevel)"
domain: apex-reference
topic: getquerylocatorwithbindsquery-bindmap-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [getQueryLocatorWithBinds, query, bindMap, accessLevel, Creates, QueryLocator, object, used, batch, Apex, Visualforce., Bind, variables, resolved, Map, parameter, directly, key, rather, code]
---

# getQueryLocatorWithBinds(query, bindMap,
    accessLevel)

> Creates a QueryLocator object used in batch Apex or Visualforce. Bind variables in the
        query are resolved from the bindMap Map parameter directly with the key,
        rather than from Apex code variables.

### getQueryLocatorWithBinds(query, bindMap, accessLevel)

Creates a QueryLocator object used in batch Apex or Visualforce. Bind variables in the query are resolved from the bindMap Map parameter directly with the key, rather than from Apex code variables.

#### Signature

public static Database.QueryLocator getQueryLocatorWithBinds(String query, Map<String, Object> bindMap, System.AccessLevel accessLevel)

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

Type: [Database.QueryLocator](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_batch.htm#apex_methods_system_database_batch "Represents the record set returned by Database.getQueryLocator and used with Batch Apex.")

#### Usage

The access level is evaluated only when the QueryLocator is created. A QueryLocator can be long lived, such as when used in a batch. We don’t reevaluate the object and field-level security with each iteration of the QueryLocator. As a result, if you specify user mode, and then change the security settings after the QueryLocator is created, the new settings aren’t enforced.

You can't use getQueryLocatorWithBinds with any query that contains an [aggregate function](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_SOQL_agg_fns.htm).

Each executed getQueryLocatorWithBinds method counts against the governor limit for the total number of records retrieved by Database.getQueryLocator(10,000) and the total number of SOQL queries issued. See Per Transaction Apex Limits.

For more information, see [Understanding Apex Managed Sharing](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_bulk_sharing.htm), and [StandardSetController Class](atlas.en-us.apexref.meta/apexref/apex_pages_standardsetcontroller.htm#apex_pages_standardsetcontroller "StandardSetController objects allow you to create list controllers similar to, or as extensions of, the pre-built Visualforce list controllers provided by Salesforce.").

#### Example

In this example, the SOQL query uses a bind variable for an Account name. Its value (Acme Corporation) is passed in using the acctBinds Map.

```

```
---
title: "handleSoqlQuery(targetType, stubbedQuery, bindMap)"
domain: apex-reference
topic: handlesoqlquerytargettype-stubbedquery-bindmap
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:34.533Z
keywords: [handleSoqlQuery, targetType, stubbedQuery, bindMap, Defines, mocked, response, SOQL, query, executed, against, specified, SObject, type., Signature, Parameters, Return, Value, See]
---

# handleSoqlQuery(targetType, stubbedQuery, bindMap)

> Defines a mocked response for a SOQL query executed against the specified SObject
    type.

### handleSoqlQuery(targetType, stubbedQuery, bindMap)

Defines a mocked response for a SOQL query executed against the specified SObject type.

#### Signature

public List<SObject> handleSoqlQuery(Schema.SObjectType targetType, String stubbedQuery, Map<String,Object> bindMap)

#### Parameters

targetType

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

The SObject type to be stubbed. This parameter can’t be null.

stubbedQuery

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The SOQL query whose response is to be stubbed. Bind variables are replaced with placeholders.

bindMap

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String,Object>

A map that contains placeholder keys for each bind variable specified in the SOQL query string and its value.

#### Return Value

Type: List<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

The list of stubbed SObjects resulting from the SOQL query.

#### See Also

-   [Test Class](atlas.en-us.apexref.meta/apexref/apex_methods_system_test.htm#apex_methods_system_test "Contains methods related to Apex tests.")
    
-   [*Apex Developer Guide:* Mock SOQL Tests for Data Cloud Data Model Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm "Apex Developer Guide: Mock SOQL Tests for Data Cloud Data Model
    Objects - HTML (New Window)")
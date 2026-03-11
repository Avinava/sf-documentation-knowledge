---
title: "createStubQueryRow(targetType, fieldMapWithRelationshipKeys)"
domain: apex-reference
topic: createstubqueryrowtargettype-fieldmapwithrelationshipkeys
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.968Z
keywords: [createStubQueryRow, targetType, fieldMapWithRelationshipKeys, Creates, instance, stubbed, SObject, type, provide, testing, results, extended, System.SoqlStubProvider, class., Signature, Parameters, Return, Value, Example, See]
---

# createStubQueryRow(targetType, fieldMapWithRelationshipKeys)

> Creates an instance of a stubbed SObject type that you can use to provide testing results
    in the extended System.SoqlStubProvider class.

### createStubQueryRow(targetType, fieldMapWithRelationshipKeys)

Creates an instance of a stubbed SObject type that you can use to provide testing results in the extended System.SoqlStubProvider class.

#### Signature

public static SObject createStubQueryRow(Schema.SObjectType targetType, Map<String,Object> fieldMapWithRelationshipKeys)

#### Parameters

targetType

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

The SObject type to be stubbed. This parameter can’t be null.

fieldMapWithRelationshipKeys

Type: [Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String,Object>

The map contains the fields for a parent entity, keyed by the field name with a value for each field. Key and value pairs can also be used for an aggregate relationship. The key holds the name of the aggregate relationship and the value is a list of SObjects.

#### Return Value

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

Returns the stubbed SObject to use in testing.

#### Example

ssot\_\_EmailEngagement\_\_dlm engagement = (ssot\_\_EmailEngagement\_\_dlm)Test.createStubQueryRow(ssot\_\_EmailEngagement\_\_dlm.SObjectType, new Map<string, object> { 'ssot\_\_Name\_\_c' => 'My Email Engagement', 'ssot\_\_CityName\_\_c' => 'San Francisco' } );

#### See Also

-   [*Apex Developer Guide*: Mock SOQL Tests for Data Cloud Data Model Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm "Apex Developer Guide: Mock SOQL Tests for Data Cloud Data Model
    Objects - HTML (New Window)")
---
title: "createStubQueryRows(targetType, fieldMapWithRelationshipKeysForMultipleRows)"
domain: apex-reference
topic: createstubqueryrowstargettype-fieldmapwithrelationshipkeysformultiplerows
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.968Z
keywords: [createStubQueryRows, targetType, fieldMapWithRelationshipKeysForMultipleRows, Creates, instances, stubbed, SObject, types, provide, testing, results, extended, System.SoqlStubProvider, class., Signature, Parameters, Return, Value, Example, See]
---

# createStubQueryRows(targetType, fieldMapWithRelationshipKeysForMultipleRows)

> Creates instances of stubbed SObject types that you can use to provide testing results in
        the extended System.SoqlStubProvider class.

### createStubQueryRows(targetType, fieldMapWithRelationshipKeysForMultipleRows)

Creates instances of stubbed SObject types that you can use to provide testing results in the extended System.SoqlStubProvider class.

#### Signature

public static List<SObject> createStubQueryRows(Schema.SObjectType targetType, List<Map<String,Object>> fieldMapWithRelationshipKeysForMultipleRows)

#### Parameters

targetType

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

The SObject type to be stubbed. This parameter can’t be null.

fieldMapWithRelationshipKeysForMultipleRows

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Map](atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm#apex_methods_system_map "Contains methods for the Map collection type.")<String,Object>>

The list of maps containing the fields for a parent entity, keyed by the field name with a value for each field. Key and value pairs can also be used for an aggregate relationship used in the query. The key holds the name of the aggregate relationship and the value is a list of SObjects.

#### Return Value

Type: List<[SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

Returns a list of stubbed SObject types to use in testing.

#### Example

List<Map<String, Object>> engagementMaps = new List<Map<String, Object>>(); Map<String, Object> engagement = new Map<String, Object> { 'ssot\_\_Name\_\_c' => 'My Email Engagement', 'ssot\_\_CityName\_\_c' => 'San Francisco' }; Map<String, Object> engagement2 = new Map<String, Object> { 'ssot\_\_Name\_\_c' => 'My Other Email Engagement', 'ssot\_\_CityName\_\_c' => 'New York' }; engagementMaps.add(engagement); engagementMaps.add(engagement2); List<ssot\_\_EmailEngagement\_\_dlm> engagements = (List<ssot\_\_EmailEngagement\_\_dlm>)Test.createStubQueryRows(ssot\_\_EmailEngagement\_\_dlm.SObjectType, engagementMaps);

#### See Also

-   [*Apex Developer Guide*: Mock SOQL Tests for Data Cloud Data Model Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm "Apex Developer Guide: Mock SOQL Tests for Data Cloud Data Model
    Objects - HTML (New Window)")
---
title: "SoqlStubProvider Class"
domain: apex-reference
topic: soqlstubprovider-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:21.335Z
estimatedTokens: 1476
namespace: System
keywords: [SoqlStubProvider, Contains, create, mock, test, handling, SOQL, query, responses, Data, Cloud, data, model, objects, DMOs, Usage, Note, Example, handleSoqlQuery, targetType]
---

# SoqlStubProvider Class

> Contains a method to create a mock test class for handling SOQL query responses for Data
    Cloud data model objects (DMOs).

**Namespace:** `System`

# SoqlStubProvider Class

Contains a method to create a mock test class for handling SOQL query responses for Data Cloud data model objects (DMOs).

## Namespace

[System](atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm "The System namespace provides classes and methods for core Apex functionality.")

## Usage

To create mock test classes, extend the SoqlStubProvider class and override the handleSoqlQuery() class method.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexref)

#### Note

[SOQL For Loops](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/langCon_apex_loops_for_SOQL.htm) in Apex aren't supported for SOQL stubs in static or dynamic SOQL queries against DMOs.

See [Mock SOQL Tests for Data Cloud Data Model Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm "HTML (New Window)") in the Apex Developer Guide.

## Example

This example shows a mock test class for the SkyMilesForBusinessOptInController class.

@IsTest public class SkyMilesForBusinessOptInController\_Test { @IsTest public static void mockSoql() { SoqlStubProvider stub = new UnifiedIndividualSoqlStub(); Test.createSoqlStub(UnifiedIndividual\_\_dlm.sObjectType, stub); Assert.isTrue(Test.isSoqlStubDefined(UnifiedIndividual\_\_dlm.sObjectType)); Test.startTest(); string companyId = 'SampleCompanyId'; // Performs SOQL query against Data Model Object List<SkyMilesMember> members = SkyMilesForBusinessOptInController.getSkyMilesProfilesFromDataCloud(companyId); Test.stopTest(); Assert.areEqual(1, members.size()); SkyMilesMember member = members\[0\]; Assert.areEqual(companyId, member.CompanyId); Assert.areEqual(5000, member.SkyMilesBalance); } class UnifiedIndividualSoqlStub extends SoqlStubProvider { public override List<sObject> handleSoqlQuery(sObjectType sot, string stubbedQuery, Map<string, object> bindVars) { Assert.areEqual(UnifiedIndividual\_\_dlm.sObjectType, sot); // Stub assumes that the SOQL query is searching for a single record by company id string companyId = 'Default'; if(bindVars.containsKey('tmpVar1')) { companyId = (string)bindVars.get('tmpVar1'); } UnifiedIndividual\_\_dlm dmo = (UnifiedIndividual\_\_dlm)Test.createStubQueryRow( sot, new Map<string, object> { 'ssot\_\_FirstName\_\_c' => 'Codey', 'ssot\_\_LastName\_\_c' => 'Bear', 'ssot\_\_Email\_\_c' => 'developer@salesforce.com', 'ssot\_\_SkyMilesBalance\_\_c' => 5000, 'ssot\_\_MedallionStatus\_\_c' => 'Gold', 'ssot\_\_CompanyId\_\_c' => companyId } ); return new List<sObject> { dmo }; } } }

public with sharing class SkyMilesForBusinessOptInController { public static List<SkyMilesMember> getSkyMilesProfilesFromDataCloud(String companyId) { List<UnifiedIndividual\_\_dlm> unifiedIndividuals = \[ SELECT Id, ssot\_\_FirstName\_\_c, ssot\_\_LastName\_\_c, ssot\_\_Email\_\_c, ssot\_\_SkyMilesBalance\_\_c, ssot\_\_MedallionStatus\_\_c, ssot\_\_CompanyId\_\_c FROM UnifiedIndividual\_\_dlm WHERE ssot\_\_CompanyId\_\_c = :companyId \]; List<SkyMilesMember> skyMilesMembers = new List<SkyMilesMember>(); for (UnifiedIndividual\_\_dlm individual : unifiedIndividuals) { skyMilesMembers.add( new SkyMilesMember( individual.Id, individual.ssot\_\_FirstName\_\_c, individual.ssot\_\_LastName\_\_c, individual.ssot\_\_Email\_\_c, individual.ssot\_\_SkyMilesBalance\_\_c, individual.ssot\_\_MedallionStatus\_\_c, individual.ssot\_\_CompanyId\_\_c ) ); } return skyMilesMembers; } }

-   **[SoqlStubProvider Methods](atlas.en-us.apexref.meta/apexref/apex_class_System_SoqlStubProvider.htm#apex_System_SoqlStubProvider_methods)**


## SoqlStubProvider Methods

The following are methods for SoqlStubProvider.

-   **[handleSoqlQuery(targetType, stubbedQuery, bindMap)](atlas.en-us.apexref.meta/apexref/apex_class_System_SoqlStubProvider.htm#apex_System_SoqlStubProvider_handleSoqlQuery)**
    Defines a mocked response for a SOQL query executed against the specified SObject type.

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

## Related Topics

- System (atlas.en-us.apexref.meta/apexref/apex_namespace_System.htm)
- SoqlStubProvider Methods (atlas.en-us.apexref.meta/apexref/apex_class_System_SoqlStubProvider.htm)
- handleSoqlQuery(targetType, stubbedQuery, bindMap) (atlas.en-us.apexref.meta/apexref/apex_class_System_SoqlStubProvider.htm)
- Schema.SObjectType (atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Map (atlas.en-us.apexref.meta/apexref/apex_methods_system_map.htm)
- SObject (atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm)
- Test Class (atlas.en-us.apexref.meta/apexref/apex_methods_system_test.htm)

---
title: "Mock SOQL Tests for Data Cloud Data Model Objects"
domain: apex-guide
topic: mock-soql-tests-for-data-cloud-data-model-objects
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:43:46.212Z
keywords: [Mock, SOQL, Tests, Data, Cloud, Model, Objects, Note, See]
---

# Mock SOQL Tests for Data Cloud Data Model Objects

# Mock SOQL Tests for Data Cloud Data Model Objects

You can mock SOQL query responses for Data Cloud data model objects (DMOs) in Apex testing by using the new SOQL stub methods and a new test class. Use static or dynamic SOQL queries against DMOs and return mock records in a testing context.

Create mock test classes by extending the new System.SoqlStubProvider class and overriding the handleSoqlQuery() class method. Create DMO instances using either Test.createStubQueryRow() or Test.createStubQueryRows(). Register the mock provider in the test using Test.createSoqlStub() and execute the test code.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=apexcode)

#### Note

Apex governor limits apply to the stubbed records.

The SOQL query must be against a DMO or an external object, either directly with a FROM clause or via a subquery. If you query against a stubbed object type that doesn’t include a DMO or an external object, the error Stubbed query invocations can't be used without a participating query stub set. is thrown.

These features are not allowed within a stub implementation:

-   SOQL
-   SOSL
-   Callouts
-   Future methods
-   Queueable Jobs
-   Batch Jobs
-   DML
-   Platform Events

This example shows a mock test class for the SkyMilesForBusinessOptInController class.

@IsTest public class SkyMilesForBusinessOptInController\_Test { @IsTest public static void mockSoql() { SoqlStubProvider stub = new UnifiedIndividualSoqlStub(); Test.createSoqlStub(UnifiedIndividual\_\_dlm.sObjectType, stub); Assert.isTrue(Test.isSoqlStubDefined(UnifiedIndividual\_\_dlm.sObjectType)); Test.startTest(); string companyId = 'SampleCompanyId'; // Performs SOQL query against Data Model Object List<SkyMilesMember> members = SkyMilesForBusinessOptInController.getSkyMilesProfilesFromDataCloud(companyId); Test.stopTest(); Assert.areEqual(1, members.size()); SkyMilesMember member = members\[0\]; Assert.areEqual(companyId, member.CompanyId); Assert.areEqual(5000, member.SkyMilesBalance); } class UnifiedIndividualSoqlStub extends SoqlStubProvider { public override List<sObject> handleSoqlQuery(sObjectType sot, string stubbedQuery, Map<string, object> bindVars) { Assert.areEqual(UnifiedIndividual\_\_dlm.sObjectType, sot); // Stub assumes that the SOQL query is searching for a single record by company id string companyId = 'Default'; if(bindVars.containsKey('tmpVar1')) { companyId = (string)bindVars.get('tmpVar1'); } UnifiedIndividual\_\_dlm dmo = (UnifiedIndividual\_\_dlm)Test.createStubQueryRow( sot, new Map<string, object> { 'ssot\_\_FirstName\_\_c' => 'Codey', 'ssot\_\_LastName\_\_c' => 'Bear', 'ssot\_\_Email\_\_c' => 'developer@salesforce.com', 'ssot\_\_SkyMilesBalance\_\_c' => 5000, 'ssot\_\_MedallionStatus\_\_c' => 'Gold', 'ssot\_\_CompanyId\_\_c' => companyId } ); return new List<sObject> { dmo }; } } }

public with sharing class SkyMilesForBusinessOptInController { public static List<SkyMilesMember> getSkyMilesProfilesFromDataCloud(String companyId) { List<UnifiedIndividual\_\_dlm> unifiedIndividuals = \[ SELECT Id, ssot\_\_FirstName\_\_c, ssot\_\_LastName\_\_c, ssot\_\_Email\_\_c, ssot\_\_SkyMilesBalance\_\_c, ssot\_\_MedallionStatus\_\_c, ssot\_\_CompanyId\_\_c FROM UnifiedIndividual\_\_dlm WHERE ssot\_\_CompanyId\_\_c = :companyId \]; List<SkyMilesMember> skyMilesMembers = new List<SkyMilesMember>(); for (UnifiedIndividual\_\_dlm individual : unifiedIndividuals) { skyMilesMembers.add( new SkyMilesMember( individual.Id, individual.ssot\_\_FirstName\_\_c, individual.ssot\_\_LastName\_\_c, individual.ssot\_\_Email\_\_c, individual.ssot\_\_SkyMilesBalance\_\_c, individual.ssot\_\_MedallionStatus\_\_c, individual.ssot\_\_CompanyId\_\_c ) ); } return skyMilesMembers; } }

#### See Also

-   [*Apex Reference Guide:* SoqlStubProvider Class](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexref.meta/apexref/apex_class_System_SoqlStubProvider.htm "Apex Reference Guide: SoqlStubProvider Class - HTML (New Window)")
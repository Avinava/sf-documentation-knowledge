---
title: "createSoqlStub(targetType, soqlStub)"
domain: apex-reference
topic: createsoqlstubtargettype-soqlstub
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.968Z
keywords: [createSoqlStub, targetType, soqlStub, Creates, stub, respond, SOQL, queries, against, specified, SObject, type, during, testing., Signature, Parameters, Return, Value, See]
---

# createSoqlStub(targetType, soqlStub)

> Creates a stub that will respond to SOQL queries against the specified SObject type you
    can use during testing.

### createSoqlStub(targetType, soqlStub)

Creates a stub that will respond to SOQL queries against the specified SObject type you can use during testing.

#### Signature

public static void createSoqlStub(Schema.SObjectType targetType, System.SoqlStubProvider soqlStub)

#### Parameters

targetType

Type: [Schema.SObjectType](atlas.en-us.apexref.meta/apexref/apex_class_Schema_SObjectType.htm#apex_class_Schema_SObjectType "A Schema.sObjectType object is returned from the field describe result using the getReferenceTo method, or from the sObject describe result using the getSObjectType method.")

The SObject type to be stubbed. This parameter can’t be null.

soqlStub

Type: [System.SoqlStubProvider](atlas.en-us.apexref.meta/apexref/apex_class_System_SoqlStubProvider.htm#apex_class_System_SoqlStubProvider "Contains a method to create a mock test class for handling SOQL query responses for Data Cloud data model objects (DMOs).")

An implementation of the SoqlStubProvider abstract class.

#### Return Value

Type: void

#### See Also

-   [*Apex Developer Guide*: Mock SOQL Tests for Data Cloud Data Model Objects](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/MockSOQLTestsForDMOs.htm "Apex Developer Guide: Mock SOQL Tests for Data Cloud Data Model
    Objects - HTML (New Window)")
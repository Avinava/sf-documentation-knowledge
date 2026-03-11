---
title: "update(recordsToUpdate, dmlOptions, accessLevel)"
domain: apex-reference
topic: updaterecordstoupdate-dmloptions-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.171Z
keywords: [update, recordsToUpdate, dmlOptions, accessLevel, Modifies, existing, sObject, records, such, individual, accounts, contacts, organization’s, data., Signature, Parameters, Return, Value]
---

# update(recordsToUpdate, dmlOptions, accessLevel)

> Modifies one or more existing sObject records, such as individual accounts or contacts,
    in your organization’s data.

### update(recordsToUpdate, dmlOptions, accessLevel)

Modifies one or more existing sObject records, such as individual accounts or contacts, in your organization’s data.

#### Signature

public static List<Database.SaveResult> update(List<SObject> recordsToUpdate, Database.DMLOptions dmlOptions, System.AccessLevel accessLevel)

#### Parameters

recordsToUpdate

Type: List<[sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")\>

dmlOptions

Type: [Database.DMLOptions](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_dmloptions.htm#apex_methods_system_database_dmloptions "Enables you to set options related to DML operations.")

The optional dmlOptions parameter specifies additional data for the transaction, such as assignment rule information or rollback behavior when errors occur during record insertions.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>
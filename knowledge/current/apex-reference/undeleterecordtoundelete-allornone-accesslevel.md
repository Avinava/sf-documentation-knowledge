---
title: "undelete(recordToUndelete, allOrNone, accessLevel)"
domain: apex-reference
topic: undeleterecordtoundelete-allornone-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [undelete, recordToUndelete, allOrNone, accessLevel, Restores, existing, sObject, record, such, individual, account, contact, organization's, Recycle, Bin., Signature, Parameters, Return, Value, Usage]
---

# undelete(recordToUndelete, allOrNone, accessLevel)

> Restores an existing sObject record, such as an individual account or contact, from
    your organization's Recycle Bin.

### undelete(recordToUndelete, allOrNone, accessLevel)

Restores an existing sObject record, such as an individual account or contact, from your organization's Recycle Bin.

#### Signature

public static Database.UndeleteResult undelete(SObject recordToUndelete, Boolean allOrNone, System.AccessLevel accessLevel)

#### Parameters

recordToUndelete

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

allOrNone

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

(Optional) The allOrNone parameter specifies whether the operation allows partial success. If allOrNone is set to false and a record fails, the remainder of the DML operation can still succeed. You must iterate through the returned results to identify which records succeeded or failed. If allOrNone is set to true and the method isn’t successful, an exception is thrown. The default for the parameter is true.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.UndeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_methods_system_database_undeleteresult "The result of an undelete DML operation returned by the Database.undelete method.")

#### Usage

undelete is analogous to the UNDELETE statement in SQL.

Each executed undelete method counts against the governor limit for DML statements.
---
title: "merge(mergeToRecord, duplicateRecord, accessLevel)"
domain: apex-reference
topic: mergemergetorecord-duplicaterecord-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [merge, mergeToRecord, duplicateRecord, accessLevel, Merges, specified, duplicate, sObject, record, same, type, deleting, reparenting, any, related, records., Signature, Parameters, Return, Value]
---

# merge(mergeToRecord, duplicateRecord, accessLevel)

> Merges the specified duplicate sObject record into the mergeToRecord sObject of the same type, deleting the duplicate, and reparenting any
    related records.

### merge(mergeToRecord, duplicateRecord, accessLevel)

Merges the specified duplicate sObject record into the mergeToRecord sObject of the same type, deleting the duplicate, and reparenting any related records.

#### Signature

public static Database.MergeResult merge(SObject mergeToRecord, SObject duplicateRecord, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record to merge with the mergeToRecord. This sObject must be of the same type as the mergeToRecord.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.
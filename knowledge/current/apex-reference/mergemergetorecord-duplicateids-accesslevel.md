---
title: "merge(mergeToRecord, duplicateIds, accessLevel)"
domain: apex-reference
topic: mergemergetorecord-duplicateids-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [merge, mergeToRecord, duplicateIds, accessLevel, Merges, two, records, same, sObject, type, record, deleting, others, reparenting, any, related, records., Signature, Parameters, Return]
---

# merge(mergeToRecord, duplicateIds, accessLevel)

> Merges up to two records of the same sObject type into the mergeToRecord sObject record, deleting the others, and reparenting any related
    records.

### merge(mergeToRecord, duplicateIds, accessLevel)

Merges up to two records of the same sObject type into the mergeToRecord sObject record, deleting the others, and reparenting any related records.

#### Signature

public static List<Database.MergeResult> merge(SObject mergeToRecord, List<Id> duplicateIds, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the other records are merged into.

duplicateIds

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

A list of IDs of up to two records to merge with the mergeToRecord. These records must be of the same sObject type as the mergeToRecord.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")\>

#### Usage

Each executed merge method counts against the governor limit for DML statements.
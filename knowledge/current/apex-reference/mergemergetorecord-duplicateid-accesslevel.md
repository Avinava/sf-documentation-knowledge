---
title: "merge(mergeToRecord, duplicateId, accessLevel)"
domain: apex-reference
topic: mergemergetorecord-duplicateid-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [merge, mergeToRecord, duplicateId, accessLevel, Merges, duplicate, record, sObject, same, type, deleting, reparenting, any, related, records., only, accounts, contacts, leads., Signature]
---

# merge(mergeToRecord, duplicateId, accessLevel)

> Merges the duplicate record into the mergeToRecord
    sObject record of the same type, deleting the duplicate, and reparenting any related records.
    Merges only accounts, contacts, or leads.

### merge(mergeToRecord, duplicateId, accessLevel)

Merges the duplicate record into the mergeToRecord sObject record of the same type, deleting the duplicate, and reparenting any related records. Merges only accounts, contacts, or leads.

#### Signature

public static Database.MergeResult merge(SObject mergeToRecord, Id duplicateId, System.AccessLevel accessLevel)

#### Parameters

mergeToRecord

Type: [sObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The sObject record that the duplicate record is merged into.

duplicateId

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

The ID of the record to merge with the mergeToRecord. This record must be of the same sObject type as the mergeToRecord.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.MergeResult](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_class_database_mergeresult "Contains the result of a merge Database method operation.")

#### Usage

Each executed merge method counts against the governor limit for DML statements.
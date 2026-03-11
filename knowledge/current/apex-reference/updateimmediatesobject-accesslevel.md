---
title: "updateImmediate(sobject, accessLevel)"
domain: apex-reference
topic: updateimmediatesobject-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.171Z
keywords: [updateImmediate, sobject, accessLevel, Initiates, request, update, external, object, data, relevant, system., executed, synchronously, sent, system, that's, defined, object's, associated, source.]
---

# updateImmediate(sobject, accessLevel)

> Initiates a request to update external object data on the relevant external system.
        The request is executed synchronously and is sent to the external system that's defined by
        the external object's associated external data source. If the Apex transaction contains
        pending changes, the synchronous operation can't be completed and throws an
        exception.

### updateImmediate(sobject, accessLevel)

Initiates a request to update external object data on the relevant external system. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.SaveResult updateImmediate(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

External object record to modify.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")

Status result for the update operation.

#### Usage

If a record update fails, the method doesn’t throw an exception. The returned SaveResult object indicates whether the operation was successful. If it failed, the object returns the error code and description.
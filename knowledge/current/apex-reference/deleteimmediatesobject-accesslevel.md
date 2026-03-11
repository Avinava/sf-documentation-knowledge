---
title: "deleteImmediate(sobject, accessLevel)"
domain: apex-reference
topic: deleteimmediatesobject-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [deleteImmediate, sobject, accessLevel, Initiates, request, delete, external, data, corresponds, specified, object, record., executed, synchronously, sent, system, that's, defined, object's, associated]
---

# deleteImmediate(sobject, accessLevel)

> Initiates a request to delete the external data that corresponds to the specified
        external object record. The request is executed synchronously and is sent to the external
        system that's defined by the external object's associated external data source. If the Apex
        transaction contains pending changes, the synchronous operation can't be completed and
        throws an exception.

### deleteImmediate(sobject, accessLevel)

Initiates a request to delete the external data that corresponds to the specified external object record. The request is executed synchronously and is sent to the external system that's defined by the external object's associated external data source. If the Apex transaction contains pending changes, the synchronous operation can't be completed and throws an exception.

#### Signature

public static Database.DeleteResult deleteImmediate(SObject sobject, System.AccessLevel accessLevel)

#### Parameters

sobject

Type: [SObject](atlas.en-us.apexref.meta/apexref/apex_methods_system_sobject.htm#apex_methods_system_sobject "Contains methods for the sObject data type.")

The external object record to delete.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: [Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")

Status result for the delete operation.
---
title: "deleteImmediate(sobjects, accessLevel)"
domain: apex-reference
topic: deleteimmediatesobjects-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.170Z
keywords: [deleteImmediate, sobjects, accessLevel, Initiates, requests, delete, external, data, corresponds, specified, object, records., executed, synchronously, sent, systems, defined, objects', associated, sources.]
---

# deleteImmediate(sobjects, accessLevel)

> Initiates requests to delete the external data that corresponds to the specified
        external object records. The requests are executed synchronously and are sent to the
        external systems that are defined by the external objects' associated external data sources.
        If the Apex transaction contains pending changes, the synchronous operations can't be
        completed and throw exceptions.

### deleteImmediate(sobjects, accessLevel)

Initiates requests to delete the external data that corresponds to the specified external object records. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.DeleteResult> deleteImmediate(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to delete.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.DeleteResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_methods_system_database_deleteresult "Represents the result of a delete DML operation returned by the Database.delete method.")\>

Status results for the delete operation.

#### Usage

The batch limit for big objects using deleteImmediate() is 50,000 records at once.
---
title: "updateImmediate(sobjects, accessLevel)"
domain: apex-reference
topic: updateimmediatesobjects-accesslevel
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.171Z
keywords: [updateImmediate, sobjects, accessLevel, Initiates, requests, update, external, object, data, relevant, systems., executed, synchronously, sent, systems, defined, objects', associated, sources., Apex]
---

# updateImmediate(sobjects, accessLevel)

> Initiates requests to update external object data on the relevant external systems.
        The requests are executed synchronously and are sent to the external systems that are
        defined by the external objects' associated external data sources. If the Apex transaction
        contains pending changes, the synchronous operations can't be completed and throw
        exceptions.

### updateImmediate(sobjects, accessLevel)

Initiates requests to update external object data on the relevant external systems. The requests are executed synchronously and are sent to the external systems that are defined by the external objects' associated external data sources. If the Apex transaction contains pending changes, the synchronous operations can't be completed and throw exceptions.

#### Signature

public static List<Database.SaveResult> updateImmediate(List<SObject> sobjects, System.AccessLevel accessLevel)

#### Parameters

sobjects

Type: List<SObject>

List of external object records to modify.

accessLevel

Type: [System.AccessLevel](atlas.en-us.apexref.meta/apexref/apex_class_System_AccessLevel.htm#apex_class_System_AccessLevel "Defines the different modes, such as system or user mode, that Apex database operations execute in.")

(Optional) The accessLevel parameter specifies whether the method runs in system mode (AccessLevel.SYSTEM\_MODE) or user mode (AccessLevel.USER\_MODE). In system mode, the object and field-level permissions of the current user are ignored, and the record sharing rules are controlled by the [class sharing keywords](https://developer.salesforce.com/docs/atlas.en-us.260.0.apexcode.meta/apexcode/apex_classes_keywords_sharing.htm). In user mode, the object permissions, field-level security, and sharing rules of the current user are enforced. System mode is the default.

#### Return Value

Type: List<[Database.SaveResult](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_methods_system_database_saveresult "The result of an insert or update DML operation returned by a Database method.")\>

Status results for the update operation.

#### Usage

The operation allows partial success. If one or more record updates fail, the method doesn’t throw an exception and the remainder of the DML operation can still succeed. The returned SaveResult objects indicate whether the operation was successful. If it wasn’t successful, the objects also return the error code and description.
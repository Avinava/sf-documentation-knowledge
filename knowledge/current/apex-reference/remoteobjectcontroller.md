---
title: "RemoteObjectController"
domain: apex-reference
topic: remoteobjectcontroller
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.115Z
keywords: [RemoteObjectController, Update, records, database., update, type, recordIds, fields, Signature, Parameters, Return, Value]
---

# RemoteObjectController

> Update records in the database.

### update(type, recordIds, fields)

Update records in the database.

#### Signature

public static Map<String,Object\> update(String type, List<String\> recordIds, Map<String,Object\> fields)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sObject type on which update is being called.

recordIds

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The IDs of the records to be updated.

fields

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The fields to update, and the value to update each field with.

#### Return Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The return value is a map that represents the result of the Remote Objects operation. What is returned depends on how the method was called and the results of the call.

Single Update—Success

A map that contains a single element with the ID of the record that was updated. For example, { id: 'recordId' }.

Batch Update—Success

A map that contains a single element, an array of Map<String,Object> elements. Each element contains the ID of the record updated and an array of errors, if there were any, for that record’s individual update. For example, { results: \[ { id: 'recordId', errors: \['errorMessage', ...\]}, ...\] }.

Single and Batch Update—Failure

A map that contains a single element with the error message for the overall operation. For example, { error: 'errorMessage' }.
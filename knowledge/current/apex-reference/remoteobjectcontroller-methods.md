---
title: "RemoteObjectController Methods"
domain: apex-reference
topic: remoteobjectcontroller-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:36.115Z
keywords: [RemoteObjectController, Methods, Create, record, database., create, type, fields, Signature, Parameters, Return, Value, del, recordIds, retrieve, criteria, update]
---

# RemoteObjectController Methods

> Create a record in the database.

## RemoteObjectController Methods

The following are methods for RemoteObjectController. All methods are static.

-   **[create(type, fields)](atlas.en-us.apexref.meta/apexref/apex_class_system_remoteobjectcontroller.htm#apex_system_RemoteObjectController_create)**  
    Create a record in the database.
-   **[del(type, recordIds)](atlas.en-us.apexref.meta/apexref/apex_class_system_remoteobjectcontroller.htm#apex_system_RemoteObjectController_del)**  
    Delete records from the database.
-   **[retrieve(type, fields, criteria)](atlas.en-us.apexref.meta/apexref/apex_class_system_remoteobjectcontroller.htm#apex_system_RemoteObjectController_retrieve)**  
    Retrieve records from the database.
-   **[update(type, recordIds, fields)](atlas.en-us.apexref.meta/apexref/apex_class_system_remoteobjectcontroller.htm#apex_system_RemoteObjectController_updat)**  
    Update records in the database.

### create(type, fields)

Create a record in the database.

#### Signature

public static Map<String,Object\> create(String type, Map<String,Object\> fields)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sObject type on which create is being called.

fields

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The fields and values to set on the new record.

#### Return Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The return value is a map that represents the result of the Remote Objects operation. What is returned depends on the results of the call.

Success

A map that contains a single element with the ID of the record created. For example, { id: 'recordId' }.

Failure

A map that contains a single element with the error message for the overall operation. For example, { error: 'errorMessage' }.

### del(type, recordIds)

Delete records from the database.

#### Signature

public static Map<String,Object\> del(String type, List<String\> recordIds)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sObject type on which delete is being called.

recordIds

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The IDs of the records to be deleted.

#### Return Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The return value is a map that represents the result of the Remote Objects operation. What is returned depends on how the method was called and the results of the call.

Single Delete—Success

A map that contains a single element with the ID of the record that was deleted. For example, { id: 'recordId' }.

Batch Delete—Success

A map that contains a single element, an array of Map<String,Object> elements. Each element contains the ID of a record that was deleted and an array of errors, if there were any, for that record’s individual delete. For example, { results: \[ { id: 'recordId', errors: \['errorMessage', ...\]}, ...\] }.

Single and Batch Delete—Failure

A map that contains a single element with the error message for the overall operation. For example, { error: 'errorMessage' }.

### retrieve(type, fields, criteria)

Retrieve records from the database.

#### Signature

public static Map<String,Object\> retrieve(String type, List<String\> fields, Map<String,Object\> criteria)

#### Parameters

type

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

The sObject type on which retrieve is being called.

fields

Type: List<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

The fields to retrieve for each record.

criteria

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The criteria to use when performing the query.

#### Return Value

Type: Map<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type."),Object>

The return value is a map that represents the result of the Remote Objects operation. What is returned depends on the results of the call.

Success

A map that contains the following elements.

-   records: An array of records that match the query conditions.
-   type: A string that indicates the type of the sObject that was retrieved.
-   size: The number of records in the response.

Failure

A map that contains a single element with the error message for the overall operation. For example, { error: 'errorMessage' }.

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
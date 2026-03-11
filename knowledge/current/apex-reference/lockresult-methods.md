---
title: "LockResult Methods"
domain: apex-reference
topic: lockresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.152Z
keywords: [LockResult, Methods, error, occurred, returns, array, database, objects, providing, code, description., getErrors, Signature, Return, Value, getId, Usage, isSuccess]
---

# LockResult Methods

> If an error occurred, returns an array of one or more database error
      objects, providing the error code and description.

## LockResult Methods

The following are methods for LockResult.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_Approval_LockResult_getErrors)**  
    If an error occurred, returns an array of one or more database error objects, providing the error code and description.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_Approval_LockResult_getId)**  
    Returns the ID of the sObject you are trying to lock.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_LockResult.htm#apex_Approval_LockResult_isSuccess)**  
    A Boolean value that is set to true if the lock operation is successful for this object, or false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects, providing the error code and description.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods)\>

### getId()

Returns the ID of the sObject you are trying to lock.

#### Signature

public Id getId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

If the field contains a value, the object was locked. If the field is empty, the operation was not successful.

### isSuccess()

A Boolean value that is set to true if the lock operation is successful for this object, or false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
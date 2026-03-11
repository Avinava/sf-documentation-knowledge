---
title: "UnlockResult Methods"
domain: apex-reference
topic: unlockresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:33.162Z
keywords: [UnlockResult, Methods, error, occurred, returns, array, database, objects, providing, code, description., getErrors, Signature, Return, Value, getId, Usage, isSuccess]
---

# UnlockResult Methods

> If an error occurred, returns an array of one or more database error
      objects, providing the error code and description.

## UnlockResult Methods

The following are methods for UnlockResult.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_Approval_UnlockResult_getErrors)**  
    If an error occurred, returns an array of one or more database error objects, providing the error code and description.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_Approval_UnlockResult_getId)**  
    Returns the ID of the sObject you are trying to unlock.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_Approval_UnlockResult.htm#apex_Approval_UnlockResult_isSuccess)**  
    A Boolean value that is set to true if the unlock operation is successful for this object, or false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects, providing the error code and description.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_Database_Error_methods)\>

### getId()

Returns the ID of the sObject you are trying to unlock.

#### Signature

public Id getId()

#### Return Value

Type: [Id](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

If the field contains a value, the object was unlocked. If the field is empty, the operation was not successfult.

### isSuccess()

A Boolean value that is set to true if the unlock operation is successful for this object, or false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
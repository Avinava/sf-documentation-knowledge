---
title: "UpsertResult Methods"
domain: apex-reference
topic: upsertresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.209Z
keywords: [UpsertResult, Methods, error, occurred, returns, array, database, objects, providing, code, description., empty, set., getErrors, Signature, Return, Value, getId, Versioned, Behavior]
---

# UpsertResult Methods

> If an error occurred, returns an array of one or more database error objects providing
  the error code and description. If no error occurred, returns an empty set.

## UpsertResult Methods

The following are methods for UpsertResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_Database_UpsertResult_getErrors)**  
    If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_Database_UpsertResult_getId)**  
    Returns the ID of the sObject you were trying to update or insert.
-   **[isCreated()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_Database_UpsertResult_isCreated)**  
    A Boolean value that is set to true if the record was created, false if the record was updated.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_upsertresult.htm#apex_Database_UpsertResult_isSuccess)**  
    Returns a Boolean value that is set to true if the DML operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.

#### Signature

public Database.Error\[\] getErrors()

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.") \[\]

### getId()

Returns the ID of the sObject you were trying to update or insert.

#### Signature

public ID getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Versioned Behavior Changes

In API version 53.0 and later, the method returns the sObject ID. However, if record locking fails during the update operation, the method returns a null value.

In API version 52.0 and earlier, the method returned a null value if the record wasn’t updated successfully.

### isCreated()

A Boolean value that is set to true if the record was created, false if the record was updated.

#### Signature

public Boolean isCreated()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

### isSuccess()

Returns a Boolean value that is set to true if the DML operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
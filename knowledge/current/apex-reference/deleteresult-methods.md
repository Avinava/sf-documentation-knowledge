---
title: "DeleteResult Methods"
domain: apex-reference
topic: deleteresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.184Z
keywords: [DeleteResult, Methods, error, occurred, returns, array, database, objects, providing, code, description., empty, set., getErrors, Signature, Return, Value, getId, isSuccess]
---

# DeleteResult Methods

> If an error occurred, returns an array of one or more database error objects providing
  the error code and description. If no error occurred, returns an empty set.

## DeleteResult Methods

The following are methods for DeleteResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_Database_DeleteResult_getErrors)**  
    If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_Database_DeleteResult_getId)**  
    Returns the ID of the sObject you were trying to delete.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_deleteresult.htm#apex_Database_DeleteResult_isSuccess)**  
    A Boolean value that is set to true if the DML operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.

#### Signature

public Database.Error\[\] getErrors()

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\[\]

### getId()

Returns the ID of the sObject you were trying to delete.

#### Signature

public ID getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### isSuccess()

A Boolean value that is set to true if the DML operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")
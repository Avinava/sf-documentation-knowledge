---
title: "SaveResult Methods"
domain: apex-reference
topic: saveresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:41.200Z
keywords: [SaveResult, Methods, error, occurred, returns, array, database, objects, providing, code, description., empty, set., getErrors, Signature, Return, Value, getId, Versioned, Behavior]
---

# SaveResult Methods

> If an error occurred, returns an array of one or more database error objects providing
  the error code and description. If no error occurred, returns an empty set.

## SaveResult Methods

The following are methods for SaveResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_Database_SaveResult_getErrors)**  
    If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_Database_SaveResult_getId)**  
    Returns the ID of the sObject you were trying to insert or update.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_saveresult.htm#apex_Database_SaveResult_isSuccess)**  
    Returns a Boolean that is set to true if the DML operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns an empty set.

#### Signature

public Database.Error\[\] getErrors()

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\[\]

### getId()

Returns the ID of the sObject you were trying to insert or update.

#### Signature

public ID getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Versioned Behavior Changes

In API version 53.0 and later, the method returns the sObject ID. However, if record locking fails during the update operation, the method returns a null value.

In API version 52.0 and earlier, the method returned a null value if the record wasn’t updated successfully.

### isSuccess()

Returns a Boolean that is set to true if the DML operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

#### Example

This example shows the code used to process duplicate records, which are detected when there is an unsuccessful save due to an error. This code is part of a custom application that implements duplicate management when users add a contact. See [DuplicateResult Class](atlas.en-us.apexref.meta/apexref/apex_class_Datacloud_DuplicateResult.htm#apex_class_Datacloud_DuplicateResult "Represents the details of a duplicate rule that detected duplicate records and information about those duplicate records.") to check out the entire sample applicaton.

```

```
---
title: "EmptyRecycleBinResult Class"
domain: apex-reference
topic: emptyrecyclebinresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:30.522Z
estimatedTokens: 633
namespace: Database
keywords: [EmptyRecycleBinResult, result, emptyRecycleBin, DML, operation, returned, Database.emptyRecycleBin, method., Usage, getErrors, getId, isSuccess]
---

# EmptyRecycleBinResult Class

> The result of the emptyRecycleBin DML operation returned
by the Database.emptyRecycleBin method.

**Namespace:** `Database`

# EmptyRecycleBinResult Class

The result of the emptyRecycleBin DML operation returned by the Database.emptyRecycleBin method.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

A list of Database.EmptyRecycleBinResult objects is returned by the Database.emptyRecycleBin method. Each object in the list corresponds to either a record ID or an sObject passed as the parameter in the Database.emptyRecycleBin method. The first index in the EmptyRecycleBinResult list matches the first record or sObject specified in the list, the second with the second, and so on.

## EmptyRecycleBinResult Methods

The following are methods for EmptyRecycleBinResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm#apex_Database_EmptyRecycleBinResult_getErrors)**
    If an error occurred during the delete for this record or sObject, returns a list of one or more Database.Error objects. If no errors occurred, the returned list is empty.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm#apex_Database_EmptyRecycleBinResult_getId)**
    Returns the ID of the record or sObject you attempted to delete.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm#apex_Database_EmptyRecycleBinResult_isSuccess)**
    Returns true if the record or sObject was successfully removed from the Recycle Bin; otherwise false.

### getErrors()

If an error occurred during the delete for this record or sObject, returns a list of one or more Database.Error objects. If no errors occurred, the returned list is empty.

#### Signature

public Database.Errors\[\] getErrors()

#### Return Value

Type: Database.Errors \[\]

### getId()

Returns the ID of the record or sObject you attempted to delete.

#### Signature

public ID getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### isSuccess()

Returns true if the record or sObject was successfully removed from the Recycle Bin; otherwise false.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm)
- getId() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_EmptyRecycleBinResult.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)

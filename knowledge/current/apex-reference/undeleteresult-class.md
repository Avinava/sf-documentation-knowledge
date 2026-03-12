---
title: "UndeleteResult Class"
domain: apex-reference
topic: undeleteresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:30.596Z
estimatedTokens: 729
namespace: Database
keywords: [UndeleteResult, result, undelete, DML, operation, Database.undelete, Usage, getErrors, getId, isSuccess]
---

# UndeleteResult Class

> The result of an undelete DML operation returned by the Database.undelete method.

**Namespace:** `Database`

# UndeleteResult Class

The result of an undelete DML operation returned by the Database.undelete method.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

An array of Database.UndeleteResult objects is returned with the undelete database method. Each element in the UndeleteResult array corresponds to the sObject array passed as the sObject\[\] parameter in the undelete Database method; that is, the first element in the UndeleteResult array matches the first element passed in the sObject array, the second element corresponds with the second element, and so on. If only one sObject is passed in, the UndeleteResults array contains a single element.

## UndeleteResult Methods

The following are methods for UndeleteResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_Database_UndeleteResult_getErrors)**
    If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns null.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_Database_UndeleteResult_getId)**
    Returns the ID of the sObject you were trying to undelete.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm#apex_Database_UndeleteResult_isSuccess)**
    Returns a Boolean value that is set to true if the DML operation was successful for this object, false otherwise.

### getErrors()

If an error occurred, returns an array of one or more database error objects providing the error code and description. If no error occurred, returns null.

#### Signature

public Database.Error\[\] getErrors()

#### Return Value

Type: [Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\[\]

### getId()

Returns the ID of the sObject you were trying to undelete.

#### Signature

public ID getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

#### Usage

If this field contains a value, the object was successfully undeleted. If this field is empty, the operation was not successful for that object.

### isSuccess()

Returns a Boolean value that is set to true if the DML operation was successful for this object, false otherwise.

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm)
- getId() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_undeleteresult.htm)
- Database.Error (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)

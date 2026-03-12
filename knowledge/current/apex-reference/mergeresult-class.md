---
title: "MergeResult Class"
domain: apex-reference
topic: mergeresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.474Z
estimatedTokens: 984
namespace: Database
keywords: [MergeResult, Contains, result, merge, Database, operation., Usage, getErrors, getId, getMergedRecordIds, getUpdatedRelatedIds, isSuccess]
---

# MergeResult Class

> Contains the result of a merge Database
method operation.

**Namespace:** `Database`

# MergeResult Class

Contains the result of a merge Database method operation.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

The Database.merge method returns a Database.MergeResult object for each merged record.

## MergeResult Methods

The following are methods for MergeResult. All are instance methods.

-   **[getErrors()](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_Database_MergeResult_getErrors)**
    Returns a list of Database.Error objects representing the errors encountered, if any, during a merge operation using the Database.merge method. If no error occurred, returns null.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_Database_MergeResult_getId)**
    Returns the ID of the master record into which other records were merged.
-   **[getMergedRecordIds()](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_Database_MergeResult_getMergedRecordIds)**
    Returns the IDs of the records merged into the master record.
-   **[getUpdatedRelatedIds()](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_Database_MergeResult_getUpdatedRelatedIds)**
    Returns the IDs of all related records that were reparented as a result of the merge that are viewable by the user sending the merge call.
-   **[isSuccess()](atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm#apex_Database_MergeResult_isSuccess)**
    Indicates whether the merge was successful (true) or not (false).

### getErrors()

Returns a list of Database.Error objects representing the errors encountered, if any, during a merge operation using the Database.merge method. If no error occurred, returns null.

#### Signature

public List<Database.Error> getErrors()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.Error](atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm#apex_methods_system_database_error "Represents information about an error that occurred during a DML operation when using a Database method.")\>

### getId()

Returns the ID of the master record into which other records were merged.

#### Signature

public Id getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")

### getMergedRecordIds()

Returns the IDs of the records merged into the master record.

#### Signature

public List<String\> getMergedRecordIds()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### getUpdatedRelatedIds()

Returns the IDs of all related records that were reparented as a result of the merge that are viewable by the user sending the merge call.

#### Signature

public List<String\> getUpdatedRelatedIds()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")\>

### isSuccess()

Indicates whether the merge was successful (true) or not (false).

#### Signature

public Boolean isSuccess()

#### Return Value

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- getErrors() (atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm)
- getId() (atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm)
- getMergedRecordIds() (atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm)
- getUpdatedRelatedIds() (atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm)
- isSuccess() (atlas.en-us.apexref.meta/apexref/apex_class_database_mergeresult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Database.Error (atlas.en-us.apexref.meta/apexref/apex_methods_system_database_error.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)

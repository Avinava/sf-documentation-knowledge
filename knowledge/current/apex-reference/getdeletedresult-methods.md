---
title: "GetDeletedResult Methods"
domain: apex-reference
topic: getdeletedresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.411Z
keywords: [GetDeletedResult, Methods, Returns, list, deleted, records, time, window, specified, Database.getDeleted, method, call., getDeletedRecords, Signature, Return, Value, getEarliestDateAvailable, getLatestDateCovered, Usage]
---

# GetDeletedResult Methods

> Returns a list of deleted records for the time window specified
in the Database.getDeleted method call.

## GetDeletedResult Methods

The following are methods for GetDeletedResult. All are instance methods.

-   **[getDeletedRecords()](atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm#apex_Database_GetDeletedResult_getDeletedRecords)**  
    Returns a list of deleted records for the time window specified in the Database.getDeleted method call.
-   **[getEarliestDateAvailable()](atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm#apex_Database_GetDeletedResult_getEarliestDateAvailable)**  
    Returns the date in Coordinated Universal Time (UTC) of the earliest physically deleted object for the sObject type specified in Database.getDeleted.
-   **[getLatestDateCovered()](atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm#apex_Database_GetDeletedResult_getLatestDateCovered)**  
    Returns the date in Coordinated Universal Time (UTC) of the last date covered in the Database.getDeleted call.

### getDeletedRecords()

Returns a list of deleted records for the time window specified in the Database.getDeleted method call.

#### Signature

public List<Database.DeletedRecord> getDeletedRecords()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[Database.DeletedRecord](atlas.en-us.apexref.meta/apexref/apex_class_database_deletedrecord.htm#apex_class_database_deletedrecord "Contains information about a deleted record.")\>

### getEarliestDateAvailable()

Returns the date in Coordinated Universal Time (UTC) of the earliest physically deleted object for the sObject type specified in Database.getDeleted.

#### Signature

public Date getEarliestDateAvailable()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### getLatestDateCovered()

Returns the date in Coordinated Universal Time (UTC) of the last date covered in the Database.getDeleted call.

#### Signature

public Date getLatestDateCovered()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Usage

If there is a value, it is less than or equal to the endDate argument of Database.getDeleted. A value here indicates that, for safety, you should use this value for the startDate of your next call to capture the changes that started after this date but didn’t complete before endDate and were, therefore, not returned in the previous call.
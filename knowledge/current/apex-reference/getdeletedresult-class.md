---
title: "GetDeletedResult Class"
domain: apex-reference
topic: getdeletedresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.455Z
estimatedTokens: 759
namespace: Database
keywords: [GetDeletedResult, Contains, deleted, records, retrieved, specific, sObject, time, window., Usage, getDeletedRecords, getEarliestDateAvailable, getLatestDateCovered]
---

# GetDeletedResult Class

> Contains the deleted records retrieved
for a specific sObject type and time window.

**Namespace:** `Database`

# GetDeletedResult Class

Contains the deleted records retrieved for a specific sObject type and time window.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

The Database.getDeleted method returns the deleted record information as a Database.GetDeletedResult object.

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

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- getDeletedRecords() (atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm)
- getEarliestDateAvailable() (atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm)
- getLatestDateCovered() (atlas.en-us.apexref.meta/apexref/apex_class_database_getdeletedresult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Database.DeletedRecord (atlas.en-us.apexref.meta/apexref/apex_class_database_deletedrecord.htm)
- Date (atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm)

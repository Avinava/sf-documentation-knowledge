---
title: "GetUpdatedResult Class"
domain: apex-reference
topic: getupdatedresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:22.459Z
estimatedTokens: 465
namespace: Database
keywords: [GetUpdatedResult, Contains, result, Database.getUpdated, call., Usage, getIds, getLatestDateCovered]
---

# GetUpdatedResult Class

> Contains the result for the Database.getUpdated method call.

**Namespace:** `Database`

# GetUpdatedResult Class

Contains the result for the Database.getUpdated method call.

## Namespace

[Database](atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm "The Database namespace provides classes used with DML operations.")

## Usage

Use the methods in this class to obtain detailed information about the updated records returned by Database.getUpdated for a specific time window.

## GetUpdatedResult Methods

The following are methods for GetUpdatedResult. All are instance methods.

-   **[getIds()](atlas.en-us.apexref.meta/apexref/apex_class_database_getupdatedresult.htm#apex_Database_GetUpdatedResult_getIds)**
    Returns the IDs of records updated within the time window specified in the Database.getUpdated method.
-   **[getLatestDateCovered()](atlas.en-us.apexref.meta/apexref/apex_class_database_getupdatedresult.htm#apex_Database_GetUpdatedResult_getLatestDateCovered)**
    Returns the date in Coordinated Universal Time (UTC) of the last date covered in the Database.getUpdated call.

### getIds()

Returns the IDs of records updated within the time window specified in the Database.getUpdated method.

#### Signature

public List<Id> getIds()

#### Return Value

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")\>

### getLatestDateCovered()

Returns the date in Coordinated Universal Time (UTC) of the last date covered in the Database.getUpdated call.

#### Signature

public Date getLatestDateCovered()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

## Related Topics

- Database (atlas.en-us.apexref.meta/apexref/apex_namespace_Database.htm)
- getIds() (atlas.en-us.apexref.meta/apexref/apex_class_database_getupdatedresult.htm)
- getLatestDateCovered() (atlas.en-us.apexref.meta/apexref/apex_class_database_getupdatedresult.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- Date (atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm)

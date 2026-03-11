---
title: "GetUpdatedResult Methods"
domain: apex-reference
topic: getupdatedresult-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.415Z
keywords: [GetUpdatedResult, Methods, Returns, IDs, records, updated, within, time, window, specified, Database.getUpdated, method., getIds, Signature, Return, Value, getLatestDateCovered]
---

# GetUpdatedResult Methods

> Returns the IDs of records updated within the time window
specified in the Database.getUpdated method.

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
---
title: "DeletedRecord Methods"
domain: apex-reference
topic: deletedrecord-methods
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.408Z
keywords: [DeletedRecord, Methods, Returns, deleted, date, record., getDeletedDate, Signature, Return, Value, getId]
---

# DeletedRecord Methods

> Returns the deleted date of this record.

## DeletedRecord Methods

The following are methods for DeletedRecord. All are instance methods.

-   **[getDeletedDate()](atlas.en-us.apexref.meta/apexref/apex_class_database_deletedrecord.htm#apex_Database_DeletedRecord_getDeletedDate)**  
    Returns the deleted date of this record.
-   **[getId()](atlas.en-us.apexref.meta/apexref/apex_class_database_deletedrecord.htm#apex_Database_DeletedRecord_getId)**  
    Returns the ID of a record deleted within the time window specified in the Database.getDeleted method.

### getDeletedDate()

Returns the deleted date of this record.

#### Signature

public Date getDeletedDate()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

### getId()

Returns the ID of a record deleted within the time window specified in the Database.getDeleted method.

#### Signature

public Id getId()

#### Return Value

Type: [ID](atlas.en-us.apexref.meta/apexref/apex_methods_system_id.htm#apex_methods_system_id "Contains methods for the ID primitive data type.")
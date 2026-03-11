---
title: "GetDeletedResult Class"
domain: apex-reference
topic: getdeletedresult-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:35.411Z
keywords: [GetDeletedResult, Class, Returns, date, Coordinated, Universal, Time, UTC, last, covered, Database.getDeleted, call., getLatestDateCovered, Signature, Return, Value, Usage]
---

# GetDeletedResult Class

> Returns the date in Coordinated Universal Time (UTC) of
the last date covered in the Database.getDeleted call.

### getLatestDateCovered()

Returns the date in Coordinated Universal Time (UTC) of the last date covered in the Database.getDeleted call.

#### Signature

public Date getLatestDateCovered()

#### Return Value

Type: [Date](atlas.en-us.apexref.meta/apexref/apex_methods_system_date.htm#apex_methods_system_date "Contains methods for the Date primitive data type.")

#### Usage

If there is a value, it is less than or equal to the endDate argument of Database.getDeleted. A value here indicates that, for safety, you should use this value for the startDate of your next call to capture the changes that started after this date but didn’t complete before endDate and were, therefore, not returned in the previous call.
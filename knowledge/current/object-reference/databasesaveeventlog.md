---
title: "DatabaseSaveEventLog"
domain: object-reference
topic: databasesaveeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.850Z
estimatedTokens: 738
keywords: [DatabaseSaveEventLog, Database, Save, events, track, records, created, updated, deleted, API, version, 64.0, later, Calls, Special]
---

# DatabaseSaveEventLog

> Database Save events track when records are created,updated, or deleted
      This object is available in API version 64.0 and later.

# DatabaseSaveEventLog

Database Save events track when records are created,updated, or deleted This object is available in API version 64.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object stores event data that's queryable from platform APIs. For event data stored in event log files, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm).

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| BotIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe bot session ID. |
| DmlType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of DML operation. |
| FirstObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionOnly the first object ID is logged upon an update. During record updates, the ID of that specific row is logged. When multiple rows are updated, only a single ID is logged. |
| KeyPrefix | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe key prefix of the entity type that was saved |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. The session starts with a login event and ends with either a logout event or the user session expiring. For example, lUqjLPQTWRdvRG4. |
| PlannerIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the agent planner. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. |
| RowCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionTotal number of records in the result set. |
| SampleFactor | TypedoublePropertiesFilter, Nillable, SortDescriptionRate at which entities are logged. If the sample factor is 1 that means every entity saved was logged. If it is 100 that means that 1/100 logs. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. |

---
title: "UniqueQueryEventLog"
domain: object-reference
topic: uniquequeryeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.513Z
estimatedTokens: 510
keywords: [UniqueQueryEventLog, Unique, Query, events, capture, specific, search, queries, SOQL, filter, IDs, report, processed, along, underlying]
---

# UniqueQueryEventLog

> Unique Query events capture specific search queries (SOQL), filter IDs, and
         report IDs that are processed, along with the underlying database queries (SQL). This
      object is available in API version 65.0 and later.

# UniqueQueryEventLog

Unique Query events capture specific search queries (SOQL), filter IDs, and report IDs that are processed, along with the underlying database queries (SQL). This object is available in API version 65.0 and later.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| BotIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe bot session ID. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| PlannerIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the agent planner. |
| QueryIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe text of the SOQL query run or the Id of the report or list view run. |
| QueryType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe input type to the optimizer that was translated. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| SqlIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier generated for the database query. (Its SQL Id in the ELF); |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionTimestamp at which the log event was generated. |

---
title: "InvocableActionEventLog"
domain: object-reference
topic: invocableactioneventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:11.283Z
estimatedTokens: 658
keywords: [InvocableActionEventLog, Invocable, Action, events, capture, calls, Salesforce, Actions.This, particularly, useful, monitor, actions, invoked, Agentforce, flows]
---

# InvocableActionEventLog

> Invocable Action events capture the calls to Salesforce Invocable
         Actions.This is particularly useful to monitor actions invoked during Agentforce
         flows. This object is available in API version 64.0 and later.

# InvocableActionEventLog

Invocable Action events capture the calls to Salesforce Invocable Actions.This is particularly useful to monitor actions invoked during Agentforce flows. This object is available in API version 64.0 and later.

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
| ActionName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionName of the action. |
| ActionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionInvocableActionType being referenced. |
| ActionVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe invocable action version. |
| ApiCaller | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIdentifier of the API caller. This is only populated when the action is invoked from a REST API call |
| BotIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe bot session ID. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionTime (in nanos) taken to process this set of requests. |
| FlowProcessType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe process type of the calling flow. |
| FlowVersionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the version of the calling flow. |
| PlannerIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the agent planner. |
| RequestCount | TypeintPropertiesFilter, Group, Nillable, SortDescriptionThe number of invoked requests. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionID of the user employing salesforce.com services, whether through the user interface or API. |

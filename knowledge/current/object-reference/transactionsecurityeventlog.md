---
title: "TransactionSecurityEventLog"
domain: object-reference
topic: transactionsecurityeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.290Z
estimatedTokens: 1265
keywords: [TransactionSecurityEventLog, Transaction, Security, event, logs, contain, policy, execution, Legacy, API, version, 38.0, later, Enhanced, 61.0]
---

# TransactionSecurityEventLog

> Transaction Security event logs contain details about policy execution.
         Legacy transaction security policy details are supported in API version 38.0 and later.
         Enhanced transaction security policy details are supported in API version
         61.0
         and later.

# TransactionSecurityEventLog

Transaction Security event logs contain details about policy execution. Legacy transaction security policy details are supported in API version 38.0 and later. Enhanced transaction security policy details are supported in API version 61.0 and later.

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
| ApexIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the Apex code used to evaluate the policy. |
| BotIdentifier | TypeStringDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypeStringDescriptionThe bot session ID. |
| ClientIp | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that is using Salesforce services. A Salesforce internal IP, such as a login from AppExchange, is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| EvaluationTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds used to evaluate the policy. |
| EventName | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the event, which is Transaction Security Event. |
| FlowIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the flow used to evaluate the policy. |
| LoginKey | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| PlannerIdentifier | TypeStringDescriptionThe ID of the agent planner. |
| PolicyIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the policy being evaluated. For example: 00530000009M943. |
| PolicyOutcome | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe result of the transaction policy.Possible values are:Error—The policy caused an undefined error when it executed.ExemptNoAction—The user is exempt from transaction security policies, so the policy didn’t trigger.MeteringBlock—The policy took longer than 3 seconds to process, so the user was blocked from performing the operation.MeteringNoAction—The policy took longer than 3 seconds to process, but the user isn't blocked from performing the operation.NoAction—The policy didn't trigger.Notified—A notification was sent to the recipient. |
| PolicyType | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe real time action selected for the policy. |
| RequestIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionGlobally unique id for a given request. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| Result | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe outcome of evaluating the policy. For example: NOT TRIGGERED. |
| RunTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SendEmailNotification | TypeBooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to send an email notification. The default value is false. |
| SendInAppNotification | TypeBooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionIndicates whether to send an in-app notification. The default value is false. |
| SessionKey | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypeDateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| TriggeredTimestamp | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe time at which the Transaction Security event was generated in ISO8601-compatible format. For example: 2015-07-27T11:32:59.555Z. |
| Uri | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who is using Salesforce services through the UI or the API. For example: 00530000009M943. |

---
title: "ApexTriggerEventLog"
domain: object-reference
topic: apextriggereventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:04.594Z
estimatedTokens: 1641
keywords: [ApexTriggerEventLog, Apex, Trigger, event, logs, contain, triggers, fire, organization, API, version, 55.0, later, Calls, Special]
---

# ApexTriggerEventLog

> Apex Trigger event logs contain details about triggers that fire in an
         organization. This object is available in API version 55.0 and later.

# ApexTriggerEventLog

Apex Trigger event logs contain details about triggers that fire in an organization. This object is available in API version 55.0 and later.

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
| BotIdentifier | TypeStringDescriptionThe ID of the bot. |
| BotSessionIdentifier | TypeStringDescriptionThe bot session ID. |
| ClientIp | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that is using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| CpuTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DatabaseTotalTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionTime (in milliseconds) spent waiting for database processing in aggregate for all operations in the request. Compare this field to CpuTime to determine whether performance issues are occurring in the database layer or in your own code. |
| ExecutionTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe end-to-end Apex execution time (in milliseconds). |
| LoginKey | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| ObjectName | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the object affected by the trigger. |
| PlannerIdentifier | TypeStringDescriptionThe ID of the agent planner. |
| RequestIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| RequestStatus | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RunTime | TypeDoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds.Requests with a value over five seconds are considered long-running requests for the purposes of the Concurrent Long-Running Apex Limit.HTTP callout processing time isn't included when calculating the 5-second limit. We pause the timer for the callout and resume it when the callout completes. |
| SessionKey | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypeDateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| TriggerIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the trigger that was fired. |
| TriggerName | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionFor triggers coming from managed packages, TriggerName includes a namespace prefix separated with a . character. If no namespace prefix is present, the trigger is from an unmanaged trigger. For example:examplePackage.managedExampleTrigger—Managed trigger from the examplePackage namespaceunmanagedExampleTrigger—Unmanaged trigger |
| TriggerType | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe type of this trigger.Possible values are:AfterInsertAfterUpdateBeforeInsertBeforeUpdate |
| Uri | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who is using Salesforce services through the UI or the API. For example: 00530000009M943. |
| UserType | TypeStringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |

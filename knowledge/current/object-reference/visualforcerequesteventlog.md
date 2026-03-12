---
title: "VisualforceRequestEventLog"
domain: object-reference
topic: visualforcerequesteventlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:19.166Z
estimatedTokens: 2047
namespace: Type
keywords: [VisualforceRequestEventLog, Visualforce, events, contain, requests, originate, browser, API, version, 61.0, later, Calls, Special, Access, Rules]
---

# VisualforceRequestEventLog

> Visualforce Request events contain details of Visualforce requests. Requests
         can originate from the browser (UI). This object is available in API version
      61.0
      and later.

**Namespace:** `Type`

# VisualforceRequestEventLog

Visualforce Request events contain details of Visualforce requests. Requests can originate from the browser (UI). This object is available in API version 61.0 and later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This object stores event data that's queryable from platform APIs. For event data stored in event log files, see [EventLogFile](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm).

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

This feature is a Beta Service. Customer may opt to try such Beta Service in its sole discretion. Any use of the Beta Service is subject to the applicable Beta Services Terms provided at [Agreements and Terms](https://www.salesforce.com/company/legal/agreements/).

## Fields

| Field | Details |
| --- | --- |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. For example: 96.43.144.26. |
| ControllerType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of controller that’s used by the requested Visualforce page.Possible values are:0—Not Specified1—Standard2—Standard Set3—Custom4—Java5—Spring |
| CpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DatabaseBlocks | TypedoublePropertiesFilter, Nillable, SortDescriptionIndicates how much activity is occurring in the database. A high value for this field suggests that adding indexes or filters on your queries benefits performance. |
| DatabaseCpuTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe CPU time in milliseconds to complete the request. Indicates the amount of activity taking place in the database layer during the request. |
| DatabaseTotalTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in nanoseconds for a database round trip. Includes time spent in the JDBC driver, network to the database, and DatabaseCpuTime. Compare this field to CpuTime to determine whether performance issues are occurring in the database layer or in your own code. |
| HttpMethod | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe HTTP method of the request. For example: GET, POST, PUT, and so on. |
| IsAjaxRequest | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescriptionThe value is true if the request is a partial page request. The default value is false. |
| IsFirstRequest | TypebooleanPropertiesDefaulted on create, Filter, Group, SortDescription1 if this page is the first Visualforce transaction in the request, or 0 if it isn't. The default value is 0. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I. |
| ManagedPackageNamespace | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf the page is part of a managed package, the namespace of that package. |
| PageName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the Visualforce page that was requested. |
| QueryString | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe query string used to access the requested Visualforce page.ExampleLet’s assume that the requested Visualforce page (/apex/myAccountDetailPage?id=001xx000003GYv6AAG) shows details of the account whose ID is in the URL. The value of QueryString in this case is ?id=001xx000003GYv6AAG. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same RequestIdentifier. For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| RequestSize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe size of the callout response, in bytes. |
| RequestStatus | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RequestType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe request type.Possible values are:page—A normal request for a pagecontent_UI—A content request for a page that originated in the user interfacecontent_apex—A content request initiated by an Apex callPDF_UI—A request for a page in PDF format through the user interfacePDF_apex—A request for PDF format by an Apex call (usually a Web Service call) |
| ResponseSize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe size of the callout request body, in bytes. |
| RunTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe amount of time that the request took in milliseconds. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. For example: d7DEq/ANa7nNZZVD. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. For example, 2020-01-20T19:12:26.965Z. Milliseconds are the most granular setting. |
| Uri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URI of the page that’s receiving the request. For example: /home/home.jsp. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API. For example: 00530000009M943. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |
| ViewStateSize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe size of the Visualforce view state in bytes. |

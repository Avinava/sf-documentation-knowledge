---
title: "Visualforce Request Event Type"
domain: object-reference
topic: visualforce-request-event-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:09.735Z
estimatedTokens: 2206
keywords: [Visualforce, Event, events, contain, requests, originate, browser]
---

# Visualforce Request Event Type

> Visualforce Request events contain details of Visualforce requests.
         Requests can originate from the browser (UI).

# Visualforce Request Event Type

Visualforce Request events contain details of Visualforce requests. Requests can originate from the browser (UI).

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”.For example: 96.43.144.26. |
| CONTROLLER_TYPE | TypeNumberDescriptionThe type of controller that’s used by the requested Visualforce page.Possible Values0: NOT_SPECIFIED—The controller type is not specified.1: STANDARD—The controller is a standard controller.2: CUSTOM—The controller is a custom controller or controller extension.3: JAVA—For internal use only.4: STANDARD_SET—The controller is a standard list controller.5: SPRING—Not used. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DB_BLOCKS | TypeNumberDescriptionIndicates how much activity is occurring in the database. A high value for this field suggests that adding indexes or filters on your queries would benefit performance. |
| DB_CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds to complete the request. Indicates the amount of activity taking place in the database layer during the request. |
| DB_TOTAL_TIME | TypeNumberDescriptionThe time in nanoseconds for a database round trip. Includes time spent in the JDBC driver, network to the database, and DB_CPU_TIME. Compare this field to CPU_TIME to determine whether performance issues are occurring in the database layer or in your own code. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always VisualforceRequest. |
| HTTP_METHOD | TypeStringDescriptionThe HTTP method of the request.For example: GET, POST, PUT, and so on. |
| IS_AJAX_REQUEST | TypeBooleanDescriptionThe value is true if the request is a partial page request. |
| IS_FIRST_REQUEST | TypeBooleanDescription1 if this page is the first Visualforce transaction in the request, or 0 if it isn't. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| MANAGED_PACKAGE_NAMESPACE | TypeStringDescriptionIf the page is part of a managed package, the namespace of that package. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PAGE_NAME | TypeStringDescriptionThe name of the Visualforce page that was requested. |
| QUERY | TypeStringDescriptionThe query string used to access the requested Visualforce page.ExampleLet’s assume that the requested Visualforce page (/apex/myAccountDetailPage?id=001xx000003GYv6AAG) shows details of the account whose ID is in the URL. The value of QUERY in this case is ?id=001xx000003GYv6AAG. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| REQUEST_SIZE | TypeNumberDescriptionThe size of the request body, in bytes. Value is -1 if the request body content is larger than 2GB, or if the request has no body (for example, a typical GET request). |
| REQUEST_STATUS | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| REQUEST_TYPE | TypeStringDescriptionThe request type.Possible values are:page—a normal request for a pagecontent_UI—a content request for a page that originated in the user interfacecontent_apex—a content request initiated by an Apex callPDF_UI—a request for a page in PDF format through the user interfacePDF_apex—a request for PDF format by an Apex call (usually a Web Service call) |
| RESPONSE_SIZE | TypeNumberDescriptionThe size of the response, in bytes. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_AGENT | TypeNumberDescriptionThe numeric code for the type of client used to make the request (for example, the browser, application, or API). |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| USER_TYPE | TypeStringDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |
| VIEW_STATE_SIZE | TypeNumberDescriptionThe size of the Visualforce view state, in bytes. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)

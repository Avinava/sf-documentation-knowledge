---
title: "Composite API Subrequest Event Type"
domain: object-reference
topic: composite-api-subrequest-event-type
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:09.028Z
estimatedTokens: 1420
keywords: [Composite, API, Subrequest, Event, events, contain, subrequests, generated, collated, five, four, two, graph, version, 64.0]
---

# Composite API Subrequest Event Type

> Composite API subrequest events contain details about composite API subrequests. 
 One composite API subrequest event is generated for each subrequest or collated set of subrequests. For example, if a composite API request contains five subrequests and four of the subrequests are collated, then two composite API subrequest events are generated. This example also applies to composite graph API. This event type is available in API version 64.0 and later.

# Composite API Subrequest Event Type

Composite API subrequest events contain details about composite API subrequests. One composite API subrequest event is generated for each subrequest or collated set of subrequests. For example, if a composite API request contains five subrequests and four of the subrequests are collated, then two composite API subrequest events are generated. This example also applies to composite graph API. This event type is available in API version 64.0 and later.

## Fields

| Field | Details |
| --- | --- |
| CANCELLED_REASON | TypeStringDescriptionIf the subrequest was canceled, shows the reason. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using the API. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds to complete the request. |
| DB_TOTAL_TIME | TypeNumberDescriptionTime (in nanoseconds) spent waiting for database processing in aggregate for all operations in the subrequest or set of collated subrequests. Compare this field to CPU_TIME to determine whether performance issues are occurring in the database layer or in your own code. |
| EVENT_TYPE | TypeStringDescriptionThe type of the event. The value is always CompositeApiSubrequest. |
| INITIAL_REFERENCE_IDS | TypeStringDescriptionThe original reference IDs of subrequests that were collated into the current subrequest. |
| IS_CANCELLED | TypebooleanDescriptionTrue if the subrequest call was canceled. |
| LOGIN_KEY | TypeStringDescriptionIdentifies all related events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I |
| METHOD | TypeStringDescriptionThe HTTP method of the request. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization that made the request. For example: 00D000000000123 |
| REQUEST_ID | TypeStringDescriptionA unique ID identifying the composite API request. |
| REQUEST_STATUS | TypeStringDescriptionThe status of the subrequest or collated set of subrequests. For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RUN_TIME | TypeNumberDescriptionThe amount of time in milliseconds to complete the request. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. For example: 20130715233322.670 |
| STATUS_CODE | TypeNumberDescriptionThe HTTP status code for the response. |
| SUCCESS | TypebooleanDescriptionTrue if the subrequest call succeeded. |
| TIMESTAMP | TypeStringDescriptionThe date and time that the event was generated. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe date and time, in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ), that the event was generated. The timezone is GMT. For example: 2015-07-27T11:32:59.555Z |
| URI | TypeStringDescriptionThe resource URI. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user that’s using the API. For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user that’s using the API. For example: 00590000000I1SNIA0 |
| USER_TYPE | TypeStringDescriptionThe category of user license. Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and they access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and they access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and they access the application through a customer portal. Users with this license type can view and edit data that they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and they typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and they access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses and admins for this org. |

#### See Also

-   [*REST API Developer Guide*: Composite](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_composite.htm)

-   [*REST API Developer Guide*: Composite Graph](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_graph.htm)

-   [*REST API Developer Guide*: Using Composite Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_composite_resources.htm)

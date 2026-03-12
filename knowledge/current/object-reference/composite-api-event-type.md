---
title: "Composite API Event Type"
domain: object-reference
topic: composite-api-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.018Z
estimatedTokens: 815
keywords: [Composite, API, Event, events, contain, requests, generated, graph, call, version, 64.0, later]
---

# Composite API Event Type

> Composite API events contain details about composite API
			requests. One composite API event is generated for each composite API and composite
		graph API call. This event type is available in API version 64.0 and later.

# Composite API Event Type

Composite API events contain details about composite API requests. One composite API event is generated for each composite API and composite graph API call. This event type is available in API version 64.0 and later.

## Fields

| Field | Details |
| --- | --- |
| ALL_OR_NONE | TypebooleanDescriptionIndicates whether the entire request is rolled back when the update of any object fails (true), or if the call should continue with the independent update of other objects in the request (false). The default is false. If true, it overrides the ALL_OR_NONE setting in subrequests. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using the API. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds to complete the request. |
| EVENT_TYPE | TypeStringDescriptionThe type of the event. The value is always CompositeApi. |
| FAILURE_REASON | TypeStringDescriptionAn error code giving the reason for a failed request. |
| IS_REQUEST_COLLATION_ON | TypebooleanDescriptionThe setting for subrequest collation. |
| LOGIN_KEY | TypeStringDescriptionIdentifies all related events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. For example: GeJCsym5eyvtEK2I |
| NUM_GRAPH_DEPTH | TypeNumberDescriptionThe depth of the graph. When multiple graphs are present, this number is the depth of the deepest graph. |
| NUM_RETRIES | TypeNumberDescriptionNumber of attempted retries while processing the graph. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization that made the request. For example: 00D000000000123 |
| REQUEST_ID | TypeStringDescriptionA unique ID identifying the composite API request. |
| RUN_TIME | TypeNumberDescriptionThe amount of time in milliseconds to complete the request. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. For example: 20130715233322.670 |
| TIMESTAMP | TypeStringDescriptionThe date and time that the event was generated. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe date and time, in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ), that the event was generated. The timezone is GMT. For example: 2015-07-27T11:32:59.555Z |
| URI | TypeStringDescriptionThe resource URI. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user that’s using the API. For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user that’s using the API. For example: 00590000000I1SNIA0 |

#### See Also

-   [*REST API Developer Guide*: Composite](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_composite.htm)

-   [*REST API Developer Guide*: Composite Graph](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/resources_composite_graph.htm)

-   [*REST API Developer Guide*: Using Composite Resources](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_composite_resources.htm)

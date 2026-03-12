---
title: "UI Telemetry Navigation Timing Event Type"
domain: object-reference
topic: ui-telemetry-navigation-timing-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.675Z
estimatedTokens: 3790
keywords: [Telemetry, Navigation, Timing, Event, events, capture, network, performance, metrics, extends, Resource, includes, requests, initiated, either]
---

# UI Telemetry Navigation Timing Event Type

> UI Telemetry Navigation Timing events capture
         network performance metrics related to page navigation. The event
         extends from the UI Telemetry Resource Timing Event and includes
         requests initiated with either the Fetch API or the XMLHttpRequest API. This
      object is available in API version 61.0 and later.

# UI Telemetry Navigation Timing Event Type

UI Telemetry Navigation Timing events capture network performance metrics related to page navigation. The event extends from the [UI Telemetry Resource Timing Event](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_uitelemetryresourcetiming.htm "UI Telemetry Resource Timing events capture network performance metrics related to loading an application’s resources. The event includes requests initiated with either the Fetch API or the XMLHttpRequest API. This object is available in API version 61.0 and later.") and includes requests initiated with either the [Fetch API](https://fetch.spec.whatwg.org/) or the [XMLHttpRequest API](https://xhr.spec.whatwg.org/). This object is available in API version 61.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

For information about navigation timing attributes, including a diagram of the order that attributes follow, see section 4.1 of the W3 Standards on [Navigation Timing Level 2](https://www.w3.org/TR/navigation-timing-2/).

## Fields

| Field | Details |
| --- | --- |
| APP_NAME | TypeStringDescriptionThe name of the application that the user accessed. |
| BROWSER_NAME | TypeStringDescriptionThe name of the browser that the user accessed.ExampleChrome, Safari |
| BROWSER_VERSION | TypeStringDescriptionThe version of the browser that the user accessed in major.minor version format. Some browsers don’t provide a minor version. |
| CLIENT_GEO | TypeStringDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>.ExampleUnited States/California |
| CLIENT_ID | TypeStringDescriptionThe API client ID. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP, such as a login from AppExchange, is shown as Salesforce.com IP.Example96.43.144.26 |
| CONNECT_END | TypeNumberDescriptionThe time in milliseconds when the browser establishes a connection to a server so that it can retrieve a resource.To calculate the Transport Control Protocol (TCP) handshake time, subtract the CONNECT_START time from the CONNECT_END time. |
| CONNECT_START | TypeNumberDescriptionThe time in milliseconds after the browser completes the Domain Name System (DNS) lookup and begins connecting to a server so that it can retrieve a resource.To calculate the Transport Control Protocol (TCP) handshake time, subtract the CONNECT_START time from the CONNECT_END time. |
| CONNECTION_TYPE | TypeStringDescriptionThe type of connection.Possible ValuesCDMA1xCDMAEDGEEVDO0EVDOAEVDOBGPRSHRPDHSDPAHSUPALTEWIFI |
| DECODED_BODY_SIZE | TypeNumberDescriptionThe size in octets of the HTTP message body after the removal of any applied content encoding. |
| DEVICE_MODEL | TypeStringDescriptionThe name of the device model.ExampleiPad, iPhone |
| DEVICE_PLATFORM | TypeStringDescriptionThe type of application experience in name:experience:form format.Possible Valuesname: APP_BUILDER, CUSTOM, S1, SFXexperience: BROWSER, HYBRIDform: DESKTOP, PHONE, TABLET |
| DEVICE_SESSION_ID | TypeStringDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started.Example321a1ddfaf924803a075f1e69fc87bc06f53ccd0 |
| DOM_COMPLETE | TypeNumberDescriptionThe time in milliseconds when the page’s readyState property is set to complete. Indicates that the page and its subresources have finished loading. |
| DOM_CONTENT_LOADED_EVENT_END | TypeNumberDescriptionThe time in milliseconds when the page’s DOMContentLoaded event handler completes.To calculate the processing time for the DOMContentLoaded event handler, subtract the DOM_CONTENT_LOADED_EVENT_START time from the DOM_CONTENT_LOADED_EVENT_END time. |
| DOM_CONTENT_LOADED_EVENT_START | TypeNumberDescriptionThe time in milliseconds when the page’s DOMContentLoaded event handler starts.To calculate the processing time for the DOMContentLoaded event handler, subtract the DOM_CONTENT_LOADED_EVENT_START time from the DOM_CONTENT_LOADED_EVENT_END time. |
| DOM_INTERACTIVE | TypeNumberDescriptionThe time in milliseconds when the page’s readyState is set to interactive. Indicates that the page has finished loading, but subresources, such as images and scripts, are still loading. |
| DOMAIN_LOOKUP_END | TypeNumberDescriptionThe time in milliseconds when the browser completes a DNS lookup for a resource.To calculate the DNS lookup time, subtract the DOMAIN_LOOKUP_START time from the DOMAIN_LOOKUP_END time. |
| DOMAIN_LOOKUP_START | TypeNumberDescriptionThe time in milliseconds when the browser starts a DNS lookup for a resource.To calculate the DNS lookup time, subtract the DOMAIN_LOOKUP_START time from the DOMAIN_LOOKUP_END time. |
| DURATION | TypeNumberDescriptionThe total duration in milliseconds of the event from the START_TIME to the LOAD_EVENT_END time. |
| ENCODED_BODY_SIZE | TypeNumberDescriptionThe size in octets of the HTTP message body before the removal of any applied content encoding. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always UITelemetryNavigationTiming. |
| FETCH_START | TypeNumberDescriptionThe time in milliseconds when the browser starts to fetch a resource from the server, not including redirects. Occurs before the DNS lookup and the connection to the server is established.To calculate the total time used to fetch a resource without redirects, subtract the FETCH_START time from the RESPONSE_END time. |
| FIRST_INTERIM_RESPONSE_START | TypeNumberDescriptionThe time in milliseconds when the browser receives the first byte of the interim 1xx response from the server.To calculate the time from when the browser sends a request to when it starts to receive an interim response, subtract the REQUEST_START time from the FIRST_INTERIM_RESPONSE_START time. |
| INITIATOR_TYPE | TypeStringDescriptionThe HTML element that initiates the resource load.Examplecss, image, link |
| LOAD_EVENT_END | TypeNumberDescriptionThe time in milliseconds when the page’s load event handler completes.To calculate the processing time for the load event handler, subtract the LOAD_EVENT_START time from the LOAD_EVENT_END time. |
| LOAD_EVENT_START | TypeNumberDescriptionThe time in milliseconds when the page’s load event handler begins.To calculate the processing time for the load event handler, subtract the LOAD_EVENT_START time from the LOAD_EVENT_END time. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.ExampleGeJCsym5eyvtEK2I |
| NAVIGATION_TYPE | TypeStringDescriptionThe type of navigation timing data.Possible Valuesnavigate: a user interaction or a script initiated navigation.reload: a reload initiated navigation.back_forward: navigation traverses the browser’s history.prerender: a prerender hint initiated navigation. |
| NEXT_HOP_PROTOCOL | TypeStringDescriptionThe Application-Layer Protocol Negotiation (ALPN) Protocol ID that fetches the resource.Possible Valueshttp/0.9, http/1.0, h2, h2c, h3 |
| ORGANIZATION_ID | TypeStringDescriptionThe 15-character ID of the org.Example00D000000000123 |
| OS_NAME | TypeStringDescriptionThe operating system name, derived from USER_AGENT.ExampleAndroid, iOS, OSX |
| OS_VERSION | TypeStringDescriptionThe operating system version, derived from USER_AGENT. |
| PAGE_CONTEXT | TypeStringDescriptionThe name of the component hosting the main content of the page.Exampleclients:cardsContainer |
| PAGE_ENTITY_ID | TypeStringDescriptionThe unique entity identifier of the event.Example0013000000I3zJAAAZ |
| PAGE_ENTITY_TYPE | TypeStringDescriptionThe entity type of the event.Exampletask, contacts |
| PAGE_URL | TypeStringDescriptionThe relative URL of the top-level Lightning Experience page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PAGE_URL.Example/sObject/0064100000JXITSAA5/view |
| REDIRECT_COUNT | TypeNumberDescriptionThe total number of redirects since the last non-redirect navigation in the current browsing context. |
| REDIRECT_END | TypeNumberDescriptionThe time in milliseconds when the browser receives the last byte of the response of the final redirect.To calculate the total redirection time, subtract the REDIRECT_START time from the REDIRECT_END time. |
| REDIRECT_START | TypeNumberDescriptionThe time in milliseconds when the browser starts to fetch a resource that initiates a redirect.To calculate the total redirection time, subtract the REDIRECT_START time from the REDIRECT_END time. |
| RENDER_BLOCKING_STATUS | TypeStringDescriptionThe status that indicates whether the resource can block or delay the browser from rendering page content.Possible Valuesblocking: the resource can block rendering.codenon-blocking: the resource doesn’t block rendering. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example3nWgxWbDKWWDIk0FKfF5DV |
| REQUEST_START | TypeNumberDescriptionThe time in milliseconds when the browser starts to request the resource from the server.To calculate the total request time, subtract the REQUEST_START time from the RESPONSE_START time. |
| RESPONSE_END | TypeNumberDescriptionThe time in milliseconds when the browser receives the resource’s last byte or when the transport connection closes, whichever comes first.To calculate the total time used to fetch a resource without redirects, subtract the FETCH_START time from the RESPONSE_END time. |
| RESPONSE_START | TypeNumberDescriptionThe time in milliseconds when the browser receives the first byte of the response from the server.To calculate the total request time, subtract the REQUEST_START time from the RESPONSE_START time. |
| RESPONSE_STATUS | TypeNumberDescriptionThe HTTP response status code.Example200 |
| SDK_APP_TYPE | TypeStringDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| SDK_APP_VERSION | TypeStringDescriptionThe mobile SDK application version number.Example5.0 |
| SDK_VERSION | TypeStringDescriptionThe mobile SDK version number.Example2.1.0 |
| SECURE_CONNECT_START | TypeNumberDescriptionThe time in milliseconds when the browser begins the handshake process that secures the connection.To calculate the Transport Layer Security (TLS) time, subtract the SECURE_CONNECT_START time from the REQUEST_START time. |
| SERVER_REQUEST_ID | TypeStringDescriptionThe request ID for the server request that’s used to find associated server logs.Example346000000087551ecb |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all events in Lightning Experience within a session. When the user logs out and logs in again, a new session starts.Examplecdd09305cb6babf34059e27f70e47f1b11dec868 |
| START_TIME | TypeNumberDescriptionThe time in milliseconds when the browser starts to fetch the resource, including redirects. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.Example20130715233322.670 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).Example2015-07-27T11:32:59.555Z. The timezone is GMT. |
| TRANSFER_SIZE | TypeNumberDescriptionThe size in octets of the resource, including the response header and the response payload body. |
| UI_EVENT_RELATIVE_TIMESTAMP | TypeNumberDescriptionThe difference in milliseconds between when the event is logged and when the browser tab is opened.Example29322.23 |
| UI_EVENT_TIMESTAMP | TypeNumberDescriptionThe time at which this event occurs, measured in milliseconds.Example1479769912796 |
| UI_ROOT_ACTIVITY_ID | TypeStringDescriptionThe ID of the root activity when the event occurs. |
| UI_THREAD_RESPONSE_DELAY | TypeNumberDescriptionThe time in milliseconds from when the browser receives the response to when it executes the callback. This delay occurs if the main Javascript thread is busy when the response is received. |
| UNLOAD_EVENT_END | TypeNumberDescriptionThe time in milliseconds when the page’s unload event handler completes.To calculate the processing time for the unload event handler, subtract the UNLOAD_EVENT_START time from the UNLOAD_EVENT_END time. |
| UNLOAD_EVENT_START | TypeNumberDescriptionThe time in milliseconds when the page’s unload event handler starts.To calculate the processing time for the unload event handler, subtract the UNLOAD_EVENT_START time from the UNLOAD_EVENT_END time. |
| URL | TypeStringDescriptionThe URL of the request. |
| USER_ID | TypeStringDescriptionThe 15-character ID of the user accessing Salesforce services through the UI or API.Example00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case-insensitive ID of the user who’s using Salesforce services through the UI or the API.Example00590000000I1SNIA0 |
| USER_TYPE | TypeStringDescriptionThe category of user license of the user accessing Salesforce services through the UI or API.Possible ValuesA: Automated Processb: High Volume PortalC: Customer Portal UserD: External WhoF: Self-ServiceG: GuestL: Package License ManagerN: Salesforce to Salesforcen: CSN OnlyO: Power Customo: CustomP: Partnerp: Customer Portal ManagerS: StandardX: Salesforce Administrator |  |
| WORKER_START | TypeNumberDescriptionIf a service worker is installed, the time in milliseconds when the active service worker receives the fetch event.To measure the service worker processing time, subtract the WORKER_START time from the FETCH_START time. |  |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- UI Telemetry Resource Timing Event (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_uitelemetryresourcetiming.htm)
- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)

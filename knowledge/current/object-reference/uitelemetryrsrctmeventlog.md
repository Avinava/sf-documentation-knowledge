---
title: "UiTelemetryRsrcTmEventLog"
domain: object-reference
topic: uitelemetryrsrctmeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:18.410Z
estimatedTokens: 2794
keywords: [UiTelemetryRsrcTmEventLog, Telemetry, Resource, Timing, events, capture, network, performance, metrics, loading, application’s, resources, event, includes, requests]
---

# UiTelemetryRsrcTmEventLog

> UI Telemetry Resource Timing events capture network performance
         metrics related to loading an application’s resources. The event includes requests
         initiated with either the Fetch API or the XMLHttpRequest API. This object is available
      in API version 64.0 and later.

# UiTelemetryRsrcTmEventLog

UI Telemetry Resource Timing events capture network performance metrics related to loading an application’s resources. The event includes requests initiated with either the [Fetch API](https://fetch.spec.whatwg.org/) or the [XMLHttpRequest API](https://xhr.spec.whatwg.org/). This object is available in API version 64.0 and later.

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
| AppName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the application that the user accessed. |
| BrowserName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the browser that the user accessed. |
| BrowserVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe version of the browser that the user accessed in major.minor version format. Some browsers don’t provide a minor version. |
| ClientGeolocation | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe geolocation of the client in the form of <Country>/<State\|Province>. |
| ClientIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe API client ID. |
| ClientIp | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP, such as a login from AppExchange, is shown as “Salesforce.com IP.” |
| ConnectEnd | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser establishes a connection to a server so that it can retrieve a resource.To calculate the Transport Control Protocol (TCP) handshake time, subtract the CONNECT_START time from the CONNECT_END time. |
| ConnectStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds after the browser completes the Domain Name System (DNS) lookup and begins connecting to a server so that it can retrieve a resource.To calculate the Transport Control Protocol (TCP) handshake time, subtract the CONNECT_START time from the CONNECT_END time. |
| ConnectionType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of connection. |
| DecodedBodySize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe size in octets of the HTTP message body after the removal of any applied content encoding. |
| DeviceModel | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the device model. |
| DevicePlatform | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe type of application experience in name:experience:form format. |
| DeviceSessionIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique identifier of the user’s session based on page load time. When the user reloads a page, a new session is started. |
| DomainLookupEnd | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser completes a DNS lookup for a resource.To calculate the DNS lookup time, subtract the DOMAIN_LOOKUP_START time from the DOMAIN_LOOKUP_END time. |
| DomainLookupStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser starts a DNS lookup for a resource.To calculate the DNS lookup time, subtract the DOMAIN_LOOKUP_START time from the DOMAIN_LOOKUP_END time. |
| Duration | TypedoublePropertiesFilter, Nillable, SortDescriptionThe total duration in milliseconds of the event from the START_TIME to the RESPONSE_END time. |
| EncodedBodySize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe size in octets of the HTTP message body before the removal of any applied content encoding. |
| FetchStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser starts to fetch a resource from the server, not including redirects. Occurs before the DNS lookup and the connection to the server is established.To calculate the total time used to fetch a resource without redirects, subtract the FETCH_START time from the RESPONSE_END time. |
| FirstInterimResponseStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser receives the first byte of the interim 1xx response from the server.To calculate the time from when the browser sends a request to when it starts to receive an interim response, subtract the REQUEST_START time from the FIRST_INTERIM_RESPONSE_START time. |
| InitiatorType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe HTML element that initiates the resource load. |
| LoginKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe string that ties together all events in a user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| MobileSdkAppType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile application type. |
| MobileSdkVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionMobile SDK version number. |
| NextHopProtocol | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ALPN Protocol ID. |
| OperatingSystemName | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the operating system. |
| OperatingSystemVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe operating system version number. |
| PageContext | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe name of the component hosting the main content of the page. |
| PageObjectIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique object identifier of the event. |
| PageObjectType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe object type of the event. |
| PageUrl | TypestringPropertiesFilter, Group, Nillable, SortDescriptionRelative URL of the top-level Lightning Experience page that the user opened. The page can contain one or more Lightning components. Multiple record IDs can be associated with PAGE_URL. |
| RedirectEnd | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser receives the last byte of the response of the final redirect.To calculate the total redirection time, subtract the REDIRECT_START time from the REDIRECT_END time. |
| RedirectStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser starts to fetch a resource that initiates a redirect.To calculate the total redirection time, subtract the REDIRECT_START time from the REDIRECT_END time. |
| RenderBlockingStatus | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe status that indicates whether the resource can block or delay the browser from rendering page content. |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| RequestStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser starts to request the resource from the server.To calculate the total request time, subtract the REQUEST_START time from the RESPONSE_START time. |
| ResponseEnd | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser receives the resource’s last byte or when the transport connection closes, whichever comes first.To calculate the total time used to fetch a resource without redirects, subtract the FETCH_START time from the RESPONSE_END time. |
| ResponseStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser receives the first byte of the response from the server.To calculate the total request time, subtract the REQUEST_START time from the RESPONSE_START time. |
| ResponseStatus | TypedoublePropertiesFilter, Nillable, SortDescriptionThe HTTP response status code. |
| SdkAppVersion | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe mobile SDK application type.Possible ValuesHYBRIDHYBRIDLOCALHYBRIDREMOTENATIVEREACTNATIVE |
| SecureConnectionStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser begins the handshake process that secures the connection. |
| ServerRequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe requestId for the server request that’s used to find associated server logs. |
| SessionKey | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe user’s unique session ID. You can use this value to identify all events in Lightning Experience within a session. When the user logs out and logs in again, a new session starts. |
| StartTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the browser starts to fetch the resource, including redirects. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| TransferSize | TypedoublePropertiesFilter, Nillable, SortDescriptionThe size in octets of the resource, including the response header and the response payload body. |
| UiEventElapsedTime | TypedoublePropertiesFilter, Nillable, SortDescriptionThe difference in milliseconds between when the message was logged and when the browser tab started meaning |
| UiEventTimestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe difference in milliseconds between when the event is logged and when the browser tab is opened. |
| UiRootActivityIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe ID of the root activity when the event occurs. |
| UiThreadResponseDelay | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds from when the browser receives the response to when it executes the callback. This delay occurs if the main Javascript thread is busy when the response is received. |
| Url | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the request. |
| UserIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe 15-character ID of the user accessing Salesforce services through the UI or API. |
| UserType | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe category of user license of the user accessing Salesforce services through the UI or API. |
| WorkerStart | TypedoublePropertiesFilter, Nillable, SortDescriptionThe time in milliseconds when the active service worker receives the fetch event, if a service worker is installed.To measure the service worker processing time, subtract the WORKER_START time from the FETCH_START time. |

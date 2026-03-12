---
title: "One Commerce Usage Event Type"
domain: object-reference
topic: one-commerce-usage-event-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.487Z
estimatedTokens: 2555
keywords: [Commerce, Usage, Event, events, capture, instance, EventLogFile, API, version, 51.0, later]
---

# One Commerce Usage Event Type

> One Commerce Usage events capture information about your Commerce
         instance. This event type is available in the EventLogFile object in API version 51.0
      and later.

# One Commerce Usage Event Type

One Commerce Usage events capture information about your Commerce instance. This event type is available in the EventLogFile object in API version 51.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BROWSER_DEVICE_TYPE | TypeNumberDescriptionA code used to identify the browser and device type.The code is in the format “BBVVVXYZ,” with the following signification:BB — Two digits that indicate the browser type.IE: “10”CHROME: "13"FIREFOX: "11"SAFARI: "14"OPERA: "15"ANDROID_WEBKIT: "16"NETSCAPE: "17"OTHER_WEBKIT: "18"OTHER_GECKO: "19"OTHER_KHTML: "20"OTHER_MOBILE: "21"SALESFORCE_DESKTOP: "22"BLACKBERRY: "23"GOOD_ACCESS: "24"EDGE: "25"SALESFORCE_MOBILE: "26"VVV—Three digits that indicate version, leading zeroes.XYZ—Browser-type specific flags or options. Each digit in XYZ represents a different flag depending on the BrowserType:X=1: If the parser recognizes a "touch" browser. Here, touch means the older touch native client, not that the device supports touch.Y=1: If the parser recognizes a browser in compatibility mode. Only for IE.Z=1: If the browser is recognized as MOBILE.Z=2: If the browser is recognized as PHONE.Z=3: If the browser is recognized as TABLET.Z=4: If the browser is a recognized as MEDIA PLAYER.Z=6: Only for Opera Mini. |
| B2B_EDITION | TypeStringDescriptionEdition of B2B Commerce. Edition can include Lightning (LB2B), CCRZ, or future flavors. |
| B2B_VERSION | TypeStringDescriptionThis field is optional. For the managed package, then B2B_VERSION includes Major, Minor, Patch revision numbers. For Lightning B2B_VERSION includes the optional service version. |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. If the user’s session context isn't available, this field returns a blank value. |
| CONTEXT_ID | TypeStringDescriptionThe contextId (Key Business Domain Value) in which the operation is done. For example, for Cart, the contextId is cartId. |
| CONTEXT_MAP | TypeStringDescriptionThis field is optional. It holds a JSON string with additional operational context. |
| CORRELATION_ID | TypeStringDescriptionThis field holds correlations, such as client to server and other asynchronous calls to B2B subsystems. |
| COUNT | TypeStringDescriptionThe number of records impacted by this operation. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| DB_TOTAL_TIME | TypeNumberDescriptionTime (in milliseconds) spent waiting for database processing in aggregate for all operations in the request. Compare this field to CPU_TIME to determine whether performance issues are occurring in the database layer or in your own code. |
| EFFECTIVE_ACCOUNT_ID | TypeStringDescriptionThe B2B Effective Account ID in context of the operation. |
| ERROR_CODE | TypeStringDescriptionThe API error code that appears when an operation fails. If there is no error the value is null. |
| ERROR_MESSAGE | TypeStringDescriptionError message that appears when an operation fails. If there is no error the value is null. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always OneCommerceUsage. |
| IS_RETRY | TypeStringDescriptionThe field is True if the operation resulted in a retry, otherwise it’s False. Understanding the frequency of operation retries helps determine the health of a service. The default value is False. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| OPERATION | TypeStringDescriptionThe name of the B2B service.For example: CreateCart or KeywordSearch. |
| OPERATION_STAGE | TypeStringDescriptionThis field is optional. Used to capture more granular operation level stages. |
| OPERATION_STATE | TypeStringDescriptionThis field is optional. An enum for the state of the operation.For example: CartLocked, OrderCancelled, InProgress, New, Update, and Pending. |
| OPERATION_STATUS | TypeStringDescriptionEnum with the outcome of the operation.For example: Success or Fail. |
| OPERATION_TIME | TypeStringDescriptionTotal time of the operation in milliseconds. |
| OS_VERSION | TypeStringDescriptionCode used to identify the operating system and version. The value is equal to 9999 for an unknown platform. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| REQUEST_STATUS | TypeStringDescriptionThe status of the request for a page view or user interface action.For example:S—Success. Salesforce handled the request successfully. If an Apex controller throws an exception, this status is also returned.F—Failure. Typically 4xx or 5xx HTTP codes, such as no permission to view page, page took too long to render, page is read-only.U—UndefinedA—Authorization ErrorR—Redirect. Typically a 3xx HTTP code, possibly initiated by an Apex controller in a Visualforce page.N—Not Found. 404 error.This field can have a blank value. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds.Requests with a value over five seconds are considered long-running requests for the purposes of the Concurrent Long-Running Apex Limit.NoteHTTP callout processing time isn't included when calculating the 5-second limit. We pause the timer for the callout and resume it when the callout completes. |
| SERVICE_NAME | TypeStringDescriptionEnum of B2B Services.For example: Cart, Pricing, Products, Order, Search, and so on. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who’s using Salesforce services through the UI or the API.For example: 00530000009M943 |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 00590000000I1SNIA0. |
| USER_TYPE | TypeStringDescriptionThe category of user license.Possible values are:CsnOnly—Users whose access to the application is limited to Chatter. This user type includes Chatter Free and Chatter moderator users.CspLitePortal—CSP Lite Portal license. Users whose access is limited because they’re organization customers and access the application through a customer portal or an Experience Cloud site.CustomerSuccess—Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal.Guest—Users whose access is limited so that your customers can view and interact with your site without logging in.PowerCustomerSuccess—Power Customer Success license. Users whose access is limited because they’re organization customers and access the application through a customer portal. Users with this license type can view and edit data they directly own or data owned by or shared with users below them in the customer portal role hierarchy.PowerPartner—Power Partner license. Users whose access is limited because they’re partners and typically access the application through a partner portal or site.SelfService—Users whose access is limited because they’re organization customers and access the application through a self-service portal.Standard—Standard user license. This user type also includes Salesforce Platform and Salesforce Platform One user licenses, and admins for this org. |
| WEBSTORE_ID | TypeStringDescriptionThis field is optional. The ID of the webstore associated with the store (site). |
| WEBSTORE_TYPE | TypeStringDescriptionThe type of webstore.For example: B2B, B2C, and OMS. |

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)

---
title: "Pricing Event Type"
domain: object-reference
topic: pricing-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.525Z
estimatedTokens: 936
keywords: [Pricing, Event, events, contain, procedures, were, executed, including, APIs, status]
---

# Pricing Event Type

> Pricing events contain information about pricing procedures that were executed,
        including details such as pricing procedures used, the pricing APIs, and pricing details and
        status.

# Pricing Event Type

Pricing events contain information about pricing procedures that were executed, including details such as pricing procedures used, the pricing APIs, and pricing details and status.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| CLIENT_IP | TypeStringDescriptionThe IP address of the client that’s using Salesforce services. A Salesforce internal IP (such as a login from AppExchange) is shown as “Salesforce.com IP”. If the user’s session context isn't available, this field returns a blank value. |
| CPU_TIME | TypeNumberDescriptionThe CPU time in milliseconds used to complete the request. This field indicates the amount of activity taking place in the app server layer. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always Pricing. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000062. |
| PRICING_API_ENDPOINT | TypeStringDescriptionThe starting point of the Pricing API or Headless Pricing API.For example: Pricing API. |
| PRICING_DETAILS | TypeStringDescriptionThe details of the pricing event that describes if the pricing API was executed or failed.For example: Pricing element was processed.. |
| PRICING_ERROR_CODE | TypeStringDescriptionThe API error code that appears when‌ pricing execution fails. If there is no error, the value is null.For example: INTERNAL_ERROR. |
| PRICING_LOG_NAME | TypeStringDescriptionThe detailed pricing log message generated.For example: The Headless Pricing API was run in:{0}. |
| PRICING_PROCEDURE | TypeStringDescriptionThe name of the pricing procedure used to perform pricing calculations.For example: Default Pricing Procedure. |
| PRICING_STATUS | TypeStringDescriptionThe status of the request for pricing execution.For example: Completed or Failed. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| RUN_TIME | TypeNumberDescriptionThe amount of time that the request took in milliseconds.For example: 1851629863. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started. |
| TIMESTAMP | TypeStringDescriptionThe time that the pricing was executed in GMT.For example: 20170606170000.000. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe time that the pricing was executed in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2017-06-06T1700.000Z. Timezone is GMT. |
| URI | TypeStringDescriptionThe URI of the page that’s receiving the request.For example: /home/home.jsp. |
| URI_ID_DERIVED | TypeIDDescriptionThe 18-character case insensitive ID of the URI of the page that’s receiving the request. |
| USER_ID | TypeIdDescriptionThe 15-character ID of the user who executed pricing through the UI or the API.For example: 005SG000000eu6j |
| USER_ID_DERIVED | TypeIdDescriptionThe 18-character case insensitive ID of the user who’s using Salesforce services through the UI or the API.For example: 001xx0000000useAAA. |

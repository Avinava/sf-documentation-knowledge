---
title: "Blocked Redirect Event Type"
domain: object-reference
topic: blocked-redirect-event-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:08.967Z
estimatedTokens: 1863
keywords: [Blocked, Redirect, Event, events, capture, redirections, Salesforce, untrusted, malformed, URLs, EventLogFile, API, version, 63.0, later]
---

# Blocked Redirect Event Type

> Blocked redirect events capture information about blocked redirections
			from Salesforce to untrusted and malformed URLs. The Blocked Redirect event type is
		available in the EventLogFile object in API version 63.0 and later.

# Blocked Redirect Event Type

Blocked redirect events capture information about blocked redirections from Salesforce to untrusted and malformed URLs. The Blocked Redirect event type is available in the EventLogFile object in API version 63.0 and later.

This event is free for all customers with a 24-hour data retention period. The blocked redirects event is available in the API but not in the Event Monitoring Analytics app.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or the [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

Blocked redirect events capture these redirections when the target URL isn’t a [RedirectWhitelistUrl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_redirectwhitelisturl.htm "Represents a trusted URL for external user redirections. Redirections to a different Salesforce org, including its publicly served pages and content, are allowed from your Salesforce org only when the URL is a RedirectWhitelistUrl. For non-Salesforce URLs, a session setting controls whether redirections from pages and components built in Salesforce Classic are restricted to RedirectWhitelistUrl objects. Except for cross-org redirections, you can’t restrict redirections that originate from pages and components built with Lightning Experience. This object is available in API version 48.0 and later.") or when the target URL fails a syntax check.

-   An anchor link within a page or component that includes a redirection. For example, <a href="/?startURL=targetUrl"\>linkText</a\> includes a redirection via the startURL parameter.
-   A parameter within a page that redirects the user. For example, this form action redirects the user through the saveURL parameter: <form action="/xyz?saveURL=targetURL">.

Within pages and components, a direct anchor link to an external URL is always allowed, even if the target URL isn’t a [RedirectWhitelistUrl](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_redirectwhitelisturl.htm "Represents a trusted URL for external user redirections. Redirections to a different Salesforce org, including its publicly served pages and content, are allowed from your Salesforce org only when the URL is a RedirectWhitelistUrl. For non-Salesforce URLs, a session setting controls whether redirections from pages and components built in Salesforce Classic are restricted to RedirectWhitelistUrl objects. Except for cross-org redirections, you can’t restrict redirections that originate from pages and components built with Lightning Experience. This object is available in API version 48.0 and later."). For those direct anchor links, if the target URL fails a syntax check, the user receives an error but the redirection isn’t captured as a blocked redirect event. An example of a direct anchor link is <a href="targetUrl"\>linkText</a\>.

For hyperlinks within URL and Long Text Area fields, blocked redirections to untrusted URLs are captured as blocked redirect events only when the user who clicked the hyperlink accessed Salesforce via Salesforce Classic. If those users see a warning message and can proceed to the untrusted URL, that event isn’t captured as a blocked redirect event.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To help preserve performance, Salesforce uses throttling, a technique that limits the number of generated blocked redirect events when the volume is exceptionally high. Therefore, if your org generates a high volume of blocked redirections over a short period of time, some of those redirections can fail to generate a blocked redirect event.

## Fields

| Field | Details |
| --- | --- |
| BLOCKED_URI | TypeStringDescriptionThe full string of the target for the redirection.Examplehttps://www.example.com/shop.htm |
| BLOCKED_URI_DOMAIN | TypeStringDescriptionIf BLOCKED_URI is a URL, the domain for that URL. To allow future redirections to the BLOCKED_URI, BLOCKED_URI_DOMAIN is the value to add to RedirectWhitelistUrl.Examplewww.example.com |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always BlockedRedirect. |
| MALFORMED_URL | TypeBooleanDescriptionIndicates whether this redirection was blocked because the target URL failed a syntax check (1) or not (0).Here are examples of malformed URLs.https://www.example.com/$t61'3https://malformed^url.example.com |
| ORIGIN | TypeStringDescriptionThe origin that caused the request to the BLOCKED_URI. For example, if a form on an Experience Cloud Visualforce site page redirects a user to an untrusted URL via the saveURL parameter, ORIGIN contains the base URL of that site. |
| REFERRER | TypeStringDescriptionThe absolute or partial address from which the request to the BLOCKED_URI came. The Referrer-Policy HTTP Header of the request determines how much of the URL is shared. |
| REMOTE_ADDRESS | TypeStringDescriptionRemote IP address of the client making the request. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example0000000062_0000x8Lz- |
| TIMESTAMP | TypeDateTimeDescriptionThe access time of Salesforce services in GMT.Example20220715233322.670 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ). The time zone is always GMT.Example2022-07-27T11:32:59.555Z. |

## Usage

Only one blocked redirect log file is available at a time. When the daily incremental event log file is generated during the daily background process, the new file replaces the existing file.

If the log file doesn’t exist, either the log generation process hasn’t run yet or there’s no redirection data to report for that 24-hour window. The log file is generated only when at least one redirection occurred for the day.

To collect blocked redirect logs for multiple days, schedule a daily query of the Blocked Redirect event type via REST API. For example, you can configure a cron job in Unix or a scheduled task in Windows to run the query.

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Related Topics

- RedirectWhitelistUrl (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_redirectwhitelisturl.htm)
- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)

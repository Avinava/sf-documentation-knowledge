---
title: "CSP Violation Event Type"
domain: object-reference
topic: csp-violation-event-type
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:09.102Z
estimatedTokens: 1649
keywords: [CSP, Violation, Event, events, capture, blocked, resource, requests, Lightning, Experience, pages, content, security, policy, EventLogFile]
---

# CSP Violation Event Type

> CSP violation events capture details about blocked resource requests
			from Lightning Experience pages based on your content security policy (CSP). The
		CSP Violation event type is available in the EventLogFile object in API version 63.0 and
		later.

# CSP Violation Event Type

CSP violation events capture details about blocked resource requests from Lightning Experience pages based on your content security policy (CSP). The CSP Violation event type is available in the EventLogFile object in API version 63.0 and later.

This event is free for all customers with a 24-hour data retention period. The CSP violation event is available in the API but not in the Event Monitoring Analytics app.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or the [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=object_reference)

#### Note

To help preserve performance, Salesforce uses throttling, a technique that limits the number of generated CSP violation events when the volume is exceptionally high. Therefore, if your org generates a high volume of CSP violations over a short period of time, some of those violations can fail to generate a CSP violation event.

## Fields

| Field | Details |
| --- | --- |
| BLOCKED_URI | TypeStringDescriptionThe full string of the blocked resource. If the call to the blocked resource used a URL, BLOCKED_URI is the full URL. Or, for violations with a DIRECTIVE of script-src directives, inline or eval.Exampleshttps://www.example.com/images/picture.pngfile://host1:0002/media/video.mp4inline |
| BLOCKED_URI_DOMAIN | TypeStringDescriptionIf BLOCKED_URI is a URL, the domain for that URL. To allow resources to be loaded from the BLOCKED_URI, BLOCKED_URI_DOMAIN is the endpointUrl value to add or update in the CspTrustedSite Metadata API.Examplewww.example.com |
| COLUMN_NUMBER | TypeNumberDescriptionThe column number in the document or worker script at which the violation occurred. This value is relevant only when DIRECTIVE is script-src.For those violations, use this value with LINE_NUMBER to identify the location of the violation.Example27 |
| CONTEXT | TypeStringDescriptionThe content security policy (CSP) context for the request. The CSP context controls which pages can load content from a CspTrustedSite.CSP violation events capture details about blocked resource requests from only Lightning Experience pages, this value is always Lightning. |
| DIRECTIVE | TypeStringDescriptionThe CSP directive that blocked the resource request.Possible Valuesfont-srcframe-srcimg-srcmedia-srcstyle-srcscript-srcFor information on these directives and a full list of all CSP directives, see MDN Web Docs: Content-Security-Policy. |
| DISPOSITION | TypeStringDescriptionThe CSP violation handling instruction for the user agent at the time of the violation.Possible Valuesenforce—Enforce the policy violation. For violations with this DISPOSITION, the resource request was blocked.report—Report the policy violation. For violations with this DISPOSITION, the resource request wasn’t blocked, but the violation was reported. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always CspViolation |
| LINE_NUMBER | TypeNumberDescriptionThe line number in the document or worker script at which the violation occurred. This value is relevant only when DIRECTIVE is script-src. For those violations, use this value with COLUMN_NUMBER to identify the location of the violation.Example12 |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.Example0000000062_0000x8Lz- |
| RESOURCE_SAMPLE | TypeStringDescriptionA sample of the resource that caused the violation, usually the first 40 characters, or the empty string.Examplevar lastRow = 4;greyLink('fRemoveRowLink  var SFDCSessionVars={"server":"https:\\/\\  LoginHint.getSavedIdentities(false);  LoginHint.saveHintEdit();  function handleLogin(){document.login.un… |
| SOURCE | TypeStringDescriptionThe page where this CSP violation originated. For example, if your CSP policy prevented an image from loading on a Visualforce page, SOURCE contains the URL of that page.Examplehttps://MyDomainName.my.salesforce.com/apex/HelloWorld |
| SOURCE_FILE | TypeStringDescriptionThe URL of the script in which the violation occurred. If the violation didn’t occur in a script, SOURCE_FILE is null.Examplehttps://www.example.com/script_xyz.js |
| TIMESTAMP | TypeDateTimeDescriptionThe access time of Salesforce services in GMT.Example20220715233322.670 |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ). The time zone is always GMT.Example2022-07-27T11:32:59.555Z. |

## Usage

Only one CSP violation event log file is available at a time. When the daily incremental event log file is generated during the daily background process, the new file replaces the existing file.

If the event log file doesn’t exist, either the log generation process hasn’t run yet or there’s no violation data to report for that 24-hour window. The event log file is generated only when at least one violation occurred for the day.

To collect CSP violation logs for multiple days, schedule a daily query of the CSP Violation event type via REST API. For example, you can configure a cron job in Unix or a scheduled task in Windows to run the query.

#### See Also

-   [EventLogFile Supported Event Types](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm "The EventType field in the EventLogFile object supports these events. Some common fields, such as CPU_TIME and RUN_TIME, can have null or zero values depending on how the events are generated for a given feature. Sometimes, three quotation marks appear around event data containing special characters in the CSV file. The third quotation mark is necessary for tools and applications to parse the field data at the correct field value boundary.")

-   [EventLogFile](atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm "Represents event log files for event monitoring. The event monitoring product gathers information about your Salesforce org’s operational events, which you can use to analyze usage trends and user behavior. This object is available in API version 32.0 and later. The Interval and Sequence fields are available only in API version 37.0 and later.")

## Code Examples

```
var lastRow = 4;greyLink('fRemoveRowLink

var SFDCSessionVars={"server":"https:\\/\\

LoginHint.getSavedIdentities(false);

LoginHint.saveHintEdit();

function handleLogin(){document.login.un…
```

## Related Topics

- CspTrustedSite (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_csptrustedsite.htm)
- EventLogFile Supported Event Types (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile_supportedeventtypes.htm)
- EventLogFile (atlas.en-us.object_reference.meta/object_reference/sforce_api_objects_eventlogfile.htm)

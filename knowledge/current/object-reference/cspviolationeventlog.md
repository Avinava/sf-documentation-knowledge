---
title: "CspViolationEventLog"
domain: object-reference
topic: cspviolationeventlog
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:07.618Z
estimatedTokens: 1185
keywords: [CspViolationEventLog, CSP, violation, events, capture, blocked, resource, requests, Lightning, Experience, pages, content, security, policy, API]
---

# CspViolationEventLog

> CSP violation events capture details about blocked resource requests from
         Lightning Experience pages based on your content security policy (CSP).  This object
      is available in API version 63.0 and later.

# CspViolationEventLog

CSP violation events capture details about blocked resource requests from Lightning Experience pages based on your content security policy (CSP). This object is available in API version 63.0 and later.

This event is free for all customers with a 24-hour data retention period. The CSP violation event is available in the API but not in the Event Monitoring Analytics app.

## Supported Calls

describeSObjects(), query()

## Special Access Rules

To access this object, you must have the View Event Log Object Data user permission.

## Fields

| Field | Details |
| --- | --- |
| BlockedUri | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe full string of the blocked resource. If the call to the blocked resource used a URL, BLOCKED_URI is the full URL. Or,for violations with a DIRECTIVE of script-src directives, inline or eval.Exampleshttps://www.example.com/images/picture.pngfile://host1:0002/media/video.mp4inline |
| BlockedUriDomain | TypestringPropertiesFilter, Group, Nillable, SortDescriptionIf BLOCKED_URI is a URL, the domain for that URL. To allow resources to be loaded from the BLOCKED_URI, BLOCKED_URI_DOMAIN is the endpointUrl value to add or update in the CspTrustedSite Metadata API. |
| ColumnNumber | TypedoublePropertiesFilter, Nillable, SortDescriptionThe column number in the document or worker script at which the violation occurred. This value is relevant only when DIRECTIVE is script-src.For those violations, use this value with LINE_NUMBER to identify the location of the violation.Example27 |
| Context | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe content security policy (CSP) context for the request. The CSP context controls which pages can load content from a CspTrustedSite.CSP violation events capture details about blocked resource requests from only Lightning Experience pages, this value is always Lightning. |
| Directive | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe CSP directive that blocked the resource request.Possible Valuesfont-srcframe-srcimg-srcmedia-srcstyle-srcscript-srcFor information on these directives and a full list of all CSP directives, see MDN Web Docs: Content-Security-Policy. |
| Disposition | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe CSP violation handling instruction for the user agent at the time of the violation.Possible Valuesenforce—Enforce the policy violation. For violations with this DISPOSITION, the resource request was blocked.report—Report the policy violation. For violations with this DISPOSITION, the resource request wasn’t blocked, but the violation was reported. |
| LineNumber | TypedoublePropertiesFilter, Nillable, SortDescriptionThe line number in the document or worker script at which the violation occurred. This value is relevant only when DIRECTIVE is script-src. For those violations, use this value with COLUMN_NUMBER to identify the location of the violation.Example12 |
| RequestIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| ResourceSample | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA sample of the resource that caused the violation, usually the first 40 characters, or the empty string. |
| Source | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe page where this CSP violation originated. For example, if your CSP policy prevented an image from loading on a Visualforce page, SOURCE contains the URL of that page. |
| SourceFile | TypestringPropertiesFilter, Group, Nillable, SortDescriptionThe URL of the script in which the violation occurred. If the violation didn’t occur in a script, SOURCE_FILE is null. |
| Timestamp | TypedateTimePropertiesFilter, Nillable, SortDescriptionThe access time of Salesforce services in GMT. |
| UniqueIdentifier | TypestringPropertiesFilter, Group, Nillable, SortDescriptionA string identifier for the CSP violation. |

## Usage

Only one CSP violation event log file is available at a time. When the daily incremental event log file is generated during the daily background process, the new file replaces the existing file.

If the event log file doesn’t exist, either the log generation process hasn’t run yet or there’s no violation data to report for that 24-hour window. The event log file is generated only when at least one violation occurred for the day.

To collect CSP violation logs for multiple days, schedule a daily query of the CSP Violation event type via REST API. For example, you can configure a cron job in Unix or a scheduled task in Windows to run the query.

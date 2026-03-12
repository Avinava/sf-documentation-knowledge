---
title: "CORS Violation Record Event Type"
domain: object-reference
topic: cors-violation-record-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.090Z
estimatedTokens: 485
keywords: [CORS, Violation, Record, Event, events, capture, Cross-Origin, Resource, Sharing, violations, requests, Lightning, apps, blocked, unless]
---

# CORS Violation Record Event Type

> CORS Violation Record events capture information about Cross-Origin Resource Sharing
  (CORS) violations. Cross-origin requests to Lightning apps are blocked unless the request comes
  from a URL listed in your CORS allowlist.

# CORS Violation Record Event Type

CORS Violation Record events capture information about Cross-Origin Resource Sharing (CORS) violations. Cross-origin requests to Lightning apps are blocked unless the request comes from a URL listed in your CORS allowlist.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always CorsViolation. |
| HOST | TypeStringDescriptionThe URL of the requested Salesforce resource.If JavaScript code at https://www.example.com requests a resource from https://www.salesforce.com, the origin is https://www.example.com and the host is https://www.salesforce.com. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| ORIGIN | TypeStringDescriptionThe URL of the site making the cross-origin request to Salesforce.If JavaScript code at https://www.example.com requests a resource from https://www.salesforce.com, the origin is https://www.example.com and the host is https://www.salesforce.com. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID.For example: 3nWgxWbDKWWDIk0FKfF5DV. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT.For example: 20130715233322.670. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |

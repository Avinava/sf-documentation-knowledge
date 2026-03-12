---
title: "Database Save Event Type"
domain: object-reference
topic: database-save-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.121Z
estimatedTokens: 537
keywords: [Database, Save, Event, events, track, records, created, updated, deleted, API, version, 63.0, later]
---

# Database Save Event Type

> Database Save events track when records are created, updated, or deleted. This object
      is available in API version 63.0 and later.

# Database Save Event Type

Database Save events track when records are created, updated, or deleted. This object is available in API version 63.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| DML_TYPE | TypeStringDescriptionThe type of DML statement. |
| EVENT_TYPE | TypeIdDescriptionThe type of event. |
| FIRST_ENTITY_ID | TypeStringDescriptionThe first ID that is logged when an update occurs. If a single record is updated, the ID of that row is logged. If multiple records are updated, only one ID is logged. |
| KEY_PREFIX | TypeStringDescriptionThe key prefix of the entity type that was saved. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. |
| NUM_ROWS | TypeStringDescriptionThe number of entities that were saved. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization. |
| REQUEST_ID | TypeStringDescriptionGlobally unique id for a given request. |
| SAMPLE_FACTOR | TypeNumberDescriptionThe ratio of saved entities that were logged. A value of 1 means every entity saved was logged. A value of 100 means that 1 out of 100 entities saved was logged. |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.Exampled7DEq/ANa7nNZZVD |
| TIMESTAMP | TypeStringDescriptionThe Timestamp at which the log event was generated. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ).Example2015-07-27T11:32:59.555Z |
| USER_ID | TypeIdDescriptionThe ID of the user who’s using Salesforce services through the UI or the API.Example005XXXXXXXXXXXX |

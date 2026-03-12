---
title: "Unique Query Event Type"
domain: object-reference
topic: unique-query-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.708Z
estimatedTokens: 442
keywords: [Unique, Query, Event, events, capture, specific, search, queries, SOQL, filter, IDs, report, processed, along, underlying]
---

# Unique Query Event Type

> Unique Query events capture specific search queries (SOQL), filter
         IDs, and report IDs that are processed, along with the underlying database queries (SQL).
      This event type is available in API versions 64.0 and later.

# Unique Query Event Type

Unique Query events capture specific search queries (SOQL), filter IDs, and report IDs that are processed, along with the underlying database queries (SQL). This event type is available in API versions 64.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| BOT_IDENTIFIER | TypestringDescriptionThe ID of the bot. |
| BOT_SESSION_IDENTIFIER | TypestringDescriptionThe bot session ID. |
| LOGIN_KEY | TypeStringDescriptionThe string that ties together all events in a given user’s login session. It starts with a login event and ends with either a logout event or the user session expiring.For example: GeJCsym5eyvtEK2I. |
| ORGANIZATION_ID | TypeIdDescriptionThe 15-character ID of the organization.For example: 00D000000000123. |
| PLANNER_IDENTIFIER | TypestringDescriptionThe ID of the agent planner. |
| QUERY_IDENTIFIER | TypeStringDescriptionThe text of the SOQL query run or the Id of the report or list view run. |
| QUERY_TYPE | TypeStringDescriptionThe input type to the optimizer that was translated.Possible Valuessoqlfilterreport |
| SESSION_KEY | TypeStringDescriptionThe user’s unique session ID. You can use this value to identify all user events within a session. When a user logs out and logs in again, a new session is started.For example: d7DEq/ANa7nNZZVD. |
| SQL_ID | TypeStringDescriptionThe unique identifier generated for the database query. |

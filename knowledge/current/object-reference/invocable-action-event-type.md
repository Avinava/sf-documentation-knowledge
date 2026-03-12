---
title: "Invocable Action Event Type"
domain: object-reference
topic: invocable-action-event-type
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:09.250Z
estimatedTokens: 574
keywords: [Invocable, Action, Event, events, capture, calls, Salesforce, Actions, particularly, useful, monitor, invoked, Agentforce, flows, API]
---

# Invocable Action Event Type

> Invocable Action events capture the calls to Salesforce Invocable Actions. This is
  particularly useful to monitor actions invoked during Agentforce flows. This event type is
  available in API versions 64.0 and later.

# Invocable Action Event Type

Invocable Action events capture the calls to Salesforce Invocable Actions. This is particularly useful to monitor actions invoked during Agentforce flows. This event type is available in API versions 64.0 and later.

For details about event monitoring, see the [Trailhead Event Monitoring module](https://trailhead.salesforce.com/en/modules/event_monitoring/units/event_monitoring_intro "HTML (New Window)") or [REST API Developer’s Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_rest.meta/api_rest/using_resources_event_log_files.htm "HTML (New Window)").

## Fields

| Field | Details |
| --- | --- |
| ACTION_NAME | TypeStringDescriptionName of the action. |
| ACTION_TYPE | TypeStringDescriptionInvocableActionType being referenced. |
| ACTION_VERSION | TypeStringDescriptionThe invocable action version. |
| API_CALLER | TypeStringDescriptionIdentifier of the API caller. This is only populated when the action is invoked from a REST API call |
| BOT_IDENTIFIER | TypestringDescriptionThe ID of the bot. |
| BOT_SESSION_IDENTIFIER | TypestringDescriptionThe bot session ID. |
| DURATION | TypeStringDescriptionTime (in nanos) taken to process this set of requests. |
| EVENT_TYPE | TypeStringDescriptionThe type of event. The value is always InvocableAction. |
| FLOW_PROCESS_TYPE | TypeStringDescriptionThe process type of the calling flow. |
| FLOW_VERSION_ID | TypeStringDescriptionThe ID of the version of the calling flow. |
| ORGANIZATION_ID | TypeIdDescriptionThe number of invoked requests. |
| PLANNER_IDENTIFIER | TypestringDescriptionThe ID of the agent planner. |
| REQUEST_COUNT | TypeNumberDescriptionThe number of invoked requests. |
| REQUEST_ID | TypeStringDescriptionThe unique ID of a single transaction. A transaction can contain one or more events. Each event in a given transaction has the same REQUEST_ID. |
| TIMESTAMP | TypeStringDescriptionThe access time of Salesforce services in GMT. |
| TIMESTAMP_DERIVED | TypeDateTimeDescriptionThe access time of Salesforce services in ISO8601-compatible format (YYYY-MM-DDTHH:MM:SS.sssZ). For example: 2015-07-27T11:32:59.555Z. Timezone is GMT. |
| USER_ID | TypeStringDescriptionID of the user employing salesforce.com services, whether through the user interface or API |

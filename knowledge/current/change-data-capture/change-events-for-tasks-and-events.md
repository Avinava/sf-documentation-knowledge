---
title: "Change Events for Tasks and Events"
domain: change-data-capture
topic: change-events-for-tasks-and-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.714Z
estimatedTokens: 393
keywords: [Change, Events, Tasks, receive, recurring, calendar, including, invitees]
---

# Change Events for Tasks and Events

> You can receive change events for single and recurring tasks and calendar events,
    including events with invitees.

# Change Events for Tasks and Events

You can receive change events for single and recurring tasks and calendar events, including events with invitees.

-   **[Recurring Activities](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_recurring.htm)**
    The activity series record is tracked in a single change event. Each occurrence in the series is tracked by an individual change event.
-   **[Event Invitees](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_invitees.htm)**
    Change events are generated for event invitees in addition to the calendar event record. When a Salesforce user is invited to a calendar event, a child calendar event record is created for the invitee. A child calendar event is an Event record with the IsChild field set to true and OwnerId set to the invitee’s user ID.
-   **[Updating Recurring Calendar Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_updating.htm)**
    If a critical change is made to a recurring calendar event, such as changing the recurrence pattern or the recurrence start date, the series is deleted and recreated.
-   **[Shared Activities and Parent Records for Tasks and Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_shared.htm)**
    If Shared Activities is enabled, the relationships between a task and its parent records (for example, contacts and lead), which correspond to TaskRelation objects, are tracked through change events.

## Related Topics

- Recurring Activities (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_recurring.htm)
- Event Invitees (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_invitees.htm)
- Updating Recurring Calendar Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_updating.htm)
- Shared Activities and Parent Records for Tasks and Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects_task_event_shared.htm)

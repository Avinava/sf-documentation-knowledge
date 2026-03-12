---
title: "Updating Recurring Calendar Events"
domain: change-data-capture
topic: updating-recurring-calendar-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.725Z
estimatedTokens: 300
keywords: [Updating, Recurring, Calendar, Events, critical, change, made, event, changing, recurrence, pattern, start, date, series, deleted]
---

# Updating Recurring Calendar Events

> If a critical change is made to a recurring calendar event, such as changing the
    recurrence pattern or the recurrence start date, the series is deleted and
    recreated.

# Updating Recurring Calendar Events

If a critical change is made to a recurring calendar event, such as changing the recurrence pattern or the recurrence start date, the series is deleted and recreated.

If a recurring calendar event contains many invitees and many occurrences, a critical change can lead to many change events. For example, updating the recurrence start date of a calendar event with 100 occurrences and 100 invitees results in deleting and recreating 10,000 child Event records (100 records x 100 occurrences) and 10,000 EventRelation records. A high volume of changes in a single transaction could generate overflow events. For more information, see [Overflow Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm "To capture changes more efficiently, overflow events are generated for single transactions that exceed a threshold.").

#### See Also

-   [*Object Reference for Salesforce and Force.com*: EventRelation](https://developer.salesforce.com/docs/atlas.en-us.260.0.object_reference.meta/object_reference/sforce_api_objects_eventattendee.htm "Object Reference for Salesforce and Force.com: EventRelation - HTML (New Window)")

## Related Topics

- Overflow Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm)

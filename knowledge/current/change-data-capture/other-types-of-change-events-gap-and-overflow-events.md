---
title: "Other Types of Change Events: Gap and Overflow
    Events"
domain: change-data-capture
topic: other-types-of-change-events-gap-and-overflow-events
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.642Z
estimatedTokens: 226
keywords: [Change, Events, Gap, Overflow, provided, handle, special, situations, capturing, changes, caught, Salesforce, application, servers, handling]
---

# Other Types of Change Events: Gap and Overflow
    Events

> Other types of change events are provided to handle special situations, such as
    capturing changes not caught in the Salesforce application servers, or handling high loads of
    changes.

# Other Types of Change Events: Gap and Overflow Events

Other types of change events are provided to handle special situations, such as capturing changes not caught in the Salesforce application servers, or handling high loads of changes.

-   **[Gap Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_gap.htm)**
    Salesforce sometimes sends gap events instead of change events to inform subscribers about errors, or if it’s not possible to generate change events. A gap event contains information about the change in the header, such as the change type and record ID. It doesn’t include details about the change, such as record fields.
-   **[Overflow Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm)**
    To capture changes more efficiently, overflow events are generated for single transactions that exceed a threshold.

## Related Topics

- Gap Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_gap.htm)
- Overflow Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events_overflow.htm)

---
title: "Change Events for Fields"
domain: change-data-capture
topic: change-events-for-fields
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:09.786Z
estimatedTokens: 230
keywords: [Change, Events, event, characteristics]
---

# Change Events for Fields

> Learn about the change event characteristics for fields.

# Change Events for Fields

Learn about the change event characteristics for fields.

-   **[Sending Data Differences for Fields of Updated Records](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff.htm)**
    To reduce the event payload size and improve performance, Salesforce sometimes sends data differences of updated text values. For large text fields, such as Description or Long Text Area fields that contain at least 1,000 characters, only the data differences might be sent. Data differences use the unified diff format.
-   **[Change Events for Custom Field Type Conversions](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversions.htm)**
    When you change the type of a custom field, a change event or gap event is generated for data changes for some conversions. Other conversions, such as those that preserve or truncate field values, don't generate events.

## Related Topics

- Sending Data Differences for Fields of Updated Records (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_data_diff.htm)
- Change Events for Custom Field Type Conversions (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_field_conversions.htm)

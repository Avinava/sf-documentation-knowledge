---
title: "Change Data Capture"
domain: change-data-capture
topic: change-data-capture
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.620Z
estimatedTokens: 932
keywords: [Change, Data, Capture, Receive, near-real-time, changes, Salesforce, records, synchronize, corresponding, external, store, publishes, events, represent]
---

# Change Data Capture

> Receive near-real-time changes of Salesforce records, and
      synchronize corresponding records in an external data store. Change Data Capture publishes
      change events, which represent changes to Salesforce records. Changes include creation of a
      new record, updates to an existing record, deletion of a record, and undeletion of a
      record.

# Change Data Capture

Receive near-real-time changes of Salesforce records, and synchronize corresponding records in an external data store. Change Data Capture publishes change events, which represent changes to Salesforce records. Changes include creation of a new record, updates to an existing record, deletion of a record, and undeletion of a record.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Enterprise, Performance, Unlimited, and Developer editions |


-   **[Keep Your External Data Current with Change Data Capture](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_what.htm)**
    Use Change Data Capture to update data in an external system instead of doing periodic exports and imports of data or repeated API calls. Capturing changes with Change Data Capture event notifications ensures that your external data can be updated in real time and stays fresh.
-   **[Change Event Message Structure](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm)**
    A change event message contains header fields and record fields.
-   **[Merged Change Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm)**
    For efficiency, sometimes change events for one transaction are merged into one event if the same change occurred in multiple records of the same object type during one second.
-   **[Other Types of Change Events: Gap and Overflow Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events.htm)**
    Other types of change events are provided to handle special situations, such as capturing changes not caught in the Salesforce application servers, or handling high loads of changes.
-   **[Subscribe to Change Events](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe.htm)**
    Learn about subscribing to change events including subscription channels, subscription methods, and required permissions.
-   **[Monitor Change Event Publishing and Delivery Usage](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_monitor_usage.htm)**
    To get usage data for event publishing and delivery to CometD and Pub/Sub API clients, empApi Lightning components, and event relays, query the PlatformEventUsageMetric object. In API 58.0 and later, enable and use Enhanced Usage Metrics to get granular usage data for various time segments. If Enhanced Usage Metrics isn’t enabled, usage data is available for the last 24 hours, ending at the last hour, and for historical daily usage. PlatformEventUsageMetric is available in API version 50.0 and later.
-   **[Security Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_considerations.htm)**
    Learn about the user permissions required for subscription, field-level security, and Shield Platform Encryption.
-   **[Change Event Considerations](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_considerations.htm)**
    Keep in mind change event considerations and allocations when subscribing to change events.
-   **[Standard Object Notes](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects.htm)**
    Learn about the characteristics of change events for some standard objects and the fields included in the event messages.
-   **[Change Events for Fields](atlas.en-us.change_data_capture.meta/change_data_capture/change_events_for_fields.htm)**
    Learn about the change event characteristics for fields.

#### See Also

-   [*Trailhead*: Change Data Capture Basics](https://trailhead.salesforce.com/content/learn/modules/change-data-capture "Trailhead: Change Data Capture Basics - HTML (New Window)")

## Related Topics

- Keep Your External Data Current with Change Data Capture (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_what.htm)
- Change Event Message Structure (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_message_structure.htm)
- Merged Change Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_merged_events.htm)
- Other Types of Change Events: Gap and Overflow Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_other_events.htm)
- Subscribe to Change Events (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe.htm)
- Monitor Change Event Publishing and Delivery Usage (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_monitor_usage.htm)
- Security Considerations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_security_considerations.htm)
- Change Event Considerations (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_considerations.htm)
- Standard Object Notes (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_standard_objects.htm)
- Change Events for Fields (atlas.en-us.change_data_capture.meta/change_data_capture/change_events_for_fields.htm)

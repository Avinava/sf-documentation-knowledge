---
title: "Stream and Store Event Data"
domain: securityImplGuide
topic: stream-and-store-event-data
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:45.029Z
estimatedTokens: 555
keywords: [Stream, Store, Event, Data, Explore, how, objects, Real-Time, Monitoring]
---

# Stream and Store Event Data

> Explore how you can use the objects in Real-Time Event Monitoring to stream and store
    event data.

# Stream and Store Event Data

Explore how you can use the objects in Real-Time Event Monitoring to stream and store event data.

| Available in both Salesforce Classic (not available in all orgs) and Lightning Experience. |
| --- |
| Available in: Enterprise, Unlimited, and Developer EditionsRequires Salesforce Shield or Salesforce Event Monitoring add-on subscriptions. |


-   **[Manage Real-Time Event Monitoring Events](atlas.en-us.securityImplGuide.meta/securityImplGuide/event_monitoring_monitor_events_with_event_manager.htm)**
    Manage streaming and storage settings for Real-Time Event Monitoring events declaratively with the Event Manager. You can also manage settings programmatically with the Metadata API. Real-Time Event Monitoring helps you monitor and detect standard events in Salesforce in near real-time. You can store the event data for auditing or reporting purposes. You can create transaction security policies using Condition Builder—a point-and-click tool—or Apex code.
-   **[Real-Time Event Monitoring Data Streaming](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_streaming.htm)**
    Use Real-Time Event Monitoring to subscribe to standard events published by Salesforce to monitor activity in your org. You can subscribe to this data from an external data system of your choice using a Pub/Sub API client, or use event relays to send the real-time events to Amazon EventBridge.
-   **[Real-Time Event Monitoring Data Storage](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_storage.htm)**
    With Real-Time Event Monitoring, you can store and query event data in Salesforce objects. Many of the storage events are Salesforce big objects, which are ideal for storing large volumes of data for up to six months. A big object stores the data natively in Salesforce so you can access it for reporting and other uses. Some storage events, such as for Threat Detection, are standard Salesforce objects.
-   **[Use Batch Apex Queries With Real-Time Event Monitoring](atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_batch_query.htm)**
    Use Bulk API and batch Apex to query real-time events.

## Related Topics

- Manage Real-Time Event Monitoring Events (atlas.en-us.securityImplGuide.meta/securityImplGuide/event_monitoring_monitor_events_with_event_manager.htm)
- Real-Time Event Monitoring Data Streaming (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_streaming.htm)
- Real-Time Event Monitoring Data Storage (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_storage.htm)
- Use Batch Apex Queries With Real-Time Event Monitoring (atlas.en-us.securityImplGuide.meta/securityImplGuide/real_time_event_monitoring_batch_query.htm)

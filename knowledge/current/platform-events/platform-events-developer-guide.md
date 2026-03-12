---
title: "Platform Events Developer Guide"
domain: platform-events
topic: platform-events-developer-guide
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.847Z
estimatedTokens: 948
keywords: [Platform, Events, Developer, connect, business, processes, Salesforce, external, apps, exchange, real-time, event, data, secure, scalable]
---

# Platform Events Developer Guide

> Use platform events to connect business processes in Salesforce and
      external apps through the exchange of real-time event data. Platform events are secure and
      scalable messages that contain data. Publishers publish event messages that subscribers
      receive in real time. To customize the data published, define platform event
    fields.

# Platform Events Developer Guide

Use platform events to connect business processes in Salesforce and external apps through the exchange of real-time event data. Platform events are secure and scalable messages that contain data. Publishers publish event messages that subscribers receive in real time. To customize the data published, define platform event fields.

| Available in: both Salesforce Classic and Lightning Experience |
| --- |
| Available in: Performance, Unlimited, Enterprise, and Developer Editions |


-   **[Delivering Custom Notifications with Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_overview.htm)**
    Platform events are part of Salesforce’s enterprise messaging platform. The platform provides an event-driven messaging architecture to enable apps to communicate inside and outside of Salesforce. Before diving into platform events, take a look at what an event-based software system is.
-   **[Defining Your Custom Platform Event](atlas.en-us.platform_events.meta/platform_events/platform_events_define.htm)**
    Define a platform event and add custom fields.
-   **[Publishing Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_publish.htm)**
    After a platform event has been defined in your Salesforce org, publish event messages from a Salesforce app using processes, flows, or Apex or an external app using Salesforce APIs.
-   **[Subscribing to Platform Events](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe.htm)**
    Receive platform events in processes, flows, Apex triggers, Pub/Sub API, or CometD clients.
-   **[Testing Your Platform Event in Apex](atlas.en-us.platform_events.meta/platform_events/platform_event_apex_tests.htm)**
    Add Apex tests to test platform event subscribers. Before you can package or deploy Apex code, including triggers, to production, it must have tests and sufficient code coverage. Add Apex tests to provide code coverage for your triggers.
-   **[Encrypting Platform Event Messages at Rest in the Event Bus](atlas.en-us.platform_events.meta/platform_events/platform_events_encryption.htm#platform_events_encryption)**
    For increased security, you can enable encryption of platform event messages while they’re stored in the event bus in a Shield Encryption org.
-   **[Monitor Platform Event Publishing and Delivery Usage](atlas.en-us.platform_events.meta/platform_events/platform_events_monitor_usage.htm)**
    To get usage data for event publishing and delivery to Pub/Sub API and CometD clients, empApi Lightning components, and event relays, query the PlatformEventUsageMetric object. In API 58.0 and later, enable and use Enhanced Usage Metrics to get granular usage data for various time segments. If Enhanced Usage Metrics isn’t enabled, usage data is available for the last 24 hours, ending at the last hour, and for historical daily usage. PlatformEventUsageMetric is available in API version 50.0 and later.
-   **[Platform Event Considerations](atlas.en-us.platform_events.meta/platform_events/platform_event_extras.htm)**
    Learn about special behaviors related to defining, publishing, and subscribing to platform events. Learn how to test platform events. And get an overview of the various events that Salesforce offers.
-   **[Examples](atlas.en-us.platform_events.meta/platform_events/platform_events_examples.htm)**
    Check out platform event apps—an end-to-end example using flows, a Java client, and a sample app that covers a business scenario.
-   **[Reference](atlas.en-us.platform_events.meta/platform_events/platform_events_reference.htm)**
    The reference documentation for platform events covers an API object, Apex methods, limits, error codes, and standard platform events.

## Related Topics

- Delivering Custom Notifications with Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_overview.htm)
- Defining Your Custom Platform Event (atlas.en-us.platform_events.meta/platform_events/platform_events_define.htm)
- Publishing Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_publish.htm)
- Subscribing to Platform Events (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe.htm)
- Testing Your Platform Event in Apex (atlas.en-us.platform_events.meta/platform_events/platform_event_apex_tests.htm)
- Encrypting Platform Event Messages at Rest in the Event Bus (atlas.en-us.platform_events.meta/platform_events/platform_events_encryption.htm)
- Monitor Platform Event Publishing and Delivery Usage (atlas.en-us.platform_events.meta/platform_events/platform_events_monitor_usage.htm)
- Platform Event Considerations (atlas.en-us.platform_events.meta/platform_events/platform_event_extras.htm)
- Examples (atlas.en-us.platform_events.meta/platform_events/platform_events_examples.htm)
- Reference (atlas.en-us.platform_events.meta/platform_events/platform_events_reference.htm)

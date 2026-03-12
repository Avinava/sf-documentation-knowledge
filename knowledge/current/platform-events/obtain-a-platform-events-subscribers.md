---
title: "Obtain a Platform Event’s Subscribers"
domain: platform-events
topic: obtain-a-platform-events-subscribers
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:27.834Z
estimatedTokens: 348
keywords: [Obtain, Platform, Event’s, Subscribers, View, triggers, processes, subscribed, event, Salesforce, user, API]
---

# Obtain a Platform Event’s Subscribers

> View a list of all triggers or processes that are subscribed to a
      platform event by using the Salesforce user interface or the API.

# Obtain a Platform Event’s Subscribers

View a list of all triggers or processes that are subscribed to a platform event by using the Salesforce user interface or the API.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=platform_events)

#### Note

CometD and Pub/Sub API subscribers to a platform event channel aren’t exposed in the user interface or the API. Flow Pause element subscribers to a platform event aren’t returned in Metadata API.

-   **[View and Manage an Event’s Subscribers on the Platform Event’s Detail Page](atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_apex.htm)**
    View the triggers, flows, and processes that are subscribed to a platform event in the Subscriptions related list. Manage subscriptions for Apex triggers.
-   **[Obtain Processes That Subscribe to a Platform Event in Metadata API](atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_process.htm)**
    Use Metadata API to retrieve all processes subscribed to a platform event.
-   **[Obtain an Event’s Subscribers by Querying EventBusSubscriber](atlas.en-us.platform_events.meta/platform_events/platform_events_eventbussubscriber.htm)**
    The EventBusSubscriber standard object contains information about the trigger and process subscribers of all platform events. You can query this object using SOQL.

## Related Topics

- View and Manage an Event’s Subscribers on the Platform Event’s Detail Page (atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_apex.htm)
- Obtain Processes That Subscribe to a Platform Event in Metadata API (atlas.en-us.platform_events.meta/platform_events/platform_events_get_subscribers_process.htm)
- Obtain an Event’s Subscribers by Querying EventBusSubscriber (atlas.en-us.platform_events.meta/platform_events/platform_events_eventbussubscriber.htm)

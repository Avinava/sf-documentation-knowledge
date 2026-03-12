---
title: "Streaming Event Features"
domain: api-streaming
topic: streaming-event-features
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.321Z
estimatedTokens: 749
keywords: [Streaming, Event, Features, Lightning, Platform, offers, several, events, determine, meets, case, compare, various]
---

# Streaming Event Features

> The Lightning Platform offers several types of streaming events. To determine which event
  meets your use case, compare the features of the various events.

# Streaming Event Features

The Lightning Platform offers several types of streaming events. To determine which event meets your use case, compare the features of the various events.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

#### Important

PushTopic and generic events are legacy products. Salesforce no longer enhances them with new features and provides limited support for them. Instead of PushTopic events, consider using Change Data Capture events. Instead of generic events, consider using Platform Events. To learn about Change Data Capture events, see the [Change Data Capture Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm) and the [Change Data Capture Basics](https://trailhead.salesforce.com/content/learn/modules/change-data-capture) Trailhead module. To learn about Platform Events, see [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm) and the [Platform Events Basics Trailhead module](https://trailhead.salesforce.com/content/learn/modules/platform_events_basics).

| Feature | Change Data Capture Event | Platform Event | PushTopic Event (Legacy) | Generic Event (Legacy) |
| --- | --- | --- | --- | --- |
| Define a custom schema as strongly typed fields | N/A |  | N/A |  |
| Include user-defined payloads | N/A |  | N/A |  |
| Publish custom events via one or more APIs | N/A |  | N/A |  |
| Publish events via Apex | N/A |  | N/A |  |
| Publish declaratively using Process Builder and Flow Builder | N/A |  | N/A |  |
| Publish to specific users | N/A |  | N/A |  |
| Subscribe via CometD using JavaScript, Java, and other languages |  |  |  |  |
| Subscribe via Pub/Sub API |  |  |  |  |
| Subscribe via Apex triggers |  |  |  |  |
| Filter subscriptions |  |  |  |  |
| Receive auto-published event notifications for Salesforce record changes |  | N/A |  | N/A |
| Choose the fields to include in event notifications for Salesforce record changes |  | N/A |  | N/A |
| Receive a versioned event schema |  |  |  |  |
| Get field-level security |  |  |  |  |
| Get record-sharing support |  | N/A |  | N/A |
| Encrypt field data with Shield Platform Encryption |  |  |  |  |
| Replay retained event notifications |  |  |  |  |
| Event retention period | 3 days | 3 days* | 1 day | 1 day |

\* Standard-volume platform events are retained for 1 day.

#### See Also

-   [*Platform Events Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro_emp.htm "
    Platform Events Developer Guide
    - HTML (New Window)")

-   [*Change Data Capture Developer Guide*](https://developer.salesforce.com/docs/atlas.en-us.260.0.change_data_capture.meta/change_data_capture/cdc_intro.htm "
    Change Data Capture Developer Guide
    - HTML (New Window)")

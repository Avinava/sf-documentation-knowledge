---
title: "Generic Events (Legacy)"
domain: api-streaming
topic: generic-events-legacy
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.367Z
estimatedTokens: 723
keywords: [Generic, Events, Legacy, send, custom, notifications, aren’t, tied, Salesforce, data, changes]
---

# Generic Events (Legacy)

> Use generic events to send custom notifications that aren’t tied to Salesforce data
        changes.

# Generic Events (Legacy)

Use generic events to send custom notifications that aren’t tied to Salesforce data changes.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=api_streaming)

#### Important

Generic Events is a legacy product. Salesforce no longer enhances Generic Events with new features and provides limited support for this product. Instead of Generic Events, consider using Platform Events. To learn about Platform Events, see the [Platform Events Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_intro.htm) and the [Platform Events Basics Trailhead module](https://trailhead.salesforce.com/content/learn/modules/platform_events_basics).

Use generic streaming when you want to send and receive custom notifications. Use generic streaming to:

-   Publish and receive arbitrary payloads in JSON without a predefined event schema
-   Broadcast notifications to a target set of users, specific teams, or your entire org
-   Send notifications for events that are external to Salesforce

To use generic events, you need:

-   A [StreamingChannel](atlas.en-us.api_streaming.meta/api_streaming/streamingChannel.htm) that defines the channel, with a name that is case-sensitive
-   One or more clients subscribed to the channel
-   The [Streaming Channel Push REST API](atlas.en-us.api_streaming.meta/api_streaming/resources_push.htm) REST API resource to monitor and invoke push events on the channel

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

StreamingChannel isn’t available for users in Experience Cloud sites, including Partner Community and Customer Community users. Also, StreamingChannel isn’t available in legacy Customer Portals.

-   **[Replay Generic Streaming Events with Durable Generic Streaming](atlas.en-us.api_streaming.meta/api_streaming/generic_streaming_intro_replay.htm)**
    A client can receive generic streaming events after it subscribes to a channel and as long as the Salesforce session is active. Events sent before a client subscribes to a channel or after a subscribed client disconnects from the Salesforce session are missed. However, a client can fetch the missed events within the 24-hour retention window by using Durable Generic Streaming.
-   **[Generic Streaming Quick Start](atlas.en-us.api_streaming.meta/api_streaming/generic_streaming_quick_start.htm)**

-   **[Generic Streaming Allocations](atlas.en-us.api_streaming.meta/api_streaming/limits_generic.htm)**
    These default allocations apply to consumers of generic streaming.
-   **[Reference: StreamingChannel](atlas.en-us.api_streaming.meta/api_streaming/streamingChannel.htm)**

-   **[Reference: Streaming Channel Push REST API](atlas.en-us.api_streaming.meta/api_streaming/resources_push.htm)**

## Related Topics

- StreamingChannel (atlas.en-us.api_streaming.meta/api_streaming/streamingChannel.htm)
- Streaming Channel Push REST API (atlas.en-us.api_streaming.meta/api_streaming/resources_push.htm)
- Replay Generic Streaming Events with Durable Generic Streaming (atlas.en-us.api_streaming.meta/api_streaming/generic_streaming_intro_replay.htm)
- Generic Streaming Quick Start (atlas.en-us.api_streaming.meta/api_streaming/generic_streaming_quick_start.htm)
- Generic Streaming Allocations (atlas.en-us.api_streaming.meta/api_streaming/limits_generic.htm)
- Reference: StreamingChannel (atlas.en-us.api_streaming.meta/api_streaming/streamingChannel.htm)
- Reference: Streaming Channel Push REST API (atlas.en-us.api_streaming.meta/api_streaming/resources_push.htm)

---
title: "Subscribe to Platform Event Notifications with CometD"
domain: platform-events
topic: subscribe-to-platform-event-notifications-with-cometd
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:35:28.114Z
estimatedTokens: 965
keywords: [Subscribe, Platform, Event, Notifications, CometD, events, external, client]
---

# Subscribe to Platform Event Notifications with CometD

> Use CometD to subscribe to platform events in an external
      client.

# Subscribe to Platform Event Notifications with CometD

Use CometD to subscribe to platform events in an external client.

![Important](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_important.png&folder=platform_events)

#### Important

Pub/Sub API is newer than the CometD-based Streaming API. You can use Pub/Sub API to publish and subscribe to platform events and change data capture events. Based on gRPC API and HTTP/2, Pub/Sub API efficiently publishes and delivers binary event messages and supports multiple programming languages. For more information about Pub/Sub API, see [Subscribe to Platform Event Notifications with Pub/Sub API](atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_pubsub_api.htm "Use Pub/Sub API to subscribe to event messages in an external client to integrate your systems. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages in the Apache Avro format. You can control the volume of event messages received per Subscribe call based on event processing speed in the client.").

Salesforce sends platform events to CometD clients sequentially in the order they’re received. The order of event notifications is based on the replay ID of events. A CometD client can receive a batch of events at once. The number of event messages in a batch can vary. If the client uses a buffer for the received events, ensure that the buffer size is large enough to hold all event messages in the batch. The buffer size needed depends on the publishing rate and the event message size. At a minimum, set the buffer size to 10 MB, and adjust it higher if needed.

The process of subscribing to platform event notifications through CometD is similar to subscribing to PushTopics or generic events. The only difference is the channel name. The platform event channel name is case-sensitive and is in the following format.

```

```

To subscribe to a custom channel, use this format.

```

```

Use this CometD endpoint with the API version appended to it.

```

```

## Example

If you have a platform event named Low Ink, provide this channel name when subscribing.

```

```

The message of a delivered platform event looks similar to the following example for Low Ink events.

```

```

The schema field in the event message contains the ID of the platform event schema. The schema is versioned—when the schema changes, the schema ID changes as well. For more information about retrieving the event schema, see [Get the Event Schema](atlas.en-us.platform_events.meta/platform_events/platform_events_event_schema.htm "To discover the event fields of your platform event, get the event schema. You can get the event schema through REST API or Pub/Sub API.").

Add custom logic to your client to perform some operations after a platform event notification is received. For example, the client can create a request to order a new cartridge for this printer model.

#### See Also

-   [*Streaming API Developer Guide*: Message Durability](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/using_streaming_api_durability.htm "Streaming API Developer Guide: Message Durability - HTML (New Window)")

-   [CometD](https://cometd.org/ "CometD - HTML (New Window)")

-   [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/intro.html "Pub/Sub API Developer Guide - HTML (New Window)")

-   [Considerations for Publishing and Subscribing to Platform Events with Apex and APIs](atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm "Before you use Apex or Salesforce APIs to publish and subscribe to platform events, familiarize yourself with these considerations.")

## Code Examples

```
/event/Event_Name__e
```

```
/event/Channel_Name__chn
```

```
/cometd/66.0
```

```
/event/Low_Ink__e
```

```
{
  "data": {
    "schema": "dffQ2QLzDNHqwB8_sHMxdA", 
    "payload": {
      "CreatedDate": "2017-04-09T18:31:40.517Z", 
      "CreatedById": "005D0000001cSZs", 
      "Printer_Model__c": "XZO-5", 
      "Serial_Number__c": "12345", 
      "Ink_Percentage__c": 0.2
    }, 
    "event": {
      "EventUuid": "2ec0e371-1395-457f-9275-be1b527a72f7",
      "replayId": 2
    }
  }, 
  "channel": "/event/Low_Ink__e"
}
```

## Related Topics

- Subscribe to Platform Event Notifications with Pub/Sub API (atlas.en-us.platform_events.meta/platform_events/platform_events_subscribe_pubsub_api.htm)
- Get the Event Schema (atlas.en-us.platform_events.meta/platform_events/platform_events_event_schema.htm)
- Considerations for Publishing and Subscribing to Platform Events with Apex and APIs (atlas.en-us.platform_events.meta/platform_events/platform_events_api_considerations.htm)

---
title: "Message Durability"
domain: api-streaming
topic: message-durability
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:00.516Z
estimatedTokens: 2336
keywords: [Message, Durability, Salesforce, stores, PushTopic, events, generic, standard-volume, hours, high-volume, include, platform, change, data, capture]
---

# Message Durability

> Salesforce stores PushTopic events, generic events, and
      standard-volume events for 24 hours and high-volume events for 72 hours. High-volume events
      include platform events and change data capture events. Standard-volume events are no longer
      available and include only events defined before Spring ’19. With API version 37.0 and later,
      you can retrieve events that are within the retention window through durable
    streaming.

# Message Durability

Salesforce stores PushTopic events, generic events, and standard-volume events for 24 hours and high-volume events for 72 hours. High-volume events include platform events and change data capture events. Standard-volume events are no longer available and include only events defined before Spring ’19. With API version 37.0 and later, you can retrieve events that are within the retention window through durable streaming.

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_streaming)

#### Tip

This page describes the event message retention within the context of Streaming API. Pub/Sub API is a newer API for publishing and subscribing to events. To learn about Pub/Sub API, check out the [Pub/Sub API Documentation](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

After the retention period, events are purged from the event bus. The purging process sometimes starts later, and as a result, high-volume platform events and change data capture events that are older than 72 hours can still be available. Salesforce doesn’t guarantee the storage of events beyond the retention period of 72 hours.

## Event Bus

With API version 37.0 and later, events are published to the event bus. Subscribers retrieve events from a channel on the event bus, including past events that are stored temporarily. The event bus decouples event publishers from event subscribers.

![The Salesforce Event Bus](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fsalesforce_event_bus.png&folder=api_streaming)

## Event Replay Process

Each event message is assigned an opaque ID contained in the ReplayId field. The ReplayId field value, which is populated by the system when the event is delivered to subscribers, refers to the position of the event in the event stream. Replay ID values aren’t guaranteed to be contiguous for consecutive events. A subscriber can store a replay ID value and use it on resubscription to retrieve events that are within the retention window. For example, a subscriber can retrieve missed events after a connection failure. Subscribers must not compute new replay IDs based on a stored replay ID to refer to other events in the stream.

To uniquely identify a platform event message, use the EventUuid system field and not the ReplayId field. The ReplayId field isn’t guaranteed to be unique when Salesforce maintenance activities occur, such as an org migration. The EventUuid field is always unique.

These examples show the contents of event messages with the replayId field. Even though the replayId fields in the examples contain numbers, they’re opaque fields. We recommend that you don’t assume that they always contain numbers. It’s best that you store the replayId values as bytes.

Platform event messages contain a replay ID when delivered to a CometD client. This JSON message shows the replayId field in the event object for the Low\_Ink\_\_e platform event.

```

```

This JSON message shows the replayId field in the event object for a Change Data Capture event.

```

```

## Replaying Events

A subscriber can choose which events to receive, such as all events within the retention window or starting after a particular event. The default is to receive only the new events sent after subscribing. Events outside the retention period are discarded.

This high-level diagram shows how event consumers can read a stream of events by using various replay options.

![Diagram showing a stream of events with replay options](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_streaming%2Fimages%2Fapi_streaming_event_numbers.png&folder=api_streaming)

| Replay Option | Description | Usage |
| --- | --- | --- |
| Replay ID | Subscriber receives all stored events after the event specified by its replayId value and new events. | Catch up on missed events after a certain event message, for example, after a connection failure. To subscribe with a specific replay ID, save the replay ID of the event message after which you want to retrieve stored events. Then use this replay ID when you resubscribe. |
| -1 | (Default if no replay option is specified.) Subscriber receives new events that are broadcast after the client subscribes. | We recommend that you subscribe with the -1 option to receive new event messages. To get earlier event messages, we recommend that you use a specific replay ID that you saved earlier. |
| -2 | Subscriber receives all events, including past events that are within the retention window and new events. | Catch up on missed events and retrieve all stored events, for example, after a connection failure.ImportantUse this option sparingly. Subscribing with the -2 option when a large number of event messages are stored can slow performance. |

To replay events, use the Streaming API endpoint.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

When using the Streaming API endpoint, note these important considerations.

-   Durable streaming is supported when clients subscribe at the Streaming API endpoint using API version 37.0 or later. The PushTopic or platform event version affects only the fields available in the event message, but doesn’t affect the client subscription version.
-   To ensure continuity during instance refreshes and org migrations, we recommend using your org’s My Domain login URL in the Streaming API endpoint.

The replay mechanism is implemented in a Salesforce-provided CometD extension. A sample extension is provided in JavaScript and another in Java. For example, you can register the extension as follows in JavaScript.

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

-   The argument passed to setReplay() is one of the replay options. We recommend that clients subscribe with the –1 option to receive new events or with a specific replay ID. If the channel contains many event messages, subscribing frequently with the –2 option can cause performance issues.
-   The first argument passed to registerExtension() is the name of the replay extension in your code. In the example, it’s set to myExtensionName, but it can be any string. You use this name to unregister the extension later on.
-   If the setReplay() function isn’t called, or the CometD extension isn’t registered, only new events are sent to the subscriber, which is the same as the –1 option.

After calling the setReplay() function on the extension, the events that the subscriber receives depend on the replay value parameter passed to setReplay().

After a client times out because it hasn’t reconnected within 40 seconds or a network failure has occurred, it attempts a new handshake request and reconnects. The replay extension saves the replay ID of the last message received and uses it when resubscribing. That way, the client receives only messages that were sent after the timeout and doesn’t receive duplicate messages that were sent earlier.

## Code Samples

Java Sample

For a Java client sample that uses the CometD extension, see [Example: Subscribe to and Replay Events Using a Java Client (EMP Connector)](atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_client_intro.htm "The Java sample uses a library called Enterprise Messaging Platform (EMP) Connector. EMP Connector is a thin wrapper around the CometD library. It hides the complexity of creating a CometD client and subscribing to Streaming API in Java. The example subscribes to a channel, receives notifications, and supports replaying events with durable streaming.").

Lightning Component Sample

For a sample that uses the empApi Lightning component, see [Example: Subscribe to and Replay Events Using a Lightning Component](atlas.en-us.api_streaming.meta/api_streaming/code_sample_lightning_cmp.htm "Subscribe to event streaming channels with the empApi component in your Lightning web component or Aura component. The empApi component provides access to methods for subscribing to a streaming channel and listening to event messages.").

Visualforce Sample

For a sample and code walkthrough that uses Visualforce and a CometD extension in JavaScript, see [Example: Subscribe to and Replay Events Using a Visualforce Page](atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm "The Visualforce sample app shows you how to subscribe to durable streaming events for PushTopic and generic events. The app contains two interactive Visualforce pages: one for PushTopic events and one for generic events. You can generate test events and view them on each page. You specify which events are retrieved and displayed by setting replay options.").

#### See Also

-   [Bayeux Protocol, CometD, and Long Polling](atlas.en-us.api_streaming.meta/api_streaming/BayeauxProtocolAndCometD.htm "Streaming API uses the Bayeux protocol and CometD for long polling.")

-   [Clients and Timeouts](atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_timeouts.htm)

-   [*Platform Events Developer Guide*: Platform Event Fields](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_define_ui.htm "Platform Events Developer Guide: Platform Event Fields - HTML (New Window)")

## Code Examples

```
{
  "data": {
    "schema": "dffQ2QLzDNHqwB8_sHMxdA", 
    "payload": {
      "CreatedDate": "2023-04-09T18:31:40.517Z", 
      "CreatedById": "005D0000001cSZs", 
      "Printer_Model__c": "XZO-5", 
      "Serial_Number__c": "12345", 
      "Ink_Percentage__c": 0.2
    }, 
    "event": {
      "EventUuid": "2ec0e371-1395-457f-9275-be1b527a72f7",
      "replayId": 2112
    }
  }, 
  "channel": "/event/Low_Ink__e"
}
```

```
{
  "data": {
    "schema": "IeRuaY6cbI_HsV8Rv1Mc5g", 
    "payload": {
      "ChangeEventHeader": {
        "entityName": "Account", 
        "recordIds": [
          "<record_ID>"
        ], 
        "changeType": "CREATE", 
        "changeOrigin": "com.salesforce.core", 
        "transactionKey": "001b7375-0086-250e-e6ca-b99bc3a8b69f", 
        "sequenceNumber": 1, 
        "isTransactionEnd": true, 
        "commitTimestamp": 1501010206653, 
        "commitNumber": 92847272780, 
        "commitUser": "<User_ID>"
      }, 
      "Name": "Acme", 
      "Description": "Everyone is talking about the cloud. But what does it mean?", 
      "OwnerId": "<Owner_ID>", 
      "CreatedDate": "2017-07-25T19:16:44Z", 
      "CreatedById": "<User_ID>", 
      "LastModifiedDate": "2017-07-25T19:16:44Z", 
      "LastModifiedById": "<User_ID>"
    }, 
    "event": {
      "replayId": 6421
    }
  }, 
  "channel": "/data/ChangeEvents"
}
```

```
https://MyDomainName.my.salesforce.com/cometd/66.0/
```

```
// Register streaming extension
var replayExtension = new cometdReplayExtension();
replayExtension.setChannel(<Streaming Channel to Subscribe to>);
replayExtension.setReplay(<Event Replay Option>);
cometd.registerExtension('myReplayExtensionName', replayExtension);
```

## Related Topics

- Example: Subscribe to and Replay Events Using a Java Client (EMP Connector) (atlas.en-us.api_streaming.meta/api_streaming/code_sample_java_client_intro.htm)
- Example: Subscribe to and Replay Events Using a Lightning Component (atlas.en-us.api_streaming.meta/api_streaming/code_sample_lightning_cmp.htm)
- Example: Subscribe to and Replay Events Using a Visualforce Page (atlas.en-us.api_streaming.meta/api_streaming/code_sample_generic_vfp_intro.htm)
- Bayeux Protocol, CometD, and Long Polling (atlas.en-us.api_streaming.meta/api_streaming/BayeauxProtocolAndCometD.htm)
- Clients and Timeouts (atlas.en-us.api_streaming.meta/api_streaming/using_streaming_api_timeouts.htm)

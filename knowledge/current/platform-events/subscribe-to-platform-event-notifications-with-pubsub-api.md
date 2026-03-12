---
title: "Subscribe to Platform Event Notifications with Pub/Sub API"
domain: platform-events
topic: subscribe-to-platform-event-notifications-with-pubsub-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.145Z
estimatedTokens: 1052
keywords: [Subscribe, Platform, Event, Notifications, Pub, Sub, API, messages, external, client, integrate, systems, Simplify, development, publish]
---

# Subscribe to Platform Event Notifications with Pub/Sub API

> Use Pub/Sub API to subscribe to event messages in an external client to integrate your
  systems. Simplify your development by using one API to publish, subscribe, and retrieve the event
  schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages
  in the Apache Avro format. You can control the volume of event messages received per Subscribe
  call based on event processing speed in the client.

# Subscribe to Platform Event Notifications with Pub/Sub API

Use Pub/Sub API to subscribe to event messages in an external client to integrate your systems. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages in the Apache Avro format. You can control the volume of event messages received per Subscribe call based on event processing speed in the client.

The Pub/Sub API service is defined in a proto file, with RPC method parameters and return types specified as protocol buffer messages. Pub/Sub API serializes the response of a Subscribe RPC call based on the protocol buffer message type specified in the proto file. For more information, see [What is gRPC?](https://grpc.io/docs/what-is-grpc/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/overview) in the gRPC documentation, and [pubsub\_api.proto](https://github.com/forcedotcom/pub-sub-api/blob/main/pubsub_api.proto) in the [Pub/Sub API GitHub repository](https://github.com/forcedotcom/pub-sub-api).

The Subscribe method uses bidirectional streaming, enabling the client to request more events as it consumes events. The client can control the flow of events received by setting the number of requested events in the FetchRequest parameter.

```

```

Salesforce sends platform events to Pub/Sub API clients sequentially in the order they’re received. The order of event notifications is based on the replay ID of events. A client can receive a batch of events at once. The total number of events across all batches received in FetchResponses per Subscribe call is equal to the number of events the client requests. The number of events in each individual batch can vary. If the client uses a buffer for the received events, ensure that the buffer size is large enough to hold all event messages in the batch. The buffer size needed depends on the publishing rate and the event message size. We recommend you set the buffer size to 3 MB.

To learn more about the RPC methods in Pub/Sub API, see [Pub/Sub API RPC Method Reference](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

The platform event channel name is case-sensitive. To subscribe to an event, use this format.

```

```

To subscribe to a custom channel, use this format.

```

```

## Example

If you have a platform event named Low Ink, provide this channel name when subscribing.

```

```

This example shows the fields in the payload of the received event message. This example prints out the payload only. The received event message also contains the schema ID and the event ID, in addition to the payload.

```

```

Pub/Sub API is used for system integration and isn’t intended for end-user scenarios. The binary event format enables efficient delivery of lightweight messages. As a result, after decoding the event payload, some fields aren’t human readable and require additional processing. For example, CreatedDate is in Epoch time and can be converted to another date format for readability.

The event schema is versioned—when the schema changes, the schema ID changes as well. For more information about retrieving the event schema, see [Get the Event Schema with Pub/Sub API](atlas.en-us.platform_events.meta/platform_events/platform_events_event_schema_pubsub_api.htm "Use Pub/Sub API to retrieve the event schema with the GetSchema RPC method and pass in a schema ID.").

Write a Pub/Sub API client to subscribe to platform event messages. You can use one of the 11 supported programming languages, including Python, Java, Go, and Node.

-   To learn how to write a client in Java or Python, check out the Python quick start in [Quick Starts](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/quick-start.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).
-   For code examples in other languages, see the [Pub/Sub API GitHub repository](https://github.com/forcedotcom/pub-sub-api).

## Code Examples

```
rpc Subscribe (stream FetchRequest) returns (stream FetchResponse);
```

```
/event/Event_Name__e
```

```
/event/Channel_Name__chn
```

```
/event/Low_Ink__e
```

```
{
  "CreatedDate": 1652978695951,
  "CreatedById": "005SM000000146PYAQ",
  "Printer_Model__c": "XZO-5",
  "Serial_Number__c": "12345",
  "Ink_Percentage__c": 0.2
}
```

## Related Topics

- Get the Event Schema with Pub/Sub API (atlas.en-us.platform_events.meta/platform_events/platform_events_event_schema_pubsub_api.htm)

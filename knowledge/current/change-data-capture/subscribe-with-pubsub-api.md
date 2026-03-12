---
title: "Subscribe with Pub/Sub API"
domain: change-data-capture
topic: subscribe-with-pubsub-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:09.757Z
estimatedTokens: 1267
keywords: [Subscribe, Pub, Sub, API, event, messages, external, client, integrate, systems, Simplify, development, publish, retrieve, schema]
---

# Subscribe with Pub/Sub API

> Use Pub/Sub API to subscribe to event messages in an external client to integrate your
    systems. Simplify your development by using one API to publish, subscribe, and retrieve the
    event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event
    messages in the Apache Avro format. You can control the volume of event messages received per
    Subscribe call based on event processing speed in the client.

# Subscribe with Pub/Sub API

Use Pub/Sub API to subscribe to event messages in an external client to integrate your systems. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient delivery of binary event messages in the Apache Avro format. You can control the volume of event messages received per Subscribe call based on event processing speed in the client.

The Pub/Sub API service is defined in a proto file, with RPC method parameters and return types specified as protocol buffer messages. Pub/Sub API serializes the response of a Subscribe RPC call based on the protocol buffer message type specified in the proto file. For more information, see [What is gRPC?](https://grpc.io/docs/what-is-grpc/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/overview) in the gRPC documentation, and [pubsub\_api.proto](https://github.com/forcedotcom/pub-sub-api/blob/main/pubsub_api.proto) in the [Pub/Sub API GitHub repository](https://github.com/forcedotcom/pub-sub-api).

The Subscribe method uses bidirectional streaming, enabling the client to request more events as it consumes events. The client can control the flow of events received by setting the number of requested events in the FetchRequest parameter.

```

```

Salesforce sends platform events to Pub/Sub API clients sequentially in the order they’re received. The order of event notifications is based on the replay ID of events. A client can receive a batch of events at once. The total number of events across all batches received in FetchResponses per Subscribe call is equal to the number of events the client requests. The number of events in each individual batch can vary. If the client uses a buffer for the received events, ensure that the buffer size is large enough to hold all event messages in the batch. The buffer size needed depends on the publishing rate and the event message size. We recommend you set the buffer size to 3 MB.

To learn more about the RPC methods in Pub/Sub API, see [Pub/Sub API RPC Method Reference](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods/) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

The channel name is case-sensitive. To subscribe to a standard channel, use this format.

```

```

For example, you can subscribe to all events by providing the standard ChangeEvents channel.

```

```

To subscribe to a custom channel, use this format.

```

```

For more information about channels, see [Subscription Channels](atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm "A subscription channel is a stream of change events that correspond to one or more entities. You can subscribe to a channel to receive change event notifications for record create, update, delete, and undelete operations. Change Data Capture provides predefined standard channels and you can create your own custom channels. Use the subscription channel that corresponds to the change events you want to receive. The channel name is case-sensitive.").

## Example

After you select Opportunity for change data capture, you can subscribe to opportunity change events by supplying this channel.

```

```

This example shows the fields of a change event received for a new opportunity. This example prints out the payload only. The received event message also contains the schema ID and the event ID, in addition to the payload.

```

```

Pub/Sub API is used for system integration and isn’t intended for end-user scenarios. The binary event format enables efficient delivery of lightweight messages. As a result, after decoding the event payload, some fields aren’t human readable and require additional processing. For example, CreatedDate is in Epoch time and can be converted to another date format for readability. Also, nulledFields, diffFields, and changedFields require further processing. For more information, see [Event Deserialization Considerations](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/event-deserialization-considerations.html) in the Pub/Sub API Developer Guide.

The event schema is versioned—when the schema changes, the schema ID changes as well. For more information about retrieving the event schema, see [Get the Event Schema with Pub/Sub API](https://developer.salesforce.com/docs/atlas.en-us.260.0.platform_events.meta/platform_events/platform_events_event_schema_pubsub_api.htm "HTML (New Window)").

Write a Pub/Sub API client to subscribe to change events.

-   To learn how to write a client in Java or Python, check out [Quick Starts](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/quick-start.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).
-   For code examples in other languages that are community-supported, see the [Pub/Sub API GitHub repository](https://github.com/forcedotcom/pub-sub-api).

## Code Examples

```
rpc Subscribe (stream FetchRequest) returns (stream FetchResponse);
```

```
/data/Channel_Name
```

```
/data/ChangeEvents
```

```
/data/Channel_Name__chn
```

```
/data/OpportunityChangeEvent
```

## Related Topics

- Subscription Channels (atlas.en-us.change_data_capture.meta/change_data_capture/cdc_subscribe_channels.htm)

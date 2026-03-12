---
title: "Publish Event Messages with Pub/Sub API"
domain: platform-events
topic: publish-event-messages-with-pubsub-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:28.081Z
estimatedTokens: 656
keywords: [Publish, Event, Messages, Pub, Sub, API, platform, external, app, final, results, Simplify, development, subscribe, retrieve]
---

# Publish Event Messages with Pub/Sub API

> Use Pub/Sub API to publish platform event messages from an external app and get final
  publish results. Simplify your development by using one API to publish, subscribe, and retrieve
  the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient publishing of binary
  event messages in the Apache Avro format.

# Publish Event Messages with Pub/Sub API

Use Pub/Sub API to publish platform event messages from an external app and get final publish results. Simplify your development by using one API to publish, subscribe, and retrieve the event schema. Based on gRPC and HTTP/2, Pub/Sub API enables efficient publishing of binary event messages in the Apache Avro format.

The Pub/Sub API service is defined in a proto file, with RPC method parameters and return types specified as protocol buffer messages. When an event is published through one of the publish RPC methods, the publish request is serialized based on the protocol buffer message type. For more information, see [What is gRPC?](https://grpc.io/docs/what-is-grpc/) and [Protocol Buffers](https://developers.google.com/protocol-buffers/docs/overview) in the gRPC documentation, and [pubsub\_api.proto](https://github.com/forcedotcom/pub-sub-api/blob/main/pubsub_api.proto) in the [Pub/Sub API GitHub repository](https://github.com/forcedotcom/pub-sub-api).

Publish events by using one of two RPC methods: Publish and PublishStream.

The Publish RPC method is a unary RPC, which means that it sends only one request and receives only one response.

```

```

The PublishStream RPC method uses bidirectional streaming. It can send a stream of publish requests while receiving a stream of publish responses from the server. Use PublishStream to achieve a higher publish rate than with Publish.

```

```

The PublishResponse holds a PublishResult for each event published that indicates the final success or failure of the publish operation, and not the intermediate queueing results. A successful status means that the event was published. A failed status means that the event failed to publish, and the client can retry publishing this event.

To learn more about the RPC methods in Pub/Sub API, see [Pub/Sub API RPC Method Reference](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

Write a Pub/Sub API client to publish platform event messages. You can use one of the 11 supported programming languages, including Python, Java, Go, and Node. To learn how to write a client in Java or Python, check out [Quick Starts](https://developer.salesforce.com/docs/platform/pub-sub-api/guide/quick-start.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview). For code examples in other languages, see the [Pub/Sub API GitHub repository](https://github.com/forcedotcom/pub-sub-api).

## Code Examples

```
rpc Publish (PublishRequest) returns (PublishResponse);
```

```
rpc PublishStream (stream PublishRequest) returns (stream PublishResponse);
```

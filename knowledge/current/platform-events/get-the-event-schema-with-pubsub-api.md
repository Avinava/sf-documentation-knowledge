---
title: "Get the Event Schema with Pub/Sub API"
domain: platform-events
topic: get-the-event-schema-with-pubsub-api
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.772Z
estimatedTokens: 207
keywords: [Event, Schema, Pub, Sub, API, retrieve, GetSchema, RPC, pass]
---

# Get the Event Schema with Pub/Sub API

> Use Pub/Sub API to retrieve the event schema with the GetSchema RPC method and pass in a schema ID.

# Get the Event Schema with Pub/Sub API

Use Pub/Sub API to retrieve the event schema with the GetSchema RPC method and pass in a schema ID.

Because the schema typically doesn’t change often, we recommend that you call GetSchema once and use the returned schema for all operations. If the event schema changes, for example, when an administrator adds a field to the event definition, the schema ID changes. We recommend that you store the schema ID and compare it with the latest schema ID. If the schema ID changes, call GetSchema to retrieve the new schema.

```

```

For more information, see [GetSchema RPC Method](https://developer.salesforce.com/docs/platform/pub-sub-api/references/methods/getschema-rpc.html) in the [Pub/Sub API Developer Guide](https://developer.salesforce.com/docs/platform/pub-sub-api/overview).

## Code Examples

```
rpc GetSchema (SchemaRequest) returns (SchemaInfo);
```

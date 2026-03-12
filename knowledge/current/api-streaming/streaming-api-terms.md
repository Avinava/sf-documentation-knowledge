---
title: "Streaming API Terms"
domain: api-streaming
topic: streaming-api-terms
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.491Z
estimatedTokens: 432
keywords: [Streaming, API, Terms]
---

# Streaming API Terms

> Learn about terms used for Streaming API.

# Streaming API Terms

Learn about terms used for Streaming API.

| Term | Description |
| --- | --- |
| Event | The creation, update, delete, or undelete of a record. Each event might trigger a notification. |
| Notification | A message in response to an event. The notification is sent to a channel to which one or more clients are subscribed. |
| PushTopic | A PushTopic triggers notifications for changes in Salesforce records resulting from a create, update, delete, or undelete operation. A PushTopic notification is based on the criteria that you specify in the PushTopic record and the SOQL query that you define. Only the fields specified in the query are included in the notification. The PushTopic defines a subscription channel. |
| Channel | A stream of events to which a client can subscribe to receive event notifications. |
| Event Bus | A conduit in which a publisher sends an event notification. Event subscribers subscribe to a channel in the event bus to receive event notifications. The event bus supports replaying stored event messages. |
| Platform Event | A Salesforce entity that represents the definition of the custom data that you send in a platform event message. You create a platform event and define its fields in Salesforce. The subscription channel is based on the platform event name. |
| Change Data Capture Event | Similar to a PushTopic, Change Data Capture triggers notifications for changes in Salesforce records resulting from a create, update, delete, or undelete operation. Unlike a PushTopic, Change Data Capture sends all changed fields of a record and doesn’t require you to specify the fields in a query. Also, Change Data Capture sends information about the change in headers. |

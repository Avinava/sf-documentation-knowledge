---
title: "Filtered Subscriptions"
domain: api-streaming
topic: filtered-subscriptions
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:00.499Z
estimatedTokens: 452
keywords: [Filtered, Subscriptions, Reduce, number, PushTopic, event, notifications, specifying, record, filter, subscribe, channel]
---

# Filtered Subscriptions

> Reduce the number of PushTopic event notifications by specifying record fields to filter
    on when you subscribe to a channel.

# Filtered Subscriptions

Reduce the number of PushTopic event notifications by specifying record fields to filter on when you subscribe to a channel.

Specify the filter criteria in an expression you append to the subscription URI, as follows.

/topic/TopicName?<expression>

TopicName is the PushTopic name, and <expression> is the expression containing one or more conditions. Join conditions with the & operator. Only the & operator is supported. Use this syntax for the <expression>.

?fieldA\=valueA&fieldB\=valueB&...

Include each field used in a filter condition in the PushTopic query. The & operator acts like the logical OR operator, so record events are matched if any condition is true.

## Example

This subscription returns event notifications for records whose industry is Energy *or* shipping city is San Francisco.

```

```

The PushTopic query for this subscription includes the Industry and ShippingCity fields.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

-   If you use an ID in filter criteria, use the 18-character ID format; 15-character IDs aren’t supported.
-   When using a shared CometD session with the empApi Lightning component, all subscriptions to the same PushTopic must specify the same filter. If the initial subscription doesn't use a filter, the subsequent subscriptions can't. For example, if you subscribe to /topic/MyTopic?Name='SomeName', you can’t resubscribe to /topic/MyTopic or /topic/MyTopic?Industry='Energy' using the same CometD session. Shared CometD sessions apply to subscriptions you make with the empApi Lightning component only. The empApi component shares the CometD session when you open a second instance of empApi in a new tab, or in a new browser for the same Salesforce user session.

## Code Examples

```
/topic/MyTopic?Industry='Energy'&ShippingCity='San Francisco'
```

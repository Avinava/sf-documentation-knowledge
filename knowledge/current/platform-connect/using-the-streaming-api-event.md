---
title: "Using the Streaming API Event"
domain: platform-connect
topic: using-the-streaming-api-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.295Z
estimatedTokens: 307
keywords: [Streaming, API, Event, Canvas, SDK, sfdc.streamingapi, lets, define, app, associate, channel, subscribe, receive, notifications]
---

# Using the Streaming API Event

> The Canvas SDK contains an event called sfdc.streamingapi that lets you define an event in your canvas app and associate that
event with a Streaming API channel. You then use the subscribe method to subscribe to the event and receive Streaming API notifications.

# Using the Streaming API Event

The Canvas SDK contains an event called sfdc.streamingapi that lets you define an event in your canvas app and associate that event with a Streaming API channel. You then use the subscribe method to subscribe to the event and receive Streaming API notifications.

For example, in Salesforce, you can create a Streaming API channel that receives notifications when an InvoiceStatement is updated and the Status changes to Closed. In your canvas app, you can then create an event associated with that channel and subscribe to it. In Salesforce, whenever an invoice statement is closed, the activated canvas app receives the notification and can perform an action such as displaying a message to the user.

Here are some considerations when defining the Streaming API event:

-   The event takes a single parameter that contains the PushTopic name.
-   The PushTopic name must be prefaced by “/topic/.”

```

```

#### See Also

-   [Using Streaming API in a Canvas App](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_api.htm)

-   [Subscribing to a Streaming API Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_subscribe_code_example.htm)

## Code Examples

```
{name:"sfdc.streamingapi", params:{topic:"/topic/myPushTopicName"}}
```

## Related Topics

- Using Streaming API in a Canvas App (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_api.htm)
- Subscribing to a Streaming API Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_subscribe_code_example.htm)

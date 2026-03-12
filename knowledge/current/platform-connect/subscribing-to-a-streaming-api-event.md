---
title: "Subscribing to a Streaming API Event"
domain: platform-connect
topic: subscribing-to-a-streaming-api-event
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:35:27.298Z
estimatedTokens: 568
keywords: [Subscribing, Streaming, API, Event, code, how, call, subscribe, canvas, app, standard, sfdc.canvas.client.subscribe]
---

# Subscribing to a Streaming API Event

> This code example shows how to call the subscribe method so
                that a canvas app can subscribe to a Streaming API event. When you subscribe to an
                event, you call the standard sfdc.canvas.client.subscribe method that you use to subscribe to a
                canvas app ev

# Subscribing to a Streaming API Event

This code example shows how to call the subscribe method so that a canvas app can subscribe to a Streaming API event. When you subscribe to an event, you call the standard sfdc.canvas.client.subscribe method that you use to subscribe to a canvas app event. When you call the subscribe method, you must pass in the client and the Streaming API event. Only canvas apps that are open and subscribed to the event can receive Streaming API notifications.

In this example, the onComplete method specifies the function that runs after the code successfully subscribes to the event. The onData method specifies the function that runs when a Streaming API notification is received by the event.

```

```

When you call the subscribe method, a REST call is made to ensure that the canvas app has the OAuth scope needed to connect to the Streaming API. Therefore, each time a canvas app subscribes to a Streaming API event, one API call is used and is counted against the organization’s total API requests limits. The canvas app needs at least the “Access and Manage Your Data (API)” OAuth scope to connect to the Streaming API.

If the call to the subscribe method is successful, the onComplete method is called with a payload of {success:true,handle:handle}. The handle is an array that contains the name of the Streaming API channel being subscribed to and the subscriptionId is an integer that contains a unique ID. For example, \["/topics/InvoiceStatements", subscriptionId\]. If the call to the subscribe method fails, the onComplete method is called with a payload of {success:false,errorMessage:msg}. The msg is a string that contains the cause of the error.

To receive Streaming API notifications, you must create a channel defined by a PushTopic. For more information, see “Step 2: Create a PushTopic” in the [Streaming API Developer Guide](https://developer.salesforce.com/docs/atlas.en-us.260.0.api_streaming.meta/api_streaming/).

#### See Also

-   [Using the Streaming API Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_event_code_example.htm)

-   [Unsubscribing from a Streaming API Event](atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_unsubscribe_code_example.htm)

## Code Examples

```
// Subscribe to Streaming API events.
// The PushTopic to subscribe to must be passed in.
// The 'onComplete' method may be defined,
// and will fire when the subscription is complete.
Sfdc.canvas(function() {
    sr = JSON.parse('<%=signedRequestJson%>');
    var handler1 = function(){ console.log("onData done");},
    handler2 = function(){ console.log("onComplete done");};
    Sfdc.canvas.client.subscribe(sr.client,
        {name : 'sfdc.streamingapi', params:{topic:"/topic/InvoiceStatements"}},
         onData : handler1, onComplete : handler2}
    );
});
```

## Related Topics

- Using the Streaming API Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_event_code_example.htm)
- Unsubscribing from a Streaming API Event (atlas.en-us.platform_connect.meta/platform_connect/canvas_app_streaming_unsubscribe_code_example.htm)

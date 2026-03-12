---
title: "Replay Events Sample: Code Walkthrough"
domain: api-streaming
topic: replay-events-sample-code-walkthrough
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:34:00.220Z
estimatedTokens: 940
keywords: [Replay, Events, Sample, Code, Walkthrough, how, register, CometD, extension, JavaScript, Replaying, cometdReplayExtension]
---

# Replay Events Sample: Code Walkthrough

> Learn how to register and use the CometD replay extension in JavaScript.

# Replay Events Sample: Code Walkthrough

Learn how to register and use the CometD replay extension in JavaScript.

## JavaScript Sample for Replaying Events

The Visualforce components in the durable streaming sample implement a CometD client that subscribes with replay options. The components are embedded in Visualforce pages.

-   For generic events, the Visualforce component is [DurableGenericEventDisplay](https://github.com/developerforce/SalesforceDurableStreamingDemo/blob/master/components/DurableGenericEventDisplay.component).
-   For PushTopic events, the Visualforce component is [DurablePushTopicEventDisplay](https://github.com/developerforce/SalesforceDurableStreamingDemo/blob/master/components/DurablePushTopicEventDisplay.component).

If you want to implement a CometD client with replay options, you can reuse the Visualforce components or adapt the JavaScript code for your app. Portions of the sample component are highlighted in this section.

The first step is to register the Salesforce-provided CometD extension cometdReplayExtension to replay events. This snippet also sets the streaming channel and the replay option. The first argument in registerExtension is an arbitrary name, which you use to unregister the extension.

```

```

Next, the client connects to the CometD replay endpoint. The API version in the endpoint must be 37.0 or later. The session ID value of the current session is passed in the Authorization header. The client calls the cometd configure() function to set up the connection and specify the endpoint and authorization header. Next, the client performs a handshake by calling cometd handshake() function.

```

```

To ensure that every step in the connection process is successful before moving on to the next step, the client uses listeners. For example, a listener for the /meta/handshake channel checks whether the handshake is successful. If it is successful, the subscribe() function is called.

```

```

The last step is to specify a callback for the CometD subscribe() function. CometD calls this callback function when a message is received in the channel. In this sample, the callback function displays the message data to the page. It appends the data to the div HTML element whose ID value is "content".

```

```

## cometdReplayExtension Extension

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_streaming)

#### Note

The extension is a prerequisite for the replay functionality in a CometD client. In the durable streaming sample, the Visualforce components register and use the extension. If you implement a CometD client, include the replay extension in your project, but you don’t have to modify it.

The [cometdReplayExtension](https://github.com/developerforce/SalesforceDurableStreamingDemo/blob/master/staticresources/cometdReplayExtension.resource) contains cometd extension functions that are called for incoming and outgoing messages. These extension functions implement the logic that checks for the extension’s registration on handshake and sets the replay option on subscription.

​On handshake, the function for incoming messages checks whether the replay extension has been registered. If so, it sets the \_extensionEnabled variable to true. This function also saves the replay ID of the received message so that it can be used when a client reconnects after a timeout.

```

```

​On subscription, the function for outgoing messages checks whether the replay extension has been registered by inspecting the \_extensionEnabled variable. If the extension is registered, the function subscribes to events based on the specified replay option. The sample sets the replay option by calling the extension’s setReplay() function.

```

```

## Code Examples

```
// Register Generic Streaming Replay extension
var replayExtension = new cometdReplayExtension();
replayExtension.setChannel(<Streaming Channel to Subscribe to>);
replayExtension.setReplay(<Event Replay Option>);
cometd.registerExtension('myReplayExtensionName', replayExtension);
```

```
// Connect to the CometD endpoint
cometd.configure({
    url: window.location.protocol+'//'+window.location.hostname+ 
        (null != window.location.port ? (':'+window.location.port) : '') +
        '/cometd/37.0/',
    requestHeaders: { Authorization: 'OAuth {!$Api.Session_ID}'}
});
cometd.handshake();
```

```
if(!metaHandshakeListener) {
    metaHandshakeListener = cometd.addListener('/meta/handshake', function(message) {
        if (message.successful) {
             $('#content').append('<br><br> DEBUG: Handshake Successful: '+
                 JSON.stringify(message)+' <br><br>');
                    
             if (message.ext && message.ext[REPLAY_FROM_KEY] == true) {
                 isExtensionEnabled = true;
             }                    
             subscribedToChannel = subscribe(channel);
        } else
             $('#content').append('DEBUG: Handshake Unsuccessful: '+
                 JSON.stringify(message)+' <br><br>');
    });
}
```

```
function subscribe(channel) {
    // Subscribe to a topic. 
        // JSON-encoded update will be returned in the callback.
    return cometd.subscribe(channel, function(message) {
        var div = document.getElementById('content');
        div.innerHTML = div.innerHTML + '<p>Notification ' +
        'on channel: ' + JSON.stringify(message.channel) + '<br>' +
        'Payload: ' + JSON.stringify(message.data.payload) + '<br>' + 
        'Replay Id: ' + JSON.stringify(message.data.event.replayId) + '<br>' + 
        'Full message: ' + JSON.stringify(message) + '</p><br>';
    });
}
```

```
this.incoming = function(message) {
    if (message.channel === '/meta/handshake') {
        if (message.ext && message.ext[REPLAY_FROM_KEY] == true) {
            _extensionEnabled = true;
        } else if (message.channel === _channel && message.data && message.data.event && 
                   message.data.event.replayId) {
            _replay = message.data.event.replayId;
        }
    }
}
```

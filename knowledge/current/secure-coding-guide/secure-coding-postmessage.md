---
title: "Secure Coding PostMessage"
domain: secure-coding-guide
topic: secure-coding-postmessage
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:35:44.514Z
estimatedTokens: 835
keywords: [Secure, Coding, PostMessage, Browser’s, Origin, Policy, SOP, prevents, different, origins, accessing, other’s, data, window.postMessage, API]
---

# Secure Coding PostMessage

> Browser’s Same Origin Policy (SOP) prevents
                different origins from accessing each other’s data. window.postMessage API
                was thus introduced in HTML5 to enable data exchange between the different origins
                intending to communicate with each other.

# Secure Coding PostMessage

## Secure Post Message

Browser’s Same Origin Policy (SOP) prevents different origins from accessing each other’s data. *window.postMessage* API was thus introduced in HTML5 to enable data exchange between the different origins intending to communicate with each other.

*window.postMessage* provides a communication bridge, and it is the developer’s responsibility to keep the bridge secure and use the API securely. There are two aspects to postMessage based message exchange, viz, sending and receiving. We will now look at it from sender’s and recipient’s perspective.

**Sender**

A postMessage invocation syntax looks something like

```

```

A secure postMessage invocation example to send a message to another domain is provided below:

```

```

In the code example above, the sender has access to the window object for the intended recipient. There are various mechanisms by which the sender can get the javascript handle to a target window, so we will skip that.

-   "This is a message" is the actual message that is sent to the recipient window. It can be any object and not just a string message.
-   "[https://salesforce.com](https://salesforce.com/)" is the target domain to which the message must be delivered. If the recipient window has navigated to a different domain, the browser will discard the message and not deliver it, ensuring confidentiality of the information.

You can also specify "\*" as the target domain name if you want to send your message to any domain on the target window. That is an insecure use of postMessage API and must be avoided. If the target window navigates to a new origin, your message may end up being delivered to a malicious domain resulting in information leakage.

It is important to always specify the precise target origin while sending postMessage(s). You can also use '/' as target origin if you want the receiving origin to be the same as the sending origin.

**Receiver**

Since any origin can send messages to your window and message handlers, it is recommended to accept messages only from domains on an allowlist. Failure to check source origin can result in cross site scripting, information leakage or denial of service attacks on your application. It is also recommended to validate the format of incoming data prior to processing. Always assume that the received messages are malicious and program defensively.

An example secure implementation to process incoming messages may look as follows:

```

```

**To summarize** postMessage API is a powerful developer tool and must be used with caution. General guidelines for its use are:

-   While sending messages
    -   Provide a specific destination origin unless there is a need to broadcast your message to all domains

-   While receiving messages
    -   Setup event listeners only when expecting messages from other windows.
    -   Always check the source origin against a list of allowed origins.
    -   Ensure that the data received is in the expected format. Only interpret the received message as data. Don’t evaluate it as code.
    -   Reply only to trusted origins

**References:**

-   [whatwg.org web messaging](https://html.spec.whatwg.org/multipage/comms.html#web-messaging)
-   [Mozilla developer](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage)

## Code Examples

```
otherWindow.postMessage(message, targetOrigin);
```

```
window.postMessage("This is a message", "https://www.salesforce.com")
```

```
window.addEventListener("message", processMessages);
 function processMessages(event) {
    var sendingOrigin = event.origin || event.originalEvent.origin; 
    if (origin !== "https://www.salesforce.com") 
    //check source of the incoming message
    // ignore message or throw error
    if(isIncomingDataValid(event.data)) { 
    //isIncomingDataValid is a custom function to validate data format
    // do something
    } else {
    // ignore message or throw error
    }
 }
```

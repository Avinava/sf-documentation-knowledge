---
title: "onChatTransferredOut()"
domain: service-cloud
topic: onchattransferredout
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.278Z
estimatedTokens: 197
keywords: [onChatTransferredOut, Registers, function, call, engaged, chat, transferred, another, agent, API, version, 29.0, later, Arguments, Sample]
---

# onChatTransferredOut()

> Registers a function to call when an engaged chat is transferred out to another
        agent. Available in API version 29.0 or
            later.

# onChatTransferredOut()

Registers a function to call when an engaged chat is transferred out to another agent. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a chat has been successfully transferred out to another agent. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat that has been transferred. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onChatTransferredOut(eventHandler:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('A chat with this chatKey has been transferred out: ' + result.chatKey);
        }
        sforce.console.chat.onChatTransferredOut(eventHandler);
    </script>
</apex:page>
```

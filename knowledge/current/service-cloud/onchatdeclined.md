---
title: "onChatDeclined()"
domain: service-cloud
topic: onchatdeclined
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.191Z
estimatedTokens: 183
keywords: [onChatDeclined, Registers, function, call, agent, declines, chat, request., API, version, 29.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatDeclined()

> Registers a function to call when an agent declines a chat request. Available in API version 29.0 or
            later.

# onChatDeclined()

Registers a function to call when an agent declines a chat request. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when a chat request is declined. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat request that has been declined. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onChatDeclined(eventHandler:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('A chat request with this chatKey has been declined: ' + result.chatKey);
        }
        sforce.console.chat.onChatDeclined(eventHandler);
    </script>
</apex:page>
```

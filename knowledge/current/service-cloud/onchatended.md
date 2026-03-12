---
title: "onChatEnded()"
domain: service-cloud
topic: onchatended
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.266Z
estimatedTokens: 176
keywords: [onChatEnded, Registers, function, call, engaged, chat, ends, API, version, 29.0, later, Arguments, Sample, Code–Visualforce]
---

# onChatEnded()

> Registers a function to call when an engaged chat ends. Available in API version 29.0 or
            later.

# onChatEnded()

Registers a function to call when an engaged chat ends. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when an engaged chat ends. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the engaged chat that has ended. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onChatEnded(eventHandler:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('A chat with this chatKey has ended: ' + result.chatKey);
        }
        sforce.console.chat.onChatEnded(eventHandler);
    </script>
</apex:page>
```

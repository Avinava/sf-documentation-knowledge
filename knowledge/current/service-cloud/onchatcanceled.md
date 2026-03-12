---
title: "onChatCanceled()"
domain: service-cloud
topic: onchatcanceled
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.183Z
estimatedTokens: 158
keywords: [onChatCanceled, Registers, function, call, chat, visitor, cancels, request., API, version, 29.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onChatCanceled()

> Registers a function to call when a chat visitor cancels a chat request. Available in API version 29.0 or
            later.

# onChatCanceled()

Registers a function to call when a chat visitor cancels a chat request. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | string | The chat key for the chat request that has been canceled. |

## Code Examples

```
sforce.console.chat.onChatCanceled(callback:Function)
```

```
<apex:page >
<apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('The chat request has been canceled for this chatKey: ' + result.chatKey);
        }
        sforce.console.chat.onChatCanceled(eventHandler);
    </script>
</apex:page>
```

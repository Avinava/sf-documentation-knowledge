---
title: "onChatCriticalWaitState()"
domain: service-cloud
topic: onchatcriticalwaitstate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.258Z
estimatedTokens: 197
keywords: [onChatCriticalWaitState, Registers, function, call, chat, becomes, critical, answer, waiting, answered, API, version, 29.0, later, Arguments]
---

# onChatCriticalWaitState()

> Registers a function to call when a chat becomes critical to answer or a waiting chat
        is answered. Available in API version 29.0 or
            later.

# onChatCriticalWaitState()

Registers a function to call when a chat becomes critical to answer or a waiting chat is answered. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which the critical wait state has changed. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| state | Boolean | Indicates whether the chat is in critical wait state (true) or not (false). |

## Code Examples

```
sforce.console.chat.onChatCanceled(chatKey:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('This chat has reached a critical wait');
        }
        //Get the value for 'myChatKey' from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
        //These values are for example purposes only
        var chatKey = 'myChatKey';
        sforce.console.chat.onChatCriticalWaitState(chatKey, eventHandler);
    </script>
</apex:page>
```

---
title: "onCurrentCapacityChanged()"
domain: service-cloud
topic: oncurrentcapacitychanged
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.211Z
estimatedTokens: 262
keywords: [onCurrentCapacityChanged, Registers, function, call, agent's, capacity, accepting, chats, changes—for, example, agent, accepts, new, chat, ends, currently, engaged, otherwise, changes, number]
---

# onCurrentCapacityChanged()

> Registers a function to call when an agent's capacity for accepting chats
        changes—for example, if an agent accepts a new chat, ends a currently engaged chat,
        or otherwise changes the number of chats to which they are assigned, or if a chat request is
        pushed to their chat queue. Available in API version 29.0 or
            later.

# onCurrentCapacityChanged()

Registers a function to call when an agent's capacity for accepting chats changes—for example, if an agent accepts a new chat, ends a currently engaged chat, or otherwise changes the number of chats to which they are assigned, or if a chat request is pushed to their chat queue. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| eventHandler | function | JavaScript method called when the agent's capacity for accepting chats has changed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| count | integer | The number of chats in which the agent is currently engaged plus the number of chat requests currently assigned to the agent. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onCurrentCapacityChanged(eventHandler:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('Capacity Changed. Current Requests + Engaged Chats is now: ' + result.count);
        }
        sforce.console.chat.onCurrentCapacityChanged(eventHandler);
    </script>
</apex:page>
```

---
title: "onTypingUpdate()"
domain: service-cloud
topic: ontypingupdate
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.299Z
estimatedTokens: 324
keywords: [onTypingUpdate, Registers, function, call, customer’s, text, chat, window, changes, Sneak, Peek, enabled, whenever, customer, edits]
---

# onTypingUpdate()

> Registers a function to call when the customer’s text in the chat window
        changes. If Sneak Peek is enabled, this function is called whenever the customer edits the
        text in the chat window. If Sneak Peek is not enabled, this function is called whenever a
        customer starts or stops typing in the chat window. Available in API version 29.0 or
            later.

# onTypingUpdate()

Registers a function to call when the customer’s text in the chat window changes. If Sneak Peek is enabled, this function is called whenever the customer edits the text in the chat window. If Sneak Peek is not enabled, this function is called whenever a customer starts or stops typing in the chat window. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which to call a function when a customer begins typing a new message to the agent. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| isTyping | Boolean | Indicates whether a chat visitor is typing (true) or not (false). |
| sneakPeek | String | The text the chat visitor is currently typing into their input box in the chat window. This is visible only if Sneak Peek is enabled for the agent. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onTypingUpdate(chatKey:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('There is a new typing update in this chat');
        }
        //Get the value for 'myChatKey'from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
        //These values are for example purposes only
        var chatKey = 'myChatKey';
        sforce.console.chat.onTypingUpdate(chatKey, eventHandler);
    </script>
</apex:page>
```

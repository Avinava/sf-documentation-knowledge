---
title: "onNewMessage()"
domain: service-cloud
topic: onnewmessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.295Z
estimatedTokens: 288
keywords: [onNewMessage, Registers, function, call, new, message, sent, customer, agent, supervisor, API, version, 29.0, later, Arguments]
---

# onNewMessage()

> Registers a function to call when a new message is sent from a customer, agent, or
        supervisor. Available in API version 29.0 or
            later.

# onNewMessage()

Registers a function to call when a new message is sent from a customer, agent, or supervisor. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | string | The chatKey associated with the chat for which to call a function when a new customer message is received. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| content | String | The text of a message in the chat log. |
| name | String | The name of the user who sent the message. This appears exactly as it is displayed in the chat log. |
| type | String | The type of message that was received, such as an Agent or Visitor message. |
| timestamp | Date/Time | The date and time the message was received. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onNewMessage(chatKey:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            alert('There is a new message in this chat: ' + result.content);
        }
        //Get the value for 'myChatKey'from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
        //These values are for example purposes only
        var chatKey = 'myChatKey';
        sforce.console.chat.onNewMessage(chatKey, eventHandler);
    </script>
</apex:page>
```

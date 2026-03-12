---
title: "onAgentSend()"
domain: service-cloud
topic: onagentsend
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.247Z
estimatedTokens: 371
keywords: [onAgentSend, Registers, function, call, agent, chat, message, Salesforce, console, intercepts, occurs, sent, visitor, API, version]
---

# onAgentSend()

> Registers a function to call when an agent sends a chat message through the
        Salesforce console. This method intercepts the message and occurs before it is sent to the
        chat visitor. Available in API version 29.0 or later.

# onAgentSend()

Registers a function to call when an agent sends a chat message through the Salesforce console. This method intercepts the message and occurs before it is sent to the chat visitor. Available in API version 29.0 or later.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

This method is only called when an agent sends a message through the chat window interface. This method doesn’t apply when a sendMessage() method is called in the API.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which to call a function when the agent sends a message. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| content | String | The text of the agent’s message. |
| name | String | The name of the agent who is attempting to send the message as it appears in the chat log. |
| type | String | The type of message that was received—for example, agent. |
| timestamp | Date/Time | The date and time the agent attempted to send the chat message. |
| success | Boolean | true if firing event was successful; false if firing event wasn’t successful. |

## Code Examples

```
sforce.console.chat.onAgentSend(chatKey:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <script type="text/javascript">
        var eventHandler = function (result) {
            var theMessage = result.content;
            alert('The agent is attempting to send the following message: ' + result.content);
            sforce.console.chat.sendMessage(chatKey, theMessage)
            alert('The following message has been sent: ' + theMessage);
        }
        //Get the value for 'myChatKey' from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
        //These values are for example purposes only
        var chatKey = 'myChatKey';
        sforce.console.chat.onAgentSend(chatKey, eventHandler);
    </script>
</apex:page>
```

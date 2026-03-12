---
title: "sendMessage()"
domain: service-cloud
topic: sendmessage
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.438Z
estimatedTokens: 212
keywords: [sendMessage, new, chat, message, agent, specific, key, API, version, 29.0, later, Arguments, Sample, Code–Visualforce]
---

# sendMessage()

> Sends a new chat message from the agent to a chat with a specific chat key. Available
        in API version 29.0 or later.

# sendMessage()

Sends a new chat message from the agent to a chat with a specific chat key. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey of the chat where the agent’s message is sent. |
| message | String | The message you would like to send from the agent to the customer in a chat. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if sending the message was successful; false if sending the message wasn’t successful. |

## Code Examples

```
sforce.console.chat.sendMessage(chatKey:String, message:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testSendMessage();">Send Message</a> 

    <script type="text/javascript">

        function testSendMessage() {
            //Get the value for 'myChatKey'from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            var text ='This is sample text to send as a message';
            sforce.console.chat.sendMessage(chatKey, text, sendMessageSuccess);
        }
        
        function sendMessageSuccess(result) {
            //Report whether getting the chat log was successful
            if (result.success == true) {
                alert('Message Sent');
            } else {
                alert('Sending the message was not successful');
            }
        };
    

    </script>
</apex:page>
```

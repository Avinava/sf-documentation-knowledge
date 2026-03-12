---
title: "endChat()"
domain: service-cloud
topic: endchat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.313Z
estimatedTokens: 176
keywords: [endChat, Ends, chat, agent, currently, engaged, API, version, 29.0, later, Arguments, Sample, Code–Visualforce]
---

# endChat()

> Ends a chat in which an agent is currently engaged. Available in API version 29.0 or
            later.

# endChat()

Ends a chat in which an agent is currently engaged. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the engaged chat you wish to end. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if ending the chat was successful; false if ending the chat wasn’t successful. |

## Code Examples

```
sforce.console.chat.endChat(chatKey:String, (optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testEndChat();return false;">End Chat</a> 

    <script type="text/javascript">
        function testEndChat() {
            //Get the value for 'myChatKey'from the getEngagedChats() or onChatStarted() methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            sforce.console.chat.endChat(chatKey, endSuccess);
        }
    
        function endSuccess(result) {
            //Report whether ending the chat was succesful
            if (result.success == true) {
                alert('Ending the chat was successful');
            } else {
                alert('Ending the chat was not successful');
            }
        };
    </script>
</apex:page>
```

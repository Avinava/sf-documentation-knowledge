---
title: "getChatLog()"
domain: service-cloud
topic: getchatlog
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.502Z
estimatedTokens: 542
keywords: [getChatLog, chat, log, associated, specific, key, API, version, 29.0, later, Arguments, Sample, Code–Visualforce, customEvent, message]
---

# getChatLog()

> Returns the chat log of a chat associated with a specific chat key. Available in API version 29.0 or
            later.

# getChatLog()

Returns the chat log of a chat associated with a specific chat key. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat for which to retrieve the chat log. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following fields:

| Name | Type | Description |
| --- | --- | --- |
| customEvents | Array of customEvent objects | An array of custom event objects representing the custom events that occurred during a chat. |
| messages | Array of message objects | An array of chat message objects containing all of the chat messages from the chat log. |
| success | Boolean | true if getting the chat log was successful; false if getting the chat log wasn’t successful. |

## customEvent

The customEvent object contains a single event from the chat log and the following properties:

| Property | Type | Description |
| --- | --- | --- |
| source | String | The person who initiated the custom event, either the chat visitor or the agent. |
| type | String | The type of custom event that occurred. |
| data | String | The data of the custom event that was sent to the chat; corresponds to the data argument of the liveagent.chasitor.sendCustomEvent() method used to send this event from the chat window. |
| timestamp | Date/Time | The date and time a custom event was received. |

## message

The message object contains a single chat message from the chat log and the following properties:

| Property | Type | Description |
| --- | --- | --- |
| content | String | The text content of a message in the chat log. |
| name | String | The name of the user who sent the message in the chat log. This appears exactly as it is displayed in the chat log. |
| type | String | The type of message that was received, such as Agent or Visitor. |
| timestamp | Date/Time | The date and time the chat message was received. |

## Code Examples

```
sforce.console.chat.getChatLog(chatKey:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetChatLog();">Get Chat Log</a> 

    <script type="text/javascript">

        function testGetChatLog() {
            //Get the value for 'myChatKey'from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            sforce.console.chat.getChatLog(chatKey, getChatLogSuccess);
        }
        
        function getChatLogSuccess(result) {
            //Report whether getting the chat log was succesful
            if (result.success == true) {
                chatLogMessage = result.messages[0].content;
                alert('The first message in this chatLog is: ' + chatLogMessage);
            } else {
                alert('Getting the chat log was not successful');
            }
        };
    

    </script>
</apex:page>
```

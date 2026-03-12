---
title: "sendCustomEvent()"
domain: service-cloud
topic: sendcustomevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.385Z
estimatedTokens: 243
keywords: [sendCustomEvent, Sends, custom, event, client-side, chat, window, specific, key., API, version, 29.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# sendCustomEvent()

> Sends a custom event to the client-side chat window for a chat with a specific chat
        key. Available in API version 29.0 or later.

# sendCustomEvent()

Sends a custom event to the client-side chat window for a chat with a specific chat key. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chatKey associated with the chat to which to send a custom event. |
| type | String | The name of the custom event you want to send to the chat window. |
| data | String | Additional data you want to send to the chat window along with the custom event. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if sending the custom event was successful; false if sending the custom event wasn’t successful. |

## Code Examples

```
sforce.console.chat.sendCustomEvent(chatKey:String, type:String, data:String, callback:Function)
```

```
<apex:page >
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testSendCustomEvent();">Send Custom Event</a> 

    <script type="text/javascript">

        function testSendCustomEvent() {
            //Get the value for 'myChatKey'from the sforce.console.chat.getDetailsByPrimaryTabId() or other chat methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            var type = 'myCustomEventType'
            var data = 'myCustomEventData'
            sforce.console.chat.sendCustomEvent(chatKey, type, data, sendCustomEventSuccess);
        }
        
        function sendCustomEventSuccess(result) {
            //Report whether sending the custom event was successful
            if (result.success == true) {
                alert('The customEvent has been sent');
            } else {
                alert('Sending the customEvent was not successful');
            }
        };
    
    </script>
</apex:page>
```

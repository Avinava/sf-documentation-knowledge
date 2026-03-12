---
title: "declineChat()"
domain: service-cloud
topic: declinechat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.160Z
estimatedTokens: 191
keywords: [declineChat, Declines, chat, request., API, version, 29.0, later., isn't, supported, Omni-Channel, 37.0, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# declineChat()

> Declines a chat request. Available in API version 29.0 or
            later.
        This method isn't supported with Omni-Channel in API version
            37.0 or later.

# declineChat()

Declines a chat request. Available in API version 29.0 or later. This method isn't supported with Omni-Channel in API version 37.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the request you wish to decline. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if declining the event was successful; false if declining the event wasn’t successful. |

## Code Examples

```
sforce.console.chat.declineChat(chatKey:String, (optional)callback:Function)
```

```
<apex:page>
                <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testDeclineChat();return false;">Decline Chat</a> 

    <script type="text/javascript">
        function testDeclineChat() {
            //Get the value for 'myChatKey'from the getChatRequests() or onChatRequested() methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            sforce.console.chat.declineChat(chatKey, declineSuccess);
        }
    
    
        function declineSuccess(result) {
            //Report whether declining the chat was succesful
            if (result.success == true) {
                alert('Declining the chat was successful');
            } else {
                alert('Declining the chat was not successful');
            }
        };
    </script>
</apex:page>
```

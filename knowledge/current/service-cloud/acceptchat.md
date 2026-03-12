---
title: "acceptChat()"
domain: service-cloud
topic: acceptchat
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.075Z
estimatedTokens: 191
keywords: [acceptChat, Accepts, chat, request., API, version, 29.0, later., isn't, supported, Omni-Channel, 37.0, Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# acceptChat()

> Accepts a chat request. Available in API version 29.0 or
            later.
        This method isn't supported with Omni-Channel in API version
            37.0 or later.

# acceptChat()

Accepts a chat request. Available in API version 29.0 or later. This method isn't supported with Omni-Channel in API version 37.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat request you wish to accept. |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if accepting the chat was successful; false if accepting the chat wasn’t successful. |

## Code Examples

```
sforce.console.chat.acceptChat(chatKey:String, (optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testAcceptChat();return false;">Accept Chat</a> 

    <script type="text/javascript">
        function testAcceptChat() {
            //Get the value for 'myChatKey'from the getChatRequests() or onChatRequested() methods. 
            //These values are for example purposes only
            var chatKey = 'myChatKey';
            sforce.console.chat.acceptChat(chatKey, acceptSuccess);
        }
        
        function acceptSuccess(result) {
            //Report whether accepting the chat was succesful
            if (result.success == true) {
                alert('Accepting the chat was successful');
            } else {
                alert('Accepting the chat was not successful');
            }
        };
    </script>
</apex:page>
```

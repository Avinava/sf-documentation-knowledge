---
title: "cancelFileTransferByAgent()"
domain: service-cloud
topic: cancelfiletransferbyagent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.262Z
estimatedTokens: 204
keywords: [cancelFileTransferByAgent, file, transfer, canceled, agent, API, version, 31.0, later, Arguments, Sample, Code–Visualforce]
---

# cancelFileTransferByAgent()

> Indicates that a file transfer request has been canceled by an agent. Available in API version 31.0 or later.

# cancelFileTransferByAgent()

Indicates that a file transfer request has been canceled by an agent. Available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat for which the agent canceled the file transfer request. |
| callback | function | JavaScript method that is called when the method is completed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if canceling the file transfer request was successful; false if canceling the file transfer request wasn’t successful. |

## Code Examples

```
sforce.console.chat.cancelFileTransferByAgent(chatKey:String, (optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testCancelFileTransfer();return false;">Cancel file transfer</a> 

    <script type="text/javascript">
        function testCancelFileTransfer() {
            //Gets the value for 'myChatKey'from the getChatRequests() or onChatRequested()
              methods. 
            //These values are for example purposes only.
            var chatKey = 'myChatKey'; 
            sforce.console.chat.cancelFileTransferByAgent(chatKey, fileSuccess);
        }
        
        function fileSuccess(result) {
            //Report whether canceling was successful
            if (result.success == true) {
                alert('Canceling file transfer was successful.');
            } else {
                alert('Canceling file transfer was not successful.');
            }
        };
    </script>
</apex:page>
```

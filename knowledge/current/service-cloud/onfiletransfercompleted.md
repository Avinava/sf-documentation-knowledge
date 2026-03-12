---
title: "onFileTransferCompleted()"
domain: service-cloud
topic: onfiletransfercompleted
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:58.221Z
estimatedTokens: 210
keywords: [onFileTransferCompleted, Registers, function, call, file, transferred, customer, agent., API, version, 31.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# onFileTransferCompleted()

> Registers a function to call when a file is transferred from a customer to an agent.
        Available in API version 31.0 or later.

# onFileTransferCompleted()

Registers a function to call when a file is transferred from a customer to an agent. Available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat the file was transferred from. |
| callback | function | JavaScript method that is called when the method is complete. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| attachmentId | String | The ID of the object created for the transferred file. |
| success | Boolean | true if firing event was successful; false if firing event was unsuccessful. |

## Code Examples

```
sforce.console.chat.onFileTransferCompleted(chatKey:String, callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testOnFileComplete();return false;">test on file transfer complete</a> 

    <script type="text/javascript">
        function testOnFileComplete() {
            //Gets the value for 'myChatKey'from the getChatRequests() or onChatRequested() methods. 
            //These values are for example purposes only.
            var chatKey = 'myChatKey'; 
            sforce.console.chat.onFileTransferCompleted(chatKey, fileSuccess);
        }
        
        function fileSuccess(result) {
            //Reports status of the file transfer.
            if (result.success == true) {
                alert('File transfer was successful.');
            } else {
                alert('File transfer was not successful.');
            }
        };
    </script>
</apex:page>
```

---
title: "initFileTransfer()"
domain: service-cloud
topic: initfiletransfer
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.523Z
estimatedTokens: 262
keywords: [initFileTransfer, Initiates, process, transferring, file, customer, agent., API, version, 31.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# initFileTransfer()

> Initiates the process of transferring a file from a customer to an agent. Available in API version 31.0 or later.

# initFileTransfer()

Initiates the process of transferring a file from a customer to an agent. Available in API version 31.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| chatKey | String | The chat key for the chat the file is transferred from. |
| entityId | String | The ID of the transcript object to attach the transferred file to. |
| callback | function | JavaScript method that is called when the method is completed. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| success | Boolean | true if the request to transfer a file was sent successfully; false if the request wasn’t sent successfully.NoteA value of true doesn’t necessarily mean that the file was successfully transferred to an agent. Rather, it indicates that the request to begin a file transfer was sent successfully. |

## Code Examples

```
sforce.console.chat.initFileTransfer(chatKey:String, entityId:String, (optional)callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testInitFileTransfer();return false;">Init file transfer</a> 

    <script type="text/javascript">
        function testInitFileTransfer() {
            //Gets the value for 'myChatKey'from the getChatRequests() or onChatRequested() methods. 
            //These values are for example purposes only.
            var chatKey = 'myChatKey';  var entityId = 'myEntityId';
            sforce.console.chat.initFileTransfer(chatKey, entityId, fileSuccess);
        }
        
        function fileSuccess(result) {
            //Reports whether initiating the file transfer was successful.
            if (result.success == true) {
                alert('Initiating file transfer was successful.');
            } else {
                alert('Initiating file transfer was not successful.');
            }
        };
    </script>
</apex:page>
```

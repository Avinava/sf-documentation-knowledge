---
title: "getChatRequests()"
domain: service-cloud
topic: getchatrequests
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.506Z
estimatedTokens: 192
keywords: [getChatRequests, chat, keys, requests, assigned, agent, API, version, 29.0, later, Arguments, Sample, Code–Visualforce]
---

# getChatRequests()

> Returns the chat keys of the chat requests that have been assigned to an agent. Available in API version 29.0 or
            later.

# getChatRequests()

Returns the chat keys of the chat requests that have been assigned to an agent. Available in API version 29.0 or later.

## Syntax

```

```

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| callback | function | JavaScript method called upon completion of the method. |

## Sample Code–Visualforce

```

```

## Response

This method is asynchronous so it returns its response in an object in a callback method. The response object contains the following properties:

| Name | Type | Description |
| --- | --- | --- |
| chatKey | Array | Array of chatKey values, one for each of the current chat requests. |
| success | Boolean | true if getting chat requests was successful; false if getting chat requests wasn’t successful. |

## Code Examples

```
sforce.console.chat.getChatRequests(callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetChatRequests();return false;">Get Chat Requests</a> 

    <script type="text/javascript">
        function testGetChatRequests() {
            sforce.console.chat.getChatRequests(function(result) {
                if (result.success) {
                    alert('Number of Chat Requests ' + result.chatKey.length);
                } else {
                    alert('getChatRequests has failed');
                }
            });
        }
    </script>
</apex:page>
```

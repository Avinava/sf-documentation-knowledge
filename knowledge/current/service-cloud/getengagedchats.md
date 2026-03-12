---
title: "getEngagedChats()"
domain: service-cloud
topic: getengagedchats
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.421Z
estimatedTokens: 191
keywords: [getEngagedChats, chat, keys, chats, which, agent, currently, engaged., API, version, 29.0, later., Syntax, Arguments, Sample, Code–Visualforce, Response]
---

# getEngagedChats()

> Returns the chat keys of the chats in which the agent is currently engaged. Available in API version 29.0 or
            later.

# getEngagedChats()

Returns the chat keys of the chats in which the agent is currently engaged. Available in API version 29.0 or later.

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
| chatKey | array | Array of chatKey values, one for each of the currently engaged chats. |
| success | boolean | true if getting engaged chats was successful; false if getting engaged chats wasn’t successful. |

## Code Examples

```
sforce.console.chat.getEngagedChats(callback:Function)
```

```
<apex:page>
    <apex:includeScript value="/support/console/66.0/integration.js"/>
    <a href="#" onClick="testGetEngagedChats();return false;">Get Engaged Chats</a> 

    <script type="text/javascript">
        function testGetEngagedChats() {
            sforce.console.chat.getEngagedChats(function(result) {
                if (result.success) {
                    alert('Number Engaged Chats: ' + result.chatKey.length);
                } else {
                    alert('getEngagedChats has failed');
                }
            });
        }
    </script>
</apex:page>
```

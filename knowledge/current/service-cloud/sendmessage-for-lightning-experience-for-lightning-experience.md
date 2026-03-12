---
title: "sendMessage() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: sendmessage-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.914Z
estimatedTokens: 231
keywords: [sendMessage, Lightning, Experience, Sends, new, chat, message, agent, specific, key., works, only, console, apps., Arguments, argumentObj, Sample, Code, Response]
---

# sendMessage() for Lightning Experience for Lightning
            Experience

> Sends a new chat message from the agent to a chat with a specific chat key. This method works only in
   Lightning console apps.

# sendMessage() for Lightning Experience for Lightning Experience

Sends a new chat message from the agent to a chat with a specific chat key. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| argumentObj | Object | An object containing all the arguments to be passed into this method. |

## argumentObj

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the chat that you want to end. |
| message | Object | An object containing the data to send in the message. |

## message

| Name | Type | Description |
| --- | --- | --- |
| text | String | The text to be sent in the message. |

## Sample Code

This example sends a message to the visitor and logs the result.

Component Code:

```

```

Controller Code:

```

```

## Response

Returns a Promise. Success resolves to true. The Promise is rejected if there's an error.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" description="Conversation toolkit api sample">
  <aura:attribute name="recordId" type="String" />
  <lightning:conversationToolkitAPI aura:id="conversationKit" />
  <ui:button label="sendMessage" press="{!c.sendMessage}" />
</aura:component>
```

```
({
    sendMessage: function(cmp, evt, helper) {
        var conversationKit = cmp.find("conversationKit");
        var recordId = cmp.get("v.recordId");
        conversationKit.sendMessage({
            recordId: recordId,
            message: {
                text:"Hi, this was sent using the sendMessage API!"
            }
        })
        .then(function(result){
            if (result) {
                    console.log("Successfully sent message");
                } else {
                    console.log("Failed to send message");
                }
        });
    }
})
```

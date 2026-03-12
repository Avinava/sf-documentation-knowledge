---
title: "endChat() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: endchat-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.695Z
estimatedTokens: 171
keywords: [endChat, Lightning, Experience, Ends, chat, which, agent, currently, engaged., works, only, console, apps., Arguments, argumentObj, Sample, Code, Response]
---

# endChat() for Lightning Experience for Lightning
            Experience

> Ends a chat in which an agent is currently engaged. This method works only in
   Lightning console apps.

# endChat() for Lightning Experience for Lightning Experience

Ends a chat in which an agent is currently engaged. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| argumentObj | Object | An object containing all the arguments to be passed into this method. |

## argumentObj

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the chat that you want to end. |

## Sample Code

This example ends the chat and logs the result.

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
  <ui:button label="endChat" press="{!c.endChat}" />
</aura:component>
```

```
({
    endChat: function(cmp, evt, helper) {
        var conversationKit = cmp.find("conversationKit");
        var recordId = cmp.get("v.recordId");
        conversationKit.endChat({
            recordId: recordId
        })
        .then(function(result){
            if (result) {
                    console.log("Successfully ended chat");
                } else {
                    console.log("Failed to end chat");
                }
        });
    }
})
```

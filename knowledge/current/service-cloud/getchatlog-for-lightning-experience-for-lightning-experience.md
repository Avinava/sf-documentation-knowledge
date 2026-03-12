---
title: "getChatLog() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: getchatlog-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.840Z
estimatedTokens: 612
keywords: [getChatLog, Lightning, Experience, chat, log, associated, specific, recordId, works, console, apps, Arguments, argumentObj, Sample, Code, Enhanced, Messaging]
---

# getChatLog() for Lightning Experience for Lightning
            Experience

> Returns the chat log of a chat associated with a specific recordId. This method works only in
   Lightning console apps.

# getChatLog() for Lightning Experience for Lightning Experience

Returns the chat log of a chat associated with a specific recordId. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| argumentObj | Object | An object containing all the arguments to be passed into this method. |

## argumentObj

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work associated with the current chat. |

## Sample Code

This example retrieves the chat log for the given chat, logs the result, and if successful, saves the result to a variable.

Component Code:

```

```

Controller Code:

```

```

## Response

Returns a Promise. Success resolves to a response object containing the messages and customEvents properties. The Promise is rejected if there's an error.

| Name | Type | Description |
| --- | --- | --- |
| customEvents | Array of customEvent objects. | An array of custom event objects representing the custom events that occurred during a chat. |
| messages | Array of message objects. | An array of chat message objects containing all of the chat messages from the chat log. |
| success | Boolean | true if getting the chat log was successful; false if getting the chat log wasn’t successful. |

## customEvent

The customEvent object contains a single event from the chat log and the following properties:

| Property | Type | Description |
| --- | --- | --- |
| source | String | The person who initiated the custom event, either the chat visitor or the agent. |
| type | String | The type of custom event that occurred. |
| data | String | The data of the custom event that was sent to the chat; corresponds to the data argument of the liveagent.chasitor.sendCustomEvent() method used to send this event from the chat window. |
| timestamp | Date/Time | The date and time a custom event was received. |

## message

The message object contains a single chat message from the chat log and the following properties:

| Property | Type | Description |
| --- | --- | --- |
| content | String | The text content of a message in the chat log. |
| name | String | The name of the user who sent the message in the chat log. This name appears exactly as it is displayed in the chat log. |
| type | String | The type of message that was received, such as Agent or Visitor. |
| timestamp | Date/Time | The date and time the chat message was received. |

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" description="Conversation toolkit api sample">
  <aura:attribute name="recordId" type="String" />
  <aura:attribute name="chatLog" type="Object" />
  <lightning:conversationToolkitAPI aura:id="conversationKit" />
  <ui:button label="getChatLog" press="{!c.getChatLog}" />
</aura:component>
```

```
({
    getChatLog: function(cmp, evt, helper) {
        var conversationKit = cmp.find("conversationKit");
        var recordId = cmp.get("v.recordId");
        conversationKit.getChatLog({
            recordId: recordId
        })
        .then(function(result){
            if (result) {
                    console.log("Successfully retrieved chat log");
                    cmp.set("v.chatLog", result);
                } else {
                    console.log("Failed to retrieve chat log");
                }
        });
    }
})
```

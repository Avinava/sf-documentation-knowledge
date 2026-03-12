---
title: "lightning:conversationNewMessage"
domain: service-cloud
topic: lightningconversationnewmessage
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:57.201Z
estimatedTokens: 216
keywords: [lightning, conversationNewMessage, Event, triggered, customer, sends, new, message., event, Enhanced, Messaging, channels., work, channels, session, must, active, Conversation, Component, visible]
---

# lightning:conversationNewMessage

> Messaging event triggered when the customer
            sends a new message. In Enhanced Messaging channels, this event is triggered only for
            text messages. This event is not triggered for messages with files or rich content. To
            work with Enhanced Messaging channels, the session must be active and the Enhanced
            Conversation Component must be visible on the page.

# lightning:conversationNewMessage

Messaging event triggered when the customer sends a new message. In Enhanced Messaging channels, this event is triggered only for text messages. This event is not triggered for messages with files or rich content. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current conversation. |
| content | String | The message sent by the customer. |
| name | String | The name of the user who sent the message. This name matches the username displayed in the conversation log. |
| type | String | The type of message that was received, such as an Agent or Visitor message. |
| timestamp | Date/Time | The date and time the message was received. |

## Example

Component code:

```

```

Controller code:

```

```

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" description="Conversation toolkit api sample">
  <lightning:conversationToolkitAPI aura:id="conversationKit" />
  <aura:handler event="lightning:conversationNewMessage" action="{!c.onNewMessage}" />
</aura:component>
```

```
({
    onNewMessage: function(cmp, evt, helper) {
        var recordId = evt.getParam('recordId');
        var content = evt.getParam('content');
        var name = evt.getParam('name');
        var type = evt.getParam('type');
        var timestamp = evt.getParam('timestamp');

        console.log("recordId:" + recordId + " content:" + content + " name:" + name + " timestamp:" + timestamp);
    }
})
```

---
title: "lightning:conversationChatEnded"
domain: service-cloud
topic: lightningconversationchatended
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T05:14:57.193Z
estimatedTokens: 101
keywords: [lightning, conversationChatEnded, Event, triggered, active, chat, ends, agent, leaves, conference., event, Enhanced, Messaging, channels., Response, Example, work, channels, session, must]
---

# lightning:conversationChatEnded

> Messaging event triggered when an active
            chat ends or an agent leaves a chat conference. This event is also triggered when using
            Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must
            be active and the Enhanced Conversation Component must be visible on the
        page.

# lightning:conversationChatEnded

Messaging event triggered when an active chat ends or an agent leaves a chat conference. This event is also triggered when using Enhanced Messaging channels. To work with Enhanced Messaging channels, the session must be active and the Enhanced Conversation Component must be visible on the page.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current chat. |

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
  <aura:handler event="lightning:conversationChatEnded" action="{!c.onChatEnded}" />
</aura:component>
```

```
({
    onChatEnded: function(cmp, evt, helper) {
        var conversation = cmp.find("conversationKit");
        var recordId = evt.getParam("recordId");

        console.log("recordId:" + recordId);
    }
})
```

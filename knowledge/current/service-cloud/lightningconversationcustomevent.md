---
title: "lightning:conversationCustomEvent"
domain: service-cloud
topic: lightningconversationcustomevent
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.333Z
estimatedTokens: 183
keywords: [lightning, conversationCustomEvent, Event, triggered, custom, occurs, chat]
---

# lightning:conversationCustomEvent

> Event triggered when a custom event occurs
            during a chat.

# lightning:conversationCustomEvent

Event triggered when a custom event occurs during a chat.

## Response

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the work record that’s associated with the current chat. |
| type | String | The type of the custom event that was sent to this chat; corresponds to the type argument of the liveagent.chasitor.sendCustomEvent() method used to send this event from the chat window. |
| data | String | The data of the custom event that was sent to this chat; corresponds to the data argument of the liveagent.chasitor.sendCustomEvent() method used to send this event from the chat window. |

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
  <aura:handler event="lightning:conversationCustomEvent" action="{!c.onCustomEvent}" />
</aura:component>
```

```
({
    onCustomEvent: function(cmp, evt, helper) {
        var conversation = cmp.find("conversationKit");
        var data = evt.getParam("data");
        var type = evt.getParam("type");

        console.log("type:" + type + " data:" + data);
    }
})
```

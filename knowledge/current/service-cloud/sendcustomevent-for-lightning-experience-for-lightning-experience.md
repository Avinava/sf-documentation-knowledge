---
title: "sendCustomEvent() for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: sendcustomevent-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.908Z
estimatedTokens: 254
keywords: [sendCustomEvent, Lightning, Experience, Sends, custom, event, client-side, chat, window, specific, key., works, only, console, apps., Arguments, argumentObj, Sample, Code, Response]
---

# sendCustomEvent() for Lightning Experience for
            Lightning Experience

> Sends a custom event to the client-side chat window for a chat with a specific chat
        key. This method works only in
   Lightning console apps.

# sendCustomEvent() for Lightning Experience for Lightning Experience

Sends a custom event to the client-side chat window for a chat with a specific chat key. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| argumentObj | Object | An object containing all the arguments to be passed into this method. |

## argumentObj

| Name | Type | Description |
| --- | --- | --- |
| recordId | String | The ID of the event that you want to customize. |
| type | String | The name of the custom event type. |
| data | String | The data attached to the custom event. |

## Sample Code

This example publishes a custom event and logs the result.

Component Code:

```

```

Controller Code:

```

```

The custom event type must match the name of your custom event. Replace myCustomEventType with your own custom event name.

## Response

Returns a Promise. Success is indicated if the promise is fulfilled. Failure is indicated if the catch clause is invoked.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" description="Conversation toolkit api sample">
  <aura:attribute name="recordId" type="String" />
  <lightning:conversationToolkitAPI aura:id="conversationKit" />
  <ui:button label="sendCustomEvent" press="{!c.sendCustomEvent}" />
</aura:component>
```

```
({
    sendCustomEvent: function(cmp, evt, helper) {
        var conversationKit = cmp.find("conversationKit");
        var recordId = cmp.get("v.recordId");
        var type = "myCustomEventType";
        var data = "myCustomEventData";
        conversationKit.sendCustomEvent({
            recordId: recordId,
            type: type,
            data: data 
        })
        .then(function(result){
            if (result) {
                    console.log("Successfully sent custom event");
                } else {
                    console.log("Failed to send custom event");
                }
        });
    }
})
```

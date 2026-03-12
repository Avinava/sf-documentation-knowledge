---
title: "lightning:tabUpdated"
domain: service-cloud
topic: lightningtabupdated
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.422Z
estimatedTokens: 94
keywords: [lightning, tabUpdated, tab, updated, successfully, lightning__tabUpdated, Lightning, message, channel, corresponds, Aura, app, event, web, components, console, _tabUpdated, LWC]
---

# lightning:tabUpdated

> A Lightning message channel that corresponds to the lightning:tabUpdated Aura app event. This message channel is available for
        Lightning web components used within a Lightning console app.

# lightning\_\_tabUpdated

A Lightning message channel that corresponds to the lightning:tabUpdated Aura app event. This message channel is available for Lightning web components used within a Lightning console app.

## Response

The response is the same as that of the [lightning:tabUpdated](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabupdated.htm "Indicates that a tab has been updated successfully.") Aura app event.

## LWC Example

Import the lightning\_\_tabUpdated message channel from the @salesforce/messageChannel/ scoped module. The event returns the message in the response.

```

```

For more information, see [Subscribe and Unsubscribe from a Message Channel](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-subscribe.html).

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <aura:handler event="lightning:tabUpdated" action="{! c.onTabUpdated }"/> 
</aura:component>
```

```
({
    onTabUpdated : function(component, event, helper) {
        console.log("Tab Updated"); 
        var updatedTabId = event.getParam("tabId"); 
        console.log(updatedTabId); 
    },
})
```

```
import { LightningElement, track, wire } from "lwc";
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from "lightning/messageService";
import tabUpdatedChannel from "@salesforce/messageChannel/lightning__tabUpdated";

export default class TabUpdatedExample extends LightningElement {
    subscription = null;
    @wire(MessageContext) messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                tabUpdatedChannel,
                (message) => this.handleMessage(message),
                { scope: APPLICATION_SCOPE }
            );
        }
    }

    unsubscribeToMessageChannel() {
        unsubscribe(this.subscription);
        this.subscription = null;
    }

    // Handler for message received by component
    handleMessage(message) {
        // do something
    }
    // Standard lifecycle hooks used to subscribe and unsubscribe to the message channel
    connectedCallback() {
        this.subscribeToMessageChannel();
    }

    disconnectedCallback() {
        this.unsubscribeToMessageChannel();
    }
```

## Related Topics

- lightning:tabUpdated (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabupdated.htm)

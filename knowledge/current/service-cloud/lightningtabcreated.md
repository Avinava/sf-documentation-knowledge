---
title: "lightning:tabCreated"
domain: service-cloud
topic: lightningtabcreated
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.281Z
estimatedTokens: 103
keywords: [lightning, tabCreated, Indicates, tab, created, successfully., Response, Example, lightning__tabCreated, Lightning, message, channel, corresponds, Aura, app, event., web, components, used, within]
---

# lightning:tabCreated

> A Lightning message channel that corresponds to the lightning:tabCreated Aura app event. This message channel is available for
        Lightning web components used within a Lightning console app.

# lightning\_\_tabCreated

A Lightning message channel that corresponds to the lightning:tabCreated Aura app event. This message channel is available for Lightning web components used within a Lightning console app.

## Response

The response is the same as that of the [lightning:tabCreated](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabcreated.htm "Indicates that a tab has been created successfully.") Aura app event.

## LWC Example

Import the lightning\_\_tabCreated message channel from the @salesforce/messageChannel/ scoped module. The event returns the message in the response.

```

```

For more information, see [Subscribe and Unsubscribe from a Message Channel](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-subscribe.html).

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />	
    <aura:handler event="lightning:tabCreated" action="{! c.onTabCreated }"/> 
</aura:component>
```

```
({
    onTabCreated : function(component, event, helper) {
        console.log("Tab created.");
        var newTabId = event.getParam('tabId');
        var workspaceAPI = component.find("workspace");
        workspaceAPI.setTabLabel({
            tabId: newTabId,
            label: 'New Tab'
        });
    }, 
})
```

```
import { LightningElement, track, wire } from "lwc";
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from "lightning/messageService";
import tabCreatedChannel from "@salesforce/messageChannel/lightning__tabCreated";

export default class TabCreatedExample extends LightningElement {
    subscription = null;
    @wire(MessageContext) messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                tabCreatedChannel,
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

- lightning:tabCreated (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabcreated.htm)

---
title: "lightning:tabReplaced"
domain: service-cloud
topic: lightningtabreplaced
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.293Z
estimatedTokens: 102
keywords: [lightning, tabReplaced, Indicates, tab, replaced, successfully., Response, Example, lightning__tabReplaced, Lightning, message, channel, corresponds, Aura, app, event., web, components, used, within]
---

# lightning:tabReplaced

> A Lightning message channel that corresponds to the lightning:tabReplaced Aura app event. This message channel is available for
        Lightning web components used within a Lightning console app.

# lightning\_\_tabReplaced

A Lightning message channel that corresponds to the lightning:tabReplaced Aura app event. This message channel is available for Lightning web components used within a Lightning console app.

## Response

The response is the same as that of the [lightning:tabReplaced](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabreplaced.htm "Indicates that a tab has been replaced successfully.") Aura app event.

## LWC Example

Import the lightning\_\_tabReplaced message channel from the @salesforce/messageChannel/ scoped module. The event returns the message in the response.

```

```

For more information, see [Subscribe and Unsubscribe from a Message Channel](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-subscribe.html).

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />	
    <aura:handler event="lightning:tabReplaced" action="{! c.onTabReplaced }"/> 
</aura:component>
```

```
({
    onTabReplaced : function(component, event, helper) {
        console.log("Tab Replaced");
        var replacedTabId = event.getParam("tabId");
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getTabURL({        
            tabId : replacedTabId
        }).then(function(response) {
	     console.log(response);
        });
    }
})
```

```
import { LightningElement, wire } from "lwc";
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from "lightning/messageService";
import tabReplacedChannel from "@salesforce/messageChannel/lightning__tabReplaced";

export default class TabReplacedExample extends LightningElement {
    subscription = null;
    @wire(MessageContext) messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                tabReplacedChannel,
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

- lightning:tabReplaced (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabreplaced.htm)

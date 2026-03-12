---
title: "lightning:tabClosed"
domain: service-cloud
topic: lightningtabclosed
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:55.404Z
estimatedTokens: 81
keywords: [lightning, tabClosed, tab, closed, lightning__tabClosed, Lightning, message, channel, corresponds, Aura, app, event, _tabClosed, LWC]
---

# lightning:tabClosed

> A Lightning message channel that corresponds to the lightning:tabClosed Aura app event.

# lightning\_\_tabClosed

A Lightning message channel that corresponds to the lightning:tabClosed Aura app event.

## Response

The response is the same as that of the [lightning:tabClosed](atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabclosed.htm "Indicates that a tab has been closed.") Aura app event.

## LWC Example

Import the lightning\_\_tabClosed message channel from the @salesforce/messageChannel/ scoped module. The event returns the message in the response.

```

```

For more information, see [Subscribe and Unsubscribe from a Message Channel](https://developer.salesforce.com/docs/platform/lwc/guide/use-message-channel-subscribe.html).

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >	
    <aura:handler event="lightning:tabClosed" action="{! c.onTabClosed }"/> 
</aura:component>
```

```
({
    onTabClosed : function(component, event, helper) {
        var tabId = event.getParam('tabId');
        console.log("Tab closed: " + tabId);
    } 
})
```

```
import { LightningElement, wire } from "lwc";
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from "lightning/messageService";
import tabClosedChannel from "@salesforce/messageChannel/lightning__tabClosed";

export default class TabClosedExample extends LightningElement {
    subscription = null;
    @wire(MessageContext) messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                tabClosedChannel,
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
        console.log("Tab closed: ", message.tabId);
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

- lightning:tabClosed (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabclosed.htm)

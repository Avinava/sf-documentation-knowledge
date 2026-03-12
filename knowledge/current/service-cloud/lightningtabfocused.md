---
title: "lightning:tabFocused"
domain: service-cloud
topic: lightningtabfocused
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.411Z
estimatedTokens: 263
keywords: [lightning, tabFocused, tab, focused, lightning__tabFocused, Lightning, message, channel, corresponds, Aura, app, event, web, components, console, _tabFocused, LWC]
---

# lightning:tabFocused

> Indicates a tab was focused.

# lightning:tabFocused

Indicates a tab was focused.

lightning:tabFocused fires whenever a user selects a workspace tab or subtab, so console navigation users frequently trigger this application event in typical use. This event also fires when going from a tab to a navigation item, or going from a navigation item to a tab. Aura application events notify all listeners registered in the default phase, including listeners in background tabs. Multiple listeners responding at the same time can impact performance. To minimize performance impact, use a utility item as the only listener, or use a custom component event instead.

## Response

| Name | Type | Description |
| --- | --- | --- |
| previousTabId | string | The ID of the previously focused tab. |
| currentTabId | string | The ID of the currently focused tab. |

## Example

This example prints a line to the browser’s developer console when a tab is focused, and then returns that tab’s tabInfo object using the getTabInfo() method.

Component code:

```

```

Controller code:

```

```

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />	
    <aura:handler event="lightning:tabFocused" action="{! c.onTabFocused }"/> 
</aura:component>
```

```
({
    onTabFocused : function(component, event, helper) {
        console.log("Tab Focused");
        var focusedTabId = event.getParam('currentTabId');
        var workspaceAPI = component.find("workspace");        
        workspaceAPI.getTabInfo({
            tabId : focusedTabId
        }).then(function(response) {
            console.log(response);
        });
    }
})
```

```
import { LightningElement, track, wire } from "lwc";
import { MessageContext, subscribe, unsubscribe, APPLICATION_SCOPE } from "lightning/messageService";
import tabFocusedChannel from "@salesforce/messageChannel/lightning__tabFocused";

export default class TabFocusedExample extends LightningElement {
    subscription = null;
    @wire(MessageContext) messageContext;

    // Encapsulate logic for Lightning message service subscribe and unsubscribe
    subscribeToMessageChannel() {
        if (!this.subscription) {
            this.subscription = subscribe(
                this.messageContext,
                tabFocusedChannel,
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

- lightning:tabFocused (atlas.en-us.api_console.meta/api_console/sforce_api_console_events_tabfocused.htm)

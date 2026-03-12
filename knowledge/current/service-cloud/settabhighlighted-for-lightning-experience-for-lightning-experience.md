---
title: "setTabHighlighted() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: settabhighlighted-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.042Z
estimatedTokens: 488
keywords: [setTabHighlighted, Lightning, Experience, Highlights, tab, different, background, color, badge, don’t, persist, reloading, console, app, works]
---

# setTabHighlighted() for Lightning Experience for Lightning Experience

> Highlights the specified tab with a different background color and a badge. Tab
        highlights don’t persist after reloading a Lightning console app. This method works only in
   Lightning console apps.

# setTabHighlighted() for Lightning Experience for Lightning Experience

Highlights the specified tab with a different background color and a badge. Tab highlights don’t persist after reloading a Lightning console app. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | The ID of the tab to be highlighted. |
| highlighted | boolean | Whether the tab is highlighted. Makes a utility more prominent by giving it a different background color. |
| options | object | Optional. Additional options that modify the appearance of the highlighted tab. Available options are:pulse: If true, causes two colors to alternate in a smooth animation.state: Changes the tab color. Available types are success (), warning (), and error (). |

## LWC Sample Code

This component checks if it’s in a Lightning console app, returns information about the focused tab and highlights it in green.

```

```

This example is the [workspaceAPIHighlightTab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPIHighlightTab) component from the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, sets the focused tab as highlighted.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, returns a tabInfo object representing the modified tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import {
    IsConsoleNavigation,
    getFocusedTabInfo,
    setTabHighlighted
} from 'lightning/platformWorkspaceApi';

export default class WorkspaceAPIHighlightTab extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation;

    async highlightTab(event) {
        if (!this.isConsoleNavigation) {
            return;
        }
        const highlighted = event.detail.checked;
        const { tabId } = await getFocusedTabInfo();
        setTabHighlighted(tabId, highlighted, {
            pulse: true,
            state: 'success'
        });
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Set Focused Tab Highlighted" onclick="{! c.setFocusedTabHighlighted }" />
</aura:component>
```

```
({
    setFocusedTabHighlighted : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.setTabHighlighted({
                tabId: focusedTabId,
                highlighted: true,
                options: {
                    pulse: true,
                    state: "success"
         }
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

```
{
     tabId: string,
     url: string (URL),
     pinned: boolean,
     closeable: boolean,
     title: string,
     icon: string (SLDS iconKey),
     iconAlt: string,
     customTitle: string (optional),
     customIcon: string (optional),
     customIconAlt: string (optional),
     highlighted: boolean,
     pageReference: object,
     isSubtab: boolean,
     parentTabId: string,
     subtabs: [
         {
             tabId: string,
             url: string (URL),
             pinned: boolean,
             closeable: boolean,
             title: string,
             icon: string (SLDS iconKey),
             iconAlt: string,
             customTitle: string (optional),
             customIcon: string (optional),
             customIconAlt: string (optional),
             highlighted: boolean,
             pageReference: object,
             isSubtab: boolean,
             parentTabId: string,
             focused: boolean,
             recordId: string,
          },
           ... 
     ],
     focused: boolean,
     recordId: string
}
```

---
title: "closeTab() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: closetab-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.774Z
estimatedTokens: 442
keywords: [closeTab, Lightning, Experience, Closes, workspace, tab, subtab, works, console, apps, Arguments, LWC, Sample, Code, Aura]
---

# closeTab() for Lightning Experience for Lightning Experience

> Closes a workspace tab or subtab. This method works only in
   Lightning console apps.

# closeTab() for Lightning Experience for Lightning Experience

Closes a workspace tab or subtab. This method works only in Lightning console apps.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC).

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the workspace tab or subtab to close. |

## LWC Sample Code

This component checks if it’s in a Lightning console app using the isConsoleNavigation wire adapter. When the [getFocusedTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm "Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps.") resolves successfully, it returns the tabInfo object. The const { tabId } syntax destructures the tabInfo object and binds the tabInfo.tabId value on the tabId variable. closeTab() uses this tabId value to close the tab.

```

```

This example shows the [workspaceAPICloseTab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPICloseTab) component in the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, closes the currently focused tab.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that resolves to true if successful. The promise is rejected on error.

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo, closeTab } from 'lightning/platformWorkspaceApi';

export class WorkspaceAPICloseTab extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation;

    async closeTab() {
        if (!this.isConsoleNavigation) {
            return;
        }
        const { tabId } = await getFocusedTabInfo();
        await closeTab(tabId);
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
    <lightning:workspaceAPI aura:id="workspace"/>
    <lightning:button label="Close Focused Tab" onclick="{!c.closeFocusedTab}"/>
</aura:component>
```

```
({
    closeFocusedTab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
            workspaceAPI.closeTab({tabId: focusedTabId});
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

## Related Topics

- getFocusedTabInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm)

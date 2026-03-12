---
title: "getFocusedTabInfo() for Lightning Experience"
domain: service-cloud
topic: getfocusedtabinfo-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.856Z
estimatedTokens: 787
keywords: [getFocusedTabInfo, Lightning, Experience, focused, workspace, tab, subtab, works, console, apps, Arguments, LWC, Sample, Code, Aura]
---

# getFocusedTabInfo() for Lightning Experience

> Returns information about the focused workspace tab or subtab. This method works only in
        Lightning console apps.

# getFocusedTabInfo() for Lightning Experience

Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

To retrieve information about the workspace tab or the subtab that a component is rendered in, don’t use getFocusedTabInfo(). When lifecycle hooks such as renderedCallback() or connectedCallback() are invoked for the component, the tab enclosing that component isn’t guaranteed to be in focus, so getFocusedTabInfo() sometimes doesn’t return that tab’s information.

Instead, first use [getEnclosingTabId()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingTabId.htm "Returns the ID of the enclosing tab. This method isn’t supported for Lightning Web Components (LWC).") for Aura components or the [EnclosingTabId](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingTabId.htm "Returns the ID of the enclosing tab or subtab. This wire adapter is available for Lightning Web Components (LWC) only.") wire adaptor for LWC. Then call [getTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm "Returns information about the specified tab. This method works only in Lightning console apps.") and use the enclosing tab’s ID as the argument.

We recommend that you continue to use getFocusedTabInfo() with components in the utility bar, because the utility bar doesn’t have an enclosing tab ID.

## Arguments

None.

## LWC Sample Code

This component checks if it’s in a Lightning console app, using the IsConsoleNavigation wire adapter, and returns information about the focused tab or subtab. It uses the tabId and highlighted properties from the tabInfo return object to toggle highlighting on the tab.

```

```

For another example, see [closeTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_closeTab.htm "Closes a workspace tab or subtab. This method works only in Lightning console apps.").

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when clicked, closes the currently focused tab.

This is the component code. The lightning:workspaceAPI component provides access to Lightning console methods. When clicked, the lightning:button base component executes the closeFocusedTab action in the component’s client-side controller.

```

```

This is the client-side controller code. The closeFocusedTab action retrieves the tab ID of the tab in focus, and then closes the tab with that ID.

```

```

## Response

This method returns a promise that, upon success, resolves to a tabInfo object that represents the focused tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getFocusedTabInfo, setTabHighlighted } from 'lightning/platformWorkspaceApi';

export class FocusedTabInfoExample extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation;

    async handleFocusToggleHighlight() {
        if (!this.isConsoleNavigation) {
            return;
        }
        try {
            let { tabId, highlighted } = await getFocusedTabInfo();
            highlighted = highlighted ? false : true;
            setTabHighlighted(tabId, highlighted);
        } catch (error) {
            console.log(error);
        }
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Close Focused Tab" onclick="{! c.closeFocusedTab }" />
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

## Related Topics

- getEnclosingTabId() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingTabId.htm)
- EnclosingTabId (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingTabId.htm)
- getTabInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm)
- closeTab() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_closeTab.htm)

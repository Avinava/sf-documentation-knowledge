---
title: "setTabIcon() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: settabicon-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:56.049Z
estimatedTokens: 486
keywords: [setTabIcon, Lightning, Experience, icon, alternative, text, tab, works, console, apps, Arguments, LWC, Sample, Code, Aura]
---

# setTabIcon() for Lightning Experience for Lightning
            Experience

> Sets the icon and alternative text of the specified tab. This method works only in
   Lightning console apps.

# setTabIcon() for Lightning Experience for Lightning Experience

Sets the icon and alternative text of the specified tab. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | The ID of the tab for which to set the icon. |
| icon | string | An SLDS icon key in the format utility:iconName where utility is the icon category. See a full list of utility icons on the SLDS reference site. |
| iconAlt | string | Optional. Alternative text for the icon. |

## LWC Sample Code

This component has a function that sets an icon on a specified tab. It uses the tabId property from [getFocusedTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm "Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps.").

```

```

For another example that uses setTabIcon(), see the [workspaceAPISetTabIcon](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPISetTabIcon) component in the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, sets the icon of the focused tab to the SLDS “Approval” action icon.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to a tabInfo object representing the modified tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import {
    IsConsoleNavigation,
    getFocusedTabInfo,
    setTabIcon
} from 'lightning/platformWorkspaceApi';

export default class SetTabIconExample extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation;

    async setTabIcon() {
        if (!this.isConsoleNavigation) {
            return;
        }

        const { tabId } = await getFocusedTabInfo();
        setTabIcon(tabId, 'utility:einstein', {
            iconAlt: 'Account Insights'
        });
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Set Focused Tab Icon" onclick="{! c.setFocusedTabIcon }" />
 </aura:component>
```

```
({
    setFocusedTabIcon : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            var focusedTabId = response.tabId;
                workspaceAPI.setTabIcon({
                tabId: focusedTabId,
                icon: "action:approval",
                iconAlt: "Approval"
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

## Related Topics

- getFocusedTabInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm)

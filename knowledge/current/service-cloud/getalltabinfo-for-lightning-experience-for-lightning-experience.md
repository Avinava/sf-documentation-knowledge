---
title: "getAllTabInfo() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: getalltabinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.725Z
estimatedTokens: 312
keywords: [getAllTabInfo, Lightning, Experience, information, open, tabs., works, only, console, apps., Arguments, LWC, Sample, Code, Aura, Components, Response]
---

# getAllTabInfo() for Lightning Experience for Lightning Experience

> Returns information about all open tabs. This method works only in
   Lightning console apps.

# getAllTabInfo() for Lightning Experience for Lightning Experience

Returns information about all open tabs. This method works only in Lightning console apps.

## Arguments

None.

## LWC Sample Code

This component has a function that returns the information on all tabs.

```

```

For another example that uses getAllTabInfo(), see [focusTab()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_focusTab.htm "Focuses a workspace tab or subtab. This method works only in Lightning console apps.").

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, gets the info of all open tabs and prints the resulting tabInfo object.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an array of tabInfo objects. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, getAllTabInfo } from 'lightning/platformWorkspaceApi';

export class GetAllTabInfoExample extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation;

    async handleOpen() {
        if (!this.isConsoleNavigation) {
            return;
        }
        try {
            const tabInfo = await getAllTabInfo();
            //do something with tabInfo
        } catch (error) {
            console.log(error);
        }
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Get All Tab Info" onclick="{! c.handleGetAllTabInfo }" />
</aura:component>
```

```
({
    handleGetAllTabInfo : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getAllTabInfo().then(function(response) {
            console.log(response);
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

- focusTab() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_focusTab.htm)

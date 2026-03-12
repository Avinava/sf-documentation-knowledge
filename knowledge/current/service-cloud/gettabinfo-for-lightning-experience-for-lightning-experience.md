---
title: "getTabInfo() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: gettabinfo-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.870Z
estimatedTokens: 378
keywords: [getTabInfo, Lightning, Experience, tab, works, console, apps, Arguments, LWC, Sample, Code, Aura, Components]
---

# getTabInfo() for Lightning Experience for Lightning Experience

> Returns information about the specified tab. This method works only in
   Lightning console apps.

# getTabInfo() for Lightning Experience for Lightning Experience

Returns information about the specified tab. This method works only in Lightning console apps.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC).

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the tab for which to retrieve the information. |

## LWC Sample Code

This component has a function that returns the tab information.

```

```

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that, when pressed, opens a tab and uses the getTabInfo() method to print the new tab’s tabInfo to the developer console.

Component code:

```

```

Controller code:

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

The relative URL used in this example is a placeholder. To try this example yourself, use a relative URL with a record ID from your org.

## Response

This method returns a promise that, upon success, resolves to a tabInfo object representing the specified tab. A tabInfo object is a JSON array of information about a workspace tab, with nested arrays of information on each subtab. This is the structure of a tabInfo object.

```

```

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { EnclosingTabId, getTabInfo } from 'lightning/platformWorkspaceApi';

export default class ConsoleNavExample extends LightningElement {
    @wire(EnclosingTabId) enclosingTabId;
    handleClick() {
        if (this.enclosingTabId) {
            getTabInfo(this.enclosingTabId).then((tabInfo) => {
                // do something with it
            }).catch((error) => {
                console.log(error);
            });
        }
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Get Opened Tab Info" onclick="{! c.getOpenedTabInfo }" />
 </aura:component>
```

```
({
    getOpenedTabInfo : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            url: '/lightning/r/Account/001xx000003DI05AAG/view',
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabInfo({
                tabId: response
            }).then(function(response) {
                console.log(response);
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

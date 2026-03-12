---
title: "openTab() for Lightning Experience for Lightning
            Experience"
domain: service-cloud
topic: opentab-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.975Z
estimatedTokens: 824
keywords: [openTab, Lightning, Experience, Opens, new, workspace, tab, already, open, focused, Arguments, LWC, Sample, Code, Aura]
---

# openTab() for Lightning Experience for Lightning
            Experience

> Opens a new workspace tab. If the tab is already open, the tab is focused.

# openTab() for Lightning Experience for Lightning Experience

Opens a new workspace tab. If the tab is already open, the tab is focused.

## Arguments

The method provides the same argument for both Aura Components and Lightning Web Components (LWC). However, icon, iconAlt, and label are supported only for LWC.

| Name | Type | Description |
| --- | --- | --- |
| pageReference | object | Optional. Generates a unique URL to open. A page reference contains attributes that apply to all pages of that type. See the Aura pageReference types and LWC pageReference types. |
| recordId | ID | Optional. Specifies the record to open. |
| url | URL | Optional. The URL representing the content of the new workspace tab.The URL can be either relative or absolute. To use a third-party domain, add the site as a CSP Trusted Site. |
| focus | boolean | Optional. Specifies whether the new tab has focus. To display the tab immediately, set focus to true. To open the tab in the background, set focus to false. |
| overrideNavRules | boolean | Optional. Specifies whether the open tab respects existing navigation rules. This argument has no effect on records that have no navigation rules configured and URLs that do not point to a record. |
| icon | string | Optional. An SLDS icon key in the format action:canvas where action is the SLDS icon category. See a full list of icon categories and keys on the SLDS reference site. Available for LWC only. |
| iconAlt | string | Optional. Alternative text for the icon. Available for LWC only. |
| label | string | Optional. The text label for the icon. Available for LWC only. |

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

pageReference, recordId, and url are prioritized in that order. Providing an argument with a higher priority means the others are ignored.

## LWC Sample Code

This component has a function that opens a specified tab and applies focus on it.

```

```

For another example that uses openTab(), see the [workspaceAPIOpenTab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPIOpenTab) component in the [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc).

To make your component available for use in a Lightning console app, specify the lightning\_\_AppPage target in the [component’s configuration file](https://developer.salesforce.com/docs/platform/lwc/guide/use-config-for-console-app.html).

## Aura Components Sample Code

This component has a button that when pressed, opens a tab.

Component code:

```

```

Pass in a pageReference Controller code ([pageReference](https://developer.salesforce.com/docs/atlas.en-us.260.0.lightning.meta/lightning/components_navigation_page_definitions.htm "HTML (New Window)")) using the standard\_\_recordPage type:

```

```

Controller code (recordId):

```

```

Controller code (url):

```

```

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

The relative URL used in this example is a placeholder. To try this example yourself, use a relative URL with a record ID from your org.

## Response

This method returns a promise that, upon success, resolves to the tabId of the new tab.

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { IsConsoleNavigation, openTab } from 'lightning/platformWorkspaceApi';

export default class OpenTabExample extends LightningElement {
    @wire(IsConsoleNavigation) isConsoleNavigation;

    async openTab() {
        if (!this.isConsoleNavigation) {
            return;
        }
        await openTab({
            pageReference: {
                type: 'standard__objectPage',
                attributes: {
                    objectApiName: 'Account',
                    actionName: 'home'
                }
            },
            icon: 'utility:bookmark',
            focus: true,
            label: 'Account List'
        });
    }
}
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
        <lightning:workspaceAPI aura:id="workspace"/>
        <lightning:button label="Open Tab" onclick="{!c.handleOpenTab}"/>
</aura:component>
```

```
({
    handleOpenTab: function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            pageReference: {
                "type": "standard__recordPage",
                "attributes": {
                    "recordId":"500xx000000Ykt2AAC",
                    "actionName":"view"
                },
                "state": {}
            },
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabInfo({
                tabId: response
        }).then(function(tabInfo) {
            console.log("The recordId for this tab is: " + tabInfo.recordId);
        });
        }).catch(function(error) {
            console.log(error);
        });
    }
)}
```

```
({
    handleOpenTab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            recordId: '001xx000003DIkeAAG',
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabInfo({
                  tabId: response
            }).then(function(tabInfo) {
            console.log("The url for this tab is: " + tabInfo.url);
            });
        })
        .catch(function(error) {
               console.log(error);
        });
    }
})
```

```
({
    handleOpenTab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.openTab({
            url: '/lightning/r/Account/001xx000003DI05AAG/view',
            focus: true
        }).then(function(response) {
            workspaceAPI.getTabInfo({
                tabId: response
            }).then(function(tabInfo) {
            console.log("The recordId for this tab is: " + tabInfo.recordId);
            });
        }).catch(function(error) {
                console.log(error);
        });
    }
})
```

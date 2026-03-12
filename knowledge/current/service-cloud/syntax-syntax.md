---
title: "Syntax Syntax"
domain: service-cloud
topic: syntax-syntax
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T05:14:57.603Z
estimatedTokens: 1117
keywords: [Syntax, Lightning, Console, JavaScript, API, file, web, component, controller, Aura, component., LWC, Example, Components, Guidelines]
---

# Syntax Syntax

> Use Lightning Console JavaScript API methods in the JavaScript file of a Lightning
        web component or in the JavaScript controller of an Aura component.

# Syntax Syntax

Use Lightning Console JavaScript API methods in the JavaScript file of a Lightning web component or in the JavaScript controller of an Aura component.

## LWC Syntax

To use LWC Workspace API, import lightning/platformWorkspaceApi in your JavaScript code.

The lightning/platformWorkspaceApi module gives you access to workspace API methods, wire adapters, and Lightning message channels. [Access Lightning message channels](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_intro.htm "Subscribe to Aura application events using their corresponding Lightning message channels.") by importing from @salesforce/messageChannel/lightning\_\_tab\*. For example, @salesforce/messageChannel/lightning\_\_tabClosed.

The following example shows a Lightning web component that uses the [openSubtab API method](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_openSubtab.htm "Opens a subtab within a workspace tab. If the subtab is already open, the subtab is focused. This method works only in Lightning console apps.") and [EnclosingTabId wire adapter](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingTabId.htm "Returns the ID of the enclosing tab. This method isn’t supported for Lightning Web Components (LWC).").

```

```

Configure the component’s .js-meta.xml file so the component can be accessed in the Lightning App Builder.

```

```

LWC supports Workspace API methods only. Similar to the Aura counterpart, methods in the Workspace API take a JSON object as an argument. The values included in the object depend on the method. For example, openTab takes an object that includes the url and focus (whether the new tab has focus). Check the reference section of this guide before using a method so that you know which arguments to pass to it.

## Example

The [lwc-recipes repo](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc) contains many LWC Workspace API examples. Look for components that start with workspaceApi, for example, [workspaceAPICloseTab](https://github.com/trailheadapps/lwc-recipes/tree/main/force-app/main/default/lwc/workspaceAPICloseTab)

## Aura Components Syntax

To use the Lightning Console JavaScript API, include lightning:navigationItemAPI, lightning:workspaceAPI, or lightning:utilityBarAPI in your Aura component.

The lightning:navigationItemAPI, lightning:workspaceAPI, and lightning:utilityBarAPI components give you access to their coordinating APIs. Give each component an aura:id so that you can reference it from the component’s controller.

The following example shows a simple Aura component that uses the API libraries:

```

```

This component implements flexipage:availableForAllPageTypes so that it can be accessed in the Lightning App Builder.

The component’s JavaScript controller looks like this.

```

```

The controller has three functions, each of which uses an API method. To use a method in a controller, use component.find with the aura:id you gave to the lightning:navigationItemAPI, lightning:workspaceAPI, or lightning:utilityBarAPI.

Methods in the Workspace API and the Utility Bar API take a JSON object as an argument. The values included in the object depend on the method. openTab, for example, takes an object that includes the url and focus (whether the new tab has focus). Check the reference section of this guide before using a method so that you know which arguments to pass to it.

## LWC VS Aura Guidelines

When working with the Lightning Console JavaScript API, consider these guidelines.

-   In LWC, required parameters are explicitly passed to the method like focusTab(tabId);. In Aura, required parameters are passed to the method in an object like workspaceAPI.focusTab({tabId : response});.
-   In LWC, pass in a URL that matches a Lightning Experience page, for example, /lightning/r/Account/001R0000003HgssIAC/view

-   **[JavaScript Promises](atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_promises.htm)**
    Methods in the Lightning Console JavaScript API return results using promises.
-   **[Error Handling with Promises](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_error_handling_promises.htm)**
    Promises can simplify code that handles the success or failure of asynchronous calls. To use error handling with promises, use the catch() method on the promise that is returned from calling an API method.

## Code Examples

```
import { LightningElement, wire } from 'lwc';
import { EnclosingTabId, openSubtab } from 'lightning/platformWorkspaceApi';

export default class MyComponent extends LightningElement {
  @wire(EnclosingTabId) tabId;

  handleClick() {
    if (!this.tabId) {
      return;
    }
    // Open a record as a subtab of the current tab
    openSubtab(this.tabId, { recordId: 'YourRecordId', focus: true });
  }
}
```

```
<?xml version="1.0" encoding="UTF-8"?>
<LightningComponentBundle xmlns="http://soap.sforce.com/2006/04/metadata">
  <apiVersion>59.0</apiVersion>
  <isExposed>true</isExposed>
  <targets>
      <target>lightning__RecordPage</target>
      <target>lightning__AppPage</target>
      <target>lightning__HomePage</target>
  </targets>
</LightningComponentBundle>
```

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
    <lightning:navigationItemAPI aura:id="navigationItem" />
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:utilityBarAPI aura:id="utilityBar" />
    <lightning:button label="Focus Navigation Item" onclick="{!c.focusNavigationItem }" />
    <lightning:button label="Open Utility" onclick="{!c.openUtilityBar }"/>
    <lightning:button label="Open Tab" onclick="{!c.openTab }" />
</aura:component>
```

```
({
    openUtilityBar : function(component, event, helper) {
        var utilityAPI = component.find("utilitybar");
        utilityAPI.openUtility();
    },

    openTab: function(component, event, helper) {
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
    },

    focusNavigationItem : function(component, event, helper) {
        var navigationItemAPI = component.find("navigationItem");
        navigationItemAPI.focusNavigationItem().then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    } 
})
```

## Related Topics

- Access Lightning message
                    channels (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_intro.htm)
- openSubtab API method (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_openSubtab.htm)
- EnclosingTabId wire adapter (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getEnclosingTabId.htm)
- JavaScript Promises (atlas.en-us.api_console.meta/api_console/sforce_api_console_js_lightning_promises.htm)
- Error Handling with Promises (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_error_handling_promises.htm)

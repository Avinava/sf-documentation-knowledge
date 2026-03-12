---
title: "isSubtab() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: issubtab-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.809Z
estimatedTokens: 221
keywords: [isSubtab, Lightning, Experience, Checks, whether, tab, subtab., works, only, console, apps., isn’t, supported, Web, Components, LWC, Arguments, Aura, Sample, Code]
---

# isSubtab() for Lightning Experience for Lightning Experience

> Checks whether a tab is a subtab. This method works only in
   Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

# isSubtab() for Lightning Experience for Lightning Experience

Checks whether a tab is a subtab. This method works only in Lightning console apps. This method isn’t supported for Lightning Web Components (LWC).

To check whether a tab is a subtab in LWC, use [getTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm "Returns information about the specified tab. This method works only in Lightning console apps.").

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| tabId | string | ID of the tab. |

## Aura Components Sample Code

This component has a button that checks whether the focused tab is a subtab and opens a modal with the answer.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true if the tab is a subtab, and false otherwise.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Is the Focused Tab a Subtab?" onclick="{! c.isFocusedTabSubtab }" />
 </aura:component>
```

```
({
    isFocusedTabSubtab : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getFocusedTabInfo().then(function(response) {
            workspaceAPI.isSubtab({
                tabId: response.tabId
            }).then(function(response) {
                if (response) {
                    confirm("This tab is a subtab.");
                }
                else {
                    confirm("This tab is not a subtab.");
                }
            });
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

## Related Topics

- getTabInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm)

---
title: "getEnclosingTabId() for Lightning
        Experience"
domain: service-cloud
topic: getenclosingtabid-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.752Z
estimatedTokens: 507
keywords: [getEnclosingTabId, Lightning, Experience, enclosing, tab., isn’t, supported, Web, Components, LWC, Tip, Arguments, Aura, Sample, Code, Response]
---

# getEnclosingTabId() for Lightning
        Experience

> Returns the ID of the enclosing tab. This method isn’t supported for Lightning Web
        Components (LWC).

# getEnclosingTabId() for Lightning Experience

Returns the ID of the enclosing tab. This method isn’t supported for Lightning Web Components (LWC).

To retrieve the enclosing tab ID with LWC, see [EnclosingTabId context wire adapter](atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingTabId.htm "Returns the ID of the enclosing tab or subtab. This wire adapter is available for Lightning Web Components (LWC) only.").

![Tip](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_tip.png&folder=api_console)

#### Tip

To retrieve information about the tab or the subtab that a component is rendered in, first use getEnclosingTabId() instead of [getFocusedTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm "Returns information about the focused workspace tab or subtab. This method works only in Lightning console apps."). Then call [getTabInfo()](atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm "Returns information about the specified tab. This method works only in Lightning console apps.") and use the enclosing tab’s ID as the argument. By using getEnclosingTabId(), you make sure that the correct tab ID is returned when you work with lifecycle hooks such as renderedCallback() or connectedCallback().

## Arguments

None.

## Aura Components Sample Code

This component has a button that, when clicked, retrieves the enclosing tab ID.

This is the component code. The lightning:workspaceAPI component provides access to Lightning console methods. When clicked, the lightning:button base component executes the handleGetEnclosingTabId action in the component’s client-side controller.

```

```

This is the controller code. The handleGetEnclosingTabId action returns the ID of the enclosing workspace tab.

```

```

## Response

This method returns a promise that, upon success, resolves to the tabId of the enclosing tab, if within a tab. If not within a tab, the method resolves to false upon success.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global" >
    <lightning:workspaceAPI aura:id="workspace" />
    <lightning:button label="Get Enclosing Tab Id" onclick="{! c.handleGetEnclosingTabId }" />
</aura:component>
```

```
({
    handleGetEnclosingTabId : function(component, event, helper) {
        var workspaceAPI = component.find("workspace");
        workspaceAPI.getEnclosingTabId().then(function(tabId) {
            console.log(tabId);
       })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

## Related Topics

- EnclosingTabId context wire
                    adapter (atlas.en-us.api_console.meta/api_console/sforce_api_console_lwc_enclosingTabId.htm)
- getFocusedTabInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getFocusedTabInfo.htm)
- getTabInfo() (atlas.en-us.api_console.meta/api_console/sforce_api_console_lightning_getTabInfo.htm)

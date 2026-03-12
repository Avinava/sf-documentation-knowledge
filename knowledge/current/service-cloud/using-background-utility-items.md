---
title: "Using Background Utility Items"
domain: service-cloud
topic: using-background-utility-items
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:55.677Z
estimatedTokens: 391
keywords: [Background, Utility, Items, Implement, lightning, backgroundUtilityItem, component, fires, responds, events, rendering, bar]
---

# Using Background Utility Items

> Implement the lightning:backgroundUtilityItem
        interface to create a component that fires and responds to events without rendering in the
        utility bar.

# Using Background Utility Items

Implement the lightning:backgroundUtilityItem interface to create a component that fires and responds to events without rendering in the utility bar.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_console)

#### Note

Lightning Web Components (LWC) doesn’t currently support working with background utility items.

This component implements lightning:backgroundUtilityItem and listens for lightning:tabCreated events when the app loads. The component prevents more than 5 tabs from opening.

```

```

When a tab is created, the event handler calls onTabCreated in the component’s controller and checks how many tabs are open. If the number of tabs is more than 5, the leftmost tab automatically closes.

```

```

Background utility items are added to an app the same way normal utility items are, but they don’t appear in the utility bar. The ![Icon representing hidden status](/docs/resources/img/en-us/260.0?doc_id=dev_guides%2Fapi_console%2Fimages%2FhideIcon.png&folder=api_console) icon appears next to background utility items on the utility item list. If you have only background utility items in your utility bar, the utility bar doesn’t appear in your app. You need at least one non-background utility item in your utility bar for it to appear.

#### See Also

-   [*Salesforce Help*: Add a Utility Bar to Lightning Apps](https://help.salesforce.com/articleView?id=apps_lightning_utilities.htm&language=en_US "Salesforce Help: Add a Utility Bar to Lightning Apps  - HTML (New Window)")

## Code Examples

```
<aura:component implements="lightning:backgroundUtilityItem">
    <aura:attribute name="limit" default="5" type="Integer" />
    <aura:handler event="lightning:tabCreated" action="{!c.onTabCreated}" />
    <lightning:workspaceAPI aura:id="workspace" />
</aura:component>
```

```
({
    onTabCreated: function(cmp) {
        var workspace = cmp.find("workspace");
        var limit = cmp.get("v.limit");
        workspace.getAllTabInfo().then(function (tabInfo) {
            if (tabInfo.length > limit) {
                workspace.closeTab({
                    tabId: tabInfo[0].tabId
                });
            }
        });
    }
})
```

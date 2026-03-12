---
title: "refreshNavigationItem() for Lightning Experience for
            Lightning Experience"
domain: service-cloud
topic: refreshnavigationitem-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.893Z
estimatedTokens: 234
keywords: [refreshNavigationItem, Lightning, Experience, Refreshes, selected, navigation, object's, home, page., Typically, standard, custom, objects, open, list, view., split, view, it's, refreshed.]
---

# refreshNavigationItem() for Lightning Experience for
            Lightning Experience

> Refreshes the selected navigation object's home page. Typically, standard and custom
        objects open the object's list view. If split view is open, it's refreshed. This method
        works only in Lightning console apps.

# refreshNavigationItem() for Lightning Experience for Lightning Experience

Refreshes the selected navigation object's home page. Typically, standard and custom objects open the object's list view. If split view is open, it's refreshed. This method works only in Lightning console apps.

This method refreshes in the background. If the list view has unsaved changes, the method returns false and doesn’t refresh the navigation item. The method doesn’t set focus on the navigation tab.

The following navigation items aren’t supported:

-   Custom Visualforce tabs
-   Custom Aura component tabs
-   Custom web tabs
-   Dashboards
-   Reports

## Arguments

None

## Sample Code

This Aura component has a button that, when pressed, refreshes the navigation item.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true. The promise is rejected on error.

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
    <lightning:navigationItemAPI aura:id="navigationItemAPI"/>
    <lightning:button label="Refresh navigation item" onclick="{!c.refreshNavigationItem}"/>
</aura:component>
```

```
({
    refreshNavigationItem : function(component, event, helper) {
        var navigationItemAPI = component.find("navigationItemAPI");
        navigationItemAPI.refreshNavigationItem().then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

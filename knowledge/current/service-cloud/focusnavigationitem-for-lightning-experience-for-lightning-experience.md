---
title: "focusNavigationItem() for Lightning Experience for
      Lightning Experience"
domain: service-cloud
topic: focusnavigationitem-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.807Z
estimatedTokens: 259
keywords: [focusNavigationItem, Lightning, Experience, Focuses, selected, navigation, opens, object's, home, Typically, standard, custom, objects, open, view]
---

# focusNavigationItem() for Lightning Experience for
      Lightning Experience

> Focuses on the selected navigation object and opens the object's home page. Typically,
    standard and custom objects open the object's list view. If split view is open, focus remains on
    the selected navigation object. This method works only in Lightning console apps.

# focusNavigationItem() for Lightning Experience for Lightning Experience

Focuses on the selected navigation object and opens the object's home page. Typically, standard and custom objects open the object's list view. If split view is open, focus remains on the selected navigation object. This method works only in Lightning console apps.

Keep these things in mind when working with this method.

-   If a tab is already open for the navigation item, the focus is set on the tab.
-   If split view is open, the focus is set on the navigation tab.
-   If split view is collapsed, the navigation item’s tab is opened and focus is set on the tab.

## Arguments

None

## Sample Code

This component has a button that, when pressed, focuses on the navigation item and opens the navigation item’s home page. For most objects, the home page is the object’s list view.

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
    <lightning:button label="Focus navigation item" onclick="{!c.focusNavigationItem}"/>
</aura:component>
```

```
({
    focusNavigationItem : function(component, event, helper) {
        var navigationItemAPI = component.find("navigationItemAPI");
        navigationItemAPI.focusNavigationItem().then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

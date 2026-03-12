---
title: "setSelectedNavigationItem() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: setselectednavigationitem-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.951Z
estimatedTokens: 143
keywords: [setSelectedNavigationItem, Lightning, Experience, selected, navigation, item, specific, ID., works, only, console, apps., Arguments, Sample, Code, Response]
---

# setSelectedNavigationItem() for Lightning Experience for Lightning Experience

> Sets the selected navigation item to a specific ID. This method works only in
   Lightning console apps.

# setSelectedNavigationItem() for Lightning Experience for Lightning Experience

Sets the selected navigation item to a specific ID. This method works only in Lightning console apps.

## Arguments

| Name | Type | Description |
| --- | --- | --- |
| developerName | string | The ID of the navigation item. |

## Sample Code

This Aura component has a button that, when pressed, sets the specified ID as the selected navigation item.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to true.

## Code Examples

```
<aura:component implements="flexipage:availableForAllPageTypes" description="My Lightning Component">
    <lightning:navigationItemAPI aura:id="navigationItemAPI" />
    <lightning:button label="Set Navigation Item" onclick="{! c.setSelectedNavigationItem }" />
</aura:component>
```

```
({
    setSelectedNavigationItem : function(component, event, helper) {
        var navigationItemAPI = component.find("navigationItemAPI");
        navigationItemAPI.setSelectedNavigationItem({
            "developerName": "standard-Account"
       }).then(function(response) {
            console.log(response);
        })
        .catch(function(error) {
            console.log(error);
        });
    }
})
```

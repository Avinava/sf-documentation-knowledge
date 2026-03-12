---
title: "getSelectedNavigationItem() for Lightning Experience for Lightning Experience"
domain: service-cloud
topic: getselectednavigationitem-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T05:14:57.771Z
estimatedTokens: 310
keywords: [getSelectedNavigationItem, Lightning, Experience, information, selected, navigation, item., works, only, console, apps., Arguments, Sample, Code, Response]
---

# getSelectedNavigationItem() for Lightning Experience for Lightning Experience

> Returns information about the selected navigation item. This method works only in
    Lightning console apps.

# getSelectedNavigationItem() for Lightning Experience for Lightning Experience

Returns information about the selected navigation item. This method works only in Lightning console apps.

## Arguments

None

## Sample Code

This component has a button that, when pressed, returns information about the selected navigation item.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to a navigationItemInfo object. The promise is rejected on error.

The navigationItemInfo object has the following fields.

| Name | Type | Description |
| --- | --- | --- |
| label | string | The navigation item’s label, such as Account or Case. |
| developerName | string | The navigation item’s developer name that uniquely identifies the item. For example, Salesforce_Account or Your_VF_Page_Name. |
| selected | boolean | True if the tab is currently selected, false otherwise. |
| pageReference | object | The representation of the current page. The object returns information such as: page type (for example standard__objectPage or standard__navItemPage), object API name, and state information for the page. |

Here’s the structure of a navigationItemInfo object.

```

```

## Code Examples

```apex
<aura:component implements="flexipage:availableForAllPageTypes" access="global">
    <lightning:navigationItemAPI aura:id="navigationItemAPI"/>
    <lightning:button label="Get selected navigation item" onclick="{!c.getSelectedNavigationItem}"/>
</aura:component>
```

```
({
    getSelectedNavigationItem : function(component, event, helper) {
        var navigationItemAPI = component.find("navigationItemAPI");
        navigationItemAPI.getSelectedNavigationItem().then(function(response) {
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
      developerName : string,
      label : string,
      pageReference: object,
      selected : boolean
}
```

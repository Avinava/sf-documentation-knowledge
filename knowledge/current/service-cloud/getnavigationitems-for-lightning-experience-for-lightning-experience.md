---
title: "getNavigationItems() for Lightning Experience for
      Lightning Experience"
domain: service-cloud
topic: getnavigationitems-for-lightning-experience-for-lightning-experience
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:55.860Z
estimatedTokens: 316
keywords: [getNavigationItems, Lightning, Experience, items, navigation, menu, works, console, apps, Arguments, Sample, Code]
---

# getNavigationItems() for Lightning Experience for
      Lightning Experience

> Returns information about all the items in the navigation menu. This method works only
    in Lightning console apps.

# getNavigationItems() for Lightning Experience for Lightning Experience

Returns information about all the items in the navigation menu. This method works only in Lightning console apps.

## Arguments

None

## Sample Code

This component has a button that, when pressed, returns information about the navigation items in a console app.

Component code:

```

```

Controller code:

```

```

## Response

This method returns a promise that, upon success, resolves to an array of navigationItemInfo objects. The promise is rejected on error.

The navigationItemInfo object contains the following fields.

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
    <lightning:button label="Get navigation item" onclick="{!c.getNavigationItems}"/>
</aura:component>
```

```
({
    getNavigationItems : function(component, event, helper) {
        var navigationItemAPI = component.find("navigationItemAPI");
        navigationItemAPI.getNavigationItems().then(function(response) {
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

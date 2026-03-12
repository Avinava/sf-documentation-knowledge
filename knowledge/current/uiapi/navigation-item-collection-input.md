---
title: "Navigation Item Collection Input"
domain: uiapi
topic: navigation-item-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.229Z
estimatedTokens: 181
keywords: [Navigation, Item, Collection, Input, items, tabs, app, Pass, user’s, personalized]
---

# Navigation Item Collection Input

> A collection of all the navigation items (tabs) for an app. Pass
      this request body to get or update a user’s personalized navigation items.

# Navigation Item Collection Input

A collection of all the navigation items (tabs) for an app. Pass this request body to get or update a user’s personalized navigation items.

JSON Example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| navItems | Navigation Item Input[] | The list of navigation items in the order that you want them to appear in the app. | Required | 47.0 |

#### See Also

-   [Update Personalized Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_update_nav_items.htm "Updates the order of a user’s personalized navigation items (tabs) and adds a navigation item to the list in the order specified.")

## Code Examples

```
{
  "navItems": [{
    "id": "0QkRM00000058lN0AQ"
  }, {
    "id": "0QkRM00000058lR0AQ",
    "label": "My Top Account"
  }, {
    "pageReference": {
      "type": "standard__objectPage",
      "attributes": {
        "objectApiName": "Dashboard",
        "actionName": "home"
      },
      "state": {}
    }
  }]
}
```

## Related Topics

- Navigation Item Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_navigation_item_input.htm)
- Update Personalized Navigation Items (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_update_nav_items.htm)

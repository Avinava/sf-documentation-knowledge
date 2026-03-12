---
title: "Navigation Item Input"
domain: uiapi
topic: navigation-item-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.233Z
estimatedTokens: 263
keywords: [Navigation, Item, Input, items, order, want, appear, app]
---

# Navigation Item Input

> Represents the list of navigation items in the order that you want
      them to appear in the app.

# Navigation Item Input

Represents the list of navigation items in the order that you want them to appear in the app.

Example

```

```

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID of the navigation item to include. | Required | 47.0 |
| label | String | The updated label for the navigation item in list views and records only. | Optional | 47.0 |
| pageReference | Page Reference Input | The page reference of the navigation item to add to the list. You can add one page reference per request. | Optional | 47.0 |

#### See Also

-   [Get Personalized Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_user_nav_items.htm "Get a user’s personalized navigation items (tabs).")

-   [Update Personalized Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_update_nav_items.htm "Updates the order of a user’s personalized navigation items (tabs) and adds a navigation item to the list in the order specified.")

## Code Examples

```
PUT /services/data/v66.0/ui-api/apps/06mRM000000U6pOYAS/user-nav-items
```

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

- Page Reference Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_page_reference_input.htm)
- Get Personalized Navigation Items (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_user_nav_items.htm)
- Update Personalized Navigation Items (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_apps_update_nav_items.htm)

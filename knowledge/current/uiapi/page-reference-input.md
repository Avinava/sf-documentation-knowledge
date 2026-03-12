---
title: "Page Reference Input"
domain: uiapi
topic: page-reference-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.241Z
estimatedTokens: 299
keywords: [Input, add, navigation, item, include, pageReference, JSON, item’s, attributes, state]
---

# Page Reference Input

> To add a navigation item, include a pageReference. A pageReference is a JSON
      object that describes the navigation item’s page type, its attributes, and the state of the
      page.

# Page Reference Input

To add a navigation item, include a pageReference. A pageReference is a JSON object that describes the navigation item’s page type, its attributes, and the state of the page.

Example

```

```

The request body contains the list of navigation items in the order they should appear. To add a navigation item, include a pageReference describing the item.

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| type | String | The page reference type generates a unique URL format and defines attributes that apply to all pages of that type. See PageReference Types. | Required | 47.0 |
| attributes | Map<String, Object> | Map of values for each attribute specified by the page definition, for example, objectAPIName or actionName. | Required | 47.0 |
| state | Map<String, Object> | Map of conditional values that customize content on the page, such as filterName. | Optional | 47.0 |

#### See Also

-   [Navigation Item Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_navigation_item_input.htm "Represents the list of navigation items in the order that you want them to appear in the app.")

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

- Navigation Item Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_navigation_item_input.htm)

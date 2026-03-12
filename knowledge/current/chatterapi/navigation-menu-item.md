---
title: "Navigation Menu Item"
domain: chatterapi
topic: navigation-menu-item
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:19.861Z
estimatedTokens: 566
keywords: [Navigation, Menu, Item]
---

# Navigation Menu Item

> Navigation menu item.

# Navigation Menu Item

Navigation menu item.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| actionType | String | Event, URL type, or modal navigation menu item. Values are:Event—Event-based navigation.NoteEvent is internal only and can’t be used in custom components.ExternalLink—URL outside of your Experience Cloud site.InternalLink—Relative URL inside your Experience Cloud site.Modal—Modal, such as Account Switcher. | Small, 49.0 | 49.0 |
| actionValue | String | For Event action type, the event fully qualified name for the navigation menu item. For ExternalLink and InternalLink action types, the route URL for the navigation menu item. For Modal action type, the component fully qualified name for the navigation menu item. | Small, 49.0 | 49.0 |
| imageUrl | String | URL to the image of the navigation menu item. | Small, 47.0 | 47.0 |
| label | String | Label for the navigation menu item. | Small, 47.0 | 47.0 |
| pageReference | Navigation Menu Page Reference | Page reference for the navigation menu item. Page reference is returned only for the Storefront Categories data source. | Small, 59.0 | 59.0 |
| subMenu | Navigation Menu Item[] | Submenu for the navigation menu item. | Small, 47.0 | 47.0 |
| target | String | Target for the navigation menu item. Values are:CurrentWindow—Navigation menu item opens in the current window.NewWindow—Navigation menu item opens in a new window. | Small, 47.0 | 47.0 |
| url | String | Route URL or event fully qualified name for the navigation menu item.In version 49.0 and later, this information is returned in actionValue. | Small, 47.0 | 47.0–48.0 |
| urlType | String | URL type or event of the navigation menu item. Values are:Event—Event based navigation.NoteEvent is internal only and can’t be used in custom components.ExternalLink—URL outside of your Experience Cloud site.InternalLink—Relative URL inside your Experience Cloud site.In version 49.0 and later, this information is returned in actionType. | Small, 47.0 | 47.0–48.0 |

#### See Also

-   [Navigation Menu Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_navigation_menu_item_collection.htm "Collection of navigation menu items.")

## Related Topics

- Navigation Menu Page Reference (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_navigation_menu_page_reference.htm)
- Navigation Menu Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_navigation_menu_item_collection.htm)

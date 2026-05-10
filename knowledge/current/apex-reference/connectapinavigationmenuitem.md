---
title: "ConnectApi.NavigationMenuItem"
domain: apex-reference
topic: connectapinavigationmenuitem
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-05-10T00:39:40.718Z
estimatedTokens: 417
keywords: [ConnectApi.NavigationMenuItem, Navigation, menu, item]
---

> Navigation menu item.

# ConnectApi.NavigationMenuItem

Navigation menu item.

| Property Name | Type | Description | Available Version |
| --- | --- | --- | --- |
| actionType | ConnectApi.​NavigationMenuItem​ActionType | Event, URL type, or modal navigation menu item. Values are:Event—Event-based navigation.NoteEvent is internal only and can’t be used in custom components.ExternalLink—URL outside of your Experience Cloud site.InternalLink—Relative URL inside your Experience Cloud site.Modal—Modal, such as Account Switcher. | 52.0 |
| actionValue | String | For Event action type, the event fully qualified name for the navigation menu item. For ExternalLink and InternalLink action types, the route URL for the navigation menu item. For Modal action type, the component fully qualified name for the navigation menu item. | 52.0 |
| imageUrl | String | URL to the image of the navigation menu item. | 52.0 |
| label | String | Label for the navigation menu item. | 52.0 |
| pageReference | ConnectApi.​NavigationMenuPage​Reference | Page reference for the navigation menu item. Page reference is returned only for the Storefront Categories data source. | 59.0 |
| subMenu | List<ConnectApi.​NavigationMenuItem> | Submenu for the navigation menu item. | 52.0 |
| target | ConnectApi.​NavigationMenuItem​OpenTarget | Target for the navigation menu item. Values are:CurrentWindow—Navigation menu item opens in the current window.NewWindow—Navigation menu item opens in a new window. | 52.0 |

#### See Also

-   [ConnectApi.NavigationMenuItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_navigation_menu_item_collection.htm "Collection of navigation menu items.")

## Related Topics

- ConnectApi.​NavigationMenuItem​ActionType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.​NavigationMenuPage​Reference (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_navigation_menu_page_reference.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.​NavigationMenuItem​OpenTarget (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.NavigationMenuItemCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_navigation_menu_item_collection.htm)

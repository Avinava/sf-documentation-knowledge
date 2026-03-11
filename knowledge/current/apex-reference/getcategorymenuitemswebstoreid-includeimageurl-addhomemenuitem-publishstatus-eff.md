---
title: "getCategoryMenuItems(webstoreId, includeImageUrl, addHomeMenuItem, publishStatus, effectiveAccountId, maxLevels, maxItems)"
domain: apex-reference
topic: getcategorymenuitemswebstoreid-includeimageurl-addhomemenuitem-publishstatus-eff
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-11T15:42:31.771Z
keywords: [getCategoryMenuItems, webstoreId, includeImageUrl, addHomeMenuItem, publishStatus, effectiveAccountId, maxLevels, maxItems, Retrieve, product, category, menu, items, given, parent, item, store., API, Version, Available]
---

# getCategoryMenuItems(webstoreId, includeImageUrl, addHomeMenuItem, publishStatus, effectiveAccountId, maxLevels, maxItems)

> Retrieve product category menu items for the given parent item and store.

### getCategoryMenuItems(webstoreId, includeImageUrl, addHomeMenuItem, publishStatus, effectiveAccountId, maxLevels, maxItems)

Retrieve product category menu items for the given parent item and store.

#### API Version

64.0

#### Available to Guest Users

64.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NavigationMenuItemCollection getCategoryMenuItems(String webstoreId, Boolean includeImageUrl, Boolean addHomeMenuItem, String publishStatus, String effectiveAccountId, Integer maxLevels, Integer maxItems)

#### Parameters

webstoreId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the webstore.

addHomeMenuItem

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates if a home menu item should be included. The default value is false.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the buyer account or guest buyer profile for which the request is made. If unspecified, the default value is determined from context.

includeImageUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Indicates if the image URL should be included for root items.

maxItems

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of category items to be retrieved.

maxLevels

Type: [Integer](atlas.en-us.apexref.meta/apexref/apex_methods_system_integer.htm#apex_methods_system_integer "Contains methods for the Integer primitive data type.")

Maximum number of hierarchical levels to be retrieved.

publishStatus

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Publish status of the storefront.

#### Return Value

Type: [ConnectApi.NavigationMenuItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_navigation_menu_item_collection.htm "Collection of navigation menu items.")
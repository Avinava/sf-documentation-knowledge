---
title: "NavigationMenu Class"
domain: apex-reference
topic: navigationmenu-class
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:19.194Z
estimatedTokens: 2374
namespace: ConnectApi
keywords: [NavigationMenu, navigation, menu, items, Experience, Cloud, site, getCommunityNavigationMenu, communityId, navigationLinkSetId, navigationLinkSetDeveloperName, publishStatus, includeImageUrl, addHomeMenuItem, menuItemTypesToSkip]
---

# NavigationMenu Class

> Get navigation menu items for an Experience Cloud
    site.

**Namespace:** `ConnectApi`

# NavigationMenu Class

Get navigation menu items for an Experience Cloud site.

## Namespace

[ConnectApi](atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm "The ConnectApi namespace (also called Connect in Apex) provides classes for accessing the same data available in Connect REST API. Use Connect in Apex to create custom experiences in Salesforce.")

## NavigationMenu Methods

These methods are for NavigationMenu. All methods are static.

-   **[getCommunityNavigationMenu(communityId, navigationLinkSetId, navigationLinkSetDeveloperName, publishStatus, includeImageUrl, addHomeMenuItem, menuItemTypesToSkip)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NavigationMenu_static_methods.htm#apex_ConnectAPI_NavigationMenu_getCommunityNavigationMenu_1)**
    Get navigation menu items for an Experience Cloud site.
-   **[getCommunityNavigationMenu(communityId, navigationLinkSetId, navigationLinkSetDeveloperName, publishStatus, includeImageUrl, addHomeMenuItem, menuItemTypesToSkip, effectiveAccountId)](atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NavigationMenu_static_methods.htm#apex_ConnectAPI_NavigationMenu_getCommunityNavigationMenu_2)**
    Get navigation menu items for an Experience Cloud based on an effective account.

### getCommunityNavigationMenu(communityId, navigationLinkSetId, navigationLinkSetDeveloperName, publishStatus, includeImageUrl, addHomeMenuItem, menuItemTypesToSkip)

Get navigation menu items for an Experience Cloud site.

#### API Version

52.0

#### Available to Guest Users

52.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NavigationMenuItemCollection getCommunityNavigationMenu(String communityId, String navigationLinkSetId, String navigationLinkSetDeveloperName, ConnectApi.PublishStatus publishStatus, Boolean includeImageUrl, Boolean addHomeMenuItem, List<ConnectApi.NavigationMenuItemType> menuItemTypesToSkip)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an Experience Cloud site.

navigationLinkSetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the navigation link set.

navigationLinkSetDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the navigation link set.

publishStatus

Type: [ConnectApi.PublishStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum)

Publish status of the navigation menu item. Values are:

-   Draft
-   Live

includeImageUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include the image URL with the menu item (true) or not (false).

addHomeMenuItem

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to add the Home menu item (true) or not (false).

menuItemTypesToSkip

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ConnectApi.NavigationMenuItemType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#navigationMenuItemTypeEnum)\>

List of menu item types to filter out of the results. Values are:

-   DataSourceDriven—Menu items dynamically added from a data source.
-   Event—Event, such as logging in, logging out, or switching accounts.
-   ExternalLink—URL outside of your site.
-   GlobalAction—Lets users create records that aren’t related to other records.
-   InternalLink—Relative URL inside your site.
-   MenuLabel—Menu label.
-   Modal—Modal, such as Account Switcher.
-   NavigationalTopic—Dropdown list with links to the navigational topics in your site.
-   SalesforceObject—Objects such as accounts, cases, contacts, and custom objects.
-   SystemLink—System link, such as a link to Builder, Workspaces, or Setup.

#### Return Value

Type: [ConnectApi.NavigationMenuItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_navigation_menu_item_collection.htm "Collection of navigation menu items.")

#### Usage

Supported navigation menu item types are:

-   DataSourceDriven—Menu items dynamically added from a data source.
-   Event—Event, such as logging in, logging out, or switching accounts.
-   ExternalLink—URL outside of your site.
-   GlobalAction—Lets users create records that aren’t related to other records.
-   InternalLink—Relative URL inside your site.
-   MenuLabel—Menu label.
-   Modal—Modal, such as Account Switcher.
-   NavigationalTopic—Dropdown list with links to the navigational topics in your site.
-   SalesforceObject—Objects such as accounts, cases, contacts, and custom objects.
-   SystemLink—System link, such as a link to Builder, Workspaces, or Setup.

### getCommunityNavigationMenu(communityId, navigationLinkSetId, navigationLinkSetDeveloperName, publishStatus, includeImageUrl, addHomeMenuItem, menuItemTypesToSkip, effectiveAccountId)

Get navigation menu items for an Experience Cloud based on an effective account.

#### API Version

54.0

#### Available to Guest Users

54.0

#### Requires Chatter

No

#### Signature

public static ConnectApi.NavigationMenuItemCollection getCommunityNavigationMenu(String communityId, String navigationLinkSetId, String navigationLinkSetDeveloperName, ConnectApi.PublishStatus publishStatus, Boolean includeImageUrl, Boolean addHomeMenuItem, List<ConnectApi.NavigationMenuItemType> menuItemTypesToSkip, String effectiveAccountId)

#### Parameters

communityId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of an Experience Cloud site.

navigationLinkSetId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the navigation link set.

navigationLinkSetDeveloperName

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

Developer name of the navigation link set.

publishStatus

Type: [ConnectApi.PublishStatus](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#PublishStatusEnum)

Publish status of the navigation menu item. Values are:

-   Draft
-   Live

includeImageUrl

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to include the image URL with the menu item (true) or not (false).

addHomeMenuItem

Type: [Boolean](atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm#apex_methods_system_boolean "Contains methods for the Boolean primitive data type.")

Specifies whether to add the Home menu item (true) or not (false).

menuItemTypesToSkip

Type: [List](atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm#apex_methods_system_list "Contains methods for the List collection type.")<[ConnectApi.NavigationMenuItemType](atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm#navigationMenuItemTypeEnum)\>

List of menu item types to filter out of the results. Values are:

-   DataSourceDriven—Menu items dynamically added from a data source.
-   Event—Event, such as logging in, logging out, or switching accounts.
-   ExternalLink—URL outside of your site.
-   GlobalAction—Lets users create records that aren’t related to other records.
-   InternalLink—Relative URL inside your site.
-   MenuLabel—Menu label.
-   Modal—Modal, such as Account Switcher.
-   NavigationalTopic—Dropdown list with links to the navigational topics in your site.
-   SalesforceObject—Objects such as accounts, cases, contacts, and custom objects.
-   SystemLink—System link, such as a link to Builder, Workspaces, or Setup.

effectiveAccountId

Type: [String](atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm#apex_methods_system_string "Contains methods for the String primitive data type.")

ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user.

#### Return Value

Type: [ConnectApi.NavigationMenuItemCollection](atlas.en-us.apexref.meta/apexref/apex_connectapi_output_navigation_menu_item_collection.htm "Collection of navigation menu items.")

#### Usage

Supported navigation menu item types are:

-   DataSourceDriven—Menu items dynamically added from a data source.
-   Event—Event, such as logging in, logging out, or switching accounts.
-   ExternalLink—URL outside of your site.
-   GlobalAction—Lets users create records that aren’t related to other records.
-   InternalLink—Relative URL inside your site.
-   MenuLabel—Menu label.
-   Modal—Modal, such as Account Switcher.
-   NavigationalTopic—Dropdown list with links to the navigational topics in your site.
-   SalesforceObject—Objects such as accounts, cases, contacts, and custom objects.
-   SystemLink—System link, such as a link to Builder, Workspaces, or Setup.

## Related Topics

- ConnectApi (atlas.en-us.apexref.meta/apexref/apex_classes_connect_api.htm)
- getCommunityNavigationMenu(communityId, navigationLinkSetId, navigationLinkSetDeveloperName, publishStatus, includeImageUrl, addHomeMenuItem, menuItemTypesToSkip) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NavigationMenu_static_methods.htm)
- getCommunityNavigationMenu(communityId, navigationLinkSetId, navigationLinkSetDeveloperName, publishStatus, includeImageUrl, addHomeMenuItem, menuItemTypesToSkip, effectiveAccountId) (atlas.en-us.apexref.meta/apexref/apex_ConnectAPI_NavigationMenu_static_methods.htm)
- String (atlas.en-us.apexref.meta/apexref/apex_methods_system_string.htm)
- ConnectApi.PublishStatus (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- Boolean (atlas.en-us.apexref.meta/apexref/apex_methods_system_boolean.htm)
- List (atlas.en-us.apexref.meta/apexref/apex_methods_system_list.htm)
- ConnectApi.NavigationMenuItemType (atlas.en-us.apexref.meta/apexref/connectAPI_enums.htm)
- ConnectApi.NavigationMenuItemCollection (atlas.en-us.apexref.meta/apexref/apex_connectapi_output_navigation_menu_item_collection.htm)

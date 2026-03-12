---
title: "Navigation Menu Items Resource"
domain: chatterapi
topic: navigation-menu-items-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:15.887Z
estimatedTokens: 667
keywords: [Navigation, Menu, Items, Resource, Experience, Cloud, site]
---

# Navigation Menu Items Resource

> Get navigation menu items for an Experience Cloud
    site.

# Navigation Menu Items Resource

Get navigation menu items for an Experience Cloud site.

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

Resource

```

```

Available version

47.0

HTTP methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| addHome​MenuItem | Boolean | Specifies whether to add the Home menu item (true) or not (false). | Optional | 47.0 |
| effectiveAccountId | String | ID of the account for which the request is made. If unspecified, defaults to the account ID for the context user. | Optional | 54.0 |
| includeImageUrl | Boolean | Specifies whether to include the image URL with the menu item (true) or not (false). | Optional | 47.0 |
| menuItemTypes​ToSkip | String[] | List of menu item types to filter out of the results. Values are:DataSourceDriven—Menu items dynamically added from a data source.Event—Event, such as logging in, logging out, or switching accounts.ExternalLink—URL outside of your site.GlobalAction—Lets users create records that aren’t related to other records.InternalLink—Relative URL inside your site.MenuLabel—Menu label.Modal—Modal, such as Account Switcher.NavigationalTopic—Dropdown list with links to the navigational topics in your site.SalesforceObject—Objects such as accounts, cases, contacts, and custom objects.SystemLink—System link, such as a link to Builder, Workspaces, or Setup. | Optional | 47.0 |
| navigationLinkSet​DeveloperName | String | Developer name of the navigation link set. Provide either navigationLinkSetIdDeveloperName or navigationLinkSetId. | Optional | 49.0 |
| navigation​LinkSetId | String | ID of the navigation link set. | Optional | 47.0 |
| publishStatus | String | Publish status of the navigation menu item. Values are:DraftLive | Optional | 47.0 |

Response body for GET

[Navigation Menu Item Collection](atlas.en-us.chatterapi.meta/chatterapi/connect_responses_navigation_menu_item_collection.htm "Collection of navigation menu items.")

## Code Examples

```
/connect/communities/communityId/navigation-menu/navigation-menu-items
```

## Related Topics

- Navigation Menu Item Collection (atlas.en-us.chatterapi.meta/chatterapi/connect_responses_navigation_menu_item_collection.htm)

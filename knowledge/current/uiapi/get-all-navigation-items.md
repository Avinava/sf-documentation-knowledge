---
title: "Get All Navigation Items"
domain: uiapi
topic: get-all-navigation-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.295Z
estimatedTokens: 336
keywords: [Navigation, Items, tabs, user, access]
---

# Get All Navigation Items

> Gets all navigation items (tabs) that the user has access
    to.

# Get All Navigation Items

Gets all navigation items (tabs) that the user has access to.

Resource

```

```

Available Version

45.0

HTTP Method

GET

Example

To get all navigation tabs for an app, make this request:

```

```

The request returns metadata for all navigation tabs associated with this app.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The response includes navigation items that support this form factor. One of these values:Large—Desktop display size.Medium—Tablet display size.Small—Phone display size. | Optional | 45.0 |
| navItemNames | String[] | A comma delimited list of TabDefinition name values to include in the response. | Optional | 49.0 |
| page | Int | The page offset form which to begin returning nav items. The default value is 0, which returns nav items from the first page. For example, for page=2 and pageSize=10, the first nav item returned is the 21st nav item in the list. | Optional | 45.0 |
| pageSize | Int | The maximum number of nav items to return on a page. The default value is 25. | Optional | 45.0 |

Response Body

[Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm "An ordered list of navigation items (tabs) for the current user.")

## Code Examples

```
/ui-api/nav-items
```

```
GET /services/data/v66.0/ui-api/nav-items?page=3&pageSize=2
```

```
{
  "currentPageUrl": "/services/data/v66.0/ui-api/nav-items?page=3&pageSize=2"
  "navItems": [{
    "availableInClassic": true,
    "availableInLightning": true,
    "color": "EF7EAD",
    "content": "home__desktopDefault",
    "custom": false,
    "developerName": "standard-home",
    "iconUrl": "https://yourInstance.salesforce.com/img/icon/t4v35/standard/home_120.png",
    "id": null,
    "itemType": "Standard",
    "label": "Home",
    "objectApiName": "Home",
    "pageReference": {
      "attributes": {
        "pageName": "home"
      },
      "state": {},
      "type": "standard__namedPage"
    },
    "standardType": "Home"
  }, {
    "availableInClassic": false,
    "availableInLightning": true,
    "color": "489DD0",
    "content": null,
    "custom": false,
    "developerName": "standard-Feed",
    "iconUrl": "https://yourInstance.salesforce.com/img/icon/t4v35/standard/feed_120.png",
    "id": null,
    "itemType": "Standard",
    "label": "Chatter",
    "objectApiName": "Feed",
    "pageReference": {
      "attributes": {
        "pageName": "chatter"
      },
      "state": {},
      "type": "standard__namedPage"
    },
    "standardType": "Feed"
  }],
  "nextPageUrl": "/services/data/v66.0/ui-api/nav-items?page=4&pageSize=2"
}
```

## Related Topics

- Navigation Items (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm)

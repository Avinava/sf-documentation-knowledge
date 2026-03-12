---
title: "Update Personalized Navigation Items"
domain: uiapi
topic: update-personalized-navigation-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.317Z
estimatedTokens: 284
keywords: [Personalized, Navigation, Items, Updates, order, user’s, tabs, adds, item]
---

# Update Personalized Navigation Items

> Updates the order of a user’s personalized navigation items (tabs)
      and adds a navigation item to the list in the order specified.

# Update Personalized Navigation Items

Updates the order of a user’s personalized navigation items (tabs) and adds a navigation item to the list in the order specified.

Resource

```

```

Available Version

47.0

HTTP Method

PUT

Example

To update the order that navigation items display in an app and add an item to the list, make this request using the app’s ID.

```

```

The request body contains the list of navigation items in the order they should appear. To add a navigation item, include a pageReference describing the item.

```

```

The request returns metadata for the navigation items associated with this app.

```

```

Request Body

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| navItems | Navigation Item Collection Input | A list of navigation items (tabs) in the updated order they should appear. The updated order persists across desktop and mobile environments. | Required | 47.0 |

Response Body

[Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm "An ordered list of navigation items (tabs) for the current user.")

## Code Examples

```
/ui-api/apps/{appId}/user-nav-items
```

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

```
{
  "currentPageUrl": "/services/data/v66.0/ui-api/apps/06mRM000000U6pOYAS/user-nav-items?formFactor=large",
  "navItems": [{
    "availableInClassic": true,
    "availableInLightning": true,
    "color": "2ECBBE",
    "content": "https://yourinstance.salesforce.com/00O/o",
    "custom": false,
    "developerName": "standard-report",
    "iconUrl": "https://yourinstance.salesforce.com/img/icon/t4v35/standard/report_120.png",
    "id": "0QkRM00000058lN0AQ",
    "itemType": "Entity",
    "label": "Cars",
    "objectApiName": "Car__c",
    "objectLabel": "Car",
    "objectLabelPlural": "Cars",
    "pageReference": {
      "attributes": {
        "objectApiName": "Car__c",
        "actionName": "home"
      },
      "state": {},
      "type": "standard__objectPage"
    },
    "standardType": null
  }, {
    "availableInClassic": false,
    "availableInLightning": true,
    "color": "7F8DE1",
    "content": "001RM000004QlpqYAC",
    "custom": true,
    "developerName": null,
    "iconUrl": "https://yourinstance.salesforce.com/img/icon/t4v35/standard/account_120.png",
    "id": "0QkRM00000058lR0AQ",
    "itemType": "Record",
    "label": "My Top Account",
    "objectApiName": "Account",
    "objectLabel": "Account",
    "objectLabelPlural": "Accounts",
    "pageReference": {
      "attributes": {
        "recordId": "001RM000004QlpqYAC",
        "objectApiName": "Account",
        "actionName": "view"
      },
      "state": {},
      "type": "standard__recordPage"
    },
    "standardType": null
  }, {
    "availableInClassic": true,
    "availableInLightning": true,
    "color": "EF6E64",
    "content": "https://yourinstance.salesforce.com/01Z/o",
    "custom": false,
    "developerName": "standard-Dashboard",
    "iconUrl": "https://yourinstance.salesforce.com/img/icon/t4v35/standard/dashboard_120.png",
    "id": "0QkRM00000058ll0AA",
    "itemType": "Standard",
    "label": "Dashboards",
    "objectApiName": "Dashboard",
    "objectLabel": "Dashboard",
    "objectLabelPlural": "Dashboards",
    "pageReference": {
      "attributes": {
        "objectApiName": "Dashboard",
        "actionName": "home"
      },
      "state": {},
      "type": "standard__objectPage"
    },
    "standardType": "Dashboards"
  }],
  "nextPageUrl": null
}
```

## Related Topics

- Navigation Item Collection Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_navigation_item_collection_input.htm)
- Navigation Items (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm)

---
title: "Get Personalized Navigation Items"
domain: uiapi
topic: get-personalized-navigation-items
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.321Z
estimatedTokens: 225
keywords: [Personalized, Navigation, Items, user’s, tabs]
---

# Get Personalized Navigation Items

> Get a user’s personalized navigation items (tabs).

# Get Personalized Navigation Items

Get a user’s personalized navigation items (tabs).

Resource

```

```

Available Version

43.0

HTTP Method

GET

Example

To get a user’s personalized navigation tabs for an app, make this request using the app ID:

```

```

The request returns metadata for the personalized navigation tabs associated with this app.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| formFactor | String | The form factor for each app that the user has access to.Large—App supports the desktop display size.Medium—App supports the tablet display size.Small—App supports the phone display size. | Optional | 43.0 |

Response Body

[Navigation Items](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm "An ordered list of navigation items (tabs) for the current user.")

## Code Examples

```
/ui-api/apps/${appId}/user-nav-items
```

```
GET /services/data/v66.0/ui-api/apps/06mRM000000AFIrYAO/user-nav-items
```

```
{
  "navItems" : [   {
    "availableInClassic" : true,
    "availableInLightning" : true,
    "color" : "50E3C2",
    "content" : "https://yourInstance.salesforce.com/0WO/o",
    "custom" : false,
    "developerName" : "standard-WorkOrder",
    "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/standard/work_order_120.png",
    "id" : "0QkR00000004CvtKAE",
    "itemType" : "Entity",
    "label" : "Work Orders",
    "objectApiName" : "WorkOrder",
    "pageReference" : {
      "attributes" : {
        "objectApiName" : "WorkOrder",
        "actionName" : "home"
      },
      "state" : { },
      "type" : "standard__objectPage"
    },
    "standardType" : null
  }, {
    "availableInClassic" : true,
    "availableInLightning" : true,
    "color" : "83B6FF",
    "content" : "https://yourInstance.salesforce.com/_ui/core/chatter/groups/GroupListPage",
    "custom" : false,
    "developerName" : "standard-CollaborationGroup",
    "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/standard/groups_120.png",
    "id" : "0QkR000000002R3KAI",
    "itemType" : "Standard",
    "label" : "Groups",
    "objectApiName" : "CollaborationGroup",
    "pageReference" : {
      "attributes" : {
        "objectApiName" : "CollaborationGroup",
        "actionName" : "home"
      },
      "state" : { },
      "type" : "standard__objectPage"
    },
    "standardType" : "Groups"
  }, {
    "availableInClassic" : true,
    "availableInLightning" : true,
    "color" : "2ECBBE",
    "content" : "https://yourInstance.salesforce.com/00O/o",
    "custom" : false,
    "developerName" : "standard-report",
    "iconUrl" : "https://yourInstance.salesforce.com/img/icon/t4v35/standard/report_120.png",
    "id" : "0QkR000000007UxKAI",
    "itemType" : "Standard",
    "label" : "Reports",
    "objectApiName" : "Report",
    "pageReference" : {
      "attributes" : {
        "objectApiName" : "Report",
        "actionName" : "home"
      },
      "state" : { },
      "type" : "standard__objectPage"
    },
    "standardType" : "Reports"
  } ]
}
```

## Related Topics

- Navigation Items (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_nav_items.htm)

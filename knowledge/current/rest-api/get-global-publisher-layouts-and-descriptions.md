---
title: "Get Global Publisher Layouts and Descriptions"
domain: rest-api
topic: get-global-publisher-layouts-and-descriptions
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:35.850Z
estimatedTokens: 132
keywords: [Publisher, Layouts, Descriptions, Retrieves, their, customize, actions, pages, Home, Lightning, Experience, populate, menu]
---

# Get Global Publisher Layouts and Descriptions

> Retrieves lists of global publisher layouts and their descriptions. Global publisher
    layouts customize the actions on global pages (like the Home page). In Lightning Experience,
    these layouts populate the Global Actions menu.

# Get Global Publisher Layouts and Descriptions

Retrieves lists of global publisher layouts and their descriptions. Global publisher layouts customize the actions on global pages (like the Home page). In Lightning Experience, these layouts populate the Global Actions menu.

## Syntax

URI

/services/data/vXX.X/sobjects/Global/describe/layouts/

Formats

JSON, XML

HTTP Method

GET

Authentication

Authorization: Bearer token

Parameters

None required

## Example

Example Request

```

```

Example Response Body

```

```

## Code Examples

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/sobjects/Global/describe/layouts/ -H "Authorization: Bearer token"
```

```
{
  "layouts": [
    {
      "buttonLayoutSection": null,
      "detailLayoutSections": [],
      "editLayoutSections": [],
      "feedView": null,
      "highlightsPanelLayoutSection": null,
      "id": "00hRO000000Mo6jYAC",
      "multirowEditLayoutSections": [],
      "offlineLinks": [],
      "quickActionList": {
        "quickActionListItems": [
          {
            "accessLevelRequired": null,
            "colors": [
              {
                "color": "65CAE4",
                "context": "primary",
                "theme": "theme4"
              }
            ],
            "iconUrl": null,
            "icons": [
              {
                "contentType": "image/svg+xml",
                "height": 0,
                "theme": "theme4",
                "url": "https://rockyroads.test1.my.pc-rnd.salesforce.com/img/icon/t4v35/action/share_post.svg",
                "width": 0
              },
               ...
            ],
            "label": "Post",
            "miniIconUrl": "",
            "quickActionName": "FeedItem.TextPost",
            "targetSobjectType": null,
            "type": "Post",
            "urls": {}
          },
          ...
        ]
      },
      "relatedContent": null,
      "relatedLists": [],
      "saveOptions": []
    }
  ],
  "recordTypeMappings": [],
  "recordTypeSelectorRequired": [
    false
  ]
}
```

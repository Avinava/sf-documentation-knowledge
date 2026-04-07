---
title: "Favorite Input"
domain: uiapi
topic: favorite-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:40:10.703Z
estimatedTokens: 276
keywords: [Favorite]
---

> A favorite to create or update.

# Favorite Input

A favorite to create or update.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the favorite. | Required for PATCH if sortOrder isn't specified. You may specify both. | 41.0 |
| sortOrder | Integer | The sort order of the favorite, from 1 to N. | Required for PATCH if name is unspecified. You may specify both. | 41.0 |
| target | String | The record, API name, or content being favorited. | Required in a POST request. Do not specify in a PATCH request. | 41.0 |
| targetType | String | The type of favorite. One of these values:ListView—A favorited list view.ObjectHome—A favorited object home.Record—A favorited record.Tab—A favorited tab. | Required in a POST request. Do not specify in a PATCH request. | 41.0 |

#### See Also

-   [Create a Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_create.htm "Create a favorite.")

-   [Update a Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorite_update.htm "Update a favorite.")

## Code Examples

```
{
  name: "Most Important Accounts",
  sortOrder: 1
  target: "00BR0000000tTTwMAM",
  targetType: "ListView"
}
```

## Related Topics

- Create a Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_create.htm)
- Update a Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorite_update.htm)

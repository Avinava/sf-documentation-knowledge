---
title: "Create a Favorite"
domain: uiapi
topic: create-a-favorite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.349Z
estimatedTokens: 242
keywords: [Favorite]
---

# Create a Favorite

> Create a favorite.

# Create a Favorite

Create a favorite.

Resource

```

```

Available Version

41.0

HTTP Method

POST

Example

```

```

```

```

Request Parameters

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the favorite. | Optional | 41.0 |
| sortOrder | Integer | The sort order of the favorite, from 1 to N. | Optional | 41.0 |
| target | String | The record, API name, or content being favorited. | Required | 41.0 |
| targetType | String | The type of favorite. One of these values:ListView—A favorited list view.ObjectHome—A favorited object home.Record—A favorited record.Tab—A favorited tab. | Required | 41.0 |

Request Body

[Favorite Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_input.htm "A favorite to create or update.")

Response Body

[Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm#ui_api_responses_favorite "A single favorite.")

## Code Examples

```
/ui-api/favorites
```

```
POST /ui-api/favorites/
```

```
{
  name: "Most Important Accounts",
  sortOrder: 1
  target: "00BR0000000tTTwMAM",
  targetType: "ListView"
}
```

## Related Topics

- Favorite Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_input.htm)
- Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm)

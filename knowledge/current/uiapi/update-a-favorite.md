---
title: "Update a Favorite"
domain: uiapi
topic: update-a-favorite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.340Z
estimatedTokens: 214
keywords: [Favorite]
---

# Update a Favorite

> Update a favorite.

# Update a Favorite

Update a favorite.

Resource

```

```

favoriteId—The ID of a favorite.

Available Version

41.0

HTTP Method

PATCH

Example

This example uses a request body to update a favorite.

```

```

Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| name | String | The name of the favorite. | You must specify either name or sortOrder. You may specify both. | 41.0 |
| sortOrder | Integer | The sort order of the favorite, from 1 to N. | You must specify either name or sortOrder. You may specify both. | 41.0 |

Request Body

[Favorite Input](atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_input.htm "A favorite to create or update.")

Response Body

[Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm "A single favorite.")

## Code Examples

```
/ui-api/favorites/${favoriteId}
```

```
{
  name: "Red Accounts",
  sortOrder: 1
}
```

## Related Topics

- Favorite Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_input.htm)
- Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm)

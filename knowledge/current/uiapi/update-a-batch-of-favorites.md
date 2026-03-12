---
title: "Update a Batch of Favorites"
domain: uiapi
topic: update-a-batch-of-favorites
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.345Z
estimatedTokens: 166
keywords: [Batch, Favorites, once, sort, order, updated, relative, ordering, Any, missing, deleted]
---

# Update a Batch of Favorites

> Update all favorites at once. The sort order is updated to the given
      relative ordering. Any favorites missing from the request body are deleted.

# Update a Batch of Favorites

Update all favorites at once. The sort order is updated to the given relative ordering. Any favorites missing from the request body are deleted.

Resource

```

```

Available Version

41.0

HTTP Method

PUT

Request Body

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| favorites | Favorite Batch Input[] | The list of favorites to keep and update. | Required | 41.0 |

Response Body

[Favorite Collection](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite_collection.htm#ui_api_responses_favorite_collection "A list of favorites.")

## Code Examples

```
/ui-api/favorites/batch
```

```
{
  favorites: [
  {
    id: "0MVR00000004DhnOAE",
    name: "Q4 Perf"
  }, { 
    id: "0MVR00000004DhsOAE"
  }, {
    id: "0MVR00000004DiGOAU"
  }, {
    id: "0MVR000000001e2OAA",
    name: "Office Group"
  }, {
    id: "0MVR00000004GGlOAM"
  }}]
}
```

## Related Topics

- Favorite Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_batch_input.htm)
- Favorite Collection (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite_collection.htm)

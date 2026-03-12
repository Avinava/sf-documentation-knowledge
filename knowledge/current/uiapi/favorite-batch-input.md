---
title: "Favorite Batch Input"
domain: uiapi
topic: favorite-batch-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.180Z
estimatedTokens: 156
keywords: [Favorite, Batch, Input, updating, favorites]
---

# Favorite Batch Input

> Represents a single favorite when updating favorites in batch.

# Favorite Batch Input

Represents a single favorite when updating favorites in batch.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID of the favorite. | Required | 41.0 |
| name | String | The name of the favorite. | Required | 41.0 |

#### See Also

-   [Update a Batch of Favorites](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_batch_update.htm "Update all favorites at once. The sort order is updated to the given relative ordering. Any favorites missing from the request body are deleted.")

## Code Examples

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

- Update a Batch of Favorites (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_batch_update.htm)

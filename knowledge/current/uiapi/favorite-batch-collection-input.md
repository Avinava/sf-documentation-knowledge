---
title: "Favorite Batch Collection Input"
domain: uiapi
topic: favorite-batch-collection-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.176Z
estimatedTokens: 163
keywords: [Favorite, Batch, Collection, Input, favorites, Pass]
---

# Favorite Batch Collection Input

> A collection of all the favorites in a batch. Pass this request body
      to update a batch of favorites.

# Favorite Batch Collection Input

A collection of all the favorites in a batch. Pass this request body to update a batch of favorites.

JSON example

```

```

Properties

| Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| favorites | Favorite Batch Input[] | The list of favorites to keep and update. | Required | 41.0 |

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

- Favorite Batch Input (atlas.en-us.uiapi.meta/uiapi/ui_api_requests_favorite_batch_input.htm)
- Update a Batch of Favorites (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_batch_update.htm)

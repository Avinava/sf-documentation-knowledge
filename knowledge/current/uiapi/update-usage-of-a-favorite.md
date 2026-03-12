---
title: "Update Usage of a Favorite"
domain: uiapi
topic: update-usage-of-a-favorite
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:36:20.354Z
estimatedTokens: 98
keywords: [Usage, Favorite, individual, Increments, accessCount, lastAccessDate, current, system, time]
---

# Update Usage of a Favorite

> Update the usage of an individual favorite. Increments the accessCount and sets the lastAccessDate to the current system time.

# Update Usage of a Favorite

Update the usage of an individual favorite. Increments the accessCount and sets the lastAccessDate to the current system time.

Resource

```

```

favoriteId—The ID of a favorite.

Available Version

41.0

HTTP Method

PATCH

Response Body

[Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm#ui_api_responses_favorite "A single favorite.")

## Code Examples

```
/ui-api/favorites/${favoriteId}/usage
```

## Related Topics

- Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_responses_favorite.htm)

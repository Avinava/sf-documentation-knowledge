---
title: "Favorite"
domain: uiapi
topic: favorite
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:36:20.807Z
estimatedTokens: 516
keywords: [Favorite]
---

# Favorite

> A single favorite.

# Favorite

A single favorite.

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| accessCount | Integer | The number of times this favorite has been used. | Big, 41.0 | 41.0 |
| iconColor | String | The color of the icon for this favorite, usually the related object’s color. | Big, 41.0 | 41.0 |
| iconUrl | String | The URL of the icon for the favorite, usually the related object’s icon. | Big, 41.0 | 41.0 |
| id | String | The ID of the favorite. | Small, 41.0 | 41.0 |
| lastAccessDate | String | The last time this favorite was used. The value is in ISO 8061 date and time format. | Big, 41.0 | 41.0 |
| name | String | The name of the favorite. | Small, 41.0 | 41.0 |
| objectType | String | The developer name of the entity associated with this favorite, if any. | Medium, 41.0 | 41.0 |
| sortOrder | Integer | The sort order of the favorite, from 1 to N. | Small, 41.0 | 41.0 |
| subtitle | String | The subtitle of the favorite, usually the object’s label. Provides additional information about the type of record or content being favorited. | Medium, 41.0 | 41.0 |
| target | String | The record, API name, or content being favorited. | Small, 41.0 | 41.0 |
| targetType | String | The type of record or content being favorited. One of these values:ListView—A favorited list view.ObjectHome—A favorited object home.Record—A favorited record.Tab—A favorited tab. | Small, 41.0 | 41.0 |

#### See Also

-   [Create a Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_create.htm "Create a favorite.")

-   [Get Favorites](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_get.htm "Get all of a user’s favorites.")

-   [Update a Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorite_update.htm "Update a favorite.")

-   [Update Usage of a Favorite](atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_usage_update.htm "Update the usage of an individual favorite. Increments the accessCount and sets the lastAccessDate to the current system time.")

## Related Topics

- Create a Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_create.htm)
- Get Favorites (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_get.htm)
- Update a Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorite_update.htm)
- Update Usage of a Favorite (atlas.en-us.uiapi.meta/uiapi/ui_api_resources_favorites_usage_update.htm)

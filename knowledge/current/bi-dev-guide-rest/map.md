---
title: "Map"
domain: bi-dev-guide-rest
topic: map
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.424Z
estimatedTokens: 322
keywords: [Map]
---

# Map

> A map object.

# Map

A map object.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| bounding​Box | Bounding​Box | The bounding box of the geo map | Small, 38.0 | 39.0 |
| created​By | User | The creator of the map | Small, 38.0 | 38.0 |
| created​Date | Date | The date when this map was created | Small, 38.0 | 38.0 |
| geo​Data | Geo​Data | The geo data of the map | Small, 38.0 | 38.0 |
| id | String | The 18 character map ID | Small, 38.0 | 38.0 |
| label | String | The map label | Small, 39.0 | 39.0 |
| name | String | The map developer name. | Small, 39.0 | 39.0 |
| name​space | String | The namespace that qualifies the map | Small, 39.0 | 39.0 |
| projection | Connect​Eclair​Map​Projection​Type​Enum | The map projection. Valid values are:AlbersUSAEquirectangularMercator | Small, 38.0 | 38.0 |
| url | String | The url to the map representation | Small, 38.0 | 38.0 |

#### See Also

-   [Charts Maps List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps.htm "Returns a list of maps or creates a map.")

-   [Charts Maps Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps_id.htm "Returns, updates, or deletes a specific map.")

## Related Topics

- Bounding​Box (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_bounding_box.htm)
- User (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_user.htm)
- Geo​Data (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_geo_data.htm)
- Charts Maps List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps.htm)
- Charts Maps Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps_id.htm)

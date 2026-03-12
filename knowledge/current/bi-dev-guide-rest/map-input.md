---
title: "Map Input"
domain: bi-dev-guide-rest
topic: map-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.788Z
estimatedTokens: 233
keywords: [Map, Input, Eclair, chart]
---

# Map Input

> A map for an Eclair chart.

# Map Input

A map for an Eclair chart.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| bounding​Box | Map​Bounding​Box​Input | The map bounding box. | Optional | 39.0 |
| geo​Data | Asset​Reference​Input | The parent geodata asset. | Required | 39.0 |
| label | String | The map label. | Required | 39.0 |
| name | String | The map developer name. | Optional | 39.0 |
| projection | Connect​Eclair​Map​Projection​Type​Enum | The map projection. Valid values are:AlbersUSAEquirectangularMercator | Required | 39.0 |

#### See Also

-   [Charts Maps List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps.htm "Returns a list of maps or creates a map.")

-   [Charts Maps Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps_id.htm "Returns, updates, or deletes a specific map.")

## Related Topics

- Map​Bounding​Box​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_map_bounding_box_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_asset_reference_input.htm)
- Charts Maps List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps.htm)
- Charts Maps Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_maps_id.htm)

---
title: "Geo Data"
domain: bi-dev-guide-rest
topic: geo-data
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.316Z
estimatedTokens: 264
keywords: [Geo, Data, map]
---

# Geo Data

> The geo data used by a map.

# Geo Data

The geo data used by a map.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| id | String | The ID of the geodata record. | Small, 38.0 | 38.0 |
| label | String | The geodata label. | Small, 38.0 | 38.0 |
| name | String | The geodata developer name. | Small, 38.0 | 38.0 |
| namespace | String | The namespace that qualifies the geodata. | Small, 39.0 | 39.0 |
| type | Connect​Eclair​Geo​Data​Type​Enum | The type of geodata. Valid values are:GeoJSON | Small, 38.0 | 38.0 |
| url | String | The url to retrieve the geodata. | Small, 38.0 | 38.0 |

#### See Also

-   [Charts Geodata List Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata.htm "Returns a collection of geodata definitions and creates a geodata definition.")

-   [Charts Geodata Resource](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata_id.htm "Returns a geodata definition, updates, or delete a geodata definition.")

## Related Topics

- Charts Geodata List Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata.htm)
- Charts Geodata Resource (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_resources_eclair_geodata_id.htm)

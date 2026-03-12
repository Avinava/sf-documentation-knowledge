---
title: "Charts Maps List Resource"
domain: bi-dev-guide-rest
topic: charts-maps-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.726Z
estimatedTokens: 293
keywords: [Charts, Maps, Resource, creates, map]
---

# Charts Maps List Resource

> Returns a list of maps or creates a map.

# Charts Maps List Resource

Returns a list of maps or creates a map.

Resource URL

```

```

Formats

JSON

Available Version

38.0

HTTP Methods

GET POST

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| page | Int | The page number you want to view. | Optional | 38.0 |
| page​Size | Int | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 38.0 |

Response body for GET

[Map Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_map_collection.htm "A collection of maps.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| geo​Map​Object | Map​Input | All the relevant information about the map, such as {"label": "My Map"}. | Required | 39.0 |

Response body for POST

[Map](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_map.htm "A map object.")

The following JSON shows how to create a map resource from a GeoJson file with the optional bounding box.

```

```

## Code Examples

```
/eclair/maps
```

```
{
  "boundingBox": {
    "bottom": 40.5534,
    "left": -80.251,
    "right": -79.8211
    "top": 40.3287
  },
  "geoData": {
    "id": "<id_of_geodata_resource>"
  },
  "name":"developer_name_for_map",
  "label": "display_label_for_map",
  "projection" : "equirectangular"
}
```

## Related Topics

- Map Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_map_collection.htm)
- Map​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_map_input.htm)
- Map (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_map.htm)

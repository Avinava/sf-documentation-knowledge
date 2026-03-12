---
title: "Charts Geodata List Resource"
domain: bi-dev-guide-rest
topic: charts-geodata-list-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.715Z
estimatedTokens: 334
keywords: [Charts, Geodata, Resource, collection, definitions, creates, definition]
---

# Charts Geodata List Resource

> Returns a collection of geodata definitions and creates a geodata
      definition.

# Charts Geodata List Resource

Returns a collection of geodata definitions and creates a geodata definition.

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
| pageSize | Int | The number of items to be returned in a single page. Minimum is 1, maximum is 200, and default is 25. | Optional | 38.0 |

Response body for GET

[Geo Data Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_geo_data_collection.htm "A collection of the geo data used by a map.")

Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| geo​Data​File | Binary | The geodata JSON file to upload. | Required | 39.0 |
| geo​Data​Object | Geo​Data​Input | All the relevant information about the geodata, such as {"label": "My GeoData"}. | Required | 39.0 |

Response body for POST

[Geo Data](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_geo_data.htm "The geo data used by a map.")

The following JSON shows how to create a geodata resource from a GeoJson file.

```

```

## Code Examples

```
/eclair/geodata
```

```
{
  "label": "GeoJsonLabel",
  "name": "GeoJsonName"
}
```

## Related Topics

- Geo Data Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_geo_data_collection.htm)
- Geo​Data​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_geo_data_input.htm)
- Geo Data (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_geo_data.htm)

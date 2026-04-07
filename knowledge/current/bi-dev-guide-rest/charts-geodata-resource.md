---
title: "Charts Geodata Resource"
domain: bi-dev-guide-rest
topic: charts-geodata-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T18:36:56.229Z
estimatedTokens: 178
keywords: [Charts, Geodata, Resource, definition, updates]
---

> Returns a geodata definition, updates, or delete a geodata
      definition.

# Charts Geodata Resource

Returns a geodata definition, updates, or delete a geodata definition.

Resource URL

```

```

Formats

JSON

Available Version

38.0

HTTP Methods

DELETE GET PATCH

Response body for GET and PATCH

[Geo Data](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_geo_data.htm "The geo data used by a map.")

PATCH Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| geo​Data​File | Binary | The geodata JSON file to upload. | Required | 39.0 |
| geo​Data​Object | Geo​Data​Input | All the relevant information about the geodata, such as { "label": "My GeoData" }. | Required | 39.0 |

## Code Examples

```
/eclair/geodata/<id>
```

## Related Topics

- Geo Data (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_geo_data.htm)
- Geo​Data​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_geo_data_input.htm)

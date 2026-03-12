---
title: "Charts Maps Resource"
domain: bi-dev-guide-rest
topic: charts-maps-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.729Z
estimatedTokens: 141
keywords: [Charts, Maps, Resource, updates, deletes, specific, map]
---

# Charts Maps Resource

> Returns, updates, or deletes a specific map.

# Charts Maps Resource

Returns, updates, or deletes a specific map.

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

[Map](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_map.htm "A map object.")

PATCH Request Parameters

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| geo​Map​Object | Map​Input | All the relevant information about the map, such as {"label": "My Map"}. | Required | 39.0 |

## Code Examples

```
/eclair/maps/<id>
```

## Related Topics

- Map (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_map.htm)
- Map​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_map_input.htm)

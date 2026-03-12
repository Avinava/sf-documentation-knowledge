---
title: "Collections Resource"
domain: bi-dev-guide-rest
topic: collections-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.145Z
estimatedTokens: 246
keywords: [Collections, Resource, updates, deletes, collection, Analytics, items, URL, Formats, Version, HTTP, PATCH]
---

# Collections Resource

> Returns, updates, or deletes a collection. Each collection contains Analytics resource items.

# Collections Resource

Returns, updates, or deletes a collection. Each collection contains Analytics resource items.

## Resource URL

```

```

```

```

## Formats

JSON

## Available Version

52.0

## HTTP Methods

GET PATCH DELETE

## Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| collection​Id | String | The ID of the collection. | Required | 52.0 |

## Response body for GET

[Wave Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection.htm "A collection of Analytics resources.")

## Request body for PATCH

[Wave Collection Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_input.htm "A collection of Analytics resources.")

## Response body for PATCH

[Wave Collection](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection.htm "A collection of Analytics resources.")

## Code Examples

```
/analytics/collections/<collectionId>
```

```
/wave/collections/<collectionId>
```

## Related Topics

- Wave Collection (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection.htm)
- Wave Collection Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_input.htm)

---
title: "Collections Bulk Items Resource"
domain: bi-dev-guide-rest
topic: collections-bulk-items-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:03.142Z
estimatedTokens: 215
keywords: [Collections, Bulk, Items, Resource, Add, collection, URL, Formats, Version, HTTP, POST]
---

# Collections Bulk Items Resource

> Add items in bulk to the collection.

# Collections Bulk Items Resource

Add items in bulk to the collection.

## Resource URL

```

```

```

```

## Formats

JSON

## Available Version

63.0

## HTTP Methods

POST

## Request parameters for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| collection​Id | String | The ID of the collection the item belongs to. | Required | 63.0 |

## Request body for POST

[Wave Collection Item Bulk Add Input](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_bulk_add_input.htm "Bulk items to add to a collection of Analytics resources.")

## Response body for POST

[Wave Collection Item List](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item_list.htm "A list of items in a collection of Analytics resources.")

## Code Examples

```
/analytics/collections/<collectionId>/bulk-items
```

```
/wave/collections/<collectionId>/bulk-items
```

## Related Topics

- Wave Collection Item Bulk Add Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_wave_collection_item_bulk_add_input.htm)
- Wave Collection Item List (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_wave_collection_item_list.htm)

---
title: "Story Histories Resource"
domain: bi-dev-guide-rest-sdd
topic: story-histories-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.509Z
estimatedTokens: 154
keywords: [Story, Histories, Resource, collection, Einstein, Discovery, history, items]
---

# Story Histories Resource

> Returns a collection of Einstein Discovery story history items.

# Story Histories Resource

Returns a collection of Einstein Discovery story history items.

Resource URL

```

```

Formats

JSON

Available Version

48.0

HTTP Methods

GET

Request parameters for GET

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| story​Id | String | The ID of the story to retrieve the history items for. | Required | 51.0 |

Response body for GET

[Asset History Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_history_collection.htm "A collection of asset history items.")

## Code Examples

```
/smartdatadiscovery/stories/<storyId>/histories
```

## Related Topics

- Asset History Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_history_collection.htm)

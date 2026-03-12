---
title: "Smart Data Discovery Narrative Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-narrative-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.228Z
estimatedTokens: 192
keywords: [Smart, Data, Discovery, Narrative, Input, Einstein, story, retrieve]
---

# Smart Data Discovery Narrative Input

> The Einstein Discovery story narrative to retrieve.

# Smart Data Discovery Narrative Input

The Einstein Discovery story narrative to retrieve.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| include​Warnings | Boolean | Indicates whether the warning data should be included (true) or not (false). | Optional | 51.0 |
| query | Smart​Data​Discovery​Narrative​Query​Input | The query body containing the information for generating the narrative. | Required | 51.0 |
| story | Asset​Reference​Input | The story to use for generating the narrative. | Required | 51.0 |
| story​Id | String | The ID of the story to use for generating the narrative. | Required | 51.0 |
| type | String | The type of the narrative source. | Required | 51.0 |

## Related Topics

- Smart​Data​Discovery​Narrative​Query​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_narrative_query_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_asset_reference_input.htm)

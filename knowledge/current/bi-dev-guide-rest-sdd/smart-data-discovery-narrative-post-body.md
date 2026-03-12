---
title: "Smart Data Discovery Narrative Post Body"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-narrative-post-body
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.864Z
estimatedTokens: 167
keywords: [Smart, Data, Discovery, Narrative, Post, row, Einstein, story]
---

# Smart Data Discovery Narrative Post Body

> A single row of narrative data for an Einstein Discovery story.

# Smart Data Discovery Narrative Post Body

A single row of narrative data for an Einstein Discovery story.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| include​Warnings | Boolean | Indicates whether warnings are detected in this narrative (true) or not (false). | Small, 51.0 | 51.0 |
| query | Smart​Data​Discovery​Narrative​Post​Body​Query | The query parameters passed for the narrative. | Small, 51.0 | 51.0 |
| story | Asset​Reference | The story for the narrative. | Small, 51.0 | 51.0 |
| story​Id | String | The ID of the story for this narrative. | Small, 51.0 | 51.0 |

## Related Topics

- Smart​Data​Discovery​Narrative​Post​Body​Query (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_narrative_post_body_query.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)

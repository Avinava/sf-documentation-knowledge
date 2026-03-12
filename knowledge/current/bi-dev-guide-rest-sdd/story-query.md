---
title: "Story Query"
domain: bi-dev-guide-rest-sdd
topic: story-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:06.146Z
estimatedTokens: 375
keywords: [Story, Query, insights]
---

# Story Query

> A query for story insights.

# Story Query

A query for story insights.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| descriptive​Insights | Abstract​Story​Insights[] | A list of descriptive story insights. Valid values are:Story​First​Order​InsightsStory​Second​Order​Insights | Small, 52.0 | 52.0 |
| diagnostic​Insights | Story​Query​Diagnostic​Insights[] | A list of diagnostic story insights. | Small, 53.0 | 53.0 |
| include​Chart | Boolean | Indicates whether to include the story chart in the query response (true) or not (false). | Small, 54.0 | 54.0 |
| include​Narrative | Boolean | Indicates whether to include the story narrative in the query response (true) or not (false). | Small, 54.0 | 54.0 |
| include​Regular​Fields | Boolean | Indicates whether to include regular fields in the query response (true) or not (false). | Small, 54.0 | 54.0 |
| include​Sensitive​Fields | Boolean | Indicates whether to include sensitive fields in the query response (true) or not (false). | Small, 54.0 | 54.0 |
| limit | Integer | The total number of insight cards in the query response. | Small, 54.0 | 54.0 |
| offset | Integer | The insight card offset value. | Small, 54.0 | 54.0 |
| query | Story​Query​Input​Parameter | The story query input parameters. | Small, 52.0 | 52.0 |
| total​Size | Integer | The total insight count for the story. | Small, 52.0 | 52.0 |
| url | String | The URL for the story query. | Small, 52.0 | 52.0 |

## Related Topics

- Abstract​Story​Insights (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_insights.htm)
- Story​First​Order​Insights (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_first_order_insights.htm)
- Story​Second​Order​Insights (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_second_order_insights.htm)
- Story​Query​Diagnostic​Insights (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_query_diagnostic_insights.htm)
- Story​Query​Input​Parameter (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_query_input_parameter.htm)

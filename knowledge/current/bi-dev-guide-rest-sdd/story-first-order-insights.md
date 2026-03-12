---
title: "Story First Order Insights"
domain: bi-dev-guide-rest-sdd
topic: story-first-order-insights
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.103Z
estimatedTokens: 220
keywords: [Story, Order, Insights]
---

# Story First Order Insights

> The first order insights for a story.

# Story First Order Insights

The first order insights for a story.

Properties

Inherits properties from [Abstract​Story​Insights](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_insights.htm "The base story insights.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| correlation | Double | The correlation value with respect to the outcome variable. | Small, 52.0 | 52.0 |
| story​History | Story​Query​Disparate​Impact | The disparate impact results for a story query. | Small, 54.0 | 54.0 |
| potential​Bias | Story​Potential​Bias[] | A list of the potential bias results for a story query. | Small, 54.0 | 54.0 |
| significantly​Different | Boolean | Indicates whether the insight is significantly different (true) or not (false). | Small, 54.0 | 54.0 |

## Related Topics

- Abstract​Story​Insights (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_insights.htm)
- Story​Query​Disparate​Impact (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_query_disparate_impact.htm)
- Story​Potential​Bias (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_potential_bias.htm)

---
title: "Story Insights Detail"
domain: bi-dev-guide-rest-sdd
topic: story-insights-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:13.590Z
estimatedTokens: 214
keywords: [Story, Insights, Detail]
---

# Story Insights Detail

> The insights detail for a story.

# Story Insights Detail

The insights detail for a story.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| cases | Abstract​Story​Insights​Case[] | A list of story insights cases. Valid values are:Story​Descriptive​Insights​CaseStory​Count​Insights​Case | Small, 52.0 | 52.0 |
| category | Insights​Result​Category​Enum | The insights result category. Valid values are:NegativePositive | Small, 52.0 | 52.0 |
| compared​With | Insights​Comparison​Enum | The insights score comparison criteria. Valid values are:AverageOtherUniform​Distribution | Small, 52.0 | 52.0 |
| has​More​Cases | Boolean | Indicates whether there are more cases (true) or not (false). | Small, 55.0 | 55.0 |
| outcome​Class | String | The outcome class for the story insight. | Small, 55.0 | 55.0 |

## Related Topics

- Abstract​Story​Insights​Case (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_insights_case.htm)
- Story​Descriptive​Insights​Case (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_descriptive_insights_case.htm)
- Story​Count​Insights​Case (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_count_insights_case.htm)

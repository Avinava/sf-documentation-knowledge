---
title: "Story Descriptive Insights Case"
domain: bi-dev-guide-rest-sdd
topic: story-descriptive-insights-case
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:13.537Z
estimatedTokens: 250
keywords: [Story, Descriptive, Insights, Case]
---

# Story Descriptive Insights Case

> A descriptive story insights case.

# Story Descriptive Insights Case

A descriptive story insights case.

Properties

Inherits properties from [Abstract​Story​Insights​Case](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_insights_case.htm "The base story insights case.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| change | Double | The changed value for the insights case | Small, 52.0 | 52.0 |
| frequency​Change | Story​Descriptive​Insights​Impact​Enum | The impact on the result. Valid values are:ImprovedWorsened | Small, 52.0 | 52.0 |
| impact​Details | Story​Field​Impact​Detail[] | A list of field values that impact the result. | Small, 52.0 | 52.0 |
| mean | Double | The mean value for the insights case | Small, 54.0 | 54.0 |
| rating | Story​Descriptive​Insights​Rating​Enum | The score rating of the average outcome. Valid values are:Above​AverageBelow​AverageHigherLower | Small, 52.0 | 52.0 |

## Related Topics

- Abstract​Story​Insights​Case (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_insights_case.htm)
- Story​Field​Impact​Detail (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_field_impact_detail.htm)

---
title: "Story Query Input"
domain: bi-dev-guide-rest-sdd
topic: story-query-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.354Z
estimatedTokens: 387
keywords: [Story, Query, Input, Einstein, Discovery]
---

# Story Query Input

> The input to query an Einstein Discovery story.

# Story Query Input

The input to query an Einstein Discovery story.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filters | Abstract​Story​Data​Property​Input[] | A list of filters to use in the query. Valid values are:Story Day Field Value InputStory Day Of Week Field Value InputStory Field Only InputStory Month Field Value InputStory Month Of Year Field Value InputStory Null Field Value InputStory Quarter Field Value InputStory Quarter Of Year Field Value InputStory Range Field Value InputStory Text Field Value InputStory Year Field Value Input | Required | 54.0 |
| include​Chart | Boolean | Indicates whether to include the story chart in the query response (true) or not (false). | Optional | 54.0 |
| include​Narrative | Boolean | Indicates whether to include the story narrative in the query response (true) or not (false). | Optional | 54.0 |
| include​Regular​Fields | Boolean | Indicates whether to include regular fields in the query response (true) or not (false). | Optional | 54.0 |
| include​Sensitive​Fields | Boolean | Indicates whether to include sensitive fields in the query response (true) or not (false). | Optional | 54.0 |
| insights​Type | Insights​Type​Enum | The analysis type for the query insights. Valid values are:DescriptiveDiagnostic | Required | 52.0 |
| limit | Integer | The total number of insight cards in the query response. | Optional | 54.0 |
| offset | Integer | The insight card offset value. | Optional | 54.0 |

## Related Topics

- Abstract​Story​Data​Property​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_story_data_property_input.htm)
- Story Day Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_day_field_value_input.htm)
- Story Day Of Week Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_day_of_week_field_value_input.htm)
- Story Field Only Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_field_only_input.htm)
- Story Month Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_month_field_value_input.htm)
- Story Month Of Year Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_month_of_year_field_value_input.htm)
- Story Null Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_null_field_value_input.htm)
- Story Quarter Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_quarter_field_value_input.htm)
- Story Quarter Of Year Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_quarter_of_year_field_value_input.htm)
- Story Range Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_range_field_value_input.htm)

---
title: "Story Query Input Parameter"
domain: bi-dev-guide-rest-sdd
topic: story-query-input-parameter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.162Z
estimatedTokens: 199
keywords: [Story, Query, Input]
---

# Story Query Input Parameter

> The input parameter for a story query.

# Story Query Input Parameter

The input parameter for a story query.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| filters | Abstract​Story​Data​Property​Input[] | A list of filter fields used to query insights. Valid values are:Story Day Field Value InputStory Day Of Week Field Value InputStory Field Only InputStory Month Field Value InputStory Month Of Year Field Value InputStory Null Field Value InputStory Quarter Field Value InputStory Quarter Of Year Field Value InputStory Range Field Value InputStory Text Field Value InputStory Year Field Value Input | Small, 52.0 | 52.0 |
| insights​Type | Insights​Type​Enum | The insights type. Valid values are:DescriptiveDiagnostic | Small, 52.0 | 52.0 |

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

---
title: "Smart Data Discovery Narrative Filter Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-narrative-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.224Z
estimatedTokens: 212
keywords: [Smart, Data, Discovery, Narrative, Filter, Input, metadata]
---

# Smart Data Discovery Narrative Filter Input

> The narrative filter metadata.

# Smart Data Discovery Narrative Filter Input

The narrative filter metadata.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| columns | String | The columns to use in the filter. | Required | 51.0 |
| property | Abstract​Story​Data​Property​Input | The filter for the query service to use. Valid data properties are:Story Day Field Value InputStory Day Field Value InputStory Field Only Value InputStory Month Field Value InputStory Month Of Year Field Value InputStory Null Field Value InputStory Quarter Field Value InputStory Quarter Of Year Field Value InputStory Range Field Value InputStory Text Field Value InputStory Year Field Value Input | Required | 51.0 |
| values | String[] | The list of values to use with the fields in the filter. | Required | 51.0 |

## Related Topics

- Abstract​Story​Data​Property​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_story_data_property_input.htm)
- Story Day Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_day_field_value_input.htm)
- Story Day Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_day_of_week_field_value_input.htm)
- Story Field Only Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_field_only_input.htm)
- Story Month Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_month_field_value_input.htm)
- Story Month Of Year Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_month_of_year_field_value_input.htm)
- Story Null Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_null_field_value_input.htm)
- Story Quarter Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_quarter_field_value_input.htm)
- Story Quarter Of Year Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_quarter_of_year_field_value_input.htm)
- Story Range Field Value Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_story_range_field_value_input.htm)

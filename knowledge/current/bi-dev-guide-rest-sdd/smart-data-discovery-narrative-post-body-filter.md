---
title: "Smart Data Discovery Narrative Post Body Filter"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-narrative-post-body-filter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.869Z
estimatedTokens: 215
keywords: [Smart, Data, Discovery, Narrative, Post, Filter, query, Einstein, story]
---

# Smart Data Discovery Narrative Post Body Filter

> A query filter for narrative data of an Einstein Discovery story.

# Smart Data Discovery Narrative Post Body Filter

A query filter for narrative data of an Einstein Discovery story.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| columns | String[] | The list of columns for filtering the query. | Small, 51.0 | 51.0 |
| property | Abstract​Story​Data​Property | The filter for the query service to use. Valid data properties are:Story All Other Field ValueStory Day Field ValueStory Day Field ValueStory Field Only ValueStory Month Field ValueStory Month Of Year Field ValueStory Null Field ValueStory Quarter Field ValueStory Quarter Of Year Field ValueStory Range Field ValueStory Text Field ValueStory Year Field Value | Small, 52.0 | 52.0 |
| values | String[] | The list of values to used to filter the query. | Small, 51.0 | 51.0 |

## Related Topics

- Abstract​Story​Data​Property (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_data_property.htm)
- Story All Other Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_all_other_field_value.htm)
- Story Day Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_day_field_value.htm)
- Story Day Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_day_of_week_field_value.htm)
- Story Field Only Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_field_only.htm)
- Story Month Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_month_field_value.htm)
- Story Month Of Year Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_month_of_year_field_value.htm)
- Story Null Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_null_field_value.htm)
- Story Quarter Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_quarter_field_value.htm)
- Story Quarter Of Year Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_quarter_of_year_field_value.htm)

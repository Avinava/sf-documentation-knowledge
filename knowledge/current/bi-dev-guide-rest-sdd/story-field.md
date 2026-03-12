---
title: "Story Field"
domain: bi-dev-guide-rest-sdd
topic: story-field
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.088Z
estimatedTokens: 218
keywords: [Story, combination, contributed, outcome, result]
---

# Story Field

> The field value combination that contributed to the story outcome result.

# Story Field

The field value combination that contributed to the story outcome result.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field​Name | String | The name for the story field. | Small, 51.0 | 51.0 |
| property | Abstract​Story​Data​Property | The field property. Valid values are:Story All Other Field ValueStory Day Field ValueStory Day Of Week Field ValueStory Field OnlyStory Month Field ValueStory Month Of Year Field ValueStory Null Field ValueStory Quarter Field ValueStory Quarter Of Year Field ValueStory Range Field ValueStory Text Field ValueStory Year Field Value | Small, 52.0 | 52.0 |
| type | Story​Field​Detail​Type​Enum | The field type. Valid values are:FieldOutcome | Small, 54.0 | 54.0 |
| value | String | The value for the field. | Small, 51.0 | 51.0 |

## Related Topics

- Abstract​Story​Data​Property (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_story_data_property.htm)
- Story All Other Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_all_other_field_value.htm)
- Story Day Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_day_field_value.htm)
- Story Day Of Week Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_day_of_week_field_value.htm)
- Story Field Only (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_field_only.htm)
- Story Month Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_month_field_value.htm)
- Story Month Of Year Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_month_of_year_field_value.htm)
- Story Null Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_null_field_value.htm)
- Story Quarter Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_quarter_field_value.htm)
- Story Quarter Of Year Field Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_quarter_of_year_field_value.htm)

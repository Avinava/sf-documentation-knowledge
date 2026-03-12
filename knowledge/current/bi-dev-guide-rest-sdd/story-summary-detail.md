---
title: "Story Summary Detail"
domain: bi-dev-guide-rest-sdd
topic: story-summary-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.171Z
estimatedTokens: 239
keywords: [Story, Summary, Detail]
---

# Story Summary Detail

> The summary detail for a story.

# Story Summary Detail

The summary detail for a story.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| average​Outcome | Double | The statistical mean for outcome variable. | Small, 51.0 | 51.0 |
| correlations | Story​Field​Correlation[] | A summary of each field in the dataset selected for story creation. | Small, 51.0 | 51.0 |
| feature​Importances | Model​Field​Label​Metrics[] | A list of importance metrics for the AI model. | Small, 56.0 | 56.0 |
| negative​Factors | Story​Details[] | A list of the top negative factors contributing to the outcome. | Small, 51.0 | 51.0 |
| positive​Factors | Story​Details[] | A list of the top positive factors contributing to the outcome. | Small, 51.0 | 51.0 |
| row​Count | Long | The total number of rows in the dataset. | Small, 51.0 | 51.0 |
| url | String | The URL for the story summary detail. | Small, 51.0 | 51.0 |

## Related Topics

- Story​Field​Correlation (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_field_correlation.htm)
- Model​Field​Label​Metrics (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_model_field_label_metrics.htm)
- Story​Details (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_details.htm)

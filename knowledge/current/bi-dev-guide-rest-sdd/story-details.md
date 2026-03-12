---
title: "Story Details"
domain: bi-dev-guide-rest-sdd
topic: story-details
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.079Z
estimatedTokens: 272
keywords: [Story, top, positive, negative, factors, contributing, outcome]
---

# Story Details

> The details for a story. These details are the top positive and negative factors contributing to story outcome.

# Story Details

The details for a story. These details are the top positive and negative factors contributing to story outcome.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| condition | Story​Field[] | The field value combination that contributed to the outcome result. | Small, 51.0 | 51.0 |
| count | Long | The count of the condition records. | Small, 51.0 | 51.0 |
| diff​From​Average | Double | The difference between the mean and the global average for analysis with outcome. | Small, 51.0 | 51.0 |
| diff​From​Expected | Double | The difference between the mean and the global average for count analysis. | Small, 51.0 | 51.0 |
| diff​From​Usual | Double | The difference between the mean with constraing and without constraint for count analysis. | Small, 51.0 | 51.0 |
| percentage | Double | The percentage value. | Small, 51.0 | 51.0 |
| rate​Of​Occurrence | Double | The occurrence count. | Small, 51.0 | 51.0 |
| score | Double | The score of the condition field. | Small, 51.0 | 51.0 |

## Related Topics

- Story​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_field.htm)

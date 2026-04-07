---
title: "Diagnostic Insights Case"
domain: bi-dev-guide-rest-sdd
topic: diagnostic-insights-case
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:12.886Z
estimatedTokens: 232
keywords: [Diagnostic, Insights, Case, story, query]
---

# Diagnostic Insights Case

> A story query diagnostic insights.

# Diagnostic Insights Case

A story query diagnostic insights.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| change​In​Outcome | Double | The change in outcome score. | Small, 53.0 | 53.0 |
| fields | Story​Field​Label​Value​Property[] | A list of fields responsible for impact on outcome due to the selected condition. | Small, 53.0 | 53.0 |
| global​Mean | Double | The global mean without any condition. | Small, 53.0 | 53.0 |
| has​Demographic​Changed | Boolean | Indicates whether the demographic changed due to this case (true) or not (false). | Small, 53.0 | 53.0 |
| mean​With​Condition | Double | The mean with the primary condition selected for diagnostic insight. | Small, 53.0 | 53.0 |
| outcome​Change​Type | Insights​Outcome​Change​Enum | The change in outcome value. Valid values are:DecreasedIncreased | Small, 53.0 | 53.0 |

## Related Topics

- Story​Field​Label​Value​Property (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_story_field_label_value_property.htm)

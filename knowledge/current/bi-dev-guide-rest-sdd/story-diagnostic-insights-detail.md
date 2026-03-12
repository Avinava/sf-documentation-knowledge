---
title: "Story Diagnostic Insights Detail"
domain: bi-dev-guide-rest-sdd
topic: story-diagnostic-insights-detail
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:06.083Z
estimatedTokens: 194
keywords: [Story, Diagnostic, Insights, Detail]
---

# Story Diagnostic Insights Detail

> The detail for story diagnostic insights.

# Story Diagnostic Insights Detail

The detail for story diagnostic insights.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| category | Insights​Result​Category​Enum | The insights result category. Valid values are:NegativePositive | Small, 53.0 | 53.0 |
| condition​Restriction | Insights​Condition​Restriction​Enum | The insights condition restriction. Valid values are:IncludedNot​Included | Small, 53.0 | 53.0 |
| details | Diagnostic​Insights​Case[] | A list of the case details for a diagnostic insight. | Small, 53.0 | 53.0 |
| impact | Story​Descriptive​Insights​Impact​Enum | The descriptive insights impact for the story. Valid values are:ImprovedWorsened | Small, 53.0 | 53.0 |

## Related Topics

- Diagnostic​Insights​Case (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_diagnostic_insights_case.htm)

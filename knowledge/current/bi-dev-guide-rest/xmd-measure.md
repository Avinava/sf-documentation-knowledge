---
title: "Xmd Measure"
domain: bi-dev-guide-rest
topic: xmd-measure
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:04.881Z
estimatedTokens: 289
keywords: [Xmd, Measure, extended, metadata, Analytics, dataset]
---

# Xmd Measure

> The extended metadata (Xmd) for a measure in an Analytics dataset.

# Xmd Measure

The extended metadata (Xmd) for a measure in an Analytics dataset.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting | Conditional​Formatting​Property | The conditional formatting for the measure. | Small, 42.0 | 42.0 |
| currency​Settings | Xmd​Currency​Settings | The currency settings for the currencies supported for a currency field. | Small, 57.0 | 57.0 |
| field | String | The identifier (API name) for the dataset field. | Small, 36.0 | 36.0 |
| format | Xmd​Measure​Format | The format details for the measure. | Small, 36.0 | 36.0 |
| label | String | The display name for the dataset field. Can be up to 40 characters. For example, “Sales Amount". | Small, 36.0 | 36.0 |
| show​In​Explorer | Boolean | Indicates whether the dataset field can be selected from the dashboard designer or explorer when creating dashboards and lenses (true) or not (false). Even if showInExplorer is false, the field can still be used for SAQL queries, manually added in JSON, and accessed using the Analytics REST API. | Small, 36.0 | 36.0 |

## Related Topics

- Conditional​Formatting​Property (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_conditional_formatting_property.htm)
- Xmd​Currency​Settings (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_currency_settings.htm)
- Xmd​Measure​Format (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_responses_xmd_measure_format.htm)

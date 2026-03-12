---
title: "Base Xmd Measure Input"
domain: bi-dev-guide-rest
topic: base-xmd-measure-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:02.978Z
estimatedTokens: 385
keywords: [Base, Xmd, Measure, Input, measures, derived]
---

# Base Xmd Measure Input

> The base Xmd measure for measures and derived measures.

# Base Xmd Measure Input

The base Xmd measure for measures and derived measures.

Inherited by [XmdMeasureInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_measure_input.htm "The extended metadata (Xmd) for a measure in an Analytics dataset.") and [XmdDerivedMeasureInput](atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_measure_input.htm "The extended metadata (Xmd) for a derived measure in an Analytics dataset.").

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| conditional​Formatting | Map<String, Conditional​Formatting​Property​Input | The conditional formatting for a measure | Optional | 42.0 |
| currency​Settings | Xmd​Currency​Settings​Input | The currency settings for the currencies supported for a currency field. | Small, 57.0 | 57.0 |
| date​Format | String | The date format to use when the measure is a date. | Required for date measures | 36.0 |
| description | String | The description for the measure. | Optional | 36.0 |
| field | String | The field name for the measure. This is used in queries. | Required | 36.0 |
| fully​Qualified​Name | String | The fully qualified name for the measure. | Required | 36.0 |
| label | String | The label for the measure. | Required | 36.0 |
| origin | String | The origin for the measure. | Required | 36.0 |
| show​In​Explorer | String | Indicates whether this measure is visible in the Explorer (true) or not (false). | Required | 36.0 |

## Related Topics

- XmdMeasureInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_measure_input.htm)
- XmdDerivedMeasureInput (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_derived_measure_input.htm)
- Conditional​Formatting​Property​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_conditional_formatting_property_input.htm)
- Xmd​Currency​Settings​Input (atlas.en-us.bi_dev_guide_rest.meta/bi_dev_guide_rest/bi_requests_xmd_currency_settings_input.htm)

---
title: "Abstract Text Field Configuration"
domain: bi-dev-guide-rest-sdd
topic: abstract-text-field-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.625Z
estimatedTokens: 263
keywords: [Abstract, Text, Configuration, base, Einstein, Discovery]
---

# Abstract Text Field Configuration

> The base Einstein Discovery text field configuration.

# Abstract Text Field Configuration

The base Einstein Discovery text field configuration.

Properties

Inherits properties from [Abstract​Field​Configuration](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm "The base Einstein Discovery field configuration.").

Inherited by [Text​Field​Configuration](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_text_field_configuration.htm "The text field configuration.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| include​Other | Boolean | Indicates whether values that don't match the specified values should be grouped into other (true) or not (false). | Small, 54.0 | 54.0 |
| ordering | Smart​Data​Discovery​Ordering​Enum | The strategy for ordering text values. Valid values are:AlphabeticalNumericOccurrence | Small, 54.0 | 54.0 |
| values | Text​Field​Value​Configuration[] | A list of values for the field. | Small, 54.0 | 54.0 |

## Related Topics

- Abstract​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm)
- Text​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_text_field_configuration.htm)
- Text​Field​Value​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_text_field_value_configuration.htm)

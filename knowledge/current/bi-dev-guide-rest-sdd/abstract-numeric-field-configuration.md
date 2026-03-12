---
title: "Abstract Numeric Field Configuration"
domain: bi-dev-guide-rest-sdd
topic: abstract-numeric-field-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.556Z
estimatedTokens: 280
keywords: [Abstract, Numeric, Configuration, base, Einstein, Discovery]
---

# Abstract Numeric Field Configuration

> The base Einstein Discovery numeric field configuration.

# Abstract Numeric Field Configuration

The base Einstein Discovery numeric field configuration.

Properties

Inherits properties from [Abstract​Field​Configuration](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm "The base Einstein Discovery field configuration.").

Inherited by [Numeric​Field​Configuration](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_numeric_field_configuration.htm "The numeric field configuration.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| bucketing​Strategy | Abstract​Bucketing​Strategy | The bucketing strategy for the field. Valid values are:Even​Width​Bucketing​StrategyManual​Bucketing​StrategyPercentile​Bucketing​Strategy | Small, 54.0 | 54.0 |
| impute​Strategy | Smart​Data​Discovery​Impute​Strategy | The impute strategy for the field. | Small, 54.0 | 54.0 |
| max | Double | The maximum value for the field. | Small, 54.0 | 54.0 |
| min | Double | The minimum value for the field. | Small, 54.0 | 54.0 |

## Related Topics

- Abstract​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm)
- Numeric​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_numeric_field_configuration.htm)
- Abstract​Bucketing​Strategy (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_bucketing_strategy.htm)
- Even​Width​Bucketing​Strategy (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_even_width_bucketing_strategy.htm)
- Manual​Bucketing​Strategy (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_manual_bucketing_strategy.htm)
- Percentile​Bucketing​Strategy (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_percentile_bucketing_strategy.htm)
- Smart​Data​Discovery​Impute​Strategy (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_impute_strategy.htm)

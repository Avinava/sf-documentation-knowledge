---
title: "Abstract Date Field Configuration"
domain: bi-dev-guide-rest-sdd
topic: abstract-date-field-configuration
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.547Z
estimatedTokens: 286
keywords: [Abstract, Date, Configuration, base, Einstein, Discovery]
---

# Abstract Date Field Configuration

> The base Einstein Discovery date field configuration.

# Abstract Date Field Configuration

The base Einstein Discovery date field configuration.

Properties

Inherits properties from [Abstract​Field​Configuration](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm "The base Einstein Discovery field configuration.").

Inherited by [Date​Field​Configuration](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_date_field_configuration.htm "The date field configuration.").

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| interval | Smart​Data​Discovery​Date​Interval​Enum | The date interval for the field. Valid values are:AutoDayMonthNoneQuarterYear | Small, 54.0 | 54.0 |
| max | Date | The maximum date value for the field. | Small, 54.0 | 54.0 |
| min | Date | The minimum date value for the field. | Small, 54.0 | 54.0 |
| periodic​Intervals | Smart​Data​Discovery​Periodic​Date​Interval​Enum[] | A list of the periodic date intervals for the field. Valid values are:Day_of_weekMonth_of_yearQuarter_of_year | Small, 54.0 | 54.0 |

## Related Topics

- Abstract​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_field_configuration.htm)
- Date​Field​Configuration (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_date_field_configuration.htm)

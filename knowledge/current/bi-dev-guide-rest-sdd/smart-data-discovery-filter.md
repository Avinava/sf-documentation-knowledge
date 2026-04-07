---
title: "Smart Data Discovery Filter"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-filter
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:59.586Z
estimatedTokens: 219
keywords: [Smart, Discovery, Filter, Einstein, select, model]
---

> An Einstein Discovery filter used to select a model.

# Smart Data Discovery Filter

An Einstein Discovery filter used to select a model.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| field​Name | String | The developer name of the field to apply the filter to. | Small, 41.0 | 41.0 |
| filter​Values | Smart​Data​Discovery​Filter​Value[] | An ordered list of values to be applied in the filter. | Small, 50.0 | 50.0 |
| operator | Connect​Smart​Data​Discovery​Filter​Operator​Enum | The operator to apply to this filter. Valid values are:BetweenContainsEnds​WithEqualGreater​ThanGreater​Than​Or​EqualIn​SetLess​ThanLess​Than​Or​EqualNot​BetweenNot​EqualNot​InStarts​With | Small, 54.0 | 54.0 |
| type | Smart​Data​Discovery​Filter​Field​Type​Enum | The filter field type. Valid values are:BooleanDateDate​TimeNumberText | Small, 48.0 | 48.0 |

## Related Topics

- Smart​Data​Discovery​Filter​Value (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_filter_value.htm)

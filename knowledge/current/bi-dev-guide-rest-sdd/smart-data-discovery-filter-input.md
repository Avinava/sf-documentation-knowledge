---
title: "Smart Data Discovery Filter Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.689Z
estimatedTokens: 215
keywords: [Smart, Discovery, Filter, Einstein]
---

> The filter input for Einstein Discovery.

# Smart Data Discovery Filter Input

The filter input for Einstein Discovery.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| field​Name | String | The developer name of the field the filter applies to. | Required | 41.0 |
| filter​Values | Smart​Data​Discovery​Filter​Value​Input[] | An ordered list of the values to compare with. | Required | 50.0 |
| operator | Connect​Smart​Data​Discovery​Filter​Operator​Enum | The operator to use in the filter. Valid values are:BetweenContainsEnds​WithEqualGreater​ThanGreater​Than​Or​EqualIn​SetLess​ThanLess​Than​Or​EqualNot​BetweenNot​EqualNot​InStarts​With | Required | 41.0 |
| type | ​Smart​Data​Discovery​Filter​Field​Type​Enum | The field type for the filter. Valid values are:BooleanDateDate​TimeNumberText | Required | 48.0 |

## Related Topics

- Smart​Data​Discovery​Filter​Value​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_filter_value_input.htm)

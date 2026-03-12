---
title: "Smart Data Discovery Text Transformation Filter Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-text-transformation-filter-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.308Z
estimatedTokens: 192
keywords: [Smart, Data, Discovery, Text, Transformation, Filter, Input]
---

# Smart Data Discovery Text Transformation Filter Input

> The input for a text transformation filter.

# Smart Data Discovery Text Transformation Filter Input

The input for a text transformation filter.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Transformation​Filter​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_filter_input.htm "The base Einstein Discovery transformation filter input.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| clusters | Smart​Data​Discovery​Cluster​Input[] | A list of clusters to filter the value with. | Required | 55.0 |
| include​Others | Boolean | Indicates weher to include values that aren't defined in clusters (true) or not (false). | Required | 55.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Transformation​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_filter_input.htm)
- Smart​Data​Discovery​Cluster​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_cluster_input.htm)

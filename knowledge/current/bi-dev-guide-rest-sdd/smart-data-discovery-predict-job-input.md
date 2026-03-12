---
title: "Smart Data Discovery Predict Job Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-predict-job-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.253Z
estimatedTokens: 218
keywords: [Smart, Data, Discovery, Predict, Job, Input, Einstein]
---

# Smart Data Discovery Predict Job Input

> The predict job input for Einstein Discovery.

# Smart Data Discovery Predict Job Input

The predict job input for Einstein Discovery.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| filter | Smart​Data​Discovery​Complex​Filter​Input | The filters to score a portion of the records. If no filters are specified, then all records are scored. If specified, use one type of filter, either useTerminalStateFilter or filters, but not both. | Optional | 48.0 |
| label | String | The label for the scoring job. | Required | 48.0 |
| prediction​Definition | Asset​Reference​Input | The ID of the prediction definition for the scoring job. | Required | 48.0 |
| use​Terminal​State​Filter | Boolean | Indicates whether the job should score any record NOT matching the terminal state filter on the goal (true) or not (false). | Optional | 49.0 |

## Related Topics

- Smart​Data​Discovery​Complex​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_complex_filter_input.htm)
- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_asset_reference_input.htm)

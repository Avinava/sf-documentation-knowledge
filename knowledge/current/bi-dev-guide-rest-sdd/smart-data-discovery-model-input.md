---
title: "Smart Data Discovery Model Input"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-model-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T09:03:12.225Z
estimatedTokens: 502
keywords: [Smart, Data, Discovery, Model, Input, Einstein]
---

# Smart Data Discovery Model Input

> The Einstein Discovery model to create or update.

# Smart Data Discovery Model Input

The Einstein Discovery model to create or update.

Properties

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| analysis | Asset​Reference​Input | The analysis connected with the given model. | Optional | 46.0 |
| classification​Threshold | Abstract​Classification​Threshold​Input | The classification threshold for the model. Valid values are:Binary​Classification​Threshold​Input | Required | 48.0 |
| customizable​Factors | Smart​Data​Discovery​Customizable​Field​Input[] | A list of customizable top factors for the model. | Optional | 57.0 |
| field​Mapping | Smart​Data​Discovery​Field​Mapping​Input[] | A list mapping the model fields to Salesforce fields. | Required | 48.0 |
| filter​List | Smart​Data​Discovery​Complex​Filter​Input[] | A list of filters used to determine whether a row can be evaluated by this model. | Required | 41.0 |
| is​Refresh​Enabled | Boolean | Indicates whether this model is included in the refresh schedule (true) or not (false). | Optional | 50.0 |
| label | String | The label of the model. | Required | 41.0 |
| model | Asset​Reference​Input | A ID for the associated AI model. | Required | 48.0 |
| name | String | The developer name of the model. | Small, 41.0 | 41.0 |
| prescribable​Fields | Smart​Data​Discovery​Prescribable​Field​Input[] | A list of the prescribable fields for the model. | Required | 48.0 |
| sort​Order | Integer | A unique number indicating the order in which this model's filters are evaluated compared to all other models in the parent prediction definition. | Required | 41.0 |
| status | Smart​Data​Discovery​Status​Enum | The status of the model. Valid values are:DisabledEnabled | Required | 46.0 |
| transformation​Overrides | Abstract​Smart​Data​Discovery​Prescribable​Field[] | A list of the transformation overrides for the model. Valid values are:Smart Data Discovery Projected Predictions Override Input | Required | 48.0 |

## Related Topics

- Asset​Reference​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_asset_reference_input.htm)
- Abstract​Classification​Threshold​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_classification_threshold_input.htm)
- Binary​Classification​Threshold​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_binary_classification_threshold_input.htm)
- Smart​Data​Discovery​Customizable​Field​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_customizable_field_input.htm)
- Smart​Data​Discovery​Field​Mapping​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_field_mapping_input.htm)
- Smart​Data​Discovery​Complex​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_complex_filter_input.htm)
- Smart​Data​Discovery​Prescribable​Field​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_prescribable_field_input.htm)
- Abstract​Smart​Data​Discovery​Prescribable​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_override_input.htm)
- Smart Data Discovery Projected Predictions Override Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_projected_predictions_override_input.htm)

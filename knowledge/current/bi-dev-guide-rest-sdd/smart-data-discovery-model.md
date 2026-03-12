---
title: "Smart Data Discovery Model"
domain: bi-dev-guide-rest-sdd
topic: smart-data-discovery-model
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:34:05.819Z
estimatedTokens: 677
keywords: [Smart, Data, Discovery, Model, Einstein]
---

# Smart Data Discovery Model

> An Einstein Discovery model.

# Smart Data Discovery Model

An Einstein Discovery model.

Properties

| Property Name | Type | Description | Filter Group and Version | Available Version |
| --- | --- | --- | --- | --- |
| classification​Threshold | Abstract​Classification​Threshold | The classification threshold for the model. Valid values are:Binary​Classification​Threshold | Small, 48.0 | 48.0 |
| created​By | Smart​Data​Discovery​User | The user who created the model. | Small, 41.0 | 41.0 |
| created​Date | Date | The creation date of the model. | Small, 41.0 | 41.0 |
| customizable​Factors | Smart​Data​Discovery​Customizable​Field[] | A list of customizable top factors for the model. | Small, 57.0 | 57.0 |
| field​Mapping​List | Smart​Data​Discovery​Field​Mapping[] | A list mapping the model fields to Salesforce fields. | Small, 48.0 | 48.0 |
| filters | Smart​Data​Discovery​Filter[] | A list of filters used to determine whether this model should be applied to a record. | Small, 41.0 | 41.0 |
| history​Url | String | The URL for the model history. | Small, 49.0 | 49.0 |
| id | String | The ID of the model. | Small, 41.0 | 41.0 |
| is​Refresh​Enabled | Boolean | Indicates whether this model is included in the refresh schedule (true) or not (false). | Small, 50.0 | 50.0 |
| label | String | The label of the model. | Small, 41.0 | 41.0 |
| last​Modified​By | Smart​Data​Discovery​User | The user who last modified the model. | Small, 41.0 | 41.0 |
| last​Modified​Date | Date | The last modified date of the model. | Small, 41.0 | 41.0 |
| model | Asset​Reference | A ID for the AI model. | Small, 48.0 | 48.0 |
| model​Type | String | The type of the model. | Small, 47.0 | 47.0 |
| name | String | The developer name of the model. | Small, 41.0 | 41.0 |
| prediction​Definition​Url | String | The URL to the prediction definition for the model. | Small, 41.0 | 41.0 |
| prescribable​Fields | Smart​Data​Discovery​Prescribable​Field[] | A list of the prescribable fields for the model. | Small, 48.0 | 48.0 |
| sort​Order | Integer | A unique number indicating the order in which this model's filters are evaluated compared to all other models in the parent prediction definition. | Small, 41.0 | 41.0 |
| status | Smart​Data​Discovery​Status​Enum | The status of the model. Valid values are:DisabledEnabled | Small, 46.0 | 46.0 |
| story | Asset​Reference | A story asset reference information. | Small, 52.0 | 52.0 |
| transformation​Overrides | Abstract​Smart​Data​Discovery​Transformation​Override[] | A list of the transformation overrides for the model. Valid values are:Smart Data Discovery Projected Predictions Override | Small, 55.0 | 55.0 |
| url | String | The URL for the model. | Small, 41.0 | 41.0 |

## Related Topics

- Abstract​Classification​Threshold (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_classification_threshold.htm)
- Binary​Classification​Threshold (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_binary_classification_threshold.htm)
- Smart​Data​Discovery​User (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_user.htm)
- Smart​Data​Discovery​Customizable​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_customizable_field.htm)
- Smart​Data​Discovery​Field​Mapping (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_field_mapping.htm)
- Smart​Data​Discovery​Filter (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_filter.htm)
- Asset​Reference (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_asset_reference.htm)
- Smart​Data​Discovery​Prescribable​Field (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_prescribable_field.htm)
- Abstract​Smart​Data​Discovery​Transformation​Override (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_abstract_smart_data_discovery_transformation_override.htm)
- Smart Data Discovery Projected Predictions Override (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_projected_predictions_override.htm)

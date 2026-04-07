---
title: "Abstract Smart Data Discovery Many To One Transformation Input"
domain: bi-dev-guide-rest-sdd
topic: abstract-smart-data-discovery-many-to-one-transformation-input
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-04-07T18:36:58.506Z
estimatedTokens: 330
keywords: [Abstract, Smart, Discovery, Transformation, base, identify]
---

> The base input to identify the transformation as many to one.

# Abstract Smart Data Discovery Many To One Transformation Input

The base input to identify the transformation as many to one.

Properties

Inherits properties from [Abstract​Smart​Data​Discovery​Transformation​Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_input.htm "The base Einstein Discovery transformation input.").

Inherited by [Smart Data Discovery Categorical Imputation Transformation Input](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_categorical_imputation_transformation_input.htm "The input to identify the transformation as categorical imputation.").

| Property Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| post​Transformation​Filter | Abstract​Smart​Data​Discovery​Transformation​Filter​Input | The filter applied after the transformation is executed. Valid values are:Smart​Data​Discovery​Numeric​Transformation​Filter​InputSmart​Data​Discovery​Text​Transformation​Filter​Input | Optional | 55.0 |
| source​Field​Names | String[] | A list of field names for the data to transform. | Required | 55.0 |
| target​Field​Name | String | The field name to write the transformed value to. | Required | 55.0 |

## Related Topics

- Abstract​Smart​Data​Discovery​Transformation​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_input.htm)
- Smart Data Discovery Categorical Imputation Transformation Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_categorical_imputation_transformation_input.htm)
- Abstract​Smart​Data​Discovery​Transformation​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_transformation_filter_input.htm)
- Smart​Data​Discovery​Numeric​Transformation​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_numeric_transformation_filter_input.htm)
- Smart​Data​Discovery​Text​Transformation​Filter​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_text_transformation_filter_input.htm)

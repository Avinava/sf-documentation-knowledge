---
title: "Predict Resource"
domain: bi-dev-guide-rest-sdd
topic: predict-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-04-07T09:03:12.528Z
estimatedTokens: 283
keywords: [Predict, Resource, Einstein, Discovery, prediction]
---

# Predict Resource

> Make an Einstein Discovery prediction.

# Predict Resource

Make an Einstein Discovery prediction.

Resource URL

```

```

Formats

JSON

Available Version

41.0

HTTP Methods

POST

Request body for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| discovery​Client | String | The discovery client. | Required | 41.0 |
| predict | Abstract​Smart​Data​Discovery​Predict​Input | The predict information. Valid values are:Smart​Data​Discovery​Predict​InputSmart​Data​Discovery​Predict​Raw​Data​InputSmart​Data​Discovery​Predict​Record​Overrides​InputSmart​Data​Discovery​Predict​Record​Input | Required | 41.0 |

Response body for POST

[Smart Data Discovery Predict List](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_list.htm "A list of Einstein Discovery predictions.")

Example

For use cases for requesting a prediction, see [Get Predictions](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict.htm "The Einstein Prediction Service provides a REST API endpoint to request a prediction.").

## Code Examples

```
/smartdatadiscovery/predict
```

## Related Topics

- Abstract​Smart​Data​Discovery​Predict​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_abstract_smart_data_discovery_predict_input.htm)
- Smart​Data​Discovery​Predict​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_input.htm)
- Smart​Data​Discovery​Predict​Raw​Data​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_raw_data_input.htm)
- Smart​Data​Discovery​Predict​Record​Overrides​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_overrides_input.htm)
- Smart​Data​Discovery​Predict​Record​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_record_input.htm)
- Smart Data Discovery Predict List (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_list.htm)
- Get Predictions (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_predict.htm)

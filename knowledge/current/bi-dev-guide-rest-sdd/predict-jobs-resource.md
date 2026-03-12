---
title: "Predict Jobs Resource"
domain: bi-dev-guide-rest-sdd
topic: predict-jobs-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.430Z
estimatedTokens: 395
keywords: [Predict, Jobs, Resource, collection, Einstein, Discovery, creates, job]
---

# Predict Jobs Resource

> Returns a collection of Einstein Discovery predict jobs and creates a predict job.

# Predict Jobs Resource

Returns a collection of Einstein Discovery predict jobs and creates a predict job.

Resource URL

```

```

Formats

JSON

Available Version

48.0

HTTP Methods

GET POST

Response body for GET

[Smart Data Discovery Predict Job Collection](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_job_collection.htm "A collection of Einstein Discovery predict jobs.")

Request body for POST

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| predict​Job | Smart​Data​Discovery​Predict​Job​Input | The predict job information. | Required | 48.0 |

Response body for POST

[Smart Data Discovery Predict Job](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_job.htm "An Einstein Discovery predict job.")

Example

For use cases for running a bulk scoring job, see [Manage Prediction Jobs](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_job.htm "The Einstein Prediction Service provides REST API endpoints to run bulk scoring jobs for a prediction. Bulk scoring jobs enable you to score predictions on multiple records at a time. For example, after deploying an updated model, use bulk scoring to refresh all prediction scores. You can also run bulk scoring on historical data to see how well your model performs. With bulk scoring, you can score all records, a segment of the records, or records that haven’t reached the terminal state.").

## Code Examples

```
/smartdatadiscovery/predict-jobs
```

## Related Topics

- Smart Data Discovery Predict Job Collection (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_job_collection.htm)
- Smart​Data​Discovery​Predict​Job​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_job_input.htm)
- Smart Data Discovery Predict Job (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_job.htm)
- Manage Prediction Jobs (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_job.htm)

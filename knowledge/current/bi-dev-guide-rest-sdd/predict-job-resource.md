---
title: "Predict Job Resource"
domain: bi-dev-guide-rest-sdd
topic: predict-job-resource
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.436Z
estimatedTokens: 245
keywords: [Predict, Job, Resource, Einstein, Discovery]
---

# Predict Job Resource

> Returns an Einstein Discovery predict job.

# Predict Job Resource

Returns an Einstein Discovery predict job.

Resource URL

```

```

Formats

JSON

Available Version

48.0

HTTP Methods

GET PATCH DELETE

Request parameters for GET and DELETE

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| predict​Job​Id | String | The ID of the predict job to retrieve or delete. | Required | 48.0 |

Response body for GET and PATCH

[Smart Data Discovery Predict Job](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_job.htm "An Einstein Discovery predict job.")

Request parameters for PATCH

| Parameter Name | Type | Description | Required or Optional | Available Version |
| --- | --- | --- | --- | --- |
| predict​Job | Smart​Data​Discovery​Predict​Job​Update​Input | The predict job to update. | Required | 49.0 |
| predict​Job​Id | String | The ID of the predict job to update. | Required | 49.0 |

## Code Examples

```
/smartdatadiscovery/predict-jobs/<predictJobId>
```

## Related Topics

- Smart Data Discovery Predict Job (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_responses_smart_data_discovery_predict_job.htm)
- Smart​Data​Discovery​Predict​Job​Update​Input (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_requests_smart_data_discovery_predict_job_update_input.htm)

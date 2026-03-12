---
title: "Predict Jobs Resources"
domain: bi-dev-guide-rest-sdd
topic: predict-jobs-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.439Z
estimatedTokens: 264
keywords: [Predict, Jobs, Resources, run, bulk, scoring, predictions, enable, multiple, records, time, deploying, updated, model, refresh]
---

# Predict Jobs Resources

> Predict jobs run bulk scoring jobs for predictions. Bulk scoring jobs enable scoring predictions on multiple records at a time. For example, after 
 deploying an updated model, use bulk scoring to refresh all prediction scores.

# Predict Jobs Resources

Predict jobs run bulk scoring jobs for predictions. Bulk scoring jobs enable scoring predictions on multiple records at a time. For example, after deploying an updated model, use bulk scoring to refresh all prediction scores.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Predict Jobs Resource | Returns a collection of Einstein Discovery predict jobs and creates a predict job. | GET POST | /smartdatadiscovery/predict-jobs |
| Predict Job Resource | Returns an Einstein Discovery predict job. | GET PATCH DELETE | /smartdatadiscovery/predict-jobs​/<predictJobId> |

-   **[Predict Jobs Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_predict_jobs.htm)**
    Returns a collection of Einstein Discovery predict jobs and creates a predict job.
-   **[Predict Job Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_predict_jobs_id.htm)**
    Returns an Einstein Discovery predict job.

## Related Topics

- Predict Jobs Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_predict_jobs.htm)
- Predict Job Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_predict_jobs_id.htm)

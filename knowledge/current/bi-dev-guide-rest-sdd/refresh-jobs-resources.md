---
title: "Refresh Jobs Resources"
domain: bi-dev-guide-rest-sdd
topic: refresh-jobs-resources
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:34:05.493Z
estimatedTokens: 384
keywords: [Refresh, Jobs, Resources, run, Einstein, Discovery, models]
---

# Refresh Jobs Resources

> Refresh jobs run refresh Einstein Discovery models.

# Refresh Jobs Resources

Refresh jobs run refresh Einstein Discovery models.

Available resources:

| Resource | Description | Supported HTTP Method | Resource URL |
| --- | --- | --- | --- |
| Refresh Jobs Resource | Returns a collection of Einstein Discovery refresh jobs. | GET | /smartdatadiscovery/refresh-jobs |
| Refresh Job Resource | Returns an Einstein Discovery refresh job. | GET | /smartdatadiscovery/refresh-jobs​/<refreshJobId> |
| Refresh Job Refresh Tasks Resource | Returns a collection of refresh tasks for an Einstein Discovery refresh job. | GET | /smartdatadiscovery/refresh-jobs​/<refreshJobId>​/refresh-tasks |

Examples

For use cases to manage refresh jobs, see [Manage Model Refresh Jobs](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_refresh_job.htm "The Einstein Prediction Service provides REST API endpoints to retrieve metadata for model refresh jobs.").

-   **[Refresh Jobs Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_refresh_jobs.htm)**
    Returns a collection of Einstein Discovery refresh jobs.
-   **[Refresh Job Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_refresh_jobs_id.htm)**
    Returns an Einstein Discovery refresh job.
-   **[Refresh Job Refresh Tasks Resource](atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_refresh_jobs_id_refresh_tasks.htm)**
    Returns a collection of refresh tasks for an Einstein Discovery refresh job.

## Related Topics

- Refresh Jobs Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_refresh_jobs.htm)
- Refresh Job Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_refresh_jobs_id.htm)
- Refresh Job Refresh Tasks Resource (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_sdd_resources_refresh_jobs_id_refresh_tasks.htm)
- Manage Model Refresh Jobs (atlas.en-us.bi_dev_guide_rest_sdd.meta/bi_dev_guide_rest_sdd/bi_edd_prediction_service_refresh_job.htm)

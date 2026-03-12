---
title: "Job States"
domain: api-asynch
topic: job-states
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.378Z
estimatedTokens: 329
keywords: [Job, States, requests, Bulk, API, 2.0, Salesforce, “state”, describe, progress, outcome, how, check, interpret, status]
---

# Job States

> When you create job requests with Bulk API 2.0, Salesforce provides a job “state” to
  describe the progress or outcome of the job. Learn how to check and interpret each
  status.

# Job States

When you create job requests with Bulk API 2.0, Salesforce provides a job “state” to describe the progress or outcome of the job. Learn how to check and interpret each status.

You can manually [Check the status of the job](atlas.en-us.api_asynch.meta/api_asynch/get_job_info.htm#get_job_info "Retrieves detailed information about a job."), or you can view job state from within the Salesforce UI. From Setup, in the Quick Find box, enter Bulk Data Load Jobs, and then select **Bulk Data Load Jobs**. The following table summarizes Bulk API 2.0 job states during job creation and processing.

| Job Phase | State | Description |
| --- | --- | --- |
| Creation | Open | An ingest job was created and is open for data uploads. |
| Creation | UploadComplete | (Ingest) All job data has been uploaded and the job is ready to be processed.(Query) The job is ready to be processed. |
| Processing | InProgress | The job is being processed by Salesforce. Operations include automatic, optimized batching or chunking of job data, and processing of job operations. |
| Outcome | JobComplete | The job was processed. |
| Outcome | Failed | The job couldn’t be processed successfully. |
| Outcome | Aborted | The job was canceled by the job creator, or by a user with the “Manage Data Integrations” permission. |

## Related Topics

- Check the status of the job (atlas.en-us.api_asynch.meta/api_asynch/get_job_info.htm)

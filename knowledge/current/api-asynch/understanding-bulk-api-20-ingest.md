---
title: "Understanding Bulk API 2.0 Ingest"
domain: api-asynch
topic: understanding-bulk-api-20-ingest
apiVersion: 67.0
release: summer-26-v67
docType: concept
lastCollected: 2026-03-12T09:33:59.454Z
estimatedTokens: 402
keywords: [Understanding, Bulk, API, 2.0, Ingest, availability, SOQL, considerations]
---

# Understanding Bulk API 2.0 Ingest

> Learn about Bulk API 2.0 availability, supported methods, and SOQL
  considerations.

# Understanding Bulk API 2.0 Ingest

Learn about Bulk API 2.0 availability, supported methods, and SOQL considerations.

While processing ingest jobs, Salesforce Bulk API 2.0 automatically divides your job’s data into multiple "batches" to improve performance. There is always an empty “parent” batch which is related to the initial upload, followed by sub-batches for processing the upload in parallel.

Salesforce creates a separate batch for every 10,000 records in your job data, up to a daily maximum of 150,000,000 records. If the limit is exceeded while processing your job data, the remaining data isn’t processed. The ingest job is marked as having failed.

Just as a job can fail, so can an individual batch. If Salesforce can’t process all the records in a batch within 5 minutes, the batch fails. Salesforce automatically retries failed batches up to a maximum of 20 times. If the batch still can’t be processed after 20 retries, the entire ingest job is moved to the Failed state and remaining job data isn’t processed.

If there’s a failure, create a new ingest job to process the records that weren’t processed.

To determine what records weren’t processed and what errors occurred, use the [Failed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_failed_results.htm#get_job_failed_results "Retrieves a list of failed records for a completed insert, delete, update, or upsert job.") and [Get Job Unprocessed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm "Retrieves a list of unprocessed records for failed or aborted jobs.") resources.

## Related Topics

- Failed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_failed_results.htm)
- Get Job Unprocessed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)

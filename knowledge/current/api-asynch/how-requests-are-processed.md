---
title: "How Requests Are Processed"
domain: api-asynch
topic: how-requests-are-processed
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.508Z
estimatedTokens: 384
keywords: [How, Requests, Processed, Bulk, API, 2.0, ingest, jobs, allow, upload, records, org, CSV, file, representation]
---

# How Requests Are Processed

> Bulk API 2.0 ingest jobs allow you to upload records to your org by using a CSV file
  representation. Bulk API 2.0 query jobs return records based on the specified query. A Bulk API
  2.0 job specifies which object is being processed (for example, Account or Opportunity) and what
  type of action is being used (insert, upsert, update, or delete). You process a set of records by
  creating a job that contains one or more batches.

# How Requests Are Processed

Bulk API 2.0 ingest jobs allow you to upload records to your org by using a CSV file representation. Bulk API 2.0 query jobs return records based on the specified query. A Bulk API 2.0 job specifies which object is being processed (for example, Account or Opportunity) and what type of action is being used (insert, upsert, update, or delete). You process a set of records by creating a job that contains one or more batches.

-   **[Job States](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_job_states.htm)**
    When you create job requests with Bulk API 2.0, Salesforce provides a job “state” to describe the progress or outcome of the job. Learn how to check and interpret each status.

#### See Also

-   [Bulk API 2.0 Older Documentation](https://developer.salesforce.com/docs/atlas.en-us.api_bulk_v2.meta/api_bulk_v2/introduction_bulk_api_2.htm "Bulk API 2.0 Older Documentation - html (New Window)")

-   [Limits](atlas.en-us.api_asynch.meta/api_asynch/bulk_common_limits.htm "Learn about the importance of limits, and compare the limits and allocations of Bulk API 2.0 and Bulk API. For Bulk API 2.0, we simplified limits, which are available to clients via the REST API /limits endpoint.")

-   [*Set Up and Maintain Your Salesforce Organization*: Manage Bulk Data Load Jobs](https://help.salesforce.com/s/articleView?id=xcloud.monitoring_async_api_jobs_overview.htm&type=5&language=en_US "Set Up and Maintain Your Salesforce Organization: Manage Bulk Data Load
    Jobs - HTML (New Window)")

## Related Topics

- Job States (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_job_states.htm)
- Limits (atlas.en-us.api_asynch.meta/api_asynch/bulk_common_limits.htm)

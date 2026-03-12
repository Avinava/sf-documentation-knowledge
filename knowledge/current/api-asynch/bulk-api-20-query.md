---
title: "Bulk API 2.0 Query"
domain: api-asynch
topic: bulk-api-20-query
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.523Z
estimatedTokens: 711
keywords: [Bulk, API, 2.0, Query, jobs, enable, asynchronous, processing, SOQL, queries, They’re, designed, handle, large, amounts]
---

# Bulk API 2.0 Query

> Bulk query jobs enable asynchronous processing of SOQL queries. They’re designed to
                handle queries that return large amounts of data (2,000 records or
                more).

# Bulk API 2.0 Query

Bulk query jobs enable asynchronous processing of SOQL queries. They’re designed to handle queries that return large amounts of data (2,000 records or more).

Bulk API 2.0 query limits are described in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm) in the *Salesforce Developer Limits and Allocations Quick Reference*.

-   **[Understanding Bulk API 2.0 Query](atlas.en-us.api_asynch.meta/api_asynch/queries.htm)**
    Learn about Bulk API 2.0 query availability, supported methods, and SOQL considerations.
-   **[Create a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_create_job.htm)**
    Creates a query job.
-   **[Get Information About a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_get_one_job.htm)**
    Gets information about one query job.
-   **[Get Results for a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm)**
    Gets the results for a query job. The job must have the state JobComplete.
-   **[Get Parallel Results for a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_get_parallel_job_results.htm)**
    Returns up to five URIs in one response to use to get results for a query job. The job must have the state jobComplete.
-   **[Subscribe to Query Job Platform Events (Beta)](atlas.en-us.api_asynch.meta/api_asynch/subscribe_platform_events_beta.htm)**
    Use the standard platform event BulkApi2JobEvent to get query job status updates and begin downloading results before the query job completes.
-   **[Delete a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_delete_job.htm)**
    Deletes a query job. When a job is deleted, job data stored by Salesforce is deleted and job metadata information is removed. The job no longer displays in the Bulk Data Load Jobs page in Salesforce.
-   **[Abort a Query Job](atlas.en-us.api_asynch.meta/api_asynch/query_abort_job.htm)**
    Aborts a query job.
-   **[Get Information About All Query Jobs](atlas.en-us.api_asynch.meta/api_asynch/query_get_all_jobs.htm)**
    Gets information about all query jobs in the org. The information includes Bulk API 2.0 query jobs and all Bulk API jobs. Job records are returned in an indeterminate order.
-   **[Use Compression for Bulk API 2.0 Query Responses](atlas.en-us.api_asynch.meta/api_asynch/query_compression.htm)**
    For query jobs, Bulk API 2.0 can compress the *response body*, which reduces network traffic and improves response time.
-   **[Troubleshooting Query Timeouts](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_troubleshoot_query_timeouts.htm)**
    To troubleshoot timeout errors in Bulk API 2.0 query operations, apply additional filter criteria.

## Related Topics

- Understanding Bulk API 2.0 Query (atlas.en-us.api_asynch.meta/api_asynch/queries.htm)
- Create a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_create_job.htm)
- Get Information About a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_get_one_job.htm)
- Get Results for a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_get_job_results.htm)
- Get Parallel Results for a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_get_parallel_job_results.htm)
- Subscribe to Query Job Platform Events (Beta) (atlas.en-us.api_asynch.meta/api_asynch/subscribe_platform_events_beta.htm)
- Delete a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_delete_job.htm)
- Abort a Query Job (atlas.en-us.api_asynch.meta/api_asynch/query_abort_job.htm)
- Get Information About All Query Jobs (atlas.en-us.api_asynch.meta/api_asynch/query_get_all_jobs.htm)
- Use Compression for Bulk API 2.0 Query Responses (atlas.en-us.api_asynch.meta/api_asynch/query_compression.htm)

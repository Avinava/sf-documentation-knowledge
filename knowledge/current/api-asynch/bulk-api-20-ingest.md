---
title: "Bulk API 2.0 Ingest"
domain: api-asynch
topic: bulk-api-20-ingest
apiVersion: 67.0
release: summer-26-v67
docType: api-reference
lastCollected: 2026-03-12T09:33:59.356Z
estimatedTokens: 1039
keywords: [Bulk, API, 2.0, Ingest, insert, upsert, large, data, Prepare, comma-separated, CSV, file, representation, want, upload]
---

# Bulk API 2.0 Ingest

> With Bulk API 2.0, you can insert, update, upsert, or delete large data sets. Prepare a
    comma-separated value (CSV) file representation of the data you want to upload, create a job,
    upload job data, and let Salesforce take care of the rest within your org.

# Bulk API 2.0 Ingest

With Bulk API 2.0, you can insert, update, upsert, or delete large data sets. Prepare a comma-separated value (CSV) file representation of the data you want to upload, create a job, upload job data, and let Salesforce take care of the rest within your org.

Use CSV data when submitting data rows for Bulk API 2.0 jobs. Bulk API 2.0 supports several formatting options with CSV data, such as multiple field delimiter characters and line ending characters. Bulk API 2.0 ingest limits are described in [Bulk API and Bulk API 2.0 Limits and Allocations](https://developer.salesforce.com/docs/atlas.en-us.260.0.salesforce_app_limits_cheatsheet.meta/salesforce_app_limits_cheatsheet/salesforce_app_limits_platform_bulkapi.htm) in the *Salesforce Developer Limits and Allocations Quick Reference*.

-   **[Understanding Bulk API 2.0 Ingest](atlas.en-us.api_asynch.meta/api_asynch/datafiles_understanding_bulk2_ingest.htm)**
    Learn about Bulk API 2.0 availability, supported methods, and SOQL considerations.
-   **[Prepare Data to Ingest](atlas.en-us.api_asynch.meta/api_asynch/datafiles_prepare_data.htm)**
    Format and organize your CSV files for upload.
-   **[Create a Job](atlas.en-us.api_asynch.meta/api_asynch/create_job.htm)**
    Creates a job representing a bulk operation and its associated data that is sent to Salesforce for asynchronous processing. Provide job data via an **Upload Job Data** request or as part of a multipart create job request.
-   **[Upload Job Data](atlas.en-us.api_asynch.meta/api_asynch/upload_job_data.htm)**
    Uploads data for a job using CSV data you provide.
-   **[Upload Complete](atlas.en-us.api_asynch.meta/api_asynch/close_job.htm)**
    Notifies Salesforce servers that the upload of job data is complete and is ready for processing. You can’t add any more job data. This request is required for every Bulk API 2.0 ingest job. If you don't make this request, processing of your data does not start.
-   **[Get Information About an Ingest Job](atlas.en-us.api_asynch.meta/api_asynch/get_job_info.htm)**
    Retrieves detailed information about a job.
-   **[Get Job Successful Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_successful_results.htm)**
    Retrieves a list of successfully processed records for a completed job.
-   **[Get Job Failed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_failed_results.htm)**
    Retrieves a list of failed records for a completed insert, delete, update, or upsert job.
-   **[Get Job Unprocessed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)**
    Retrieves a list of unprocessed records for failed or aborted jobs.
-   **[Delete a Job](atlas.en-us.api_asynch.meta/api_asynch/delete_job.htm)**
    Deletes a job. To be deleted, a job must have a state of UploadComplete, JobComplete, Aborted, or Failed.
-   **[Abort a Job](atlas.en-us.api_asynch.meta/api_asynch/abort_job.htm)**
    If you abort a job, Salesforce doesn’t process the job.
-   **[Get Information About All Ingest Jobs](atlas.en-us.api_asynch.meta/api_asynch/get_all_jobs.htm)**
    Retrieves detailed information about all jobs in the org. Job records are returned in an indeterminate order.
-   **[Upsert Records](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_upsert.htm)**
    Create records or update existing records (upsert) based on an ID, or the value of a specified external ID field.
-   **[Use Compression for Bulk API 2.0 Ingest Responses](atlas.en-us.api_asynch.meta/api_asynch/datafiles_use_compression.htm)**
    For ingest jobs, Bulk API 2.0 can compress the *response body*, which reduces network traffic and improves response time.
-   **[Troubleshooting Ingest Timeouts](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_troubleshooting_timeouts.htm)**
    Solve issues encountered with Bulk API 2.0 ingest operations.
-   **[Errors](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_errors.htm)**
    Operations that you perform with Bulk API 2.0 can trigger error codes. This list shows the most common error codes and the Bulk API 2.0 action that possibly triggered them.

## Related Topics

- Understanding Bulk API 2.0 Ingest (atlas.en-us.api_asynch.meta/api_asynch/datafiles_understanding_bulk2_ingest.htm)
- Prepare Data to Ingest (atlas.en-us.api_asynch.meta/api_asynch/datafiles_prepare_data.htm)
- Create a Job (atlas.en-us.api_asynch.meta/api_asynch/create_job.htm)
- Upload Job Data (atlas.en-us.api_asynch.meta/api_asynch/upload_job_data.htm)
- Upload Complete (atlas.en-us.api_asynch.meta/api_asynch/close_job.htm)
- Get Information About an Ingest Job (atlas.en-us.api_asynch.meta/api_asynch/get_job_info.htm)
- Get Job Successful Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_successful_results.htm)
- Get Job Failed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_failed_results.htm)
- Get Job Unprocessed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)
- Delete a Job (atlas.en-us.api_asynch.meta/api_asynch/delete_job.htm)

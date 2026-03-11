---
title: "Bulk Ingestion"
domain: data-cloud
topic: bulk-ingestion
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-11T15:17:42.074Z
keywords: [Bulk, Ingestion, Jobs, Operations, Prepare, CSV, Files, Example, Valid, Date, Format, Records, See]
---

# Bulk Ingestion

# Bulk Ingestion

With the Data Cloud Ingestion API, you can upsert or delete large data sets. Prepare a CSV file for the data you want to upload, create a job, upload job data, and let Salesforce take care of the rest.

## Bulk Jobs and Operations

The Ingestion API upserts or deletes data in Data Cloud using jobs. A bulk job typically goes through following stages:

-   Create a job to specify the object type of the data being processed and the operation that’s performed on the data. The operations supported are upserting bulk data or deleting bulk data.
-   After the job is created upload data in CSV format to the job.
-   To signal the data is ready to be processed, close the job. You can choose to abort the job if necessary.
-   Monitor the progress of the job and act on any failed records.
-   Delete a job.

## Prepare CSV Files

Lists the field names for the object that you're processing in the first row in the CSV file. Each subsequent row corresponds to a record in your Data Cloud data lake. All the records in a CSV file must be for the same object. You specify this object when you first create the job.

-   Include all required fields when you create a record.
-   Each field-name header in the file must be the same as the Datasource Object's field names. Results only include columns that are a match.
-   Updating records works as a full replace. Patch semantics aren’t supported.
-   Files must be in UTF-8 format. Upload data must not exceed 150 MB.
-   CSV files are expected to be formatted according to RFC 4180, Common Format, and MIME Type for CSV Files.
-   Only supports comma field delimiters.
-   Empty field values are set to null.

## Example

```

```

## Valid Date Format in Records

The Ingestion API supports ISO 8601 UTC with Zulu format.

-   Use the yyyy-MM-dd format to specify date values. For example, in 2021-07-05
    -   yyyy is the four-digit year
    -   MM is the two-digit month
    -   dd is the two-digit day
-   Use the yyyy-MM-ddTHH:mm:ss.SSSZ format to specify dateTime fields. For example, 2021-07-05T09:31:44.457Z
    -   yyyy is the four-digit year
    -   MM is the two-digit month
    -   dd is the two-digit day
    -   'T' is a separator indicating that time-of-day follows
    -   HH is the two-digit hour
    -   mm is the two-digit minute
    -   ss is the two-digit seconds
    -   SSS is the optional three-digit milliseconds (000=999)
    -   'Z' is the reference UTC timezone

-   **[Create a Job](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_create_a_job.htm)**  
    Creates a job that represents the bulk operation for loading data into the Data Cloud org.
-   **[Upload Job Data](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_upload_job_data.htm)**  
    Uploads CSV data for the job to process. A job can consist of up to 100 data files. After all of the data has been uploaded, close the job to indicate the data is ready to be processed.
-   **[Close or Abort a Job](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_close_or_abort_a_job.htm)**  
    Close a job by updating the job state to UploadComplete. When you close a job, the uploaded data is enqueued for processing. To abort a job, update the job state to Aborted. If you abort a job, the job doesn’t get queued or processed. Any data uploaded as part of the aborted job is deleted.
-   **[Delete a Job](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_delete_a_job.htm)**  
    To delete, a job must have a state of UploadComplete, JobComplete, Aborted, or Failed. When you delete a job, the stored job data is also deleted and its metadata is removed.
-   **[Get Job Info](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_job_info.htm)**  
    Retrieves detailed information about the specified job.
-   **[Get All Jobs](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_all_jobs.htm)**  
    Retrieves all jobs in Data Cloud.

#### See Also

-   [*Data Cloud Reference Guide*: Get Started with Ingestion API](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_api_get_started.htm "Before using Ingestion API in Data Cloud, complete the prerequisites, set up authentication, and know the limits that apply to bulk ingestion and streaming ingestion.")
    
-   [*Data Cloud Reference Guide*: Get Started](atlas.en-us.252.0.c360a_api.meta/c360a_api/c360a_getting_started_with_cdp.htm "Use this section to understand the prerequisites required to get started with Data Cloud API libraries and SDKs.")
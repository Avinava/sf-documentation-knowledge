---
title: "Step 4: Bulk Insert with a Multipart Request"
domain: api-asynch
topic: step-4-bulk-insert-with-a-multipart-request
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.611Z
estimatedTokens: 527
keywords: [Step, Bulk, Insert, Multipart, API, 2.0, guides, creating, job, uploading, data, checking, status, retrieving, results]
---

# Step 4: Bulk Insert with a Multipart Request

> This Bulk API 2.0 example guides you through creating a job, uploading data for the
        job, checking the status, and retrieving the results. This example uses a single, multipart
        request to create the job and upload the data.

# Step 4: Bulk Insert with a Multipart Request

This Bulk API 2.0 example guides you through creating a job, uploading data for the job, checking the status, and retrieving the results. This example uses a single, multipart request to create the job and upload the data.

In this example, BOUNDARY is used at the start, middle, and end of the file to mark the request body boundaries between the job’s details and its CSV data.

1.  Copy this multipart, JSON-formatted content into a file named newmultipartjob.json.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    Save all files in this example in your terminal’s current working directory.

    ```

    ```

2.  Create a job.

    **URI**

    ```

    ```

    **Example of creating a job**

    ```

    ```

    The response includes the job id, with a job state of UploadComplete. You use the job id in the next steps.

    **Example response body**

    ```

    ```

    After you create a multipart job, the upload is completed for you automatically. You don’t need to manually set the job state to UploadComplete for a multipart job.

3.  Check the job status and results with this URI.

    **URI**

    ```

    ```

    **Example of checking job status and results**

    ```

    ```

    **Example response body**

    ```

    ```

4.  Get successful results.

    After a job is in the JobComplete or Failed state, you can get details about which records were successfully processed.

    **URI**

    ```

    ```

    **Example of getting successful results**

    ```

    ```

    **Example response body**

    ```

    ```

    To get details about records that encountered an error during processing, use a GET request with the failedResults resource. To make sure that you’re looking at the complete result set, look at unprocessed records by using the unprocessedRecords resource. See [Get Job Unprocessed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm "Retrieves a list of unprocessed records for failed or aborted jobs.").

## Code Examples

```
--BOUNDARY
Content-Type: application/json
Content-Disposition: form-data; name="job"

{
  "object":"Contact",
  "contentType":"CSV",
  "operation": "insert",
  "lineEnding" : "LF"
}

--BOUNDARY
Content-Type: text/csv
Content-Disposition: form-data; name="content"; filename="content"

FirstName,LastName,MailingCity
Astro,Nomical,San Francisco
Hootie,McOwl,San Francisco
Appy,Camper,San Francisco
Earnie,Badger,San Francisco
--BOUNDARY--
```

```
/services/data/v66.0/jobs/ingest/
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/jobs/ingest/ -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' -H "Content-Type: multipart/form-data; boundary="BOUNDARY"" -H "Accept: application/json" -H "X-PrettyPrint:1" --data-binary @newmultipartjob.json -X POST
```

```
{
  "id" : "7303gEXAMPLE4X2QAN",
  "operation" : "insert",
  "object" : "Contact",
  "createdById" : "0055fEXAMPLEtG4AAM",
  "createdDate" : "2022-01-02T19:26:52.000+0000",
  "systemModstamp" : "2022-01-02T19:26:52.000+0000",
  "state" : "UploadComplete",
  "concurrencyMode" : "Parallel",
  "contentType" : "CSV",
  "apiVersion" : 66.0,
  "lineEnding" : "LF",
  "columnDelimiter" : "COMMA"
}
```

```
/services/data/v66.0/jobs/ingest/jobId/
```

## Related Topics

- Get Job Unprocessed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)

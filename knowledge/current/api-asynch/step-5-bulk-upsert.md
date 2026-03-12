---
title: "Step 5: Bulk Upsert"
domain: api-asynch
topic: step-5-bulk-upsert
apiVersion: 67.0
release: summer-26-v67
docType: help-article
lastCollected: 2026-03-12T09:33:59.618Z
estimatedTokens: 1025
keywords: [Step, Bulk, Upsert, API, 2.0, guides, creating, job, uploading, data, notifying, Salesforce, servers, upload, checking]
---

# Step 5: Bulk Upsert

> This Bulk API 2.0 example guides you through creating a job, uploading data for the
        job, notifying Salesforce servers that your upload(s) are complete, checking the status, and
        retrieving the results. Some of the records exist (update), and some are new records
        (insert).

# Step 5: Bulk Upsert

This Bulk API 2.0 example guides you through creating a job, uploading data for the job, notifying Salesforce servers that your upload(s) are complete, checking the status, and retrieving the results. Some of the records exist (update), and some are new records (insert).

1.  Confirm that your object is using an external ID field.

    Upserting records requires an external ID field on the object involved in the job. Bulk API 2.0 uses the external ID field to determine whether a record is used to update an existing record or create a record.

    This example assumes that the external ID field customExtIdField\_\_c has been added to the Account object.

    To add this custom field in your org with Object Manager, use these properties.

    -   Data Type—**text**
    -   Field Label—**customExtIdField**
    -   Select **External ID**

    For more information, see [Custom Fields](https://help.salesforce.com/s/articleView?id=platform.adding_fields.htm&type=5&language=en_US) in Salesforce Help.

2.  Create a CSV file containing the records that you want to upsert.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    Save all files in this example in your terminal’s current working directory.

    The first row of the CSV file lists the field names for the object that you’re working with. Each subsequent row corresponds to a record that you want to insert.

    One column in the CSV file must correspond to the external ID field customExtIdField\_\_c.

    For information on preparing CSV files, such as delimiter options and valid date and time formats, see [Bulk API 2.0 Ingest](atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_ingest.htm "With Bulk API 2.0, you can insert, update, upsert, or delete large data sets. Prepare a comma-separated value (CSV) file representation of the data you want to upload, create a job, upload job data, and let Salesforce take care of the rest within your org.").

    For this example, copy this information into a file named accountupsert.csv.

    ```

    ```

3.  Create a job that includes the external ID field.

    Copy this information into a file named newupsertjob.json.

    ```

    ```

    **URI**

    ```

    ```

    **Example for creating a bulk upsert job**

    ```

    ```

    **Example response body**

    The response includes the job ID, with a job state of Open. Use the job ID and the URL in the contentUrl field in the next step when you upload your data.

    ```

    ```

4.  Upload the CSV data file that you created.

    **URI**

    For convenience, use the URI in the contentUrl field of the response from step 1. The URI is similar to:

    ```

    ```

    **Example for uploading data**

    ```

    ```

    **Example response body**

    No response body is returned.

5.  Set state to UploadComplete.

    After you’re done submitting data, notify Salesforce servers that the upload of job data is complete and is ready for processing.

    Create a JSON file named upload\_complete.json with the contents:

    ```

    ```

    **URI**

    /services/data/v66.0/jobs/ingest/jobId/

    **Example of setting state to UploadComplete**

    ```

    ```

    **Example response body**

    ```

    ```

6.  Get successful results.

    After a job is in the JobComplete or Failed state, you can get details about which job data records were successfully processed.

    **URI**

    ```

    ```

    **Example of getting successful results**

    ```

    ```

    The response contains CSV formatted data, with each row containing a record ID of successfully processed records.

    **Example response body**

    ```

    ```

    To get details about records that encountered an error, use the failedResults resource. To make sure that you’re looking at the complete result set, use the unprocessedRecords resource. See [Get Job Unprocessed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm "Retrieves a list of unprocessed records for failed or aborted jobs.").

## Code Examples

```
customExtIdField__c,name,NumberOfEmployees
123,GenePoint,800
234,"United Oil & Gas, UK",1467
345,"United Oil & Gas, Singapore",348
456,Edge Communications,10045
567,Burlington Textiles Corp of America,5876
678,Dickenson plc,67
789,Grand Hotels & Resorts Ltd,409
890,Express Logistics and Transport,243
901,University of Arizona,9506
1350,United Oil & Gas Corp.,5467
1579,sForce,40000
2690,University of The Terrific,1257
```

```
{
    "object" : "Account",
    "externalIdFieldName" : "customExtIdField__c",
    "contentType" : "CSV",
    "operation" : "upsert",
    "lineEnding" : "LF"
}
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/jobs/ingest/ -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' -H "Content-Type: application/json" -H "X-PrettyPrint:1" -d @newupsertjob.json -X POST
```

```
{
  "id" : "7476gEXAMPLE4X2ZWO",
  "operation" : "upsert",
  "object" : "Account",
  "createdById" : "0055fEXAMPLEtG4AAM",
  "createdDate" : "2022-01-02T21:57:03.000+0000",
  "systemModstamp" : "2022-01-02T21:57:03.000+0000",
  "state" : "Open",
  "externalIdFieldName" : "customExtIdField__c",
  "concurrencyMode" : "Parallel",
  "contentType" : "CSV",
  "apiVersion" : 66.0,
  "contentUrl" : "services/data/66.0/jobs/ingest/7476gEXAMPLE4X2ZWO/batches",
  "lineEnding" : "LF",
  "columnDelimiter" : "COMMA"
}
```

```
/services/data/v66.0/jobs/ingest/jobId/batches/
```

## Related Topics

- Bulk API 2.0 Ingest (atlas.en-us.api_asynch.meta/api_asynch/bulk_api_2_0_ingest.htm)
- Get Job Unprocessed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)

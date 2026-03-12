---
title: "Step 3: Bulk Insert"
domain: api-asynch
topic: step-3-bulk-insert
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.607Z
estimatedTokens: 1035
keywords: [Step, Bulk, Insert, API, 2.0, guides, creating, job, uploading, data, notifying, Salesforce, servers, upload, checking]
---

# Step 3: Bulk Insert

> This Bulk API 2.0 example guides you through creating a job, uploading data for the
        job, notifying Salesforce servers that your upload(s) are complete, checking the status of
        the processing job, and retrieving the results.

# Step 3: Bulk Insert

This Bulk API 2.0 example guides you through creating a job, uploading data for the job, notifying Salesforce servers that your upload(s) are complete, checking the status of the processing job, and retrieving the results.

To do any Bulk API 2.0 task, such as inserting or updating records, you first create a Bulk API 2.0 job. The job specifies the type of object that you’re loading, such as Account, and the operation that you’re performing, such as insert or delete. After you create the job, you use the resulting job ID in subsequent Bulk API 2.0 requests to upload job data or abort (cancel) the job.

1.  Copy this CSV formatted list of accounts into a file named bulkinsert.csv. You use this file to upload data after creating the job.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    Save all files in this example in your terminal’s current working directory.

    The first row of the CSV file lists the field names for the object that you’re working with. Each subsequent row corresponds to a record that you want to insert.

    ```

    ```

2.  Create a job.
    1.  Create a file named newinsertjob.json.
    2.  Copy this content into the file.

        ```

        ```

        When you create a Bulk API 2.0 job, specify a line ending that matches the line ending used to create the CSV file using the lineEnding request field. Bulk API 2.0 supports two line-ending formats: linefeed (LF), and carriage-return plus linefeed (CRLF). The default line ending, if not specified, is LF. Different operating systems use different characters to mark the end of a line.

        Unix / Linux / OS X uses LF (line feed, ' ', 0x0A).

        Windows / DOS uses CRLF (carriage return followed by line feed, '\\r ', 0x0D0A).

        It’s also possible that the text editor used to create the CSV file is configured for a specific line-ending format that supersedes the default operating system format.

        **URI**

        ```

        ```

        **Example for creating a bulk insert job**

        ```

        ```

        **Example response body**

        The response includes the job id, with a job state of Open.

        ```

        ```

        You use the job id from this response in the next steps. You can also use the URI in the contentUrl field in the next step when you upload your data.

3.  Upload your CSV data using the URI in the contentUrl field of the response.

    You can upload up to 150 MB per job (after base64 encoding).

    The URI is similar to

    ```

    ```

    **Example for uploading data**

    ```

    ```

    **Example response body**

    No response body.

4.  Set job state to UploadComplete.

    After you’re done submitting data, notify Salesforce servers that the upload of job data is complete and is ready for processing.

    **URI**

    ```

    ```

    **Example of setting state to UploadComplete**

    ```

    ```

    **Example response body**

    ```

    ```

5.  Check the job status and results.

    **URI**

    ```

    ```

    **Example of checking job status**

    ```

    ```

    **Example response body**

    ```

    ```

6.  Get successful results.

    After a job is in the JobComplete or Failed state, you can get details about which records were successfully processed.

    **URI**

    ```

    ```

    **Example of getting successful results**

    ```

    ```

    The response contains CSV formatted data, with each row containing a record ID (sf\_\_Id) and information on whether that record was successfully processed or not (sf\_\_Created).

    **Example response body**

    ```

    ```

    To get details about records that encountered an error during processing, use a GET request using the failedResults resource. To make sure that you’re looking at the complete result set, look at unprocessed records by using the unprocessedRecords resource. See [Get Job Unprocessed Record Results](atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm "Retrieves a list of unprocessed records for failed or aborted jobs.").

## Code Examples

```
Name,ShippingCity,NumberOfEmployees,AnnualRevenue,Website,Description
Lorem Ipsum,Milano,2676,912260031,https://ft.com/lacus/at.jsp,"Lorem ipsum dolor sit amet"
Posuere Inc,Bodø,141603,896852810,http://webs.com/in/faucibus/orci/luctus/et/ultrices/posuere.json,"consectetur adipiscing elit"
Angeles Urban,Aykol,197724,257060529,http://odnoklassniki.ru/sapien.aspx,"sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
Madaline Neubert Shoes,Xukou,190305,71664061,https://blogs.com/faucibus/orci/luctus/et/ultrices/posuere/cubilia.json,"Ut enim ad minim veniam"
Times Online UK,Varadero,121802,58284123,http://timesonline.co.uk/eu/magna.html,"quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat"
The Washington Post,Hengdaohezi,190944,164329406,http://washingtonpost.com/vestibulum/proin/eu/mi/nulla/ac/enim.png,"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
Amazon,Quintães,80285,684173825,http://amazon.co.uk/potenti/cras/in/purus/eu.png,"Excepteur sint occaecat cupidatat non proident"
```

```
{
    "object" : "Account",
    "contentType" : "CSV",
    "operation" : "insert",
    "lineEnding" : "LF"
}
```

```
/services/data/v66.0/jobs/ingest/
```

```
curl https://MyDomainName.my.salesforce.com/services/data/v66.0/jobs/ingest/ -H 'Authorization: Bearer <SALESFORCE_ACCESS_TOKEN>' -H "Content-Type: application/json" -H "Accept: application/json" -H "X-PrettyPrint:1" -d @newinsertjob.json -X POST
```

```
{ "id" : "7505fEXAMPLE4C2AAM",​
"operation" : "insert",​
"object" : "Account",​
"createdById" : "0055fEXAMPLEtG4AAM",​
"createdDate" : "2022-01-02T21:33:43.000+0000",​
"systemModstamp" : "2022-01-02T21:33:43.000+0000",​
"state" : "Open",​
"concurrencyMode" : "Parallel",​
"contentType" : "CSV",​
"apiVersion" : 66.0,​
"contentUrl" : "services/data/66.0/jobs/ingest/7505fEXAMPLE4C2AAM/batches",​
"lineEnding" : "LF",​ "columnDelimiter" : "COMMA" }
```

## Related Topics

- Get Job Unprocessed Record Results (atlas.en-us.api_asynch.meta/api_asynch/get_job_unprocessed_results.htm)

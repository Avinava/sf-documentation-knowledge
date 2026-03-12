---
title: "Walk Through a Bulk Query Sample"
domain: api-asynch
topic: walk-through-a-bulk-query-sample
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.134Z
estimatedTokens: 1317
keywords: [Walk, Bulk, Query, Sample, code, uses, cURL, several, account, records, Job, Add, Batch, Close, Check]
---

# Walk Through a Bulk Query Sample

> This code sample uses cURL to query several account records.

# Walk Through a Bulk Query Sample

This code sample uses cURL to query several account records.

![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

#### Note

Before you begin building an integration or other client application:

-   Install your development platform according to its product documentation.
-   Read through all the steps before creating the test client application. Also review the rest of this document to familiarize yourself with terms and concepts.

## Create a Job

1.  Create a file called create-job.xml containing this text.

    ```

    ```

2.  Using a command-line window, execute this cURL command to create a job.

    curl -H "X-SFDC-Session: **sessionId**" -H "Content-Type: application/xml; charset=UTF-8" -d @create-job.xml https://**instance**.salesforce.com/services/async/66.0/job

    **instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response.

    Salesforce returns an XML response with data such as this.

    ```

    ```


## Add a Batch to the Job

1.  Create a file called query.txt to contain the SOQL query statement.

    ```

    ```

2.  Using a command-line window, execute this cURL command to add a batch to the job:

    curl -d @query.txt -H "X-SFDC-Session: **sessionId**" -H "Content-Type: text/csv; charset=UTF-8" https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch

    **jobId** is the job ID returned in the response to the job creation.

    Salesforce returns an XML response with data such as this.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    When you add a batch to a bulk query job, the Content-Type in the header for the request must be text/csv, application/xml, or application/json, depending on the content type specified when the job was created. The actual SOQL statement supplied for the batch is in plain text format.


## Close the Job

1.  Create a file called close-job.xml containing this text.

    ```

    ```

2.  Using a command-line window, execute this cURL command to close the job.

    curl -H "X-SFDC-Session: **sessionId**" -H "Content-Type: text/csv; charset=UTF-8" -d @close-job.xml https://**instance**.salesforce.com/services/async/66.0/job/jobId

    Salesforce returns an XML response with data such as this.

    ```

    ```


## Check the Status of the Job and Batch

1.  Using a command-line window, execute this cURL command to check the job status.

    curl -H "X-SFDC-Session: **sessionId**" https://**instance**.salesforce.com/services/async/66.0/job/**jobId**

    Salesforce returns an XML response with data such as this.

    ```

    ```

2.  Using a command-line window, execute this cURL command to check the batch status.

    curl -H "X-SFDC-Session: **sessionId**" https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch/**batchId**

    **batchId** is the batch ID in the response to the batch creation.

    Salesforce returns an XML response with data such as this.

    ```

    ```


## Retrieve the Results

1.  Using the command-line window, execute this cURL command to retrieve the batch result list.

    curl -H "X-SFDC-Session: **sessionId**" https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch/**batchId**/result

    Salesforce returns an XML response with data such as this.

    ```

    ```

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    If the batch required retries, there will be more than one <result> element in the output.

2.  Using the command-line window, execute this cURL command to retrieve the results of the query.

    curl -H "X-SFDC-Session: **sessionId**" https://**instance**.salesforce.com/services/async/66.0/job/**jobId**/batch/**batchId**/result/**resultId**

    **resultId** is the result ID in the response to the batch result list request.

    Salesforce returns a CSV response with data such as this.

    ```

    ```


#### See Also

-   [How Bulk Queries Are Processed](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_processing.htm "The bulk query workflow begins when you create a bulk query job and add one or more batches to the query job. When a bulk query is processed, Salesforce attempts to execute the query. If the query doesn’t execute within the standard 2-minute timeout limit, the job fails and a QUERY_TIMEOUT error is returned. In this case, rewrite a simpler query, and resubmit the batch.")

-   [Use Bulk Query](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_using_bulk_query.htm "When you add a batch to a bulk query job, the Content-Type in the header for the request must be text/csv, application/xml, or application/json, depending on the content type specified when the job was created. The actual SOQL statement supplied for the batch is in plain text format.")

-   [Walk Through a Bulk Query Sample Using PK Chunking](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough_pk_chunking.htm "This code sample uses cURL to perform a bulk query with PK chunking enabled on several account records.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
    xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <operation>query</operation>
  <object>Account</object>
  <concurrencyMode>Parallel</concurrencyMode>
  <contentType>CSV</contentType>
</jobInfo>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
    xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <id>750x000000009tvAAA</id>
  <operation>query</operation>
  <object>Account</object>
  <createdById>005x0000001WR0lAAG</createdById>
  <createdDate>2016-01-10T00:53:19.000Z</createdDate>
  <systemModstamp>2016-01-10T00:53:19.000Z</systemModstamp>
  <state>Open</state>
  <concurrencyMode>Parallel</concurrencyMode>
  <contentType>CSV</contentType>
  <numberBatchesQueued>0</numberBatchesQueued>
  <numberBatchesInProgress>0</numberBatchesInProgress>
  <numberBatchesCompleted>0</numberBatchesCompleted>
  <numberBatchesFailed>0</numberBatchesFailed>
  <numberBatchesTotal>0</numberBatchesTotal>
  <numberRecordsProcessed>0</numberRecordsProcessed>
  <numberRetries>0</numberRetries>
  <apiVersion>36.0</apiVersion>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>0</totalProcessingTime>
  <apiActiveProcessingTime>0</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
</jobInfo>
```

```
SELECT Id, Name FROM Account LIMIT 10
```

```
<?xml version="1.0" encoding="UTF-8"?>
<batchInfo
    xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <id>751x000000009vwAAA</id>
  <jobId>750x000000009tvAAA</jobId>
  <state>Queued</state>
  <createdDate>2016-01-10T00:59:47.000Z</createdDate>
  <systemModstamp>2016-01-10T00:59:47.000Z</systemModstamp>
  <numberRecordsProcessed>0</numberRecordsProcessed>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>0</totalProcessingTime>
  <apiActiveProcessingTime>0</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
</batchInfo>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <state>Closed</state>
</jobInfo>
```

## Related Topics

- How Bulk Queries Are Processed (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_bulk_query_processing.htm)
- Use Bulk Query (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_using_bulk_query.htm)
- Walk Through a Bulk Query Sample Using PK Chunking (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_code_curl_walkthrough_pk_chunking.htm)

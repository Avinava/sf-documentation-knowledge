---
title: "Step 2: Create a Job"
domain: api-asynch
topic: step-2-create-a-job
apiVersion: 67.0
release: summer-26-v67
docType: developer-guide
lastCollected: 2026-03-12T09:33:59.244Z
estimatedTokens: 485
keywords: [Step, Job, load, data, Contact, you’re, loading, operation, performing, query, queryAll, insert, upsert, grants, control]
---

# Step 2: Create a Job

> Before you can load data, you first create a job. The job specifies the type of object,
    such as Contact, that you’re loading and the operation that you’re performing, such as query,
    queryAll, insert, update, upsert, or delete. A job also grants you some control over the data
    load process. For example, you can abort a job that is in progress.

# Step 2: Create a Job

Before you can load data, you first create a job. The job specifies the type of object, such as Contact, that you’re loading and the operation that you’re performing, such as query, queryAll, insert, update, upsert, or delete. A job also grants you some control over the data load process. For example, you can abort a job that is in progress.

1.  Create a text file called job.txt containing this text:

    ```

    ```

    ![Warning](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note_warning.png&folder=api_asynch)

    #### Warning

    The operation value must match that shown here. For example, you get an error if you use INSERT instead of insert.

2.  Using a command-line window, execute the following cURL command:

    curl https://**instance**.salesforce.com/services/async/66.0/job -H "X-SFDC-Session: **sessionId**" -H "Content-Type: application/xml; charset=UTF-8" -d @job.txt

    **instance** is the portion of the <serverUrl\> element and **sessionId** is the <sessionId\> element that you noted in the login response.

    ![Note](/docs/resources/img/en-us/260.0?doc_id=images%2Ficon_note.png&folder=api_asynch)

    #### Note

    When running cURL examples, you can get an error on Mac and Linux systems due to the presence of the exclamation mark special character in the session ID argument. To avoid getting this error, either escape the exclamation mark by inserting a backslash before it (\\!) or enclose the session ID within single quotes.

    Salesforce returns an XML response with data such as this:

    ```

    ```

3.  Note the value of the job ID returned in the <id\> element. Use this ID in subsequent operations.

#### See Also

-   [Step One: Create a Job](atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm "Create a job by sending a POST request to this URI. The request body identifies the type of object processed in all associated batches.")

## Code Examples

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo xmlns="http://www.force.com/2009/06/asyncapi/dataload">
    <operation>insert</operation>
    <object>Contact</object>
    <contentType>CSV</contentType>
</jobInfo>
```

```
<?xml version="1.0" encoding="UTF-8"?>
<jobInfo
   xmlns="http://www.force.com/2009/06/asyncapi/dataload">
  <id>750x0000000005LAAQ</id>
  <operation>insert</operation>
  <object>Contact</object>
  <createdById>005x0000000wPWdAAM</createdById>
  <createdDate>2009-09-01T16:42:46.000Z</createdDate>
  <systemModstamp>2009-09-01T16:42:46.000Z</systemModstamp>
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
  <apiVersion>66.0</apiVersion>
  <numberRecordsFailed>0</numberRecordsFailed>
  <totalProcessingTime>0</totalProcessingTime>
  <apiActiveProcessingTime>0</apiActiveProcessingTime>
  <apexProcessingTime>0</apexProcessingTime>
</jobInfo>
```

## Related Topics

- Step One: Create a Job (atlas.en-us.api_asynch.meta/api_asynch/asynch_api_jobs_create.htm)
